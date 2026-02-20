

function Paridade() {
    
    function CalcularParidade(){
    
        let numero = prompt("Digite um numero")  /// prompt igual o alert
        
        numero = Number(numero)   ////converte o numero de texto para numera

        if (numero % 2 == 0 ){
            alert ("Numero par🙌")
        }else{
            alert ("Numero impar👌")
        }
    
    }



    return (
        <div>
            <h2>Par ou impar?</h2>
            <button onClick={CalcularParidade}>Paridade</button>

        </div>
    )
}

export default Paridade
