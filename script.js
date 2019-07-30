// function sair(event){
//   //   console.log(`Eixo X: ${event.pageX} e Eixo Y ${event.pageY}`);

//  if(event.pageX >= 0 && event.pageY <= 100){
//      alert("Não se vá!") 
//     }

//     else{}
// }

//     window.onmousemove= sair;


// localStorage.setItem('nome', 'Karen');


let nome = document.querySelector ("input");
let botao = document.querySelector("button");
let div = document.querySelector ("div");
let section = document.querySelector("section");
let texto = document.querySelector ("a")
let h2 = document.querySelector ("h2")
let a = document.querySelector ("a")

if(localStorage.nome){
     div.style.display = "none";
    section.style.display = "inital";
    h2.innerHTML = `Seja bem vindo ${localStorage.nome}`
    a.innerHTML = `Você não é ${localStorage.nome}?`;
}
else{
    function colocarNome(){
        section.style.display = "none";
        localStorage.setItem("nome", texto.value);

        if(localStorage.nome){
            div.style.display = "none";
            section.style.display = "initial";
            h2.innerHTML = `seja bem vindo ${localStorage.nome}`;
            a.innerHTML = `Você não é ${localStorage.nome} ?`;
    }
  }
}


function resetar(){
    localStorage.removeItem
}

a.onclick = resetar;
botao.onclick = colocarNome;