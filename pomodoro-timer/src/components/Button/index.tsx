import { ReactNode } from "react";

import classes from "./styles.module.scss";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  large?: boolean;
  onClick: () => void;
}

export default function CustomButton({
  children,
  disabled = false,
  large = false,
  onClick,
}: Props) {
  const className = large ? classes["button--large"] : classes.button;

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
