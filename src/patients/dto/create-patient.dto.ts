import { ApiProperty } from '@nestjs/swagger';

class Vitals {
  @ApiProperty({ type: 'array', items: { type: 'object' } })
  heartRate: [];
  @ApiProperty({ type: 'array', items: { type: 'object' } })
  diagnosticMetric: [];
  @ApiProperty({ type: 'array', items: { type: 'object' } })
  surveyResponse: [];
  @ApiProperty({ type: 'array', items: { type: 'object' } })
  ecgMetrics: [];
  @ApiProperty({ type: 'array', items: { type: 'object' } })
  problemList: [];
  @ApiProperty({ type: 'array', items: { type: 'object' } })
  medication: [];
  @ApiProperty({ type: 'array', items: { type: 'object' } })
  diagnosis: [];
  @ApiProperty()
  patientMonitoring: {};
  @ApiProperty()
  riskComponent: {};
}
export class CreatePatientDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  patientId: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  program: string;
  @ApiProperty()
  enrollmentDate: string;
  @ApiProperty()
  cardiologyProvider: string;
  @ApiProperty()
  cardiologyInstitution: string;
  @ApiProperty()
  protocol: string;
  @ApiProperty()
  proividerRiskAssessment: string;
  @ApiProperty()
  action: string;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  lastHospitalization: {
    dateIn: string;
    dateOut: string;
    daignosis: string;
  };
  @ApiProperty()
  vitals: Vitals;
}
