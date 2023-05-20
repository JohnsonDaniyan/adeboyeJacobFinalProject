import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import { Link } from "react-router-dom";

type ButtonProps = {
  cta?: boolean;
  value: string;
  linkTO?: string;
  primary?: boolean;
  secondary?: boolean;
  slimmer?: boolean;
  loading?: boolean;
  Right?: React.ElementType | null;
  handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & React.HTMLAttributes<HTMLDivElement>;
function Button({
  linkTO = "",
  value,
  loading,
  secondary = false,
  slimmer = false,
  Right,
  handleClick,
}: ButtonProps) {
  return (
    <Link onClick={handleClick} to={linkTO}>
      <div
        className={`w-fit relative flex flex-row items-center gap-2 text-white px-5 ${
          slimmer ? "py-1" : "py-3"
        } rounded-md overflow-hidden group ${
          secondary ? "bg-[#FF4A1C]" : "bg-[#246C5A]"
        }`}
      >
        <div>
          <div className=" w-full h-full absolute bg-white/30 top-full left-0 group-hover:top-0 transition-all"></div>
          <p>{loading ? "loading" : value}</p>
        </div>
        {Right && <Right size={20} />}
      </div>
    </Link>
  );
}

export default Button;