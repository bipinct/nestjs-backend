export class CreatePatientDto {
  firstName: string;
  lastName: string;
  patientId: string;
  age: number;
  gender: string;
  program: string;
  enrollmentDate: string;
  cardiologyProvider: string;
  cardiologyInstitution: string;
  protocol: string;
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
    diagnosis: [];
    patientMonitoring: {};
    riskComponent: {};
  };
}
