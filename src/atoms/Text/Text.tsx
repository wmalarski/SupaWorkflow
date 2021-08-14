import React, { DetailedHTMLProps, HTMLAttributes } from "react";

// const Text = styled("span", {
//   // Reset
//   lineHeight: "1",
//   margin: "0",
//   fontWeight: 400,
//   fontVariantNumeric: "tabular-nums",
//   display: "block",

//   variants: {
//     size: {
//       "1": {
//         fontSize: "$1",
//       },
//       "2": {
//         fontSize: "$2",
//       },
//       "3": {
//         fontSize: "$3",
//       },
//       "4": {
//         fontSize: "$4",
//       },
//       "5": {
//         fontSize: "$5",
//         letterSpacing: "-.015em",
//       },
//       "6": {
//         fontSize: "$6",
//         letterSpacing: "-.016em",
//       },
//       "7": {
//         fontSize: "$7",
//         letterSpacing: "-.031em",
//         textIndent: "-.005em",
//       },
//       "8": {
//         fontSize: "$8",
//         letterSpacing: "-.034em",
//         textIndent: "-.018em",
//       },
//       "9": {
//         fontSize: "$9",
//         letterSpacing: "-.055em",
//         textIndent: "-.025em",
//       },
//     },
//     variant: {
//       gray: {
//         color: "$slate11",
//       },
//       contrast: {
//         color: "$hiContrast",
//       },
//     },
//   },
//   compoundVariants: [
//     {
//       variant: "gray",
//       css: {
//         background: "linear-gradient(to right, $gray11, $gray12)",
//       },
//     },
//     {
//       variant: "contrast",
//       css: {
//         background: "linear-gradient(to right, $hiContrast, $gray12)",
//       },
//     },
//   ],
//   defaultVariants: {
//     size: "3",
//     variant: "contrast",
//   },
// });

const Text = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  ref: React.LegacyRef<HTMLSpanElement>
): JSX.Element => <span {...props} ref={ref} />;

export default React.forwardRef(Text);
