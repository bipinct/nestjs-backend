import { Controller, Post, Body,Get } from '@nestjs/common';
import { CretaeUserDto } from 'src/users/dto/create-user.dto';
import { UserDetail } from 'src/users/dto/user-detail.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  test(){
    return "demo test"
  };

  @Post('register')
  register(
    @Body() createUserDto: CretaeUserDto,
  ): Promise<UserDetail | null | string> {
    return this.authService.register(createUserDto);
  }


}
