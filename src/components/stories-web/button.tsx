import type React from "react";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <div>
      <button type="button" {...other}>
        {children}
      </button>
    </div>
  );
}

Button.displayName = "Button";
