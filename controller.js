// controller.js
import { getZodiacSign } from "./model.js";
import {
    disableButton,
    enableButton,
    clearView,
    renderHoroscope,
    renderError,
    fadeOut
} from "./view.js";

let hideTimeout;


function ShowHoroscope() {

    const form = document.getElementById("horoscope-form");
    const dateInput = document.getElementById("birthdate");
    const button = document.getElementById("get-horoscope");

    if (!dateInput.value) {
        button.disabled = true;
    }

    dateInput.addEventListener("input", () => {
        if (dateInput.value) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const date = dateInput.value;

        if (!date) {
            alert("Por favor ingresa tu fecha de nacimiento.");
            return;
        }

        const signData = getZodiacSign(date);

        if (signData) {
            renderHoroscope(signData);
            disableButton();
        } else {
            renderError();
            return;
        }

        hideTimeout = setTimeout(() => {
            fadeOut();
            setTimeout(() => {
                clearView();
                enableButton();
            }, 1000); // 
        }, 15000);
    });
}

ShowHoroscope();