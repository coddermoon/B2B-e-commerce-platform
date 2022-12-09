import React from "react";

const CustomarCard = ({ user }) => {
  const { name, imageUrl, total_order } = user;
  return (
    <div className="rounded-md shadow-xl py-5 my-3  w-3/2 bg-white text-gray-900 border ">
      <div className="grid grid-cols-12 justify-center items-center ">
        <div className="img-user col-span-2 ml-3">
          <img
            src={imageUrl}
            alt=""
            className="object-cover object-center w-20 h-20 rounded shadow-sm dark:bg-gray-500 dark:border-gray-700"
          />
        </div>
        {/* name section */}

        <div className="col-span-8 flex flex-col md:flex-row justify-between items-left ml-12">
          <h2 className="text-2xl font-semibold text-left">{name}</h2>
          <h5 className="font-semibold text-gray-800 text-left ">
            {total_order} orders
          </h5>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CustomarCard;
