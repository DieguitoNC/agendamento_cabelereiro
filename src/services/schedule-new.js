import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}) {
    try {
        //Faz a requisicao para enviar os daddos de agedamento
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when}),
        })
        //Exibe a msg de agendamennto realizado
        alert("Agendamento realizado com sucesso!")
    } catch(error) {
        console.log(error)
        alert("Nao foi possivel agendar. Tente novamente mais tarde")
    }

}