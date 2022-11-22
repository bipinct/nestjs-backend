import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Req,
  UseGuards
} from '@nestjs/common';
import { Request } from 'express';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }  
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request) {
    const page: number = parseInt(request.query.page as any) || 1;
    const limit = 50;
    const total = await this.patientsService.count({});
    const data = await this.patientsService.find({}, page, limit);
    return { data, total, page, last_page: Math.ceil(total / limit) };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  put(@Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.put(updatePatientDto);
  }
}
