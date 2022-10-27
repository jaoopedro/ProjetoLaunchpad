function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; // foi criado um filtro com o querySelector na lecla especificada e passado a função do aufio atraves do onclick

//Criando referencias
//com o 'const' determonamos o valor/variavel constante ( fundamento para lidar com listas)

const listadeTeclas = document.querySelectorAll('.tecla'); // o queryselectorAll serve para selecionar todos os elementos de um class ou tag especifica

//enquanto == while
for (let contador = 0; contador < listadeTeclas.length; ){   
    const tecla = listadeTeclas[contador]
    
    const instrumento = tecla.classList[1];

                    //template string
    const idAudio = `#som_${instrumento}`

    console.log(idAudio)

                     //Funcão anonima E essas funções sem nome só podem ser utilizadas nesse contexto de quando elas são o valor de algum atributo ou estão sendo armazenadas dentro de alguma referência constante ou variável.
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    
    contador = contador + 1

 } 