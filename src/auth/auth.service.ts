import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { CretaeUserDto } from 'src/users/dto/create-user.dto';
import { UserDetail } from 'src/users/dto/user-detail.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async register(
    user: Readonly<CretaeUserDto>,
  ): Promise<UserDetail | null | string> {
    const { name, email, password } = user;
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) return 'Email taken!';
    const hashedPassword = await this.hashPassword(password);
    const newUser = await this.usersService.create(name, email, hashedPassword);
    return this.usersService._getUserDetails(newUser);
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserDetail | null> {
    const user = await this.usersService.findByEmail(username);
    const doseUserExist = !!user;
    if (!doseUserExist) return null;
    if (!user.isVerfied) return null;
    const dosePasswordMatch = await this.dosePasswordMatch(
      password,
      user.password,
    );
    if (!dosePasswordMatch) return null;
    return this.usersService._getUserDetails(user);
  }

  async dosePasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.userId,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
