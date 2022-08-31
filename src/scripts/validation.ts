const submitBtn: HTMLButtonElement = document.querySelector('.form_btn')!;

const showWarning = () => {
  alert('Введите корректное значение');
};
const disableSubmitButton = () => {
  submitBtn.disabled = true;
};
const enableSubmitButton = () => {
  submitBtn.disabled = false;

};
export default function validateTextInput(e: Event) {

  // @ts-ignore
  const x = parseFloat(e.target.value);

  if (Number.isNaN(x) || x < -3 || x > 3) {
    showWarning();
    disableSubmitButton();
  } else {
    enableSubmitButton();
  }
}
