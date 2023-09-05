import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
    return (
        <>
            <nav style={{ height: "60px" }} class="navbar bg-dark ">
                <div class="container-fluid bg-dark">
                    <Link to='/' class="navbar-brand text-white">SmokeTrees Digital LLP</Link>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success text-white" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div className='sidebar'>
                <Link to='/'>Register Here</Link>
                <Link to='/users'>All Users</Link>
            </div>

        </>
    )
}

export default Home