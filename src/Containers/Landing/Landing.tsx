import {COLORS} from '../../Constants/colors'
import { Button } from '../../Components';
import {MdFacebook} from "react-icons/md";

const Landing = () => {

  return <section id='landing'>

    <div className='landing-banner'>


        <div className='pic-circle'>
          <img height={200} width={200} src={require('./imgs/avatar.jpg')} alt="Avatar"/>
        </div>
        <h1> Lic Nicolas Crezcenci </h1>

        <p> Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno</p>

        <div className="divider" style={{width: 300}}></div>

        <div className='landing-icon-div'>
        <MdFacebook className='l-icon' />
        <MdFacebook className='l-icon' />
        <MdFacebook className='l-icon' />
        <MdFacebook className='l-icon' />
          
        </div>

       

        <nav className="landing-nav"> 
          <Button type='secondary' width={250} > Podcasts </Button>
          <Button type='secondary' width={250}> Escritos </Button>
          <Button type='secondary' width={250}> Presentaciones </Button>
          <Button type='secondary' width={250}> Otros </Button>
        
        </nav>
   



    </div>

    <style>
      {`
        #landing {
          height: 100vh;
          background-color: ${COLORS.background};
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
        
        }

        .landing-banner {
          height: 600px;
          width: 1200px;
          margin: auto;
          background-color: ${COLORS.primary};
          display: flex;
          flex-flow: column wrap;
          align-content: center;
          align-items: center;
          border-radius: 5px;
          -webkit-box-shadow: 0px 0px 1px 1px #000000; 
          box-shadow: 0px 0px 5px 2px #000000;
          
         
        }

        .landing-banner p, .landing-banner h1 {
          color: ${COLORS.textPrimary}
        }

        .landing-banner p {
          font-size: 22px;
          width: 600px;
        }

        .pic-circle img {
          border-radius: 200px;
          margin-top: -100px;
          -webkit-box-shadow: 0px 0px 1px 2px #000000; 
          box-shadow: 0px 0px 5px 2px #000000;
        }

        .divider {
          border-bottom: 3.5px solid ${COLORS.background};
          margin-top: 50px;
        }

        .landing-icon-div {
          margin-top: 50px;
         
        }

        .l-icon {
          height: 35px;
          width: 35px !important;
          color: ${COLORS.background};
          margin-right: 20px;
        }

        .landing-nav {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          width: 100%;
          border-top: 3.5px solid ${COLORS.accent};
          margin-top: auto;

        }
        
      `}
    </style>
  </section>
}

export default Landing