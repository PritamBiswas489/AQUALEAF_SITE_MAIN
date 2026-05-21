import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="CONTENT-LANGUAGE" content="en-US" />
        <meta name="copyright" content="Copyright © 2023, Aqualeaf IT Solutions Pvt. Ltd. All rights reserved." />
        <meta name="DC.Date.Modified" content="2023-05-08" />
        <meta name="distribution" content="global" />
        <meta name="robots" content="all, index, follow, noodp, noydir" />
        <meta name="identifier-url" content="https://www.aqualeafitsol.com/" />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />
        <meta name="geo.position" content="22.598676;88.412255" />
        <meta name="ICBM" content="22.598676, 88.412255" />
        <meta name="facebook-domain-verification" content="v5t6lcltjf0dm1dbl60iu70pdziucj" />
        
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WCYYPR7T1E"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WCYYPR7T1E');
        `}
      </Script>
      
      
       <Script id="facebook-pixel" strategy="afterInteractive">
       {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '204850159175993');
fbq('track', 'PageView');`}
       
       
       </Script>
      
      <Script  id="google-tag" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXLL2CN');`}</Script>

 
     

<noscript
          dangerouslySetInnerHTML={{
            __html: `<div itemscope itemtype="http://schema.org/LocalBusiness" style="display:none;">
<h2><span itemprop="name">Aqualeaf IT Solutions Pvt. Ltd.</span></h2>
<span itemprop="description">{Aqualeaf IT Solutions Pvt. Ltd.}{AD 218 , Sector 1 , Near AD Park, Saltlake City}{Kolkata}{700064}{West Bengal}{India}{ 919804070412}</span>
<div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
<span itemprop="streetAddress">AD 218 , Sector 1 , Near AD Park, Saltlake City</span>
<span itemprop="postalCode">700064</span>
<span itemprop="addressLocality">Kolkata</span>,
<span itemprop="addressRegion">West Bengal</span>
</div>
Phone: <span itemprop="telephone"> 919804070412</span>
</div>`
          }}
      />

      
     <noscript
          dangerouslySetInnerHTML={{ __html: `<div class="vcard" style="display:none;">
<h2 class="fn org">Aqualeaf IT Solutions Pvt. Ltd.</h2>
<div class="adr">
<div class="street-address">AD 218 , Sector 1 , Near AD Park, Saltlake City</div>
<span class="locality">Kolkata</span>,
<span class="region">West Bengal</span>
<span class="postal-code">700064</span>
<span class="country-name">India</span>
</div>
<div class="tel"> 919804070412</div>
</div>`}}
      />
 
      
     






      
      </Head>
      <body>
     
       <noscript
          dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXLL2CN" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
          }}
      />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
