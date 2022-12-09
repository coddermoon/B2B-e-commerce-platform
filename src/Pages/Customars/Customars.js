import React from 'react';

const Customars = () => {
    return (
        <div className='mt-5 py-8'>
<div className="rounded-md shadow-xl py-5  w-3/2 bg-white text-gray-900 border ">
	
<div className="grid grid-cols-12 justify-center items-center ">
<div className="img-user col-span-2 ml-3">
<img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-20 h-20 rounded shadow-sm dark:bg-gray-500 dark:border-gray-700" />
</div>
{/* name section */}

<div className="col-span-8 flex flex-col md:flex-row justify-around items-center">
    <h2 className='text-2xl font-semibold text-center'>Mahamodul Hasan Moon</h2>
    <h5 className='font-semibold text-gray-800 text-center'>40 orders</h5>
</div>
<div>

</div>

</div>
	
</div>



        </div>
    );
};

export default Customars;