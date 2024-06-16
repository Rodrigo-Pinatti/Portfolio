import styles from '../Menu/Redes.module.css'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Gmail from '../assets/gmail.png'

const Redes = () => {
    return(
        <div className={styles.Redes}>
            <a href="#">
            <img width={'25px'} src={Linkedin} alt="" />
            </a>

            <a href="#">
            <img width={'25px'} src={Github} alt="" />
            </a>

            <a href="#">
            <img width={'29px'} src={Gmail} alt="" />
            </a>
        </div>
    )
}

export default Redes;