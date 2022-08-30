const baseURL = "http://localhost:5000"
const resultTable = document.querySelector(".scripts-info_body")!
export default function testHit(x: number, y: number, r: number) {
    const res = fetch(`${baseURL}/api/hit?x=${x}&y=${y}&r=${r}`, {
        method: "POST",
        mode: "no-cors"
    })
        .then(res => res.text())
        .then(stringRes=>resultTable.insertAdjacentHTML('afterbegin', stringRes))
        .catch(error => alert("Что-то пошло не так,извините.."))
}

