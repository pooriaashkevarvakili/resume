import PDFViewer from "pdf-viewer-reactjs";
interface AppProps {}

const Profile: React.FunctionComponent<AppProps> = ({}) => {
  const Change = () => {};
  return (
    <>
      <div className="profile-page">
        <div className="wrapper">
          <div className="page-header page-header-small" filter-color="green">
            <div className="page-header-image " data-parallax="true"></div>
            <div className="container">
              <div className="content-center">
                <div className="cc-profile-image">
                  <a href="#">
                    <img src="images/pooria.jpg" alt="Image" />
                  </a>
                </div>
                <div className="h2 title">PooriaAshkevarVakili</div>
                <p className="category text-white">
                  Front-end Web Developer react, Front-end Mobile react-native,
                  html css js
                </p>
                <a
                  className="btn btn-primary smooth-scroll mr-2"
                  href="#contact"
                  data-aos="zoom-in"
                  data-aos-anchor="data-aos-anchor"
                >
                  Hire Me
                </a>

                <a
                  className="btn btn-primary"
                  target="_blank"
                  href="./resume/resume.jpg"
                  data-aos="zoom-in"
                  data-aos-anchor="data-aos-anchor"
                >
                  Cv resume
                </a>
                <a
                  style={{ marginLeft: 10 }}
                  className="btn btn-primary"
                  target="_blank"
                  href="./resume/resume1.jpg"
                  data-aos="zoom-in"
                  data-aos-anchor="data-aos-anchor"
                >
                  Cv resume 2
                </a>
              </div>
            </div>
            <div className="section">
              <div className="container">
                <div className="button-container">
                  <a
                    className="btn btn-default btn-round btn-lg btn-icon"
                    href="https://gitlab.com/pooriavakili"
                    rel="tooltip"
                    title="Follow me on Gitlab"
                  >
                    <i className="fa fa-gitlab"></i>
                  </a>
                  <a
                    className="btn btn-default btn-round btn-lg btn-icon"
                    href="https://twitter.com/pooriavakili09"
                    rel="tooltip"
                    title="Follow me on Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-default btn-round btn-lg btn-icon"
                    href="https://web.telegram.org/pooriaashkevarvakili"
                    rel="tooltip"
                    title="Follow me on Telegram"
                  >
                    <i className="fa fa-telegram"></i>
                  </a>

                  <a
                    className="btn btn-default btn-round btn-lg btn-icon"
                    href="https://github.com/pooriavakili"
                    rel="tooltip"
                    title="Follow me on GitHub"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
