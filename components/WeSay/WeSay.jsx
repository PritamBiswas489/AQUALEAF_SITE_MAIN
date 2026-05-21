import React from 'react';
import './WeSay.scss';
import './WeSayResponsive.scss';
import weSay from 'assets/images/common-image/about/we-say.png';
import config from '@/helpers/config';
import parse from 'html-react-parser';
import Image from 'next/image';
const { REACT_APP_RESOURCE_URL } = config();

const WeSay = ({ aboutData }) => {
  const content = JSON.parse(aboutData.content);

  return (
    <>
      <section className="weSay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-5 col-sm-4 col-12">
              <div className="ewSayImg">
                <Image height={500} width={500} className={`next-img`} src={content?.weTalk?.img ? `${REACT_APP_RESOURCE_URL}/${content?.weTalk?.img}` : weSay.src} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-8 col-12">
              <div className="weSayContent">
                <h3>
                  {parse(
                    content?.weTalk?.description ??
                      `“Pixated's work has generated a big increase in our online conversions. We are particularly impressed with their professionalism and knowledge.”`
                  )}
                </h3>
                <p>{parse(content?.weTalk?.ceoName ?? `Barnaby Hughes, CEO at Actiph Water`)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeSay;
