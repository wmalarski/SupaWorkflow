import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const colors = {
  brand: {
    900: "#111111",
    800: "#333333",
    700: "#555555",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("brand.800", "whiteAlpha.800")(props),
        bg: mode("white", "brand.900")(props),
      },
    }),
  },
});

export default theme;
