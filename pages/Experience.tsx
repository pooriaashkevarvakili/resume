// import { GetStaticProps } from "next";
import React from "react";

import Education from "./Education";
interface AppProps {}
const Experience: React.FunctionComponent<AppProps> = ({}) => {
  return (
    <>
      <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">developer</div>
          <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="500"
              >
                <div className="card-body cc-experience-header">
                  <p>March 2018</p>
                  <div className="h5">Front-end developer</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-duration="500"
              >
                <div className="card-body">
                  <div className="h5">Front End Developer React</div>
                  <p>
                    I since started 2018 React , java-script,and with
                    cra,jsx,javascript to css ,cra-next,ssr,ssg,redux,typescript
                    worked{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="500"
              >
                <div className="card-body cc-experience-header">
                  <p>March 2018 </p>
                  <div className="h5">WebDeveloper</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-duration="500"
              >
                <div className="card-body">
                  <div className="h5">html css js developer</div>
                  <p>I since started 2018 html css js sass worked </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div
                className="col-md-3 bg-primary"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="500"
              >
                <div className="card-body cc-experience-header">
                  <p>March 2018 </p>
                  <div className="h5">Mobile Developer</div>
                </div>
              </div>
              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-duration="500"
              >
                <div className="card-body">
                  <div className="h5">React-native</div>
                  <p>
                    I since started 2018 react-navigation ,view ,... worked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Education />
    </>
  );
};
export default Experience;
