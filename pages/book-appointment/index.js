import Container from '@/containers/Container';
import { SettingsContent } from '@/helpers/data_utils';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import config from '@/helpers/config';

function BookAppointment() {
    return (
        <>
            <Head>
                <title>Book Appointment - Aqualeaf IT Solutions</title>
                <meta
                    name="description"
                    content="Book an appointment with Aqualeaf IT Solutions."
                />
            </Head>

            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />

            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/aqualeafitsol/30min"
                style={{ minWidth: '320px', height: '700px' }}
            />
        </>
    );
}

export default Container(BookAppointment);

export async function getStaticProps() {
    return {
        props: {
            settingsContent: await SettingsContent(),
        },
        revalidate: config().revalidate,
    };
}