import Container from '@/containers/Container';
import { SettingsContent } from '@/helpers/data_utils';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import config from '@/helpers/config';
import { useRouter } from 'next/router';

function ThankYouPage ( onBack ){

    const router = useRouter();

    const { type } = router.query;

    const [types, setTypes] = useState(type);

    // console.log('type', type);


    // const settingsContent = JSON.parse(props.settingsContent.data.settingsData.content);
    
    const [visible, setVisible] = useState(false);
    const [checkDone, setCheckDone] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setVisible(true), 50);
        const t2 = setTimeout(() => setCheckDone(true), 1100);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    const page = {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #060c16 0%, #0d1b2a 50%, #091520 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 20px',
        boxSizing: 'border-box',
    };

    // Background decorative blobs
    const blobLeft = {
        position: 'absolute',
        top: '10%',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,200,180,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
    };

    const blobRight = {
        position: 'absolute',
        bottom: '10%',
        right: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,200,180,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
    };

    const gridLines = {
        position: 'absolute',
        inset: 0,
        backgroundImage: `
            linear-gradient(rgba(0,200,180,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,200,180,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
    };

    // Logo / brand bar at top
    const topBar = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0,200,180,0.08)',
    };

    const logoText = {
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontWeight: 700,
        fontSize: '1.1rem',
        color: '#00c8b4',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
    };

    const logoSub = {
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontWeight: 300,
        fontSize: '0.65rem',
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginTop: 2,
    };

    // Content card — wider, page-like
    const content = {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
    };

    const circleStyle = {
        strokeDasharray: 226,
        strokeDashoffset: visible ? 0 : 226,
        transition: 'stroke-dashoffset 0.85s 0.3s cubic-bezier(0.4,0,0.2,1)',
    };

    const checkStyle = {
        strokeDasharray: 50,
        strokeDashoffset: checkDone ? 0 : 50,
        opacity: checkDone ? 1 : 0,
        transition: 'stroke-dashoffset 0.35s ease, opacity 0.35s ease',
    };

    const badge = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '5px 14px',
        borderRadius: 20,
        border: '1px solid rgba(0,200,180,0.3)',
        background: 'rgba(0,200,180,0.07)',
        color: '#00c8b4',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: 28,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s 0.8s ease',
    };

    const heading = {
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        color: '#ffffff',
        margin: '0 0 12px',
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.5s 1.0s ease, transform 0.5s 1.0s ease',
    };

    const tagline = {
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: '1.1rem',
        color: '#00c8b4',
        margin: '0 0 28px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s 1.15s ease',
    };

    const divider = {
        width: 60,
        height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(0,200,180,0.5), transparent)',
        margin: '0 auto 28px',
        borderRadius: 2,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s 1.25s ease',
    };

    const body = {
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: '1rem',
        color: 'rgba(200, 220, 230, 0.65)',
        lineHeight: 1.8,
        margin: '0 0 48px',
        maxWidth: 480,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.5s 1.35s ease, transform 0.5s 1.35s ease',
    };

    // Info cards row
    const infoRow = {
        display: 'flex',
        gap: 16,
        marginBottom: 44,
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s 1.45s ease',
    };

    const infoCard = {
        flex: '1 1 140px',
        maxWidth: 160,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(0,200,180,0.12)',
        borderRadius: 10,
        padding: '18px 16px',
    };

    const infoIcon = {
        fontSize: '1.4rem',
        marginBottom: 8,
        display: 'block',
    };

    const infoLabel = {
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontSize: '0.7rem',
        color: 'rgba(255,255,255,0.35)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: 4,
    };

    const infoValue = {
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontSize: '0.85rem',
        color: '#fff',
        fontWeight: 600,
    };

    const btnRow = {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.5s 1.6s ease, transform 0.5s 1.6s ease',
    };

    const btnPrimary = {
        padding: '13px 36px',
        borderRadius: '6px',
        background: 'linear-gradient(135deg, #00c8b4 0%, #00a896 100%)',
        color: '#fff',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontWeight: 600,
        fontSize: '0.85rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 24px rgba(0,200,180,0.35)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    };

    const btnSecondary = {
        padding: '13px 36px',
        borderRadius: '6px',
        background: 'transparent',
        color: 'rgba(255,255,255,0.6)',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontWeight: 500,
        fontSize: '0.85rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        border: '1px solid rgba(255,255,255,0.12)',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease, color 0.2s ease',
    };

    const highlight = { color: '#ffffff', fontWeight: 600 };

    return (
        <>
            <Head>
                <title>Thank You - Aqualeaf IT Solutions</title>
                <meta name='description' content="Don't take our word for it - see what satisfied clients say about our digital marketing, advertising, and IT services. Read our testimonials today!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div style={page}>
                {/* Background effects */}
                <div style={gridLines} />
                <div style={blobLeft} />
                <div style={blobRight} />

                {/* Main content */}
                <div style={content}>

                    {/* SVG Check */}
                    <div style={{ marginBottom: 24 }}>
                        <svg width="96" height="96" viewBox="0 0 80 80" fill="none" style={{ display: 'block', margin: '0 auto' }}>
                            <circle cx="40" cy="40" r="36" stroke="rgba(0,200,180,0.12)" strokeWidth="2" />
                            <circle
                                cx="40" cy="40" r="36"
                                stroke="#00c8b4"
                                strokeWidth="2"
                                strokeLinecap="round"
                                transform="rotate(-90 40 40)"
                                style={circleStyle}
                            />
                            <polyline
                                points="26,41 36,52 55,30"
                                stroke="#00c8b4"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                style={checkStyle}
                            />
                        </svg>
                    </div>

                    {/* Badge */}
                    <div style={badge}>
                        <span>●</span> Submission Successful
                    </div>

                    <h1 style={heading}>Message Received!</h1>
                    <p style={tagline}>We'll get back to you shortly.</p>
                    <div style={divider} />

                    {types === 'project' && (
                    <p style={body}>
                        Thanks for reaching out to{' '}
                        <span style={highlight}>Aqualeaf IT Solutions</span>. Our team will review your
                        project details and connect with you within{' '}
                        <span style={highlight}>24 hours</span>.
                    </p>
                    )}

                    

                    {/* CTA Buttons */}
                    <div style={btnRow}>
                        <button
                            style={btnPrimary}
                            onClick={() => router.push('/')}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,200,180,0.5)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,200,180,0.35)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Container(ThankYouPage);
export async function getStaticProps({ req, res }) {
    return {
        props: {
            settingsContent: await SettingsContent(),
        },
        revalidate: config().revalidate,
    };
}