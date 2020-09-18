interface AppProps {

}
const Communication: React.FunctionComponent<AppProps> = ({

}) => {
  return (
    <>
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
      href="https://github.com/pooriavakili"
      rel="tooltip"
      title="Follow me on GitHub"
    >
      <i className="fa fa-github"></i>
    </a>
    <a
      className="btn btn-default btn-round btn-lg btn-icon"
      href="https://www.linkedin.com/in/pooria-vakili-6457a917a/"
      rel="tooltip"
      title="Follow me on Linkedin"
    >
      <i className="fa fa-linkedin"></i>
    </a>
    <a
      className="btn btn-default btn-round btn-lg btn-icon"
      href="https://web.telegram.org/pooriaashkevarvakili"
      rel="tooltip"
      title="Follow me on Telegram"
    >
      <i className="fa fa-telegram"></i>
    </a>
  </div>
</div>
</div>    
    </>)
     
    }

export default Communication;