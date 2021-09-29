


var altura = 0
var largura = 0
var vidas = 1
var tempo = 50
var criaMosquitoTempo = 1500
var nivel = window.location.search
var nivel = nivel.replace('?','')

if(nivel === 'normal'){
    var criaMosquitoTempo = 1500
}else if(nivel === 'medio'){
    var criaMosquitoTempo = 1000
}else if(nivel === 'dificil'){
    var criaMosquitoTempo = 750
}

function ajustaTamanhoPalco(){
    altura = innerHeight
    largura = innerWidth
    console.log(altura,largura)
    
}
ajustaTamanhoPalco()
 
var cronometro = setInterval(function(){
    tempo -= 1
    
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posicaoRandomica(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if(vidas > 3){
            window.location.href = 'fimDeJogo.html'
        }else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }

    var posicaox = Math.floor (Math.random()* largura) - 100
    var posicaoy = Math.floor(Math.random()* altura) - 100

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaox,posicaoy)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

     

    document.body.appendChild(mosquito)

    
}
