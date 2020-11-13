export interface ErrorInformation {
  error: ErrorDetails;
}

export interface ErrorDetails {
  //@type: string;
  message: string;
  path: string;
  reason: string;
  status: number;
  timestamp: Date;
  invalidFields: any;
}
