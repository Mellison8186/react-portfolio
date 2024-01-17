import React from "react";
import retroYardsale from "../../assets/project-tiles/retroYardsale.png";
import budgetTracker from "../../assets/project-tiles/budgetTracker.png";
import techBlog from "../../assets/project-tiles/techBlog.png";
import pizzaHunt from "../../assets/project-tiles/pizzaHunt.png";
import zooKeepr from "../../assets/project-tiles/zooKeepr.png";
import weatherDashboard from "../../assets/project-tiles/weatherDashboard.png";
import taskMasterPro from "../../assets/project-tiles/taskMasterPro.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="flex-row">
      <p className="col">Retro Yardsale<br></br>
           <a href="https://retro-yardsale.herokuapp.com/" target="blank">Link to Deployed App</a><br></br><a href="https://github.com/rookoyole/retro-yardsale" target="blank">
            Retro Yardsale GitHub</a></p>
          </div>
          <div className="my-2 row col">
        <img
          src={retroYardsale}
          className="my-2 col"
          style={{ width: "80%" }}
          alt="online retro yardsale"
        />
      </div>
      <div className="flex-row">
          <p className="col">Budget Tracker<br></br>
           <a href="https://budget-tracker-tau-nine.vercel.app/" target="blank">Link to Deployed App</a><br></br>
           <a href="https://github.com/Mellison8186/budget-tracker" target="blank">
            Budget Tracker GitHub</a></p>
          <p className="col">Tech Blog<br></br>
           {/* <a href="https://sleepy-gorge-41466.herokuapp.com/" target="blank">Link to Deployed App</a><br></br> */}<a href="https://github.com/Mellison8186/tech-blog" target="blank">
            Tech Blog GitHub</a></p>
          </div>
          <div className="my-2 row col">
        <img
          src={budgetTracker}
          className="my-2 col"
          style={{ width: "50%" }}
          alt="online budget tracking app"
        />
        <img
          src={techBlog}
          className="my-2 col"
          style={{ width: "50%" }}
          alt="technical news blog"
        />
      </div>
      <div className="flex-row">
          <p className="col">Pizza Hunt<br></br>
          {/* <a href="https://agile-chamber-16581.herokuapp.com/" target="blank">Link to Deployed App</a><br></br> */} <a href="https://github.com/Mellison8186/pizza-hunt" target="blank">
            Pizza Hunt GitHub</a></p>
          <p className="col">Zoo Keepr<br></br>
           {/*<a href="https://desolate-fjord-55350.herokuapp.com/" target="blank">Link to Deployed App</a><br></br> */} <a href="https://github.com/Mellison8186/zookeepr" target="blank">
            Zoo Keepr GitHub</a></p>
          </div>
      <div className="my-2 row col">
        <img
          src={pizzaHunt}
          className="my-2 col"
          style={{ width: "50%" }}
          alt="social app that helps people connect with delicious pizza creations"
        />
        <img
          src={zooKeepr}
          className="my-2 col"
          style={{ width: "50%" }}
          alt="app to keep track of zoo animals"
        />
      </div>
      <div className="flex-row">
          <p className="col">Weather Dashoard<br></br>
           <a href="https://mellison8186.github.io/weather-dashboard-wk6/" target="blank">Link to Deployed App</a><br></br>
           <a href="https://github.com/Mellison8186/weather-dashboard-wk6" target="blank">
            Weather Dashboard GitHub</a></p>
          <p className="col">Task Master Pro
          <br></br>
           <a href="https://mellison8186.github.io/taskmaster-pro/" target="blank">Link to Deployed App</a><br></br><a href="https://github.com/Mellison8186/taskmaster-pro" target="blank">
            Task Master Pro GitHub</a></p>
          </div>
      <div className="my-2 row col">
        <img
          src={weatherDashboard}
          className="my-2 col"
          style={{ width: "50%" }}
          alt="web app to look up weather in cities around the nation"
        />
        <img
          src={taskMasterPro}
          className="my-2 col"
          style={{ width: "50%" }}
          alt="task keeping web app to keep track of things that need to be done"
        />
      </div>
    </section>
  );
}

export default Portfolio;
