export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => any;
  url?: string;
  title: string;
  rest?: any;
  disabled?: boolean | undefined;
  className?:string;
}
