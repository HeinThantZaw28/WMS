export interface BlockProps {
  id: number;
  title: string;
  icon: any;
  desc: string;
  url?: string;
}

export interface UserListProps {
  id: string;
  name: string;
  regDate: string;
  img: string;
}

export interface DriverListProps {
  id: string;
  name: string;
  regDate: string;
  img: string;
}

export interface RegisterformProps {
  userName: string;
  address: string;
  contactInfo: string;
  email: string;
  password: string;
}
