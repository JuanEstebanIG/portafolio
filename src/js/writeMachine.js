const texts = ["Transformo ideas en resultados concretos", "Desarrollador de Software"];
let interval = null;
let index = 0;
let isWriting = false;
let isDeleting = true;

function pause(){
    clearInterval(interval)
    setTimeout(()=>{
        startWriteMachine()
    },600)
};

function deleteText(paragraph){
    let currentText = paragraph.textContent;
    paragraph.textContent = currentText.slice(0, currentText.length -1);

    if(paragraph.textContent.length === 0){
        isWriting = true;
        isDeleting = false;
        pause()
    };
};

function writeText(paragraph){
    let currentText = paragraph.textContent;
    paragraph.textContent = texts[index].substring(0 ,currentText.length + 1);

    if(paragraph.textContent.length == texts[index].length){
        ++index;
        if(index > texts.length -1) index = 0;

        isWriting = false;
        isDeleting = true;
        pause();
    };
};

export function startWriteMachine(){
    const paragraph = document.getElementById("heroWriteMachine");
    
    interval = setInterval(()=>{
        if(isDeleting) deleteText(paragraph)

        else if(isWriting){
            writeText(paragraph);
        }
    },130);
};