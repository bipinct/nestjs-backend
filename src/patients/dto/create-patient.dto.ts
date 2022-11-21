export class CreatePatientDto {
  name: string;
  patientId: string;
  age: number;
  gender: string;
  program: string;
  enrollmentDate: string;
  proividerRiskAssessment: string;
  action: string;
  comment: string;
  lastHospitalization: {
    dateIn: string;
    dateOut: string;
    daignosis: string;
  };
  vitals: {
    heartRate: [];
    diagnosticMetric: [];
    surveyResponse: [];
    ecgMetrics: [];
    problemList: [];
    medication: [];
  };
}
