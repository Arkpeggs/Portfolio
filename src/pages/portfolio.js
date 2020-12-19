import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from '../../src/img/github.png';
import COVID from '../../src/img/WWCLOGO.PNG';
import TickT from '../../src/img/ticket-tracker-logo.PNG';
import weatherapp from '../../src/img/weather.PNG';
import fitnessapp from '../../src/img/fitness-tracker.PNG';
import noteapp from '../../src/img/Note-taker.PNG';
const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
            <main className="row">
  <div className="col-md-8">
    <article className="block">
      <h1 className="block-header">Portfolio</h1>
      <hr />
      <div className="row">
        <div className="col-sm-6 col-md-12 col-lg-6">
          <a href="https://github.com/Arkpeggs" target="_blank">
            <img className="img-fluid port-image" src={Github} alt="To github profile" id="profileLink" />
          </a>
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6">
          <a href="https://github.com/afazeez82/worldwidecovid19-githubio.com" target="_blank">
            <img className="img-fluid port-image" src={COVID} alt="COVID-19 project 1" id="project1" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-12 col-lg-6">
          <a href="https://github.com/TomOverland/Ticket-Tracker" target="_blank">
            <img className="img-fluid port-image" src={TickT} alt="To Project 2: Ticket-Tracker" id="project2" />
          </a>
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6">
          <a href="https://github.com/Arkpeggs/Note-Taker" target="_blank">
            <img className="img-fluid port-image" src={noteapp} alt="Note-Taker" id="noteTaker" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-12 col-lg-6">
          <a href="https://github.com/Arkpeggs/Workout-tracker" target="_blank">
            <img className="img-fluid port-image" src= {fitnessapp} alt="Workout-tracker" id="workoutTracker" />
          </a>
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6">
          <a href="https://github.com/Arkpeggs/Weather-API" target="_blank">
            <img className="img-fluid port-image" src= {weatherapp} alt="Weather-API" id="weatherAPI" />
          </a>
        </div>
      </div>
    </article>
  </div>
</main>






            </div>
        </div>
    )
}
export default portfolio