import { ReactNode } from "react";

import classes from "@/styles/components/Button.module.scss";

interface Props {
  children: ReactNode;
  title: string;
  disabled?: boolean;
  large?: boolean;
  onClick: () => void;
}

export default function CustomButton({
  children,
  disabled,
  title,
  large = false,
  onClick,
}: Props) {
  const className = large ? classes["button--large"] : classes.button;

  return (
    <button
      className={className}
      title={title}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
