import { ReactElement } from "react";

import classes from "@/styles/components/Button.module.scss";

interface Props {
  children: string | ReactElement;
  title: string;
  disabled?: boolean;
  large?: boolean;
  onClick: () => void;
}

export default function CustomButton({
  children,
  title,
  disabled = false,
  large = false,
  onClick,
}: Props) {
  return (
    <button
      className={large ? classes["button--large"] : classes.button}
      title={title}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
