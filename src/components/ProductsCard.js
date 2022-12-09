import React from "react";

const ProductsCard = ({product}) => {

    const {productName,productTumb}= product

  return (
    <div className="rounded-md shadow-xl py-5 my-3   mx-auto bg-white text-gray-900 border ">
      <div className="grid grid-cols-4 justify-center items-center ">
        <div className="img-user col-span-1 ml-3">
          <img
            src={productTumb}
            alt=""
            className="object-cover object-center rounded shadow-sm dark:bg-gray-500 dark:border-gray-700"
          />
        </div>
        {/* name section */}

        <div className="col-span-3  ml-12">
          <h2 className="text-2xl font-semibold text-left">Ice Cream</h2>
          <h5 className="font-semibold text-gray-800 text-xl text-left ">
            price : 55 $
          </h5>
          <div className="flex justify-between">
            <p className="text-green-500 font-bold">in stock</p>

            <div>
              <label
                for={`Toggle${2}`}
                className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
              >
                <span>Left</span>
                <span className="relative">
                  <input id={`Toggle${2}`} type="checkbox" className="hidden peer" />
                  <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                </span>
                <span>Right</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
