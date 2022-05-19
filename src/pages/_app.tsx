import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { wrapper } from "redux/store";


type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<any>;
  };
};


function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);

// function MyApp({ Component, pageProps }: AppProps) {
//   const [showChild, setShowChild] = useState(false);
//   useEffect(() => {
//     setShowChild(true);
//   }, []);

//   if (!showChild) {
//     return null;
//   }

//   if (typeof window === "undefined") {
//     return <></>;
//   } else {
//     return <Component {...pageProps} />;
//   }
// }

// export default wrapper.withRedux(MyApp);
