import React from "react";

const ProductsCard = ({ product }) => {
  const { productName, productTumb, _id } = product;

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
          <h2 className="text-2xl font-semibold text-left">{productName}</h2>
          <h5 className="font-semibold text-gray-800 text-xl text-left ">
            price : 55 $
          </h5>
          <div className="flex justify-between">
            <p className="text-green-500 font-bold">in stock</p>

            <div>
              <label
                htmlFor={`Toggle${_id}`}
                className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
              >
                <span>Left</span>
                <span className="relative">
                  <input
                    id={`Toggle${_id}`}
                    type="checkbox"
                    className="hidden peer"
                  />
                  <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                </span>
                <span>Right</span>
              </label>
            </div>

          </div>
          <button aria-label="Share this post" type="button" className="p-2 flex items-center ml-2 text-center font-bold">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
					<path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
				</svg> <span className="mx-2 text-violet-400">Share </span>
			</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
