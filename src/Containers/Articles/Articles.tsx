import { Resources } from "../../Resources/Resources"

const Articles = ({scrollRef}) => {
  return <section id='articles' className="flexco" ref={scrollRef}>

      <h3 className='section-header'> Leeme en... </h3>

      <div className="articles-div">

      {Resources.Articulos.map((art, index) => {
        return (
          <a href={art.url} target="_blank" rel="noreferrer" key={`art-${index}`}>
          <img src={require(`${art.imgUrl}`)} alt={art.title} />
          </a>
        )
      })}
   

      </div>
  
    <style>
    {`
      #articles {
        margin-top: 40px;
       
      }

      .articles-div {
        display: flex;
        flex flow: row wrap;
        justify-content: center;
        width: 1200px;
        justify-content: space-between; 
      }

      .articles-div img {
        width: 400px;
        -webkit-box-shadow: 0px 0px 2px 1px #000000; 
        box-shadow: 0px 0px 2px 1px #000000;
        border-radius:  5px;
      }

      .articles-div img:hover {
        cursor: pointer;
        animation: grow-shadow 0.20s forwards ;
        animation-delay: 0s;
      }

      @keyframes grow-shadow {
   
        100% {
          -webkit-box-shadow: 0px 0px 16px 3px #000000; 
          box-shadow: 0px 0px 16px 3px #000000;
        }
      }

      @media only screen and (max-width: 1200px) { 
        .articles-div {
          width: 1000px;
          justify-content: space-evenly; 
        }

        .articles-div img {
          width: 250px;
        }
      }

      @media only screen and (max-width: 999px) { 
        .articles-div {
          width: 400px;
          margin-top: 20px;
        }

        #articles {
          margin-top: 0px;
        }

        .articles-div img {
          width: 150px;
        }
      }

      @media only screen and (max-width: 359px) {  
        .articles-div {
          width: 320px;
        }

        .articles-div img {
          width: 125px;
        }

      }
    `}
    </style>
  </section>

}

export default Articles