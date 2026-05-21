export const dynamic = 'force-dynamic'; // this is the fix
import Head from 'next/head';

import HomeAppSection from '@/components/HomeAppSection/HomeAppSection';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import HomeVideoSection from '@/components/HomeVideoSection/HomeVideoSection';
import HomeCaseStudy from '@/components/HomeCaseStudy/HomeCaseStudy';

import HomeTestimonials from '@/components/HomeTestimonials/HomeTestimonials';
import HomeSuccessProduct from '@/components/HomeSuccessProduct/HomeSuccessProduct';
import HomePartner from '@/components/HomePartner/HomePartner';
import { HomePageContent, SettingsContent } from '@/helpers/data_utils';
import Container from '@/containers/Container';
import config from '@/helpers/config';

const HomePage = (props) => {
    console.log("==============================================================================")
    console.log(props.dataHomePage.data)
    const { homeData, portfolioData, testimonialData } = props.dataHomePage.data;
    const services = props.settingsContent.data.serviceData;
    const settingsContent = JSON.parse(props.settingsContent.data.settingsData.content);
    return (
        <>
            <Head>
                <title>Web Design & Development, Mobile Apps, & eCommerce Development | Aqualeaf IT Solutions</title>
                <meta name='description' content='Aqualeaf IT Solutions offers innovative web design & development, mobile apps, & eCommerce development to businesses for increase brand awareness & generate revenue.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                <meta name='dmca-site-verification' content='b0NiZzZwbFlWYTl4bGtrQmR5WnZHS1RJdjlnYmc3aTdmZXhxdG5VSDVZOD01' />
                <meta name='facebook-domain-verification' content='q1vnuonc4aekbtv455bg76adx9j65q' />
            </Head>

            <HomeBanner homeContent={homeData.content} />
            <HomeVideoSection homeContent={homeData.content} settingsContent={settingsContent} />
            <HomeCaseStudy portfolioData={portfolioData} />
            <HomeAppSection homeContent={homeData.content} services={services} />
            <HomeTestimonials testimonialData={testimonialData} />
            <HomeSuccessProduct />
            <HomePartner />
        </>
    );
};
export default Container(HomePage);

export async function getStaticProps({ req, res }) {
    return {
        props: {
            settingsContent: await SettingsContent(),
            dataHomePage: await HomePageContent(),
        },
       // revalidate: config().revalidate,
    };
}
