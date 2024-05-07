
import styles from '../../styles/compontentes/Menu.module.css';
import Button from '../Form/Button'
import { RiMenu4Fill } from "react-icons/ri";
import { Link, BrowserRouter } from 'react-router-dom';

/*Novas Inportacao */


export default function Menu() {

    


    return (

        <>
            <nav className={`navbar navbar-expand-lg   ${styles.menuPrincipal} `}>
                <div className="container px-lg-2 " >
                    <BrowserRouter >
                        <a className={`navbar-brand ${styles.navbar_brand}`} href="#lar">
                            Dewi
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <RiMenu4Fill className={styles.menu_hambuguer} />
                        </button>
                        <div className={`collapse navbar-collapse  ${styles.bgEspecial} `} id="navbarNavDropdown">
                            <ul className={`navbar-nav mx-auto ${styles.menu}`}>

                                <li className={` nav-item ${styles.subLista}`}>
                                    <a className="nav-link " aria-current="page" href="#lar" >
                                        LAR
                                    </a>
                                </li>
                                <li className={` nav-item ${styles.subLista}`}>
                                    <a className="nav-link" href="#sobre" >
                                        SOBRE
                                    </a>
                                </li>
                                <li className={` nav-item ${styles.subLista}`}>
                                    <a className="nav-link" href="#servicos">
                                        SERVIÇOS
                                    </a>
                                </li>
                                <li className={` nav-item ${styles.subLista}`}>
                                    <a className="nav-link" href="#portefolio">
                                        PORTFÓLIO
                                    </a>
                                </li>
                                <li className={` nav-item ${styles.subLista}`}>
                                    <a className="nav-link" href="#equipe">
                                        EQUIPE
                                    </a>
                                </li>
                                <li className={`nav-item dropdown  ${styles.menuDrop} `}>
                                    <Link
                                        className="nav-link dropdown-toggle"

                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        SUSPENSO
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" >
                                                Sub Menu 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" >
                                                Sub Menu 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" >
                                                Sub Menu 1
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className={` nav-item ${styles.subLista}`}>
                                    <a className="nav-link" href="#contacto" >
                                        CONTATO
                                    </a>
                                </li>
                            </ul>

                            <Button text="Iniciar" className={styles.bbotao} />
                        </div>
                    </BrowserRouter>
                </div>


            </nav>
        </>

    );
}