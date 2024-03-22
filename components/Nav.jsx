import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context1 from '../context/Context1';

const Nav = () => {
    const{search,setSearch}=useContext(Context1);
    return (
        <div className="nav-container">
        <nav>
            <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
                <label>Search : </label>
                <input type="text" placeholder='Search here' value={search} id='search' onChange={(e)=>setSearch(e.target.value)}/>
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="post">Post</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
        </nav>
        </div>
    );
};

export default Nav;