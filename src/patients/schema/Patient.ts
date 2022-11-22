import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class Vitals {
  @Prop()
  heartRate: [];
  @Prop()
  diagnosticMetric: [];
  @Prop()
  surveyResponse: [];
  @Prop()
  ecgMetrics: [];
  @Prop()
  problemList: [];
  @Prop()
  medication: [];
  @Prop()
  diagnosis: [];
}

@Schema()
class Hospitalization {
  @Prop()
  dateIn: string;
  @Prop()
  dateOut: string;
  @Prop()
  daignosis: string;
}

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop()
  firstName: string;  
  @Prop()
  lastName: string;  
  @Prop({
    required: [true, 'Missing Patient Id'],
    unique: [true, 'Duplicate record. Patient Id must be unique'],
  })
  patientId: string;
  @Prop()
  age: number;
  @Prop()
  gender: string;

  @Prop()  
  cardiologyProvider:string;
  @Prop()
  
  cardiologyInstitution:string;

  @Prop()  
  protocol:string;

  @Prop()
  program: string;
  @Prop()
  enrollmentDate: string;
  @Prop()
  proividerRiskAssessment: string;
  @Prop()
  action: string;
  @Prop()
  comment: string;
  @Prop()
  lastHospitalization: Hospitalization;
  @Prop()
  vitals: Vitals;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
