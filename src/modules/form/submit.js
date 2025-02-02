import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")


//Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    // Previne o comportamento padrao de recarrecar a pagina
    event.preventDefault()

    console.log("Enviado!")
}