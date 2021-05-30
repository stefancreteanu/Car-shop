import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav className='nav-bar'>
            <Link to='/cars' className='link-btn'>
                <input 
                    type="submit"
                    value="Masini"
                    className="nav-btn"
                />
            </Link>
            <Link to='/sold-cars' className='link-btn'>
                <input 
                    type="submit"
                    value="Istoric vanzari"
                    className="nav-btn"
                />
            </Link>
            <Link to='/add-car' className='link-btn'>
                <input 
                    type="submit"
                    value="Adauga masini"
                    className="nav-btn"
                />
            </Link>
            <Link to='/cart' className='link-btn'>
                <input 
                    type="submit"
                    value="Cos"
                    className="nav-btn"
                />
            </Link>
        </nav>
    )
}

export default Nav;