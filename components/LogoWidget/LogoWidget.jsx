import React from "react";
import Image from "next/image";
import clutch from "@/assets/images/review/clutch.png";
import google from "@/assets/images/review/google.png";
import trustpilot from "@/assets/images/review/trustpilot.png";
import config from "@/helpers/config";
const { REACT_APP_RESOURCE_URL } = config();
import "./LogoWidget.scss";
import iso from "@/assets/images/common-image/iso.svg";

const LogoWidget = ({ settingsContent, maxHeight }) => {
  return (
    <>
      <div className="clRev">
        <ul className="d-flex flex-wrap">
          <li>
            <a href={settingsContent?.clutchLink || "#"} target={`_blank`}>
              <Image
                height={300}
                width={300}
                // fill
                className={`img-block`}
                src={
                  settingsContent?.clutchImg
                    ? `${REACT_APP_RESOURCE_URL}/${settingsContent?.clutchImg}`
                    : clutch.src
                }
                alt=""
                style={{ maxHeight: `${maxHeight || 46}px` }}
              />
            </a>
          </li>
          <li>
            <a href={settingsContent?.googleLink || "#"} target={`_blank`}>
              <Image
                height={100}
                width={100}
                // fill
                className={`next-img`}
                src={
                  settingsContent?.googleImg
                    ? `${REACT_APP_RESOURCE_URL}/${settingsContent?.googleImg}`
                    : google.src
                }
                alt=""
                style={{ maxHeight: `${maxHeight || 46}px` }}
              />
            </a>
          </li>
          <li>
            <a href={settingsContent?.trustpilotLink || "#"} target={`_blank`}>
              <Image
                height={100}
                width={100}
                // fill
                className={`next-img`}
                src={
                  settingsContent?.trustpilotImg
                    ? `${REACT_APP_RESOURCE_URL}/${settingsContent?.trustpilotImg}`
                    : trustpilot.src
                }
                alt=""
                style={{ maxHeight: `${maxHeight || 46}px` }}
              />
            </a>
          </li>
          <li>
            <a href={settingsContent?.isoLink || "#"} target={`_blank`}>
              <Image
                height={100}
                width={100}
                // fill
                className={`next-img`}
                src={
                  settingsContent?.isoImg
                    ? `${REACT_APP_RESOURCE_URL}/${settingsContent?.isoImg}`
                    : iso.src
                }
                alt=""
                style={{ maxHeight: `${maxHeight || 46}px` }}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LogoWidget;
