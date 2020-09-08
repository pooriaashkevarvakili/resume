// import { GetStaticProps } from "next";
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
                      <a href="http://portfoliotwenty.surge.sh/">
                        <figure className="cc-effect">
                          <img src="images/twenty.png" alt="Image" />
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
                      <a href="http://portfolioeighteen.surge.sh/">
                        <figure className="cc-effect">
                          <img src="images/Gallery.png" alt="Image" />
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
                      <a href="http://portfoliothreeteen.surge.sh/">
                        <figure className="cc-effect">
                          <img src="images/Mina.png" alt="Image" />
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
                      <a href="http://portfolionineteen.surge.sh/">
                        <figure className="cc-effect">
                          <img src="images/portfolio.png" alt="Image" />
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
            <div className="tab-pane" id="graphic-design" role="tabpanel">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="https://zhoon.ir/">
                        <figure className="cc-effect">
                          <img src="images/zhoon.png" alt="Image" />
                          <figcaption>
                            <div className="h4">tree month work experience</div>
                            <p>zhoon</p>
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
                    ></div>
                    <div
                      className="cc-porfolio-image img-raised"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <a href="https://drkarafarini.com/">
                        <figure className="cc-effect">
                          <img src="images/drkarafariny.png" alt="Image" />
                          <figcaption>
                            <div className="h4">
                              {" "}
                              seven month work experience
                            </div>
                            <p>drkarafarini</p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
