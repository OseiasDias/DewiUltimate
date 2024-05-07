import Button from '../Form/Button';
import styles from '../../styles/compontentes/Formulario.module.css';


import { SlEnvolope } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";




export default function Formulario() {

    return (

        <section className={styles.seccao_formulario}>

            <div className={`container`}>

                <header>
                    <h5>CONTACT</h5>
                    <h3>CONTACT US</h3>
                </header>
                <div className={`row`}>

                    <div className={`col-12 col-md-12 col-lg-6`}>

                        <div className={`row ${styles.linha}`}>
                            <div className='col-12 col-md-12 col-lg-12'>
                                
                                <address>
                                <div className={styles.icones}>
                                    <LuMapPin className={styles.proprio} />
                                </div>
                                    <h5>Our Address</h5>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </address>
                            </div>

                            <div className='col-12 col-md-6 col-lg-6'>
                                
                                <address>
                                <div className={styles.icones}>
                                    <SlEnvolope className={styles.proprio} />
                                </div>
                                    <h5> Email Us</h5>
                                    <p>info@example.com</p>
                                    <p>contact@example.com</p>


                                </address>
                            </div>

                            <div className='col-12 col-md-6 col-lg-6'>
                               
                                <address>
                                <div className={styles.icones}>
                                    <LuPhoneCall className={styles.proprio} />
                                </div>
                                    <h5> Call Us</h5>
                                    <p>+1 5589 55488 55</p>
                                    <p>+1 6678 254445 41</p>
                                </address>
                            </div>
                        </div>

                    </div>

                    <div className={`col-12 col-md-12 col-lg-6`}>

                        <form action='mailto:oseiasdias@gmail.com' className={`row ${styles.formulario}`}>

                            <div className='col-12 col-md-6 col-lg-6'>
                                <input type='text' placeholder='Seu Nome' className={`w-100 ${styles.itensFormulario}`} />


                            </div>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <input type='email' placeholder='Seu Email' className={`w-100 ${styles.itensFormulario}`} />


                            </div>

                            <div className='col-12 col-md-12 col-lg-12'>
                                <input type='text' placeholder='Seu Objectivo' className={`w-100 ${styles.itensFormulario}`} />


                            </div>

                            <div className='col-12 col-md-12 col-lg-12'>

                                <textarea cols='45' rows='5' placeholder='Deixe Sua Mensagem' className={`w-100 ${styles.itensFormulario}`}>

                                </textarea>


                            </div>

                            <button className={styles.botao}>Enviar</button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}