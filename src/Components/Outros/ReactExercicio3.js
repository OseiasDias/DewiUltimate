

/** Rendirizacao condicional */




/** Desestruturacao */
function Item({nome,isPack}){


    if(isPack){
        return <li className="lista">{nome} ✔✔</li>
    }

    return <li className="lista">{nome}</li>

}




function ReactExercicio3(){


    return(
      <section>
            <h3>Lista de Itens</h3>

            <ul>
                <Item nome="Bolo" isPack={true} />
                <Item nome="faca" isPack={true} />
                <Item nome="carro" isPack={false} />
                <Item nome="pedra" isPack={true} />
                <Item nome="cinto" isPack={false} />
            </ul>
        
      </section>
    )


}


export default ReactExercicio3