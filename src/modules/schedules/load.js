import { hoursLoad } from "../form/hours-load.js"


//Seleciona o input de data
const selectedDate = document.getElementById("date")

export function scheduleDays(){
    // Obtem a data do input
    const date = selectedDate.value


    // Renderiza as horas disponiveis
    hoursLoad({})
}


    // Busca na API os agendamentos para carregar do lado direito da tela

    // Os horarios disponiveis horario futuro + não agendado do lado esquerdo (fomr)