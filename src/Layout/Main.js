import React from 'react';
import SearchForm from '../components/SearchForm';
import Customars from '../Pages/Customars/Customars';

const Main = () => {
    return (
        <div className='container mx-auto'>

            <SearchForm/>
         <Customars/>
        </div>
    );
};

export default Main;