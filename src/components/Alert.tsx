import { ReactNode } from "react";

type AlertProps = {
  children: ReactNode;
  variant: "info" | "success" | "error";
};

const Alert = ({ children, variant }: AlertProps) => {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
