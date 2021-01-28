import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#60edb3",
    800: "#3A5CE4",
    700: "#97f3cd",
  },
};

const zIndices = {
  zIndices: {
    element: "10",
    fixedElement: "100",
    modal: "1000",  
  },
}

const themeSettings = {
  breakpoints: {},
  zIndices: {...zIndices},
  radii: {},
  colors: {...colors},
  sizes: {},
  shadows: {},
  space: {},
  borders: {},
  transition: {},
};

const siteTheme = extendTheme(themeSettings);

export default siteTheme;

