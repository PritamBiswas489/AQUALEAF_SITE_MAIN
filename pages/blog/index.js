import Head from 'next/head';
import React,{useState, useEffect} from 'react';
import config from '@/helpers/config';
const {REACT_APP_RESOURCE_URL} = config();
import { SettingsContent, getBlogList } from '@/helpers/data_utils';
import { shortStr } from '@/helpers/library'
import './Blog.scss';
import './BlogResponsive.scss';
import Container from '@/containers/Container';
import blogOne from '@/assets/images/common-image/bolg/1.jpg';
import ReactPaginate from 'react-paginate';
// import BlogLatestNews from 'components/BlogLatestNews';
import BlogLatestNews from '@/components/BlogLatestNews/BlogLatestNews';
import Link from 'next/link';
import moment from 'moment';
import Image from 'next/image';
import parse from 'html-react-parser';


function BlogListPage(props) {
  const [blog, setBlog] = useState([]);
	const [blogMeta, setBlogMeta] = useState({});
	const [recentBlog, setRecentBlog] = useState([]);
	const [page, setPage] = useState(1);

  const getContent = async () => {
      const result = await getBlogList(page);
      setBlog(result.data.records);
      setBlogMeta(result?.data.meta);
      setRecentBlog(result.data.recentBlog);
	};

  useEffect(() => {
		getContent();
	}, [page]);


  return (
    <>
      <Head>
        <title>Aqualeaf IT Solutions Blog - Insights on Digital Marketing, Advertising & IT</title>
        <meta name="description" content="Stay up-to-date with the latest insights and trends in digital marketing, advertising, and IT by following the Aqualeaf IT Solutions blog. Subscribe now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="blogTitle">
				<h2>blog</h2>
			</section>
			<section className="p-v-40 blog">
				<div className="container">
					<div className="row">
						<div className="col-md-9 col-sm-9 col-12">
							{blog?.map((val, i) => (
								<div className="d-flex flex-wrap blogInner align-items-center">
									<div className="imgPart relative">
										<div className="box-img fullwidth">
											<Link href={`/blog-details/${val?.slug}`}>
												<Image height={300} width={300} className={`next-img`} src={val?.img ? `${REACT_APP_RESOURCE_URL}/${val?.img}` : blogOne.src} alt="" />
											</Link>
										</div>
										<div className="box-date">
											<div className="date">
												{moment(val?.createdAt).format('DD-MM-YYYY')[0]}
												<span>{moment(val?.createdAt).format('DD-MM-YYYY')[1]}</span>
											</div>
											<div className="month">{moment(val?.createdAt).format('MMM')}</div>
										</div>
									</div>
									<div className="tetailPart">
										<div className="box-content fullwidth">
											<Link
												href={`/blog-details/${val?.slug}`}
												className="title">{parse(val?.title ?? `Many people limit themselves`)}</Link>
											<div className="blogText fullwidth m-b-20">
												<p>{parse(val?.description ? shortStr(val?.description,300):
															`Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor, sit amet consectetur
													adipisicing elit. Minima doloremque fugiat.`)}</p>
											</div>
											<div className="fullwidth btncover">
												<span className="stylishBtn">
													<Link href={`/blog-details/${val?.slug}`}>Read More</Link>
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
							{blog.length > 0 && (
								<ReactPaginate
									previousLabel={'<'}
									nextLabel={'>'}
									breakLabel={'...'}
									pageCount={blogMeta?.totalPages}
									marginPagesDisplayed={2}
									pageRangeDisplayed={3}
									onPageChange={(page) => setPage(page.selected + 1)}
									containerClassName={'pagination justify-content-center custom-paginate'}
									pageClassName={'page-item'}
									pageLinkClassName={'page-link'}
									previousClassName={'page-item'}
									previousLinkClassName={'page-link'}
									nextClassName={'page-item'}
									nextLinkClassName={'page-link'}
									breakClassName={'page-item'}
									breakLinkClassName={'page-link'}
									activeClassName={'active'}
								/>
							)}
						</div>
						<div className="col-md-3 col-sm-3 col-12">
							<BlogLatestNews data={recentBlog} />
						</div>
					</div>
				</div>
			</section>
    </>
  )
}
export default Container(BlogListPage);
export async function getStaticProps({ req, res }){
  
  return {
      props:{
        settingsContent : await SettingsContent(),
      },
      revalidate:config().revalidate
  };
}
