import styles from '../../../styles/compontentes/Servicos.module.css';
import img1 from '../../../assets/img/about-boxes-1.jpg';
import img2 from '../../../assets/img/about-boxes-2.jpg';
import img3 from '../../../assets/img/about-boxes-3.jpg';
import ScrollRevealComponent from '../../Form/ScrollReveal';

import {
    BsCheckAll, BsLaptop, BsBarChartFill, BsBrightnessHigh, BsBriefcase
    , BsCardChecklist, BsClock
} from "react-icons/bs";


import { LuPaintbrush2 } from "react-icons/lu";
import { BsCalendarCheck, BsSun } from "react-icons/bs";
import { RiMovie2Line, RiGpsLine, RiBodyScanLine, RiStoreLine } from "react-icons/ri";

import imgFeacture1 from '../../../assets/img/features-1.png'
import imgFeacture2 from '../../../assets/img/features-2.png'
import imgFeacture3 from '../../../assets/img/features-3.png'
import imgFeacture4 from '../../../assets/img/features-4.png'

/*Importando imagens da Marcas */

import cliente1 from '../../../assets/img/clients/client-1.png';
import cliente2 from '../../../assets/img/clients/client-2.png';
import cliente3 from '../../../assets/img/clients/client-3.png';
import cliente4 from '../../../assets/img/clients/client-4.png';
import cliente5 from '../../../assets/img/clients/client-5.png';
import cliente6 from '../../../assets/img/clients/client-6.png';

/**Testational */

import testimonial1 from '../../../assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../../../assets/img/testimonials/testimonials-2.jpg';
import testimonial3 from '../../../assets/img/testimonials/testimonials-3.jpg';
import testimonial4 from '../../../assets/img/testimonials/testimonials-4.jpg';
import testimonial5 from '../../../assets/img/testimonials/testimonials-5.jpg';



function Testational() {

    return (
        <section className={styles.Testational}>

            <div className='container-fluid '>
                <ScrollRevealComponent targetclassName='' />

                <div className='row  justify-content-center '>

                    <div className='col-lg-10 col-12  mt-5'>

                        <div id="carouselExampleCaptions" className={styles.carousel} data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">

                                    <div>
                                        <img src={testimonial1} className="d-block w-25" alt="..." />

                                    </div>

                                    <div className={` carousel-caption ${styles.rrr} `}>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i></p>
                                    </div>

                                </div>
                                <div className="carousel-item">

                                    <div>
                                        <img src={testimonial2} className="d-block w-25" alt="..." />
                                    </div>
                                    <div className={` carousel-caption ${styles.rrr}`}>
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p></div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <img src={testimonial3} className="d-block w-25" alt="..." />
                                    </div>
                                    <div className={` carousel-caption ${styles.rrr}`}>
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>     </div>
                                </div>

                                <div className="carousel-item">
                                    <div>
                                        <img src={testimonial4} className="d-block w-25" alt="..." />
                                    </div>
                                    <div className={` carousel-caption ${styles.rrr}`}>
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>   </div>
                                </div>

                                <div className="carousel-item">
                                    <div>
                                        <img src={testimonial5} className="d-block w-25" alt="..." />
                                    </div>
                                    <div className={` carousel-caption ${styles.rrr}`}>
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p> </div>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}



export default function Servicos() {


    return (

        <>
            <section className={styles.seccao_servicos}>

                <div className={`container`}>
                    <div className={`row`}>

                        <ScrollRevealComponent targetclassName='' />

                        <figure className={`col-12 col-md-6 col-lg-4 `}>

                            <div className={styles.margin}>

                                <div className={styles.cima}>
                                    <img src={img1} alt='...' className='img-fluid' />

                                    /                  </div>

                                <figcaption className={styles.baixo}>
                                    <div className={styles.icon}>
                                        <LuPaintbrush2 className={styles.figura} />
                                    </div>

                                    <h3>Nossa missão</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat.
                                    </p>
                                </figcaption>

                            </div>

                        </figure>

                        <figure className={`col-12 col-md-6 col-lg-4 `}>

                            <div className={styles.margin}>

                                <div className={styles.cima}>
                                    <img src={img2} alt='...' className='img-fluid' />

                                    /                  </div>

                                <figcaption className={styles.baixo}>
                                    <div className={styles.icon}>
                                        <BsCalendarCheck className={styles.figura} />
                                    </div>

                                    <h3>Nosso Plano</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat.
                                    </p>
                                </figcaption>

                            </div>

                        </figure>


                        <figure className={`col-12 col-md-6 col-lg-4 `}>

                            <div className={styles.margin}>

                                <div className={styles.cima}>
                                    <img src={img3} alt='...' className='img-fluid' />

                                    /                  </div>

                                <figcaption className={styles.baixo}>
                                    <div className={styles.icon}>
                                        <RiMovie2Line className={styles.figura} />
                                    </div>

                                    <h3>Nossa missão</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat.
                                    </p>
                                </figcaption>

                            </div>

                        </figure>


                    </div>
                </div>

            </section>

            <Marcas />

            <Escolhas />

            <OutrosServicos />

            <Testational />
        </>
    )
}




function OutrosServicos() {

    return (
        <section className={`${styles.corpoMaior}`}>
            <ScrollRevealComponent targetclassName='' />
            <div className={`container`}>
                <div className={`row `}>

                    <div className={`${styles.section_title}`}>
                        <h2>Services</h2>
                        <p>Check our Services</p>
                    </div>

                    <figure className={`col-12 col-md-6 col-lg-6 `}>

                        <div className={styles.mar}>
                            <div className={styles.porCima}>
                                <BsLaptop className={styles.itemsTop} />
                            </div>

                            <figcaption className={styles.porBaixo}>
                                <h4><a href="#">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p></figcaption>


                        </div>
                    </figure>

                    <figure className={`col-12 col-md-6 col-lg-6 `}>

                        <div className={styles.mar}>
                            <div className={styles.porCima}>
                                <BsBarChartFill className={styles.itemsTop} />
                            </div>

                            <figcaption className={styles.porBaixo}>
                                <h4><a href="#">Sed ut perspiciatis</a></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>  </figcaption>

                        </div>
                    </figure>

                    <figure className={`col-12 col-md-6 col-lg-6 `}>

                        <div className={styles.mar}>
                            <div className={styles.porCima}>

                                <BsBrightnessHigh className={styles.itemsTop} />
                            </div>

                            <figcaption className={styles.porBaixo}>
                                <h4><a href="#">Sed ut perspiciatis</a></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></figcaption>
                        </div>
                    </figure>

                    <figure className={`col-12 col-md-6 col-lg-6 `}>
                        <div className={styles.mar}>
                            <div className={styles.porCima}>
                                <BsBriefcase className={styles.itemsTop} />
                            </div>

                            <figcaption className={styles.porBaixo}>
                                <h4><a href="#">Nemo Enim</a></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </figcaption>
                        </div>
                    </figure>

                    <figure className={`col-12 col-md-6 col-lg-6 `}>
                        <div className={styles.mar}>
                            <div className={styles.porCima}>
                                <BsCardChecklist className={styles.itemsTop} />
                            </div>

                            <figcaption className={styles.porBaixo}>
                                <h4><a href="#">Magni Dolore</a></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className={`col-12 col-md-6 col-lg-6 `}>
                        <div className={styles.mar}>
                            <div className={styles.porCima}>
                                <BsClock className={styles.itemsTop} />
                            </div>

                            <figcaption className={styles.porBaixo}>
                                <h4><a href="#">Eiusmod Tempor</a></h4>
                                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </figcaption>
                        </div>
                    </figure>

                </div>
            </div>
        </section>
    )

}




function Escolhas() {
    return (

        <section className={styles.central}>
            <div className='container mt-5 '>
                <ScrollRevealComponent targetclassName='' />
                <div className='row'>

                    <div className={` ${styles.card}`}>
                        <div className={`${styles.card_body}`}>

                            <ul
                                className={`nav nav-tabs nav-tabs-bordered d-flex ${styles.llista}`}
                                id="borderedTabJustified"
                                role="tablist"
                            >
                                <li className="nav-item flex-fill" role="presentation">
                                    <button
                                        className="nav-link w-100 active d-flex"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#bordered-justified-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true"
                                    >
                                        <div className={`icon   ${styles.form}`}>
                                            <RiGpsLine className={styles.icones} />
                                        </div>
                                        <div className={styles.text} >
                                            <p>Modi sit est dela pireda nest</p>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button
                                        className="nav-link w-100 d-flex"
                                        id="profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#bordered-justified-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected="false"
                                    ><div className={`icon   ${styles.form}`}>
                                            <RiBodyScanLine className={styles.icones} />
                                        </div>
                                        <div className={styles.text} >
                                            <p>Unde praesenti mara setra le</p>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button
                                        className="nav-link w-100 d-flex"
                                        id="contact-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#bordered-justified-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact"
                                        aria-selected="false"
                                    >
                                        <div className={`icon   ${styles.form}`}>
                                            <BsSun className={styles.icones} />
                                        </div>
                                        <div className={styles.text} >
                                            <p>Pariatur explica nitro dela</p>
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button
                                        className="nav-link w-100 d-flex"
                                        id="contact-tab2"
                                        data-bs-toggle="tab"
                                        data-bs-target="#bordered-justified-contact2"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact"
                                        aria-selected="false"
                                    >
                                        <div className={`icon   ${styles.form}`}>
                                            <RiGpsLine className={styles.icones} />
                                        </div>
                                        <div className={styles.text} >
                                            <p>Nostrum qui dile node</p>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content pt-4" id="borderedTabJustifiedContent">
                                <div
                                    className="tab-pane fade show active "
                                    id="bordered-justified-home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className='row '>

                                        <div className='col-lg-7 col-md-12 col-12'>
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

                                        <div className='col-lg-5 col-md-12 col-12'>
                                            <img src={imgFeacture1} alt='...' className='img-fluid' />
                                        </div>

                                    </div>

                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="bordered-justified-profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >

                                    <div className='row '>

                                        <div className='col-lg-7 col-md-12 col-12'>
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

                                        <div className='col-lg-5 col-md-12 col-12'>
                                            <img src={imgFeacture2} alt='...' className='img-fluid' />
                                            /                                 </div>

                                    </div>

                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="bordered-justified-contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <div className='row '>

                                        <div className='col-lg-7 col-md-12 col-12'>
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

                                        <div className='col-lg-5 col-md-12 col-12'>
                                            <img src={imgFeacture3} alt='...' className='img-fluid' />
                                            /                                 </div>

                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="bordered-justified-contact2"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab2"
                                >

                                    <div className='row '>

                                        <div className='col-lg-7 col-md-12 col-12'>
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

                                        <div className='col-lg-5 col-md-12 col-12'>
                                            <img src={imgFeacture4} alt='...' className='img-fluid' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Bordered Tabs Justified */}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

function Marcas() {

    return (
        <section className={styles.marcas}>
            <div className={`container py-3`}>

                <div className={`row`}>
                    <div className={`col-6 col-md-4 col-lg-2`}>
                        <img src={cliente1} alt='...' className={`img-fluid ${styles.cliente}`} />
                    </div>
                    <div className={`col-6 col-md-4 col-lg-2`}>
                        <img src={cliente2} alt='...' className={`img-fluid ${styles.cliente}`} />
                    </div>
                    <div className={`col-6 col-md-4 col-lg-2`}>
                        <img src={cliente3} alt='...' className={`img-fluid ${styles.cliente}`} />
                    </div>
                    <div className={`col-6 col-md-4 col-lg-2`}>
                        <img src={cliente4} alt='...' className={`img-fluid ${styles.cliente}`} />
                    </div>
                    <div className={`col-6 col-md-4 col-lg-2`}>
                        <img src={cliente5} alt='...' className={`img-fluid ${styles.cliente}`} />
                    </div>
                    <div className={`col-6 col-md-4 col-lg-2`}>
                        <img src={cliente6} alt='...' className={`img-fluid ${styles.cliente}`} />
                    </div>
                </div>

            </div>
        </section>
    )
}
