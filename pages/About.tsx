// import { GetStaticProps } from "next";
interface AppProps {

}
const About: React.FunctionComponent<AppProps> = ({

}) => {

  return(

    <>
    <div className="section" id="about">
  <div className="container">
    <div className="card" data-aos="fade-up" data-aos-offset="10">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card-body">
            <div className="h4 mt-0 title">About</div>
            <p>Hello! I am pooriaashkevarvakili. front-end Developer, react-developer and react-native developer.</p>
            <p>I work junior front-end web developer react-js,next-js cra
            I work junior front-end mobile developer react-native
             </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card-body">
            <div className="h4 mt-0 title">Basic Information</div>
            <div className="row">
              <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
              <div className="col-sm-8">28</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
              <div className="col-sm-8">pooriavakili09@gmail.com</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
              <div className="col-sm-8">09376720694</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">virgool:</strong></div>
              <div className="col-sm-8">https://virgool.io/@pooriavakili09</div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
              <div className="col-sm-8">English</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )

}
export default About