
//FUNCAO VER MAIS>>>

function leiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var menos = document.getElementById("menos");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        menos.style.display = "none";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        menos.style.display = "inline";    }
}

//FUNCAO CRIAR TOPICO >>

function criartopico(){
    var padrao = document.getElementById("discussoes__padrao");
    var formulario = document.getElementById("formulario");


    if(padrao.style.display === "inline"){
        formulario.style.display = "inline"
        padrao.style.display = "none"
    }else{
        padrao.style.display = "inline"
        formulario.style.display = "none"
        
    }
}