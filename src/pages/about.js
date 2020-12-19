import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import flowers from '../../src/img/flowers.jpg';
const mainPage = () => {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
                </h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={flowers} alt="Cherry blossoms" height= "200px" />
                                </div>

                                <div className="col-md-8">

                                    <p> Welcome to my Portfolio. I am a full stack developer in training, hoping to use my skills for a new career. I have added links to several projects I have worked on. Feel free to contact me with any
                                    questions or feedback</p>
                                    <p>I hope you enjoy your look around!</p>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default mainPage