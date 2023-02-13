import React, { useState } from "react";
import Prewed from "./Prewed";
import Product from "./Product";
import Other from "./Other";

const Photo = () => {
  const [active, setActive] = useState("prewed");

  return (
    <div className="w-full h-full ">
      <div className="w-full full grid grid-cols-1 items-start lg:grid-cols-12">
        <div className="col-span-3 relative lg:sticky top-10">
          <div className="flex flex-row px-20 lg:flex-col items-start justify-center gap-4">
            <button
              className={`${
                active === "prewed"
                  ? "text-zinc-400 text-xl lg:text-2xl"
                  : "text-zinc-600 text-xl lg:text-2xl"
              }`}
              onClick={() => setActive("prewed")}
            >
              Prewedding
            </button>
            <button
              className={`${
                active === "product"
                  ? "text-zinc-400 text-xl lg:text-2xl"
                  : "text-zinc-600 text-xl lg:text-2xl"
              }`}
              onClick={() => setActive("product")}
            >
              Product
            </button>
            <button
              className={`${
                active === "other"
                  ? "text-zinc-400 text-xl lg:text-2xl"
                  : "text-zinc-600 text-xl lg:text-2xl"
              }`}
              onClick={() => setActive("other")}
            >
              Other
            </button>
          </div>
        </div>
        <div className="col-span-9 mb-6">
          {active === "prewed" && <Prewed />}
          {active === "product" && <Product />}
          {active === "other" && <Other />}
        </div>
      </div>
    </div>
  );
};

export default Photo;
