import React from 'react';

function Banner({bannerType, children}) {
  return <div className={`${bannerType} banner`}>{children}</div>;
}

export default Banner;
