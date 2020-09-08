
import { GetStaticProps } from "next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Profile from "./Profile";
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Reference from "./Reference";
import Contact from "./Contact";
// ------------------------------ ---------------------- --------
interface AppProps {

}
 const Home: React.FunctionComponent<AppProps> = ({

}) => {



  return (
    <>
     <body id="top">
 
    <Navbar/>
    <div className="page-content">
      <div>
<Profile/>
<About/>
<Skill/>
<Portfolio/>
<Experience/>


<Contact/>
</div>
    </div>
  <Footer/>
    </body>
   
 
    </>
  );
};
export default Home;