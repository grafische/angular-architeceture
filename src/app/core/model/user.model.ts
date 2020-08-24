export interface User {
  id: number;
  login: string;
  name: string;
  nickname: string;
  photoUrl: string;
  position: string;
  roles: [
    string
  ];
  room: string;
  surname: string;
  authToken?: string;
}
