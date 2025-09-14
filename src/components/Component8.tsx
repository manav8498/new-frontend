import { FunctionComponent } from "react";

export type Component8Type = {
  className?: string;
  text?: string;

  /** Variant props */
  variant?: 2;
};

const Component8: FunctionComponent<Component8Type> = ({
  className = "",
  variant = 1,
  text = "collected and stored",
}) => {
  return (
    <div
      className={`flex items-start text-left text-font-size-14 text-Color-Elementary-White font-font-family-Font-2 ${className}`}
    >
      <div className="relative leading-font-size-20">{text}</div>
    </div>
  );
};

export default Component8;
