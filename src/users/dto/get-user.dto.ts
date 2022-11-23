import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  isVerified: boolean;
}
