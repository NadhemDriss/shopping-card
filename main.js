
let remove = Array.from(document.querySelectorAll('.remove'))
let pricesel=0
for (let r of remove){
r.addEventListener('click',(e)=>{
    //la selection de l'ement "element" dans le fichier html
pricesel =e.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.innerHTML
console.log(pricesel);

total.innerHTML=total.innerHTML-pricesel

    //la suppr de la ligne séléctionné avec deux parentEelement pour passer a l'element parent 
    e.target.parentElement.parentElement.remove(e.target)
   

})

}


let heart = Array.from(document.querySelectorAll('.heart'))
for (let x of heart) {
    x.addEventListener('click', (e) => {
        //l'appel du style heart-color sur l'element e
        e.target.classList.toggle('heart-color')

    })
}

let total = document.getElementById("total")
let compteur1 = document.getElementById("comp1")
let compteur2 = document.getElementById("comp2")
let compteur3 = document.getElementById("comp3")
let compteur4 = document.getElementById("totnav")

let price1 = document.getElementById("element1")
let price2 = document.getElementById("element2")
let price3 = document.getElementById("element3")

let decrementation = document.getElementById('dec1');
let decrementation2 = document.getElementById('dec2');
let decrementation3 = document.getElementById('dec3');

let prix1 = 30;
let prix2 = 40;
let prix3 = 50;

console.log(price2.textContent)

function increm1() {
    compteur1.innerHTML = parseInt(compteur1.innerHTML) + parseInt(1)
    price1.innerHTML = parseInt(compteur1.innerHTML) * parseInt(prix1);
    total.innerHTML = parseInt(price1.innerHTML) + parseInt(price2.innerHTML) + parseInt(price3.innerHTML)
    decrementation.disabled = false

}
function increm2() {
    compteur2.innerHTML = parseInt(compteur2.innerHTML) + parseInt(1)
    price2.innerHTML = parseInt(compteur2.innerHTML) * parseInt(prix2);
    total.innerHTML = parseInt(price1.innerHTML) + parseInt(price2.innerHTML) + parseInt(price3.innerHTML)
    decrementation2.disabled = false
    
}
function increm3() {
    compteur3.innerHTML = parseInt(compteur3.innerHTML) + parseInt(1)
    price3.innerHTML = parseInt(compteur3.innerHTML) * parseInt(prix3);
    total.innerHTML = parseInt(price1.innerHTML) + parseInt(price2.innerHTML) + parseInt(price3.innerHTML)
    decrementation3.disabled = false
}
function decrem1() {
    console.log(`compteur1: ${document.getElementById('comp1').innerHTML}`)
    
    compteur1.innerHTML = parseInt(compteur1.innerHTML) - parseInt(1)
    price1.innerHTML = parseInt(compteur1.innerHTML) * parseInt(prix1);
    total.innerHTML = parseInt(price1.innerHTML) + parseInt(price2.innerHTML) + parseInt(price3.innerHTML)
    
    if (parseInt(compteur1.innerHTML) <= 0) {
        decrementation.setAttribute("disabled", "disabled");
    }
    

}

function decrem2() {
    compteur2.innerHTML = parseInt(compteur2.innerHTML) - parseInt(1)
    price2.innerHTML = parseInt(compteur2.innerHTML) * parseInt(prix1);
    total.innerHTML = parseInt(price1.innerHTML) + parseInt(price2.innerHTML) + parseInt(price3.innerHTML)
    
    if (parseInt(compteur2.innerHTML) <= 0) {
        decrementation2.setAttribute("disabled", "disabled");
    }
}




function decrem3() {
    compteur3.innerHTML = parseInt(compteur3.innerHTML) - parseInt(1)
    price3.innerHTML = parseInt(compteur3.innerHTML) * parseInt(prix3);
    total.innerHTML = parseInt(price1.innerHTML) + parseInt(price2.innerHTML) + parseInt(price3.innerHTML)
    
    if (parseInt(compteur3.innerHTML) <= 0) {
        decrementation3.setAttribute("disabled", "disabled");
    }

let tot=parseInt(compteur1.innerHTML)+parseInt(compteur2.innerHTML)+parseInt(compteur3.innerHTML)
compteur4.innerHTML=tot;

}



