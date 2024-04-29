/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello from the console!");

  let quien = ["el Perro", "el gato", "la lluvia"];
  let accion = ["se comió", "orino", "mojo"];
  let aCualCosa = ["la tarea", "la casa", "el carro"];
  let cuando = [
    "ayer",
    "cuando dormia",
    "durante el almuerzo",
    "a la hora del ejercicio"
  ];

  let generateExcuse = () => {
    let whoQuien = [Math.floor(Math.random() * quien.length)];
    let actAccion = [Math.floor(Math.random() * accion.length)];
    let acualWhat = [Math.floor(Math.random() * aCualCosa.length)];
    let cuandoWhen = [Math.floor(Math.random() * cuando.length)];

    return `${quien[whoQuien]} ${accion[actAccion]} ${aCualCosa[acualWhat]} ${cuando[cuandoWhen]}`;
  };

  document.querySelector("#excuse").textContent = generateExcuse();
};
