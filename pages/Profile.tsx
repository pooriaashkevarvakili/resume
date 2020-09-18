import PDFViewer from "pdf-viewer-reactjs";
import Communication from "./Communication"
interface AppProps {}

const Profile: React.FunctionComponent<AppProps> = ({ }) => {
  
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
                <p className="text-white category">
                  Front-end Web Developer react, Front-end Mobile react-native,
                  html css js
                </p>
                <a
                  className="mr-2 btn btn-primary smooth-scroll"
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
            <Communication/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
