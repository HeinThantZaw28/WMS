export interface CreateBinProps {
  area: string;
  locality: string;
  landMark: string;
  address: string;
  photo: any;
  note: string;
}
export interface ComplainProps {
  selectOptions: any;
  binNumber?: string;
}

export enum ASSIGNOPTIONS {
  NOTASSIGN = "NOTASSIGN",
  ASSIGNED = "ASSIGNED",
  COMPLETED = "COMPLETED",
}

export interface SettingProps {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
