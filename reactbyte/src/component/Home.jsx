import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
return (
    <div>
        <h2>Home page</h2>
        <nav>
            <ol>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/Registration">Registration</Link>
                </li>
                <li>
                    <Link to="/Dashboard">Dashboard</Link>
                </li>
            </ol>
        </nav>
    </div>
)
}

export default Home