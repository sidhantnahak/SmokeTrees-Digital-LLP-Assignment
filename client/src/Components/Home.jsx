import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import axios from 'axios'
const backend_url="https://note-making-app.onrender.com"
const Home = () => {


    const [data,setdata]=useState({name:"",address:""});
    const  onchangeHandler=(e)=>{
        
        setdata({...data,[e.target.name]:e.target.value})

    }
    const formHandler=(e)=>{
        e.preventDefault()
    }
    const getUser=async()=>{
        try {
          const data=await axios.get(`${backend_url}/api/v1/getalluser`)
          console.log(data.data);
            
        } catch (error) {
            console.log(error)
            
        }
        
    }

    useEffect(() => {
        console.log("hrer")
        getUser();

    }, [])
    

    return (
        <>
            <nav className="navbar bg-dark ">
                <div className="container-fluid bg-dark">
                    <Link to='/' className="navbar-brand text-white">SmokeTrees Digital LLP</Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className='nav_item'>
                <Link to='/'>Register Here</Link>
                <Link to='/users'>All Users</Link>
            </div>

            <div className='sidebar'>
                <Link to='/'>Register Here</Link>
                <Link to='/users'>All Users</Link>
            </div>


            <div className="form_div">
                <form onSubmit={formHandler}  style={{ width: "80%", boxShadow: "1px 1px 5px black", padding: "1rem 2rem", margin: "auto" }}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                        <input type="text" name="name" onChange={onchangeHandler} className="form-control" id="exampleFormControlInput1" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Address</label>
                        <textarea name='address' onChange={onchangeHandler} className="form-control" id="exampleFormControlTextarea1" rows="2" required></textarea>
                    </div>
                    <input type="submit" className='btn btn-primary' />
                </form>
            </div>
            <div className="users form_div">
                <h3>Registered Users</h3>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Serial No.</th>
                            <th scope="col">Username</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Home