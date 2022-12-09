import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomarCard from '../../components/CustomarCard';

const Customars = () => {
    const [users,setUsers]= useState([])

    useEffect(() => {

        
        axios.get('fakedata/users.json')
           .then(response => {
                setUsers(response.data);
            })
    },[])
  
    return (
        <div className='mt-5 py-8'>

            {
            users.map(user => <CustomarCard
            key={user._id}
            user={user}
            />)
            }

{/* <CustomarCard/> */}


        </div>
    );
};

export default Customars;