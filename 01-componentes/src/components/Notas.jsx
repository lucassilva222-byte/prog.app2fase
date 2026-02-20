

// 7. **Classificação de Notas:** Peça ao usuário para inserir sua nota em uma escala de 0 a 100 e, em seguida, atribua uma classificação (A, B, C, D ou E) com base na nota. 
//     A. 0..20
//     B. 21..40
//     C. 41..60
//     D. 61..80
//     E. 81..100

function Notas() {
    
    function ClassificacaoNotas(){
    
        let Nota = prompt("Digite a nota?")  /// prompt igual o alert
        
        Nota = Number(Nota)   //// Number -converte o numero de texto para numera

        if (0< Nota && Nota <= 20 ){
          
            alert ("Nota A")

        }else if (21< Nota && Nota <= 40 ){

            alert ("Nota B")

        }else if (41< Nota && Nota <= 60 ){

            alert ("Nota C")

        }else if (61< Nota && Nota <= 80 ){

            alert ("Nota D")
        
        }else if (81< Nota && Nota <= 100 ){

            alert ("Nota E")
        }
        else{
            
            alert ("Nota invalida")
            
        }
    }


    return (
        <div>
            <h2>Classificação da Nota?</h2>
            <button onClick={ClassificacaoNotas}>Classificar Nota</button>

        </div>
    )
}

export default Notas