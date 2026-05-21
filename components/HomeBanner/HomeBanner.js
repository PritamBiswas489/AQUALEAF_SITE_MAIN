import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./HomeBanner.scss";
import "./HomeBanner.responsive.scss";
import qImage from "@/assets/images/common-image/q.svg";
import mobBan from "@/assets/images/common-image/home-mobile-ban.jpg";
import config from "@/helpers/config";
import Image from "next/image";
import parse from "html-react-parser";
const { REACT_APP_RESOURCE_URL } = config();

function HomeBanner({ homeContent }) {
  const homeData = JSON.parse(homeContent);
  return (
    <>
      <section className="banner d-flex justify-content-between align-items-center mobNone">
        <div className="bannerLeft">
          <h6>Introducing</h6>
          <h2>
            {parse(
              homeData?.banner?.title ??
                `Hire a developer and monetize your business with <span>AquaLeaf IT Solutions</span>`
            )}
          </h2>
          <div className="banParagraph">
            {parse(
              homeData?.banner?.description ??
                `Bring your go-to-market teams together to deliver personalized customer experiences in real time – so you can increase your revenue, shorten your sales
						cycles, and strengthen your brand.`
            )}
          </div>
        </div>
        <div className="bannerRight">
          <div className="qSvg">
            <Image
              className="next-img"
              height={300}
              width={300}
              src={
                homeData?.banner?.img
                  ? `${REACT_APP_RESOURCE_URL}/${homeData?.banner?.img}`
                  : qImage
              }
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="homeBanMobArea">
        <Image
          height={500}
          width={1000}
          className={`next-img`}
          src={
            homeData?.banner?.mobileImg
              ? `${REACT_APP_RESOURCE_URL}/${homeData?.banner?.mobileImg}`
              : mobBan.src
          }
          alt=""
        />
        <div className="bannerLeft">
          <h6>Introducing</h6>
          <h2>
            {parse(
              homeData?.banner?.title ??
                `Hire a developer and monetize your business with <span>AquaLeaf IT Solutions</span>`
            )}
          </h2>
          <div>
            {parse(
              homeData?.banner?.description ??
                `Bring your go-to-market teams together to deliver personalized customer experiences in real time – so you can increase your revenue, shorten your sales
						cycles, and strengthen your brand.`
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
