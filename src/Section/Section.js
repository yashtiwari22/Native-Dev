import React from 'react'
import Dev from '../image/dev.svg';
import Blob from '../image/blob.svg';
import $ from 'jquery';
import './Section.css';
function Section() {
    
    return (
        <>
            <div className="container-fluid nav_bg outer" >
                <div className="row">
                    <div classname="col-10 mx-auto" >
                        <div className="row row_2">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 section_left" >
                                <h1>Build you website with <strong style={{color:'blueviolet'}}>Native Developers</strong></h1>
                                <p className="my-3 font"><i>Native Developers is a group of full-stack developers, designers, and writers. We are professional in Android, iOS, and website development, including front-end and back-end applications, designing user interactions on web pages, creating servers and databases for functionality, ensuring cross-platform optimization for mobile phones, ensuring responsiveness of applications.</i></p>
                                <div className="mt-3">
                                    <button type="button" class="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 section_right" >
                                <img className="Dev" src={Dev}  />
                                <img className="Blob animated" src={Blob}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
