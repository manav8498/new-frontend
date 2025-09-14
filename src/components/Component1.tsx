import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component1Type = {
  className?: string;
  clipPathGroup?: string;

  /** Variant props */
  variant?: 1 | 11 | 13 | 14 | 3 | 8 | 9;

  /** Style props */
  component1Width?: CSSProperties["width"];
  component1Height?: CSSProperties["height"];
  component1AlignSelf?: CSSProperties["alignSelf"];
};

const getClipPathGroupStyle = (styleKey: string) => {
  switch (styleKey) {
    case "8":
      return "[&]:h-[192.14%] [&]:top-[-23.84%] [&]:right-[-12.71%] [&]:bottom-[-68.3%] [&]:left-[-52.79%]";
    case "3":
    case "11":
      return "[&]:object-cover";
    case "9":
      return "[&]:h-[181.81%] [&]:top-[-55.64%] [&]:right-[-26.9%] [&]:bottom-[-26.17%]";
    case "13":
      return "[&]:h-[117.46%] [&]:top-[-6.12%] [&]:right-[-10.96%] [&]:bottom-[-11.35%] [&]:left-[-9.18%]";
    case "14":
      return "[&]:h-[124.89%] [&]:top-[-6.72%] [&]:right-[-7.47%] [&]:bottom-[-18.17%] [&]:left-[-8.51%]";
  }
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  variant = 1,
  component1Width,
  component1Height,
  clipPathGroup,
  component1AlignSelf,
}) => {
  const variantKey = `${variant}`;

  const component1Style: CSSProperties = useMemo(() => {
    return {
      width: component1Width,
      height: component1Height,
      alignSelf: component1AlignSelf,
    };
  }, [component1Width, component1Height, component1AlignSelf]);

  return (
    <div
      className={`w-[682px] h-[355px] relative overflow-hidden shrink-0 ${className}`}
      style={component1Style}
    >
      <img
        className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full ${getClipPathGroupStyle(variantKey)}`}
        loading="lazy"
        alt=""
        src={clipPathGroup}
      />
    </div>
  );
};

export default Component1;
