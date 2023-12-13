export interface exampleTableData {
  "S No": number;
  "Complain Number": string;
  "Bin Name": string;
  "Mobile Number": string;
  Email: string;
  Status: string;
}

export interface ProfileProps {
  fullName: string;
  userName: string;
  email: string;
  address: string;
  contactInfo: string;
  registrationData: string;
}

export enum AssignStatus {
  PENDING = "PENDING",
  ONGOING = "ONGOING",
  SUCCESS = "SUCCESS",
}

export interface AssignApiInfo {
  sNo: number;
  assignNumber: string;
  assignName: string;
  binName: string;
  assignBy: string;
  assignTo: string;
  status: AssignStatus;
}

export interface ActionModalProps {
  binName: string;
  assignName: string;
  status: any;
}
