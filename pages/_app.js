import { useEffect, useState } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import '@/styles/globals.css';
import '@/assets/custom-fonts/stylesheet.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/style.scss';
import '@/assets/styles/build.css';
import dynamic from 'next/dynamic';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import config from '@/helpers/config';
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';

const { REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY } = config();

import 'nprogress/nprogress.css';
// const TopProgressBar = dynamic(
//     () => {
//         return import('components/TopProgressBar');
//     },
//     { ssr: false }
// );

// const Loader = dynamic(
//     () => {
//         return import('components/Loader/Loader.jsx');
//     },
//     { ssr: false }
// );
import Layout from '@/components/Layout/Layout';
import { toast, ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
    const Router = useRouter();
    const [loading, setLoading] = useState(false);

    // const verified = typeof window !== 'undefined' ? Boolean(localStorage.getItem('isVerified')) : false;
    const [isVerified, setIsVerified] = useState(true);

    // router.events?.on('routeChangeStart', () => {
    //     setLoading(true);
    // });
    // router.events?.on('routeChangeComplete', () => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // });

    useEffect(() => {
        // setIsVerified(localStorage.getItem('isVerified') ? Boolean(localStorage.getItem('isVerified')) : false);
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // });
    useEffect(() => {
        Router.events.on('routeChangeStart', () => setLoading(true));
        Router.events.on('routeChangeComplete', () =>
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        );
        Router.events.on('routeChangeError', () =>
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        );
        return () => {
            Router.events.off('routeChangeStart', () => setLoading(true));
            Router.events.off('routeChangeComplete', () =>
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            );
            Router.events.off('routeChangeError', () =>
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            );
        };
    }, [Router.events]);
    return isVerified === true ? (
        <GoogleReCaptchaProvider
            reCaptchaKey={REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: 'head',
                nonce: undefined,
            }}
        >
            <Layout>
                <CookieConsent className={`cookie-wraper`} location='bottom' style={{ zIndex: '999999999999' }} cookieName='myAwesomeCookieName3' expires={999} overlay>
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
                {loading && <Loader />}
                <Component {...pageProps} />
            </Layout>
        </GoogleReCaptchaProvider>
    ) : (
        <>
            <div className='passwordProtectedArea d-flex align-items-center justify-content-center'>
                <div className='ppt-inner'>
                    <div className='alert alert-info text-center' role='alert'>
                        We are under testing.
                        <br /> To access the website please verify your password
                    </div>

                    <input type='password' id='password' />
                    <button
                        type='button'
                        onClick={() => {
                            const password = document.getElementById('password').value;
                            if (password !== 'Admin@aqualfitsol##') {
                                toast.error('Wrong password !');
                                return false;
                            }
                            localStorage.setItem('isVerified', true);
                            setIsVerified(true);
                        }}
                    >
                        Verify
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
