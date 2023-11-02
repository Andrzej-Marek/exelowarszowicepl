"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const pageview = () => {
  // @ts-ignore
  if (window?.fbq) {
    // @ts-ignore
    window.fbq("track", "PageView");
  }
};

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!loaded) return;
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    pageview();
  }, [pathname, searchParams]);

  return (
    <Script id="facebook-pixel" onLoad={() => setLoaded(true)}>
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '185043937985431');
        fbq('track', 'PageView');
      `}
    </Script>
  );
};
export default FacebookPixel;
