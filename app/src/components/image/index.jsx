import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ path, src, alt, width, height, className  }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_POINT}
      path={path}
      src={src} // You can use different domains using src.
      transformation={[
        {
          width: width,
          height: height,
        },
      ]}
      loading="lazy"
      className={className}
      alt={alt}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
