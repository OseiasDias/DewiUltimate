import styles from '../../styles/compontentes/Team.module.css';

import imgTeam1 from '../../assets/img/team/team-1.jpg'
import imgTeam2 from '../../assets/img/team/team-2.jpg'
import imgTeam3 from '../../assets/img/team/team-3.jpg'
import ScrollRevealComponent from '../Form/ScrollReveal'

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function Team() {


    return (

        <section className={styles.corpo}>
            <div className={`container`}>

                <header>
                    <h4 className={``}>TEAM</h4>
                    <h6 className=''>CHECK OUR TEAM</h6>
                </header>

                <div className={`row `}>
                    <div className='col-12 col-lg-4 col-md-6 '>

                        <div className={styles.espacamento}>

                            <div className={styles.topDiv}>

                                <img src={imgTeam1} alt='...' className='img-fluid' />

                            </div>

                            <div className={`d-flex  justify-content-between ${styles.fotografia}`}>

                                <div className={` ${styles.text}`}>
                                    <h5>Walter White</h5>
                                    <h3>Chief Executive Officer</h3>
                                </div>

                                <div className={` ${styles.font} d-inline-flex`}>

                                    <a href=''><FaXTwitter className={styles.mm} /></a>
                                    <a href=''><FaFacebook className={styles.mm} /></a>
                                    <a href=''><FaLinkedin className={styles.mm} /></a>
                                    <a href=''><FaInstagram className={styles.mm} /></a>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='col-12 col-lg-4 col-md-6 '>

                        <div className={styles.espacamento}>

                            <div className={styles.topDiv}>

                                <img src={imgTeam2} alt='...' className='img-fluid' />

                            </div>

                            <div className={`d-flex  justify-content-between ${styles.fotografia}`}>

                                <div className={`w-75 ${styles.text}`}>
                                    <h5>Sarah Jhonson</h5>
                                    <h3>Product Manager</h3>
                                </div>

                                <div  className={` ${styles.font} d-inline-flex`}>

                                    <a href=''><FaXTwitter className={styles.mm} /></a>
                                    <a href=''><FaFacebook className={styles.mm} /></a>
                                    <a href=''><FaLinkedin className={styles.mm} /></a>
                                    <a href=''><FaInstagram className={styles.mm} /></a>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='col-12 col-lg-4 col-md-6 '>

                        <div className={styles.espacamento}>

                            <div className={styles.topDiv}>

                                <img src={imgTeam3} alt='...' className='img-fluid' />

                            </div>

                            <div className={`d-flex  justify-content-between ${styles.fotografia}`}>

                                <div className={`w-75 ${styles.text}`}>
                                    <h5>William Anderson</h5>
                                    <h3>CTO</h3>
                                </div>

                                <div  className={` ${styles.font} d-inline-flex`}>

                                    <a href=''><FaXTwitter className={styles.mm} /></a>
                                    <a href=''><FaFacebook className={styles.mm} /></a>
                                    <a href=''><FaLinkedin className={styles.mm} /></a>
                                    <a href=''><FaInstagram className={styles.mm} /></a>

                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>

            <ScrollRevealComponent targetclassName='animar' />
        </section>

    )
}