// import { GetStaticProps } from "next";
interface AppProps {

}
const Footer: React.FunctionComponent<AppProps> = ({

}) => {
  return(
<>
  <footer className="footer">
        <div className="container text-center">
          <a className="cc-facebook btn btn-link" href="https://gitlab.com/pooriaashkevarvakili"><i className="fa fa-gitlab fa-2x " aria-hidden="true"></i></a>
          <a className="cc-instagram btn btn-link" href="https://github.com/pooriaashkevarvakili"><i className="fa fa-github fa-2x " aria-hidden="true"></i></a>
          <a className="cc-twitter btn btn-link " href="https://www.linkedin.com/in/pooria-ashkevar-vakili-6457a917a"><i className="fa fa-linkedin fa-2x " aria-hidden="true"></i></a>

        </div>
      <div className="text-center h4 title">pooriaashkevarvakili</div>
      <div className="text-center text-muted">
        <p>&copy;  All rights reserved.resume pooriaashkevarvakili </p>
      </div>
    </footer>
</>

  )
}  
  
export default Footer;