


export default function ReactExercicio2({person,size}){

    return (

        /**Fragementos no reatc */
        <>
            <h1>{person.nome} A vida tem muita logica</h1>
            <h1>{person.idade} essa e a tua idade</h1>
            <img src="https://i.imgur.com/1bX5QH6.jpg" 
            width={size} 
            height={size} />
        
        </>
    )
}