import React, { Activity, type ReactNode } from "react";
import { input, type InputVariantsProps } from "../../theme";
const { container, startIconWrapper, endIconWrapper, field, title } = input();

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: InputVariantsProps["variant"];
}

export const Input: React.FC<InputProps> = ({
  label,
  startIcon,
  endIcon,
  className,
  variant = "outline",
  ...props
}) => {
  return (
    <div className={container({ className, variant })}>
      <Activity mode={startIcon ? "visible" : "hidden"}>
        <div className={startIconWrapper({ variant })}>{startIcon}</div>
      </Activity>

      <input
        type="text"
        placeholder=" "
        className={field({
          variant,
          endIcon: !!endIcon,
          startIcon: !!startIcon,
        })}
        {...props}
      />

      <Activity mode={endIcon ? "visible" : "hidden"}>
        <div className={endIconWrapper({ variant })}>{endIcon}</div>
      </Activity>

      <label className={title({ variant })}>{label}</label>
    </div>
  );
};
