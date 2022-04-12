// import { GetStaticProps } from "next";
import WorkExperience from "./WorkExperience"
interface AppProps {}
const Portfolio: React.FunctionComponent<AppProps> = ({}) => {
  return (
    <>
      <div className="section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="h4 text-center mb-4 title">Portfolio</div>
              <div className="nav-align-center">
                <ul className="nav nav-pills nav-pills-primary" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#web-development"
                      role="tablist"
                    >
                      <i className="fa fa-laptop" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#graphic-design"
                      role="tablist"
                    >
                      <i className="fa fa-picture-o" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content gallery mt-5">
            <div className="tab-pane active" id="web-development">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="https://gitlab.com/pooriavakili/portfoliofourteen">
                        <figure className="cc-effect">
                          <img src="images/fourteen.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">portfolioone</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="https://gitlab.com/pooriavakili/portfolioseventeen">
                        <figure className="cc-effect">
                          <img src="images/seventeen.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">portfoliotwo</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="https://gitlab.com/pooriavakili/portfolioeight">
                        <figure className="cc-effect">
                          <img src="images/eight.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">portfolioThree</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                        <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="https://testconsole.avajang.com">
                        <figure className="cc-effect">
                          <img src="images/avajang.png" alt="Image" />
                          <figcaption>
                            <div className="h4">portfoliofive</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                          <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="https://projectavajang.surge.sh/">
                        <figure className="cc-effect">
                          <img src="images/avajang.png" alt="Image" />
                          <figcaption>
                            <div className="h4">portfoliosix</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="https://gitlab.com/pooriavakili/portfolioseven">
                        <figure className="cc-effect">
                          <img src="images/seven.jpg" alt="Image" />
                          <figcaption>
                            <div className="h4">portfolioFour</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a>
                     
                    </div>
 
                  </div>
                  
                </div>
              </div>
              
            </div>
        <WorkExperience/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
