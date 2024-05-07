import styles from '../../styles/compontentes/Footer.module.css';
import { FaTwitter, FaFacebookF, FaSkype } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";



function FooterBottom() {

    return (
        <section className={styles.back}>
            <p>© Copyright <b>Dewi</b>. All Rights Reserved <br />
                Designed by <small>BootstrapMade</small></p>
        </section>
    )
}


export default function Footer() {



    return (

        <>
        <section className={styles.footer}>
            <div className={` container`}>

                <div className={`row`}>

                    <div className={` ${styles.primeira} col-12 col-md-6 col-lg-3`} >

                        <h4>Dewi</h4>
                        <p>A108 Adam Street <br />
                            NY 535022, USA</p>

                        <p> <b>Phone:</b> +1 5589 55488 55</p>
                        <p> <b>Email:</b> info@example.com</p>


                        <div className={styles.redes_socias}>
                            <FaTwitter className={styles.fonte} />
                            <FaFacebookF className={styles.fonte} />
                            <FaSkype className={styles.fonte} />
                            <FaInstagram className={styles.fonte} />
                            <FaLinkedin className={styles.fonte} />
                        </div>


                    </div>

                    <div className={` ${styles.segunda} col-12 col-md-6 col-lg-3`} >
                        <h5>Useful Links</h5>

                        <ul>
                            <li><RiArrowRightSLine className={styles.direita} /> Home</li>
                            <li><RiArrowRightSLine className={styles.direita} /> About us</li>
                            <li><RiArrowRightSLine className={styles.direita} /> Services</li>
                            <li><RiArrowRightSLine className={styles.direita} /> Terms of service</li>
                            <li><RiArrowRightSLine className={styles.direita} /> Privacy policy</li>
                        </ul>

                    </div>

                    <div className={` ${styles.terceira} col-12 col-md-6 col-lg-3`} >
                        <h5>Our Services</h5>

                        <ul>
                            <li><RiArrowRightSLine className={styles.direita} /> Web Design</li>
                            <li><RiArrowRightSLine className={styles.direita} /> Web Development</li>
                            <li><RiArrowRightSLine className={styles.direita} /> Product Management</li>
                            <li><RiArrowRightSLine className={styles.direita} /> Marketing</li>
                            <li><RiArrowRightSLine className={styles.direita} /> Graphic Design</li>
                        </ul>

                    </div>

                    <div className={` ${styles.terceira} col-12 col-md-6 col-lg-3`} >
                        <h5>Our Newsletter</h5>

                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>

                        <form className={styles.ultimoForm}>
                            <input type='text' placeholder='Enviar sua mensagem' />
                            <input type='button' value={`Enviar`} />
                        </form>
                    </div>

                </div>

            </div>
            
        </section>
       
            <FooterBottom />
        </>
        
    )
}