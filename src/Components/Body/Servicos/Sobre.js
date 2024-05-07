import styles from '../../../styles/compontentes/Sobre.module.css';

import imgAbout from '../../../assets/img/about.jpg'
import { BsJournalRichtext, BsClock,BsCheckAll, BsFillPlayFill, BsAward, BsEmojiSmile } from "react-icons/bs";
import ScrollRevealComponent from '../../Form/ScrollReveal'


export default function Sobre() {


    return (

        <section className={styles}>

            <ScrollRevealComponent targetClass='seccao_sobre' />

            <div className={`container seccao_sobre my-5 ${styles.seccao_sobre}`}>

                <div className={`row mt-5 p-5`}>

                    <div className={`col-6 col-lg-3 col-md-6 mb-2 d-flex seccao_sobre`}>
                        <div className={styles.icon}>
                            <BsEmojiSmile className={styles.icones} />
                        </div>

                        <div className={styles.textos}>
                            <h4>125</h4>
                            <p>Clientes satisfeitos</p>
                        </div>
                    </div>


                    <div className={`col-6 col-lg-3  mb-2 col-md-6 d-flex seccao_sobre`}>
                        <div className={styles.icon}>
                            <BsJournalRichtext className={styles.icones} />
                        </div>

                        <div className={styles.textos}>
                            <h4>85</h4>
                            <p>Projetos</p>
                        </div>
                    </div>

                    <div className={`col-6 col-lg-3  mb-2 col-md-6 d-flex seccao_sobre `}>
                        <div className={styles.icon}>
                            <BsClock className={styles.icones} />
                        </div>

                        <div className={styles.textos}>
                            <h4>35</h4>
                            <p>Anos de experiência</p>
                        </div>
                    </div>

                    <div className={`col-6 col-lg-3  mb-2 col-md-6 d-flex seccao_sobre`}>
                        <div className={styles.icon}>
                            <BsAward className={styles.icones} />
                        </div>

                        <div className={styles.textos}>
                            <h4>48</h4>
                            <p>Prêmios</p>
                        </div>
                    </div>

                </div>

                <div className={`row`}>

                    <div className={`col-12 col-md-12 col-lg-6 position-relative seccao_sobre`}>

                        <img src={imgAbout} alt='...' className='img-fluid' />
                        <BsFillPlayFill className={styles.playB} />

                    </div>

                    <div className={`col-12 col-md-12 col-lg-6 position-relative seccao_sobre`}>
                        <h3>Voluptatem dignissimos provident quasi
                            corporis voluptates sit assumenda.</h3>
                        <p>
                            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua.</i>
                        </p>

                        <ul className={styles.lista}>
                            <li><BsCheckAll className={styles.check} /> Ullamco laboris nisi ut aliquip ex e comodo consequat.</li>
                            <li><BsCheckAll className={styles.check} /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><BsCheckAll className={styles.check} />Voluptate repellendus pariatur reprehenderit corporis sint.</li>
                            <li><BsCheckAll className={styles.check} />Ullamco laboris nisi ut aliquip ex e comodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatu
                            </li>

                        </ul>

                        <p>Ullamco laboris nisi ut aliquip ex e comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>



                </div>

            </div>

        </section>
    )
}