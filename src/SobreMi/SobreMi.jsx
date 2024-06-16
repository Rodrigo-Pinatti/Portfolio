import styles from '../SobreMi/SobreMi.module.css'
import rodri from  '../assets/rodri.png'
import Animacion from '../Animacion/Animacion.jsx'


const SobreMi = ()=>{
    return(
        <section className={styles.SobreMi}>
            <section className={styles.intro}>
                <p>Cuento con conocimientos de programación, en lenguajes como Python, JavaScript, Node.js, HTML y Css. Mi capacidad técnica se ha fortalecido a través de prácticas y proyectos llevados a cabo como la creación de un programa para gestionar la información del personal y alumnos de la Escuela de Educación Técnica Nro. 21 Gral. Manuel Belgrano. Comprometido con  la mejora y el crecimiento continuo, apelando siempre a la expansión de mis habilidades y a la colaboración activa para alcanzar la excelencia y el éxito de los proyectos en los que participo.
                </p>
            </section>
                

                <div className={styles.educacion}>

                    <div className={styles.edu}>
                        <h4>E.E.S N° 67 “GRAL DON MANUEL OBLIGADO”</h4>
                    </div>

                    <div className={styles.edu}>
                        <h4>"Instituto Superior Nueva Generación" Operador de PC Avanzado</h4>
                    </div>

                    <div className={styles.edu}>
                        <h4>"IESETyFP" Tecnicatura Superior en Desarrollo de Software - Marzo 2022 - Actualidad</h4>
                    </div>

                </div>

            <Animacion/>
        </section>
    )
}

export default SobreMi;