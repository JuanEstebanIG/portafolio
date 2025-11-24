const DOMElements ={
    contactForm: document.getElementById("contactForm"),
    stateCard: document.getElementById("stateCard"),
    stateCardIcon: document.getElementById("stateCardIcon"),   
    cardStateText: document.getElementById("cardStateText")     
};

export function contactApi(){

    DOMElements.contactForm.addEventListener("submit",async (e)=>{

        e.preventDefault();
        const data = new FormData(e.target);
        data.append("_captcha",false)
        data.append("_subject","Mensaje de contacto de portafolio")

        try{
            show("loading");

            const res = await fetch("https://formsubmit.co/isazaj601@gmail.com",{
                method: "POST",
                body: data
            });

            if(res.ok) show("complete")
            else show("error");

            e.target.reset();
        }catch(err){

            show("error");
            console.error(err);

        }finally{
            setTimeout(()=>{
                hiddenCard();
            },2500)
        };

    });
};

const satates ={
    "loading":{
        text:"Enviando mensaje...",
        icon:"./src/assets/loading.svg",
        spiner: true
    },
    "error":{
        text:"No se puedo enviar el mensaje",
        icon:"./src/assets/close.svg",
        spiner: false
    },
    "complete":{
        text:"Mensaje enviado",
        icon:"./src/assets/check.svg",
        spiner: false
    }
}

function show(s){
    const state = satates[s];
    if(!state.spiner) DOMElements.stateCardIcon.classList.remove("contact__state-icon-spiner");
    DOMElements.stateCard.classList.add("show-state-card");
    
    DOMElements.stateCardIcon.src = state.icon;
    DOMElements.cardStateText.textContent = state.text;
};

function hiddenCard(){
    DOMElements.stateCard.classList.remove("show-state-card");
    DOMElements.stateCardIcon.src = "./src/assets/loading.svg";
    DOMElements.stateCardIcon.classList.add("contact__state-icon-spiner");
};