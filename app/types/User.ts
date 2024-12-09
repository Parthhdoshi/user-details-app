export interface IUser {
    id: number;
    name: string;
  }
  
  export interface IUserDetails {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
    };
    phone: string;
    website: string;
    skypeId: string;
  }
  