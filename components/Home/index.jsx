import React from "react";
import LightGallery from "lightgallery/react";
import { motion } from "framer-motion";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Link from "next/link";
import Image from "next/legacy/image";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Home = () => {
  return (
    <>
      <div id="gallery" className="w-full min-h-full py-10 relative">
        <h1 className="text-center uppercase text-3xl py-10 text-zinc-300">
          My Portfolio
        </h1>
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
          <Link href="/image/img-1.JPG">
            <div className="overflow-hidden">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                alt=""
                src="/image/img-1.JPG"
                width={450}
                height={650}
                objectFit="cover"
                layout="responsive"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/image/img-2.JPG">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/img-2.JPG"
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
          <Link href="/image/img-3.JPG">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/img-3.JPG"
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
          <Link href="/image/img-4.JPG">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/img-4.JPG"
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
          <Link href="/image/img-5.JPG">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/img-5.JPG"
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
          <Link href="/image/img-6.JPG">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/img-6.JPG"
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
          <Link href="/image/img-7.JPG">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/img-7.JPG"
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
          <Link href="/image/img-8.JPG">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/img-8.JPG"
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
          <Link href="/image/img-9.JPG">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/image/img-9.JPG"
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

export default Home;
