import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import LightGallery from "lightgallery/react";
import { motion } from "framer-motion";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Other = () => {
  return (
    <>
      <div className="w-full h-full">
        <LightGallery
          mode="lg-fade"
          speed={300}
          enableDrag={true}
          addClass={true}
          closeOnTap={true}
          plugin={(lgThumbnail, lgZoom)}
          isMobile
          elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 px-4 lg:px-10 gap-3 group "
        >
          <Link href="/image/prewed/wed-1.jpg">
            <div className="overflow-hidden">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                alt=""
                src="/image/prewed/wed-1.jpg"
                width={450}
                height={650}
                objectFit="cover"
                layout="responsive"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/prewed/wed-2.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/prewed/wed-2.jpg"
                alt=""
                width={450}
                height={650}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/prewed/wed-3.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/prewed/wed-3.jpg"
                alt=""
                width={450}
                height={650}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/prewed/wed-4.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/prewed/wed-4.jpg"
                alt=""
                width={450}
                height={650}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/prewed/wed-5.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/prewed/wed-5.jpg"
                alt=""
                width={450}
                height={650}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/prewed/wed-6.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/prewed/wed-6.jpg"
                alt=""
                width={450}
                height={650}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/prewed/wed-7.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/prewed/wed-7.jpg"
                alt=""
                width={450}
                height={650}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/prewed/wed-8.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/prewed/wed-8.jpg"
                alt=""
                width={450}
                height={650}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/prewed/wed-9.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/prewed/wed-9.jpg"
                alt=""
                width={450}
                height={650}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
        </LightGallery>
      </div>
    </>
  );
};

export default Other;
