import Head from 'next/head';
import './HowWeWork.scss';

import HomeSuccessProduct from '@/components/HomeSuccessProduct/HomeSuccessProduct';
import HomePartner from '@/components/HomePartner/HomePartner';
import HowWeWorkBanner from '@/components/HowWeWorkBanner/HowWeWorkBanner';
import HowWeWorkInnerContent from '@/components/HowWeWorkInnerContent/HowWeWorkInnerContent';

import { HowWeWorkContent, SettingsContent } from '@/helpers/data_utils';

import Container from '@/containers/Container';
import config from '@/helpers/config';

function HowWeWork(props) {
    const howWeWorkContent = props.howWeWorkContent.data.howWeWorkData;
    const settingsContent = JSON.parse(props.settingsContent.data.settingsData.content);
    return (
        <>
            <Head>
                <title>How We Work - Aqualeaf IT Solutions</title>
                <meta name='description' content="Aqualeaf IT Solutions follows a unique and innovative approach to delivering exceptional digital marketing, advertising, & IT services. Learn more about our process!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <HowWeWorkBanner howWeWorkContent={howWeWorkContent} onClick={props.onClick} settingsContent={settingsContent} />
            <HowWeWorkInnerContent howWeWorkContent={howWeWorkContent} />
            <HomeSuccessProduct />
            <HomePartner />
        </>
    );
}
export default Container(HowWeWork);

export async function getStaticProps({ req, res }) {
    return {
        props: {
            settingsContent: await SettingsContent(),
            howWeWorkContent: await HowWeWorkContent(),
        },
        revalidate: config().revalidate,
    };
}
