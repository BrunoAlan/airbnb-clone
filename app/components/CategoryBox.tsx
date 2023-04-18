"use client";

import { IconType } from "react-icons";

interface CategotyBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox = (props: CategotyBoxProps) => {
  const { label, icon: Icon, selected } = props;
  return (
    <div
      className={`flex cursor-pointer flex-col items-center justify-center gap-3 border-b-2 p-3 transition hover:text-neutral-800 
      ${selected ? "border-b-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
