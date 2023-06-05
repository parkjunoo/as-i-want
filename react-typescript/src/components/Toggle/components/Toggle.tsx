import React from "react";

interface ToggleProps {
  id?: string;
  size?: "sm" | "md" | "lg";
  value?: boolean;
  onChange?: (value: any) => void;
}

export default function Toggle({ size, value, onChange, id }: ToggleProps) {
  const handlerToggle = () => {
    if (onChange) {
      onChange(id || !value);
      return;
    }
  };
  return (
    <div
      onClick={handlerToggle}
      className={`toggle-wrapper ${size} ${value ? "active" : ""}`}
    >
      <div className={`toggle-slider ${value ? "active" : ""}`} />
    </div>
  );
}

Toggle.defaultProps = {
  size: "md",
};
