import React from "react";

export interface iBaseTypographProps {
  className?: string;
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  fontWeight?: number;
  fontColor?: string;
  fontSize:
    | "Heading-1-700"
    | "Heading-2-500"
    | "Heading-3-500"
    | "Heading-4-400"
    | "Heading-4-700"
    | "Heading-5-700"
    | "Heading-6-500"
    | "Heading-6-400"
    | "Heading-7-400"
    | "Heading-8-400"
    | "Body-1-400"
    | "Body-2-400"
    | "Body-2-500"
    | "Body-3-400"
    | "Body-4-400"
    | "Body-5-400"
    | "Body-6-400"
    | "Body-7-400";
}

const Typograph = ({ className, children, tag }: iBaseTypographProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
      {tag === "h5" && <h5 className={className}>{children}</h5>}
      {tag === "h6" && <h6 className={className}>{children}</h6>}
      {tag === "p" && <p className={className}>{children}</p>}
    </>
  );
};
export default Typograph;
