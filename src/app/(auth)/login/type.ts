export type UserRole = "admin" | "user" | "driver" | undefined;

export interface LoginFormProps {
  userName: string;
  password: string;
  selectOptions: { label: string; value: string };
}
