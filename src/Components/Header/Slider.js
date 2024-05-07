import styles from '../../styles/compontentes/Slider.module.css';
import Menu from './Menu';
import Button from '../Form/Button';
import { BiPlayCircle } from "react-icons/bi";




import ScrollRevealComponent from '../Form/ScrollReveal'



export default function Slider() {


    return (
        <section className={styles.seccao_slider}>
            <Menu />
            <div className={`container`}>

                <div className={`row text-white justify-content-center`}>

                    <div className={`col-12 col-lg-10 col-md-12 ${styles.divEspecial} `}>

                        <h1 className={`scrollText`}>PLAN. LAUNCH. GROW.</h1>
                        <p className={`scrollText`}>We are team of talented designers making websites with Bootstrap</p>
                        <ScrollRevealComponent targetClass='scrollText'  />

                        <div className={`scrollText ${styles.botoes}`}>
                            <Button text="Ver agora" className='d-inline-block me-2' />
                            <a href='#' className='d-inline-block ms-2'><BiPlayCircle className={styles.playBtn} /> Wacth Video</a>
                        </div>
                    </div>



                </div>

            </div>

        </section>
    )
}