import React from 'react'

function DiaDaSemana() {
function verificarDia(){
    
    let dia = prompt("Digite o dia da semana (1 a 7): ")  /// prompt igual o alert
    
    dia = Number(dia)   ////converte o numero de texto para numeral

    
    }
    
    switch(dia){                    //// switch é o escolha
        case 1: alert ("Domingo") 
        alert ("Eu gosto dos dommingos")
        break   /// sem o break ele passa por todos 

        case 2: alert ("segunda")
        break

        case 3: alert ("teça")
        break

        case 4: alert ("quarta")
        break

        case 5: alert ("quinta") 
        break

        case 6: alert ("sexta")
        break

        case 7: alert ("sabado") 
        break

        default: alert("Dia invalido")
        break
    }

        
    return (
        <div>

            <h2>Dia da semana</h2>
            <button onClick={verificarDia}>Verificar dia</button>

            
        </div>
    )
}

export default DiaDaSemana
