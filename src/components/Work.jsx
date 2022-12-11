import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
//Estilos
import "../estilos/workCard.css";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">PROYECTOS</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
