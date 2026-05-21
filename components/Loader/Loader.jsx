import React, { useEffect, useState } from 'react';
import './Loader.scss';
import logoTransparent from '@/assets/images/common-image/logo-transparent.png';
import $ from 'jquery';

function Loader() {
  useEffect(() => {
    var logo_curtain = $('.logo-curtain'),
      logo_curtain_div = $('.logo-curtain div'),
      preload = $('.preload');

    logo_curtain.animate(
      {
        opacity: 1,
      },
      500,
      function () {
        logo_curtain_div.animate(
          {
            top: 0,
          },
          2000,
          function () {
            // preload.animate(
            //     {
            //         opacity: 0,
            //     },
            //     500,
            //     function () {
            //         preload.css('visibility', 'hidden');
            //     }
            // );
          }
        );
      }
    );
  }, []);

  return (
    <>
      <div className="preload">
        <div className="logo-container">
          <img src={logoTransparent.src} alt="" className="logo" />
          <div className="logo-curtain">
            <div />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
