
import { MiscAvatar } from "../../Components"


const Misc = ({scrollRef}) => {
  return (

    <section id="Misc" ref={scrollRef}>

      <div className="misc-div flexco">

        <h3 className="section-header"> Otros Proyectos</h3>

        <div className="misc-avs">

          <MiscAvatar img={require('./jardin.jpg')} alt={"El jardin"}
          title="El jardín" src={"https://www.instagram.com/eljardin.gs/"} />

          <MiscAvatar img={require('./acevedo.png')} alt={"Los complejos de Acevedo"}
          title="Los complejos de Acevedo" src={"https://loscomplejosdeacevedo.com/"} />

          <MiscAvatar img={require('./cuarenlit.jpg')} alt={"Cuarentena Literal"}
          title="Cuarentena Literal" src={"https://open.spotify.com/show/6fiujHsuhZ7KFhDbTwAvkR?si=19af1a432eed468c&nd=1"} />

        </div>

      </div>

      <style>
        {`
          .misc-avs {
            margin-top: 50px;
            display: flex;
            flex-flow: row wrap;
            width: 1200px;
            justify-content: space-between;
          }
      
        `
        }
      </style>

    </section>
  )
}

export default Misc