import React from 'react'
import Social from "../Social/Social"
import  {Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom"


function footer(){

    const style={
        // paddingTop:"60px",
        marginTop:"200px"
    }

    
return (

    <Navbar style={style}  fixed="bottom">
         
       
         
            
                    <ul className="nav nav-bar">
                    <li className="nav-item">
                            {/* <a className="nav-link active" href="/"><strong className="navBorder">Home</strong></a> */}
                            <Link  className="navBorder nav-link" to="/"> Home </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link active" href="/About"><strong className="navBorder">About</strong></a> */}
                            <Link className="navBorder nav-link" to="/About"> About </Link>
                        </li>
                        <br/>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/Portfolio"><strong
                                    className="navBorder">Portfolio</strong></a> */}

                                    <Link className="navBorder nav-link" to="/Portfolio"> Portfolio</Link>
                                    
                            </li>
                            <br/>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="/Contact"><strong className="navBorder">Contact</strong></a> */}
                                    <Link className="navBorder nav-link" to="/Contact"> Contact </Link>
                                </li>
                                <br/>
                    </ul>
                    <div className="ml-auto">
                    <Social />
                    </div>
       
       
                    <div className="ml-auto">
<p className="nav-item"> &copy;2020. All rights reserved. Made in SF, CA. </p>
</div>
    </Navbar>
)


}
export default footer;