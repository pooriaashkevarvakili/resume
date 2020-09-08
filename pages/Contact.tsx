// import { GetStaticProps } from "next";
interface AppProps {

}
const  Contact: React.FunctionComponent<AppProps> = ({

}) => {
  return(
<>
<div className="section" id="contact">
  <div className="cc-contact-information img1" >
    <div className="container">
      <div className="cc-contact">
        <div className="row">
          <div className="col-md-9">
            <div className="card mb-0" data-aos="zoom-in">
              <div className="h4 text-center title">Contact Me</div>
              <div className="row">
              
                <div className="col-md-6">
                  <div className="card-body">
                  
                    <p className="mb-0"><strong>Phone</strong></p>
                    <p className="pb-2">09376720694</p>
                    <p className="mb-0"><strong>Email</strong></p>
                    <p>pooriavakili09@gmail.com</p>
                  </div>
                </div>
              </div>
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
export default Contact;

