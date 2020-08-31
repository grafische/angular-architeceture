export enum TypeMessage {
  Error = "ERROR",
  Success = "SUCCESS"
}

export interface BottomMessage {
  type: TypeMessage;
  message: string;
}
