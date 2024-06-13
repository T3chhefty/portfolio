import corrier from "../../public/courier-img.png";
import todo from "../../public/todo.png";
import JobsDone from "./JobsDone";
import portfolio from "../../public/portfolio.png";
import calculator from "../../public/calculator.png";
import stopwatch from "../../public/stopwatch.png";
import bmicalculator from "../../public/bmicalculator.png";
import weatherapp from "../../public/weatherapp.png";

export default function Jobs() {
  return (
    <div className="jobs-container">
      <div className="jobs-done-heading">
        <h2>Some Projects</h2>
      </div>

      <div className="jobs">
        <JobsDone
          title="My Portfolio Project"
          techs="React and CSS"
          image={portfolio}
        />
         <JobsDone
          title="Simulating a Weather App"
          techs="HTML, CSS and JavaScript"
          image={weatherapp}
          href="https://t3chhefty.github.io/weather-App/"
        />

        <JobsDone
          title="Simulating a todo Application"
          techs="HTML, CSS and JavaScript"
          href="https://t3chhefty.github.io/my-todo-app/"
          image={todo}
        />

        <JobsDone
          title="Courier Service project"
          techs="built with Wordpress "
          href="https://swiftcargologisticsltd.com/"
          image={corrier}
        />
        <JobsDone
          title="Basic Operations Calculator"
          techs="HTML, CSS and JavaScript"
          image={calculator}
          href="https://t3chhefty.github.io/dsep_calculator/"
        />
        <JobsDone
          title="Simulating a Digital Stopwatch"
          techs="HTML, CSS and JavaScript"
          href="https://t3chhefty.github.io/Digital-Stop-Watch/"
          image={stopwatch}
        />
        <JobsDone
          title="Simulating BMI calculator"
          techs="HTML, CSS and JavaScript"
          image={bmicalculator}
          href="https://t3chhefty.github.io/BMI-Calculator/"
        />
       
      </div>
    </div>
  );
}
