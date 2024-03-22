import React, { useContext } from 'react';
import Feed from './Feed';
import Context1 from '../context/Context1';


const Home = () => {
    const {searchResults}=useContext(Context1)
    return (
        <div>
            {searchResults.length ?(<Feed posts={searchResults}/>):(<p>No posts to display </p>)
            }
        </div>
    );
};

export default Home;