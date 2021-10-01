import React from 'react';
import Moon from '../image/moon-fill.svg';
import Sun from '../image/brightness-high.svg';
import Native from '../image/Native-Developers.jpg'
import $ from 'jquery';
import Section from '../Section/Section';
import './Header.css';
function Header() {
    const [icon,setIcon]=React.useState("1");
    React.useEffect(()=>{
        $("#moon").on("click",function(){
            $("body").toggleClass("bw");
            
            
        })
    },[])

    const handleIcon=()=>{
        if(icon==="1"){
            setIcon("2")
        }else{
            setIcon("1")
        }
    }
    
    
    return (
        <>
            <div className="container-fluid nav_bg" style={{minWidth:'100%'}}>
                <div className="row" >
                    
                        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                            <div className="container-fluid">
                                <img className="logo" style={{ height: '50px' }} src={Native} />
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                                    <ul class=" navb navbar-nav ml-auto mb-2 mb-lg-0" >
                                        <li className="nav-item pr-5">
                                            <a aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item pr-5">
                                            <a  href="#">Services</a>
                                        </li>
                                        <li className="nav-item pr-5">
                                            <a  href="#">About</a>
                                        </li>
                                        <li className="nav-item pr-5">
                                            <a href="#">Contact</a>
                                        </li>
                                        <li className="nav-item pr-3" style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={icon=="1" ? Sun:Moon} onClick={handleIcon} id="moon"/>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    
                </div>
            </div>
        </>        
    )
}


export default Header;
