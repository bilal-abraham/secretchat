import React, { Fragment } from 'react'
import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <Fragment>
            <nav className="container">
                <Link className="home-nav-link" to="/"><h1 className="navbar-logo">Ride East Bay    <i className="fas fa-biking" /></h1></Link>
                <ul className='nav-menu'>
                    {MenuItems.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link className={item.class} to={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar