export class ColumnPhones {
  room: Boolean;
  departmentName: Boolean;
  name_surname: Boolean;
  phoneNumber: Boolean;
  mobilePhoneNumber: Boolean;

  constructor(room: Boolean, departmentName: Boolean, name_surname: Boolean, phoneNumber: Boolean, mobilePhoneNumber: Boolean) {
    this.room = room;
    this.departmentName = departmentName;
    this.name_surname = name_surname;
    this.phoneNumber = phoneNumber;
    this.mobilePhoneNumber = mobilePhoneNumber;
  }
}
