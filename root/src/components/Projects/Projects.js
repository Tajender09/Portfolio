import React from "react";
import Project from "./Project";
import nutrition from "../../images/nutrition.png";
import movie from "../../images/movie.png";
import tattoo from "../../images/tattoo.png";
import interior from "../../images/interior.png";

function Projects() {
  return (
    <>
      <div id="projects">
        <center>
          <span className="heading-text">PROJECTS</span>
        </center>

        <Project
          name="Nutrition Experts"
          code="NEXT JS/STRAPI JS"
          desc="An ecommerce platform for health/nutrition products made using Next JS and headless cms"
          link="https://nutrition-experts.vercel.app/"
          imageD={nutrition}
        />

        <Project
          name="Movie Magic"
          code="NEXT JS/TAILWIND CSS"
          desc="A movie library that uses IMDB's API to display top 100 movies and filter them"
          link="https://moviemagic.vercel.app/"
          imageD={movie}
        />

        <Project
          name="97 Tattoos"
          code="REACT JS/FIREBASE"
          desc="A portfolio made for a tattoo studio that displays the services and products they offer"
          link="https://97tattoossample.vercel.app/"
          imageD={tattoo}
        />

        <Project
          name="Interiors Portfolio"
          code="JQUERY/PHP"
          desc="It's a project for a Interior Design Firm to display their projects and other information"
          link="https://tajender09.github.io/batrainteriors/"
          imageD={interior}
        />
      </div>
      <center>
        <span className="soon">MORE UPLOADING SOON</span>
      </center>
    </>
  );
}

export default Projects;
