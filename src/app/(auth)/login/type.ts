export type UserRole = "admin" | "user" | "driver" | undefined;

export interface LoginFormProps {
  email: string;
  password: string;
  selectOptions: { label: string; value: string };
}
