import { COLORS } from "../../Constants/colors"
import { BsInstagram, BsLinkedin, BsWhatsapp, BsFillEnvelopeFill  } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = ({scrollRef, scroll}) => {

  return <section id='footer' ref={scrollRef} >

    <div className="footer-div">

      <div className="content-div">

        <div className="scrolltop-div" onClick={()=>scroll("landing")} >
        <MdKeyboardArrowUp className="footer-icon" />
        </div>

        <div className="footer-icons-div"  >
          <a href="https://instagram.com/cafesarcasmo" target="blank" rel="noreferrer"> <BsInstagram className="footer-icon"/> </a>
          <a href="https://www.linkedin.com/in/nicolascrescenzi/" target="blank" rel="noreferrer"> <BsLinkedin className="footer-icon"/> </a>
          <a href="https://api.whatsapp.com/send?phone=541151275602" target="blank" rel="noreferrer"> <BsWhatsapp className="footer-icon"/> </a>
          <a href="nmatiasc@gmail.com" target="blank" rel="noreferrer">  <BsFillEnvelopeFill className="footer-icon"/></a>
        </div>

      </div>

      <div className="cp-div">
          Mariano Ramborger © 2022
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

        .cp-div {
          color: ${COLORS.primaryDark};
          text-align: center;
          margin-top: 48px;
          font-size: 20px;
          font-weight: 800;

        }

        @media only screen and (max-width: 500px) { 
           
          .footer-div { 
            height: 115px;
            margin-top: 100px;
          }
          .footer-icons-div { 
            width: 320px;
            margin-top: 15px;
          }
          .footer-icon {
            font-size: 25px;
          }

          .scrolltop-div { 
            margin-top: 15px;
          }

          .cp-div { 
            font-size: 14px;
            margin-top: auto;
          }
        }



    `}</style>

  </section>

}

export default Footer