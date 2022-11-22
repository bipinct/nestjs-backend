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
    model.firstName = createPatientDto.firstName;
    model.enrollmentDate = createPatientDto.enrollmentDate;
    model.gender = createPatientDto.gender;
    model.patientId = createPatientDto.patientId;
    model.lastName = createPatientDto.lastName;
    model.action = createPatientDto.action;
    model.comment = createPatientDto.comment;
    model.age = createPatientDto.age;
    model.proividerRiskAssessment = createPatientDto.proividerRiskAssessment;
    model.program = createPatientDto.program;
    model.vitals = createPatientDto.vitals;
    model.lastHospitalization = createPatientDto.lastHospitalization;
    model.cardiologyProvider = createPatientDto.cardiologyProvider;
    model.cardiologyInstitution = createPatientDto.cardiologyInstitution;
    model.protocol = createPatientDto.protocol;    
    return model.save();
  }

  findAll(): Promise<Patient[]> {
    return this.patientModel.find().exec();
  }

  find(options: any, page: number, limit: number): Promise<Patient[]> {
    return this.patientModel
      .find(options)
      .skip((page - 1) * limit)
      .limit(limit)
      .select('firstName lastName gender age patientId lastHospitalization vitals.patientMonitoring vitals.riskComponent')
      .exec();
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
          firstName: updatePatientDto.firstName,
          lastName: updatePatientDto.lastName,
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
          cardiologyProvider: updatePatientDto.cardiologyProvider,
          cardiologyInstitution: updatePatientDto.cardiologyInstitution,
          protocol: updatePatientDto.protocol,
        },
      )
      .exec();
  }

  remove(id: string) {
    return this.patientModel.deleteOne({ _id: id }).exec();
  }

  put(updatePatientDto: UpdatePatientDto) {
    return this.patientModel
      .findOneAndUpdate(
        {
          patientId: updatePatientDto.patientId,
        },
        {
          firstName: updatePatientDto.firstName,
          lastName: updatePatientDto.lastName,
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
          cardiologyProvider: updatePatientDto.cardiologyProvider,
          cardiologyInstitution: updatePatientDto.cardiologyInstitution,
          protocol: updatePatientDto.protocol,
        },
        {
          upsert: true,
        },
      )
      .exec();
  }

  count(options: any): Promise<number>{
    return this.patientModel.count(options).exec();
  }
}
