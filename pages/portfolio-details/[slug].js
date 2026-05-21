import Head from 'next/head';
import './PortfolioDetails.scss';
import './PortfolioResponsive.scss';
import Container from '@/containers/Container';
import { SettingsContent, PortfolioDetails, PortfoloContent } from '@/helpers/data_utils';
import PortfolioBanner from '@/components/PortfolioBanner/PortfolioBanner';
import PortfolioOverview from '@/components/PortfolioOverview/PortfolioOverview';
import PortfolioClientSay from '@/components/PortfolioClientSay/PortfolioClientSay';
import PortfolioTechnologis from '@/components/PortfolioTechnologis/PortfolioTechnologis';
import Projects from '@/components/Projects/Projects';
import TheProblem from '@/components/TheProblem/TheProblem';
import PortfolioReliableApp from '@/components/PortfolioReliableApp/PortfolioReliableApp';
import HomeSuccessProduct from '@/components/HomeSuccessProduct/HomeSuccessProduct';
import PortfolioWhatWeDid from '@/components/PortfolioWhatWeDid/PortfolioWhatWeDid';
import config from '@/helpers/config';

function PortfolioDetailsPage(props) {
    const portfolioDtlContent = props.details.data;
    return (
        <>
            <Head>
                <title>Aqualeaf IT Solutions Portfolio - Our Work Speaks for Itself</title>
                <meta name='description' content="Look at our portfolio and see the exceptional digital marketing, advertising, and IT services we have provided to our clients. Contact us today to get started!" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <PortfolioBanner portfolioDtlContent={portfolioDtlContent} />
            <PortfolioTechnologis portfolioDtlContent={portfolioDtlContent} />
            <PortfolioOverview portfolioDtlContent={portfolioDtlContent} />
            <Projects portfolioDtlContent={portfolioDtlContent} />
            <TheProblem portfolioDtlContent={portfolioDtlContent} />
            <PortfolioReliableApp portfolioDtlContent={portfolioDtlContent} />
            <PortfolioWhatWeDid portfolioDtlContent={portfolioDtlContent} />
            <PortfolioClientSay portfolioDtlContent={portfolioDtlContent} />
            <HomeSuccessProduct />
        </>
    );
}
export default Container(PortfolioDetailsPage);

// export async function getStaticPaths(){
//   const  settingsContent = await PortfoloContent();
//   const portfolio = settingsContent.data.portfolio;
//   return {
//      fallback:false,
//      paths: portfolio.map(portf=>({
//          params:{
//              slug:portf.slug.toString()
//          }
//      }))
//   }
// }
// export async function getStaticProps(context){
//  const { params } = context;
//  const { slug } = params;
//  return {
//      props:{
//          settingsContent : await SettingsContent(),
//          details: await PortfolioDetails(slug)
//      },
//      revalidate:config().revalidate
//  };
// }

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    const slug = params.slug;
    return {
        props: {
            settingsContent: await SettingsContent(),
            details: await PortfolioDetails(slug),
        },
    };
}
