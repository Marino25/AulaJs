
/*
var nome = "Kennedy";
var idade = 25;
var idade2 = 20;
//alert (nome + " tem " + idade + " anos");

//alert (idade + idade2);

*/

//var lista = ["maça", "pera", "limao"];

//lista.push("uva"); // adiciona o ultimo elemento na lista
//lista.pop();        // retira o ultimo elemento da lista
//lista.length // ve a quantidade de elementos dentro da lista
//lista.reverse() // muda a posicao dos elementos dentro da lista;
//lista.toString() // muda os elementos para String
//lista.join(" - ") // Transforma os elementos em String e adiciona o que quiser entre eles

//console.log (lista.length);


/* var fruta = {nome:"maça", cor:"vermelha"}; // dicionario (array) aonde tem os componentes dele e se pode chamar com fruta.nome ou fruta.cor
console.log(fruta.cor); */

/* var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome); */

/* var idade = prompt("Qual sua idade? "); // caixa de texto para digitar a idade
if(idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");

    
} */

/* var count = 0;
while (count <= 5) {
    
    console.log(count); 
    count = count +1;
    
}; */

/*
var count;
for (count=0; count <= 5; count++){
   console.log(count);
} */

/* var d = new Date(); // Pega o horario, data, e demais informações
alert (d.getFullYear()); // get pega as informações que se precisa do Date 
alert (d.getDay());
alert (d.getHours()); */

/* function soma (n1, n2){
    return n1+n2;

}

alert (soma(5,10)); */

/* function setReplace(frase, nome, nome_nome  ){
    return frase.replace (nome,nome_nome)

}

alert (setReplace("Vai Japao", "Japao", "Brasil")); */

/* function validaIdade(idade){
    var valida;
    if(idade>=18){

        valida = true;

    } else { 

        valida = false;
    }
        return valida;
    
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade)); */

function botao(){
    document.getElementById("agradecimento").innerHTML = "Para redirecionar clique aqui"; // da para se colocar elementos quando se achar esse id
    
} 

function redirecionar(){    
    // window.open("https://www.google.com.br/"); // abre uma nova blank para acessar o link
    window.location.href = "https://www.google.com.br/"; // abre direto na pagina

} 

function trocar(elemento){
    /* document.getElementById("mousemove").innerHTML = "Passou o mouse por cima"; */
    elemento.innerHTML ="Passou o mouse por cima" ;
   
}

function voltar(elemento){
    /* document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; */
    elemento.innerHTML ="Passe o mouse aqui" ;
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}