import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import Slider from '../Components/Header/Slider'
import Sobre from '../Components/Body/Servicos/Sobre'
import Servicos from '../Components/Body/Servicos/Servicos'
import Portefolio from '../Components/Body/Portefolio'
import Team from '../Components/Body/Team'
import Formulario from '../Components/Footer/Formulario'
import Footer from '../Components/Footer/Footer'


function OnePage() {

    return (

        <>

            <div id="slider">
                <Slider />
            </div>
            <div id="sobre">
                <Sobre />
            </div>
            <div id="servicos">
                <Servicos />
            </div>
            <div id="portefolio">
                <Portefolio />
            </div>
            <div id="equipe">
                <Team />
            </div>
            <div id="contacto">
                <Formulario />
               

            </div>
            <Footer />
        </>


    )
}

export default OnePage;