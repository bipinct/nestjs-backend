import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/User';

@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forFeature([{name:'User',schema: UserSchema}])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
