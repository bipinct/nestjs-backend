import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/nest'), PatientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
