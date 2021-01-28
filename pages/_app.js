import { ChakraProvider } from "@chakra-ui/react";
import siteTheme from "../src/styles/themes/siteTheme";

const MyApp = ({ Component, pageProps }) => {

  return (
    <ChakraProvider theme={siteTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;