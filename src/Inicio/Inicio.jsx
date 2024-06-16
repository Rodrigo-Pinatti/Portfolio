import style from '../Inicio/Inicio.module.css'
//import styled from '../Animacion/Animacion.module.css'
import Animacion from '../Animacion/Animacion.jsx'

const Inicio = () => {
    return (
        <section className={style.Inicio}>
            
            <article className={style.full}>
                <h1>Software Developer</h1>
                <p>Ambicioso, responsable, líder nato y desarrollador formado en busca de una oportunidad laboral en desarrollo backend en una empresa orientada al crecimiento, donde pueda aplicar mi creatividad, capacidad para resolver problemas, atención al detalle y habilidades probadas en gestión del tiempo.
                </p>
                <div className={style.adornos}>  
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    
                </div>
            </article>

            <div className={style.botones}>

                <h2>RODRIGO GOMEZ PIANTTI</h2>
                
                <div>
                <a href="https://drive.google.com/file/d/1lZ2Dogf34e4YbtVHUGmLQLhEs5-tKS48/view">Resume</a>
                </div>

            </div>
            <Animacion/>
        </section>
    )
}

export default Inicio;
