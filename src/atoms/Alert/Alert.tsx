import React, { DetailedHTMLProps, HTMLAttributes } from "react";

// const Alert = styled("div", {
//   // Reset
//   boxSizing: "border-box",
//   "&::before": {
//     boxSizing: "border-box",
//   },
//   "&::after": {
//     boxSizing: "border-box",
//   },

//   border: "1px solid",
//   borderRadius: "$2",

//   variants: {
//     size: {
//       "1": {
//         p: "$3",
//       },
//     },
//     variant: {
//       red: {
//         backgroundColor: "$red2",
//         borderColor: "$red6",
//       },
//     },
//   },
//   defaultVariants: {
//     size: "1",
//     variant: "red",
//   },
// });

export type SeverityLevel = "red";

const Alert = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
    variant: SeverityLevel;
  },
  ref: React.LegacyRef<HTMLSpanElement>
): JSX.Element => {
  const { variant, children, ...rest } = props;
  return (
    <span {...rest} ref={ref}>
      {variant}
      {children}
    </span>
  );
};

export default React.forwardRef(Alert);
