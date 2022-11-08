function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

                       //e
    if (elemento != null && elemento.localName === 'audio'){
       
        elemento.play();
    
    }

    else{
        //alert('Elemento nao encontrado')
        console.log('Elemento não encontrado ou seletor invalido!')
    }
}

//com o 'const' determonamos o valor/variavel constante ( fundamento para lidar com listas)

const listadeTeclas = document.querySelectorAll('.tecla'); // o queryselectorAll serve para selecionar todos os elementos de um class ou tag especifica

for (let contador = 0; contador < listadeTeclas.length; contador++){   
    const tecla = listadeTeclas[contador]
    
    const instrumento = tecla.classList[1];
                   
    const idAudio = `#som_${instrumento}` //template string

    tecla.onclick = function(){ //Funcão anonima E essas funções sem nome só podem ser utilizadas nesse contexto de quando elas são o valor de algum atributo ou estão sendo armazenadas dentro de alguma referência constante ou variável.
    
        tocaSom(idAudio)
        
    }

    tecla.onkeydown = function(evento){  //onkeydown é um evento para quando cliar em uma tecla no caso a tecla estiver abaixada
                                //OU
        if (evento.code==='Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
  
 } 
 