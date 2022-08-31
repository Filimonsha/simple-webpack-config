const baseURL = 'http://localhost:5000';
const resultTable = document.querySelector('.scripts-info_body')!;
export default function testHit(x: number, y: number, r: number) {
  fetch(`${ baseURL }/api/hit?x=${ x }&y=${ y }&r=${ r }`, {
    method: 'POST'
  })
    .then(res => res.text()
      .then(stringRes => resultTable.insertAdjacentHTML('afterbegin', stringRes)))
    .catch(() => alert('Что-то пошло не так,извините..'));
}

