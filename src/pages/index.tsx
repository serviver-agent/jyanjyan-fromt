import * as React from 'react';
import { NextPage } from 'next';

import Theme from '../style/theme';

const Index: NextPage = () => {
  return (
    <>
      <div className="signbord-border">
        <div className="signbord">Jyanjyan</div>
      </div>
      <style jsx>{`
        .signbord-border {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -80%);
          position: fixed;
          background-color: ${Theme.ColorGreenPie};
          width: 460px;
          height: 130px;
          padding: 1rem;
          box-shadow: ${Theme.Shadow};
          border-radius: 1rem;
        }
        .signbord {
          border-radius: .5rem;
          background-color: #fff;
          text-align: center;
          margin: auto;
          vertical-align: middle;
          line-height: 4rem;
          font-size: 4rem;
          padding: 1.4rem;
          color: ${Theme.ColorPrimaryText};
          -webkit-text-stroke: 6px ${Theme.ColorPrimaryText};
          font-family: "M PLUS Rounded 1c";
        }
      `}</style>
    </>
  );
};

export default Index;
