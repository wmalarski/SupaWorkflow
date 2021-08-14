import Colors from "@radix-ui/colors";
import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        ...Colors.slate,
        ...Colors.gray,
        ...Colors.red,

        ...Colors.slateA,
        ...Colors.grayA,
        ...Colors.redA,

        hiContrast: "$slate12",
        loContrast: "white",
      },
      fonts: {
        untitled: "Untitled Sans, -apple-system, system-ui, sans-serif",
        mono: "Söhne Mono, menlo, monospace",
      },
      space: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
        6: "35px",
        7: "45px",
        8: "65px",
        9: "80px",
      },
      sizes: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
        6: "35px",
        7: "45px",
        8: "65px",
        9: "80px",
      },
      fontSizes: {
        1: "12px",
        2: "13px",
        3: "15px",
        4: "17px",
        5: "19px",
        6: "21px",
        7: "27px",
        8: "35px",
        9: "59px",
      },
      radii: {
        1: "4px",
        2: "6px",
        3: "8px",
        4: "12px",
        round: "50%",
        pill: "9999px",
      },
      zIndices: {
        1: "100",
        2: "200",
        3: "300",
        4: "400",
        max: "999",
      },
    },
    media: {
      bp1: "(min-width: 520px)",
      bp2: "(min-width: 900px)",
      bp3: "(min-width: 1200px)",
      bp4: "(min-width: 1800px)",
      motion: "(prefers-reduced-motion)",
      hover: "(any-hover: hover)",
      dark: "(prefers-color-scheme: dark)",
      light: "(prefers-color-scheme: light)",
    },
    utils: {
      p: () => (value: string) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
    },
  });

export const darkTheme = theme("dark-theme", {
  colors: {
    ...Colors.slateDark,
    ...Colors.grayDark,
    ...Colors.redDark,

    ...Colors.slateDarkA,
    ...Colors.grayDarkA,
    ...Colors.redDarkA,

    hiContrast: "$slate12",
    loContrast: "$slate1",
  },
});
