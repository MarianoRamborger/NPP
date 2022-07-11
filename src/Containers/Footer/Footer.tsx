import { COLORS } from "../../Constants/colors"
import { BsFacebook, BsInstagram, BsDiscord,  } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = ({scrollRef, scroll}) => {

  return <section id='footer' ref={scrollRef} >

    <div className="footer-div">

      <div className="content-div">

        <div className="scrolltop-div" onClick={()=>scroll("landing")} >
        <MdKeyboardArrowUp className="footer-icon" />
        </div>

        <div className="footer-icons-div"  >
          <BsFacebook className="footer-icon"/>
          <BsInstagram className="footer-icon"/>
          <BsDiscord className="footer-icon"/>
        </div>

      </div>

      <div className="cp-div">
          
      </div>

    </div>

    <style>
      {`
        .footer-div {
          margin-top: 200px;
          background-color: ${COLORS.accent};
          height: 300px;
          display: flex;
          flex-flow: column wrap;

        }

        .content-div {

          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          
        }
        
        .scrolltop-div {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .footer-icons-div {
          display: flex;
          width: 500px;
          justify-content: space-evenly;;
          margin-top: 35px;
          
        }

        .footer-icon {
          font-size: 35px;
          fill: ${COLORS.primaryDark};
        }

        .footer-icon:hover {
          cursor: pointer;
          fill: ${COLORS.background}
        }

        .scrolltop-div * {
          font-size: 60px;
        }
    `}</style>

  </section>

}

export default Footer