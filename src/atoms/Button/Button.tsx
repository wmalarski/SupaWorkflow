import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  ref: React.LegacyRef<HTMLButtonElement>
): JSX.Element => <button {...props} disabled={props.disabled} ref={ref} />;

export default React.forwardRef(Button);
