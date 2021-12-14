import React from 'react';
import { useUser } from "../auth/useUser";

const Home = () => {

    const user = useUser();
    const username  = user.user.name;
    
    return (
        <div>
            <h1 className='text-center p-4 display-2'> Welcome {username} </h1>
            <h1 className='text-center p-4 display-3'>This is Home Page</h1>

        </div>
    )
}

export default Home
