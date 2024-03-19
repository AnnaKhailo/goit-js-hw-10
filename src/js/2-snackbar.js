import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", createPromise);

function createPromise(event) {
    event.preventDefault();

    const delayValue = Number(form.elements.delay.value);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (form.elements.state.value === "fulfilled") {
            resolve(delayValue);
          } else {
            reject(delayValue);
          }
        }, delayValue);
    });

    promise
    .then((delayValue) => {
        iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delayValue}ms`,
            position: 'topRight',
        });
        form.reset();
    })
    .catch((delayValue) => {
        iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${delayValue}ms`,
            position: 'topRight',
        });
        form.reset();
    })


}



