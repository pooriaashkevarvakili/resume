// import { GetStaticProps } from "next";
interface AppProps {

}
const Education: React.FunctionComponent<AppProps> = ({

}) => {

  return(<>
<div className="section">
  <div className="container cc-education">
    <div className="h4 text-center mb-4 title">Education</div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-education-header">
            <p>2013 - 2015</p>
            <div className="h5">Master's Degree</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">Master of Information Technology</div>
            <p className="category">University of Computer Science</p>
            <p>i was university in elmy karbordy shohaday nejaja and field university network it and bachelor's degree study </p>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-education-header">
            <p>2007 - 2009</p>
            <div className="h5">High School</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">Science and Mathematics</div>
            <p className="category">School of Secondary board</p>
            <p>i in highschool khaje nasir stadied and field was it </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
  )



}


export default Education;