import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex
         justify-content-center
          align-content-center">

          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"> 
                 {/* my-4  is use for space between all cards
                 col-md 4 is use for cards display in page  4 means 3 cards display in same row
                 col-sm is use for create colom 6 means create 2,2,2 colom 
                 mx is use for margin*/}
                <div
                  className="card bg-dark text-light"   
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3"> 
                    {/* d-flex= display flex */}
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Demo
                    </a>
                    </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
