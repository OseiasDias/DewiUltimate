



export default function ReactExercicio41(){

    const lista  = [
        {   id:1,
            nome:"Oseias Dias",
            profissao: "Programador"
        },

        {   id:2,
            nome:"Tonilson Pires",
            profissao: "Programador Flutter"
        },

        {   id:3,
            nome:"Edgar Manuel",
            profissao: "Tecnico de BD"
        },

        {   id:4,
            nome:"Dias Mendes",
            profissao: "Tecnico de BD"
        },



      
    ]

    const listaGrande = lista.filter(lts => lts.profissao === "Tecnico de BD" )

    const listaGrande1 = listaGrande.map(lst => <li>{lst.nome} ... {lst.profissao} </li>)
    return(

        <div>
            <h3>Minha Lista</h3>

            <ul>
                {listaGrande1}
            </ul>
        </div>

    )
}