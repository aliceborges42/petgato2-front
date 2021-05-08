import React from 'react'
import { Link, useRouteMatch, useLocation } from "react-router-dom";

const Home = () => {
    return(
        <>
            <ul>
                <li>
                    <Link to = "/dashboard"> Dashboard</Link>
                </li>
                <li>
                    <Link to = "/register"> Cadastro</Link>
                </li>
            </ul>
        </>
    );
}
export default Home;