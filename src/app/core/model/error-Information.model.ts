export interface ErrorInformation {
  error: ErrorDetails;
}

export interface InvalidFields {
  field: string;
  message: string;
}

export interface ErrorDetails {
  //@type: string;
  message: string;
  path: string;
  reason: string;
  status: number;
  timestamp: Date;
  invalidFields: InvalidFields[];
}
