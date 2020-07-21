export interface User {
  id: number;
  department: {
    id: number;
    name: string;
    shortName: string;
    symbol: string
  };
  creationDate: Date | null;
  level: number;
  login: string;
  name: string;
  surname: string;
  nickname: string;
  position: string;
  room: string;
  phone: string;
  mobilePhone: string;
  omePhone: string;
  email: string;
  imAddress: string;
  birthday: Date | null;
  namesday: string | null;
  extraInfo: string;
  former: boolean;
  phoneSocket: string;
  companyCars: Array<string>;
  superiors: Array<string>;
  url: string;
}
