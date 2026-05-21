import Head from 'next/head';
import { SettingsContent, getCareerCategoryContent, getCareerContent } from '@/helpers/data_utils';
import Container from '@/containers/Container';
import './Carrer.scss';
import CarrerBanner from '@/components/CarrerBanner/CarrerBanner';
import CarrerComeOnBoard from '@/components/CarrerComeOnBoard/CarrerComeOnBoard';
import CarrierRightMatch from '@/components/CarrierRightMatch/CarrierRightMatch';
import CareerWorkHard from '@/components/CareerWorkHard/CareerWorkHard';
import config from '@/helpers/config';

function CareerContent(props) {
    const careerContent = props.careerContent.data;
    const careerCategoryContent = props.careerCategoryContent.data;
    return (
        <>
            <Head>
                <title>Join Our Team - Aqualeaf IT Solutions Career Opportunities</title>
                <meta name='description' content="Aqualeaf IT Solutions always seeks talented & passionate individuals to join our team. Check out our career opportunities for dynamic work environments & growth opportunities!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <CarrerBanner careerContent={careerContent}></CarrerBanner>
            <CarrerComeOnBoard careerContent={careerContent} careerCategoryContent={careerCategoryContent}></CarrerComeOnBoard>
            <CarrierRightMatch careerContent={careerContent}></CarrierRightMatch>
            <CareerWorkHard careerContent={careerContent}></CareerWorkHard>
        </>
    );
}
export default Container(CareerContent);

export async function getStaticProps({ req, res }) {
    return {
        props: {
            settingsContent: await SettingsContent(),
            careerContent: await getCareerContent(),
            careerCategoryContent: await getCareerCategoryContent(),
        },
        revalidate: config().revalidate,
    };
}
