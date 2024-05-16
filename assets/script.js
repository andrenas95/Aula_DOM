// Acessar o elemento - id="titulo"
let elemento_titulo = document.getElementById("titulo")
console.log(elemento_titulo)

let elemento_class = document.getElementsByClassName("imagem")
console.log(elemento_class)

let conteudo_titulo = elemento_titulo.innerHTML
console.log(conteudo_titulo);

elemento_titulo.style.color = "blue"

// Acessar o elemento - id="image"
let elemento_image = document.getElementById("imagem")
elemento_image.setAttribute('src' ,'https://ik.imagekit.io/andrenas95/WhatsApp%20Image%202024-05-11%20at%2016.06.31.jpeg?updatedAt=1715814720196')

let elemento_sobre = document.getElementById("sobre")
console.log(elemento_sobre)

// Acessar todos os elementos - class="imagem"
let elementos_class = document.getElementsByClassName("imagem");
console.log(elementos_class);
// Acessar todos os elementos <img>
let elementos_tag = document.getElementsByTagName("img");
console.log(elementos_tag);

/* Seleciona os elementos pelo seu id */
const input_change = document.querySelector("#input_change");
const botao_click = document.querySelector("#botao_clique");
const botao_over = document.querySelector("#botao_over");
/* Cria uma função para converter o texto (value) do input
 'input_change' para letras maiúsculas */
function upperCase() {
 // Converte o texto do input em letras maiúsculas
 let upperCase = input_change.value.toUpperCase();
 alert(`Texto com letras maiúsculas: ${upperCase}`);
}

/* Atribui uma função para o evento Click do elemento 'botao_clique' */
botao_click.addEventListener("click", () => {
    alert("O botão foi clicado!");
   });
   /* Atribui uma função para o evento Mouse Over do elemento 'botao_over' */
   botao_over.addEventListener("mouseover", () => {
    alert("O mouse passou sobre o botão!");
   });

    