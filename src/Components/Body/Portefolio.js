import styles from '../../styles/compontentes/Portefolio.module.css';

import imgPortefolio1 from '../../assets/img/portfolio/portfolio-3.jpg';
import imgPortefolio2 from '../../assets/img/portfolio/portfolio-2.jpg';
import imgPortefolio3 from '../../assets/img/portfolio/portfolio-3.jpg';
import imgPortefolio4 from '../../assets/img/portfolio/portfolio-4.jpg';
import imgPortefolio5 from '../../assets/img/portfolio/portfolio-4.jpg';
import imgPortefolio6 from '../../assets/img/portfolio/portfolio-3.jpg';
import imgPortefolio7 from '../../assets/img/portfolio/portfolio-7.jpg';
import imgPortefolio8 from '../../assets/img/portfolio/portfolio-8.jpg';
import imgPortefolio9 from '../../assets/img/portfolio/portfolio-9.jpg';
import ScrollRevealComponent from '../Form/ScrollReveal'

export default function Portefolio() {

    return (

        <section >

            <div className={`container  ${styles.portefolio}`} >

                <div className='row '>
                    <h4 className='scrollText'>PORTFOLIO</h4>
                    <h6 className={` ${styles.hseis}`} >CHECK OUR PORTFOLIO</h6>
                    <div className='col-lg-12 col-12'>

                        <ul className={`nav nav-pills w-100 mb-3 ${styles.minhaListaPortfolio}`} id="pills-tab" role="tablist">
                            <li className={`nav-item `} role="presentation">
                                <button className={`nav-link w-100 ${styles.botaoEspecial} active`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                            </li>
                            <li className={`nav-item `} role="presentation">
                                <button className={`nav-link w-100 ${styles.botaoEspecial}`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">App</button>
                            </li>
                            <li className={`nav-item `} role="presentation">
                                <button className={`nav-link w-100 ${styles.botaoEspecial}`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Card</button>
                            </li>
                            <li className={`nav-item `} role="presentation">
                                <button className={`nav-link w-100 ${styles.botaoEspecial}`} id="pills-ultima-tab" data-bs-toggle="pill" data-bs-target="#pills-ultima" type="button" role="tab" aria-controls="pills-ultima" aria-selected="false">Web</button>
                            </li>
                        </ul>
                        <div className={`tab-content pt-2  ${styles.tab1}`} id="myTabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="home-tab">

                                <div className='row'>
                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio1} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 1</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio2} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 2</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio3} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 3</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio4} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 4</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio5} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 5</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio6} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 6</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <ScrollRevealComponent targetclassName='scrollText' />
                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio7} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 7</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio8} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 8</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio9} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 9</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className='row'>
                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio1} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 1</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio2} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 2</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio3} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 3</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className='row'>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio7} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 7</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio8} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 8</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio9} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 9</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-ultima" role="tabpanel" aria-labelledby="ultima-tab">
                                <div className='row'>
                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio1} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 1</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio2} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 2</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-12 col-lg-4 col-md-6'>

                                        <div className={styles.espacamento}>

                                            <div className={styles.topDiv}>

                                                <img src={imgPortefolio3} alt='...' className='img-fluid' />

                                            </div>

                                            <div className={`d-flex justify-content-between ${styles.bottomDiv}`}>

                                                <div className={styles.text}>
                                                    <h5>App 3</h5>
                                                    <h6>App</h6>
                                                </div>

                                                <div className={styles.mais}>

                                                    <a href='#'>+</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}