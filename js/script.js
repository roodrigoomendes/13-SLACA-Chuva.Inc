
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
        menos.style.display = "inline";
    }
}

//FUNCAO CRIAR TOPICO >>

function criartopico() {
    var padrao = document.getElementById("discussoes__padrao");
    var formulario = document.getElementById("formulario");


    if (padrao.style.display === "inline") {
        formulario.style.display = "inline"
        padrao.style.display = "none"
    } else {
        padrao.style.display = "inline"
        formulario.style.display = "none"

    }
}



/// ADICIONAR COMENTARIO

function listarComentariostela(assunto, comentario) {

    var listacomentarios = document.querySelector('.postagens__adicionadas')
    var elementoComentario = "<div class='postagens__adicionadas'><section class='postagens'><h3 class='titulo__postagem'>" + assunto + "</h3><label class='nome__postagem'>Carlos Henrique Santos</label><br><br><label class='conteudo__postagem'>" + comentario + "</label><div class='informacao__post'><img src='/assets/PONTOS.SVG' alt=''><img src='/assets/favoritar.svg' alt=''><label class='informacao__label'>1 like</label><label class='informacao__label'>1 resposta</label></div></section>"
    var elementoComentario =
        listacomentarios.innerHTML = listacomentarios.innerHTML + elementoComentario
}

function adicionar__post() {
    var campoassunto = document.querySelector('#txtassunto').value
    var campoconteudo = document.querySelector('#txtconteudo').value
    listarComentariostela(campoassunto, campoconteudo)

}

