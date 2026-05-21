import Head from 'next/head';
import { SettingsContent, AboutPageContent } from '@/helpers/data_utils';

import './About.scss';
import './About.responsive.scss';

import AboutBanner from '@/components/AboutBanner/AboutBanner';
import AboutStory from '@/components/AboutStory/AboutStory';
import HomePartner from '@/components/HomePartner/HomePartner';
import AboutOurValue from '@/components/AboutOurValue/AboutOurValue';
import Container from '@/containers/Container';
import config from '@/helpers/config';
import WeSay from '@/components/WeSay';

const AboutUsPage = (props) => {
    const { aboutData } = props.aboutContent.data;
    const settingsContent = JSON.parse(props.settingsContent.data.settingsData.content);
    return (
        <>
            <Head>
                <title>About Aqualeaf IT Solutions - Digital Marketing, Advertising & IT Company</title>
                <meta name='description' content="Aqualeaf IT Solutions is a reputed digital marketing, advertising, and IT company specialising in innovative solutions for modern businesses. Learn more about us today!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <AboutBanner aboutData={aboutData} onClick={props.onClick} settingsContent={settingsContent} />
            <AboutStory aboutData={aboutData} />
            <HomePartner />
            <AboutOurValue aboutData={aboutData} />
            <WeSay aboutData={aboutData} />
        </>
    );
};
export default Container(AboutUsPage);

export async function getServerSideProps({ req, res }) {
    return {
        props: {
            aboutContent: await AboutPageContent(),
            settingsContent: await SettingsContent(),
        },
    };
}
