import { startWriteMachine } from "./writeMachine.js";
import { contactApi } from "./contact.js";
import { startMenuMovil } from "./menu.js";

window.addEventListener("DOMContentLoaded",()=>{
    startWriteMachine();
    contactApi();
    startMenuMovil();
});