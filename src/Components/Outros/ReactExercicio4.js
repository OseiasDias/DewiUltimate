

function ReactExercicio4() {

    const pessoas = [
        'Oseias Dias: E.V.P',
        'Tonilson Pires: Matematica',
        'Garciano Garcia: Biologia',
        'Sostenes Delcio: Fisica',
        'Romario Weza: Quimica'
    ];

    const listaPessoas = pessoas.map(person => <li>{person}</li>);

    const povos = [{
        id: 0,
        name: "Creola Katherine Johnson",
        profession: "mathematician",
    }, {
        id: 1,
        name: "Mario José Molina-Pasquel Henríquez",
        profession: "chemist",
    }, {
        id: 2,
        name: "Mohammad Abdus Salam",
        profession: "physicist",
    }, {
        id: 3,
        name: "Percy Lavon Julian",
        profession: "chemist",
    }, {
        id: 4,
        name: "Subrahmanyan Chandrasekhar",
        profession: "astrophysicist",
    }];



   {/* const listaPovos = povos.map((pessoa) => (
        <li key={pessoa.id} >  
          {pessoa.name} - {pessoa.profession}
   </li>))*/}

   const listaPovos = povos.filter(person =>
    person.profession === 'chemist')

    return (
        <>

            <div>
                <h4>A lIsta Negra</h4>

                <ul>
                    {listaPessoas}
                </ul>

                <h4>Outra LIsta</h4>

                <ul>
                    {listaPovos}
                </ul>
            </div>
        </>
    )

}

export default ReactExercicio4