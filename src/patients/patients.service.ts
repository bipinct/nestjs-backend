import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { PatientDocument } from './schema/Patient';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const model = new this.patientModel();
    model.name = createPatientDto.name;
    model.enrollmentDate = createPatientDto.enrollmentDate;
    model.gender = createPatientDto.gender;
    model.patientId = createPatientDto.patientId;
    model.name = createPatientDto.name;
    model.action = createPatientDto.action;
    model.comment = createPatientDto.comment;
    model.age = createPatientDto.age;
    model.proividerRiskAssessment = createPatientDto.proividerRiskAssessment;
    model.program = createPatientDto.program;
    model.vitals = createPatientDto.vitals;
    model.lastHospitalization = createPatientDto.lastHospitalization;

    return model.save();
  }

  findAll(): Promise<Patient[]> {
    return this.patientModel.find().exec();
  }

  findOne(id: string): Promise<Patient | null> {
    return this.patientModel.findById(id).exec();
  }

  update(id: string, updatePatientDto: UpdatePatientDto) {
    return this.patientModel
      .updateOne(
        {
          _id: id,
        },
        {
          name: updatePatientDto.name,
          patientId: updatePatientDto.patientId,
          age: updatePatientDto.age,
          gender: updatePatientDto.gender,
          program: updatePatientDto.program,
          enrollmentDate: updatePatientDto.enrollmentDate,
          proividerRiskAssessment: updatePatientDto.proividerRiskAssessment,
          action: updatePatientDto.action,
          comment: updatePatientDto.comment,
          lastHospitalization: updatePatientDto.lastHospitalization,
          vitals: updatePatientDto.vitals,
        },
      )
      .exec();
  }

  remove(id: string) {
    return this.patientModel.deleteOne({ _id: id }).exec();
  }
}
