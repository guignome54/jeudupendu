let array = ["ete","piscine","canard","oie","ornithorynque","hiver"]

function lancerLeJeu(){
    let x= array[Math.floor(Math.random() * array.length)]
    let nombre
    let reste = x.length + 1
    let i = 0
    let a=""
    let aArray=[]
    while(reste >= 0 || i <= 10 ){
        i++
        a = prompt("choissisez une lettre")
        aArray.push(a)
        if(x.includes(a)){
            i--
            nombre = 0
            for(let h = 0 ; h < x.length ; h++){
                if(x[h] == a){
                    
                    nombre ++
                    reste -= nombre
                }
            }
            console.log("vous avez trouvé la lettre " + a + " qui apparait " + nombre + " fois. il vous reste : " + reste + " à trouver")

        }
        else{
            console.log("cette lettre n'est pas bonne")
        }
        console.log(i)
    }
    if(i >=10) {
        console.log("le mot correcte était : " + x)
    }
    console.log(x)
  
}
