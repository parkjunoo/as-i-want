import React from "react";
interface ToggleGroupProps {
  value: string[];
  onChange: (value: any) => void;
  children: any;
}
export default function ToggleGroup({
  value,
  children,
  onChange: groupOnChange,
}: ToggleGroupProps) {
  const childrenArray = React.Children.toArray(children);
  return (
    <>
      {childrenArray.map((e: any) => {
        return React.cloneElement(e, {
          value: value.includes(e.props.id),
          onChange: (toggle: any) => {
            if (value.includes(toggle)) {
              groupOnChange(value.filter((e) => e !== toggle));
              return;
            }
            groupOnChange([...value, toggle]);
          },
        });
      })}
    </>
  );
}

ToggleGroup.defaultProps = {};
