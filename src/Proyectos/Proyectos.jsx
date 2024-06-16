import styles from '../Proyectos/Proyectos.module.css'
import img2 from '../assets/img2.jpeg'
import food from '../assets/food.jpeg'
import proyectonode from '../assets/proyectonode.jpeg'
import github from '../assets/github1.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import css3 from '../assets/css3.png'
import sqlserver from '../assets/sqlserver.png'
import node from '../assets/node.png'
import boot from '../assets/boot.png'
const Proyectos = ()=>{

    const tarjetas=[
        {
            img:[img2],
            name:'Agenda EET N° 21',
            descrp:'Este proyecto es un software de escritorio diseñado para gestionar la base de datos de los alumnos y el personal de un Instituto. Su propósito es agilizar la administración de los datosde forma eficiente y fácil para la gestión y administrativa del instituto.',
            tecno:[python, sqlserver],
            url:'https://github.com/Rodrigo-Pinatti/Programa-EET21'
        },
        {
            img:[food],
            name:'Menu Digital',
            descrp:'Este proyecto es un sitio web estático diseñado para presentar el menú digital de un food truck. Muestra de manera clara las opciones gastronómicas. En caso de que los usuarios deseen realizar un pedido, se les redirige fácilmente a las redes sociales.',
            tecno:[html, css3],
            url:'https://github.com/Rodrigo-Pinatti/Menu-Digital'
        },
        {
            img:[proyectonode],
            name:'Mail Automatico',
            descrp:'Este proyecto es un es una parte de uno mayor que esta aun en proceso, el cual toma los datos de las personas que ejecutan una reserva, genera y envia un correo automatico con los datos aportados, informando que su reserva fue exitosa.',
            tecno:[html, boot, node],
            url:'https://github.com/Rodrigo-Pinatti/Mail-Automatico'
        },
    ]

    return(
        <section>
            <section className={styles.Proyectos}>
                <h2>Proyectos Realizados</h2>
                <div className={styles.cards}>

                    {
                        tarjetas.map((card,index) => {
                            return(
                                <div key ={index} className={styles.card}>


                                    <div className = {styles.img}>
                                        <img width={'100%'} src={card.img[0]} alt=""/>
                                    </div>

                                    <h3>{card.name}</h3>

                                    <p>{card.descrp}</p>

                                    <div className = {styles.tecno}>
                                        <img width={'32px'} src={card.tecno[0]} alt="" />
                                        <img width={'32px'} src={card.tecno[1]} alt="" />
                                        <img width={'25px'} src={card.tecno[2]} alt="" style={{ margin: '5px' }}/>
                                        
                                    </div>

                                    <div className={styles.github}>
                                        <a href={card.url}>
                                            <img width={'35px'} src={github} alt=""/>
                                        </a>
                                    </div>


                                    
                                </div>
                            )
                        })
                    }

                </div>

            </section>
        </section>
    )
}

export default Proyectos;