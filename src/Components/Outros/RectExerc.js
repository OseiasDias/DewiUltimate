



function RectExerc(){

    const nome  ="Oseias Edgar Manuel Dias"
    
   
    const dados = {
        nome: "Pedro Dias",
        idade: 56,
        estilo: {
          backgroundColor: "red", // Use aspas duplas para cores
          color: "#dddd", // Use aspas duplas para cores
          
        }
      };
    return(
        <>

            <h1>Meu nome eh: {dados.nome} </h1>
            
            <h1 style={dados.estilo}>Meu idade eh: {dados.idade} </h1>
            
          
            <img src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="..." />
        </>
    )
}


export default RectExerc