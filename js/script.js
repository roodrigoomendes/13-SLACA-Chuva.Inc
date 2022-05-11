
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


//FUNCAO CRIAR TOPICO DE SUCESSO >>

function criartopicoNovo() {
    var formulario = document.getElementById("formulario");
    var sucesso = document.getElementById("discussoes__sucesso")

    if (sucesso.style.display === "flex") {
        formulario.style.display = "inline"
        sucesso.style.display = "none"

    } else {
        formulario.style.display = "none"
        sucesso.style.display = "flex"
    }
}



/// ADICIONAR COMENTARIO

function listarComentariostela(assunto, comentario) {

    var listacomentarios = document.querySelector('.postagens__adicionadas')
    var elementoComentario = "<div class='postagens__adicionadas'><div class='postagens__adicionadas'><section class='postagens'><h3 class='titulo__postagem'>" + assunto + "</h3><label class='nome__postagem'>Anônimo</label><br><br><label class='conteudo__postagem'>" + comentario + "</label><div class='informacao__post'><img src='/assets/PONTOS.SVG' alt=''><img src='/assets/favoritar.svg' alt=''><label class='informacao__label'>1 like</label><label class='informacao__label'>1 resposta</label></div></section></div>"
    var elementoComentario =
        listacomentarios.innerHTML = listacomentarios.innerHTML + elementoComentario
    criartopicoNovo()
    envioAparecer()
}

function adicionar__post() {
    var campoassunto = document.querySelector('#txtassunto').value
    var campoconteudo = document.querySelector('#txtconteudo').value
    listarComentariostela(campoassunto, campoconteudo)

}



//FUNCAO VER HISTORICO RESPOSTA DE POSTAGEM>>>

function historico__postagem() {
    var historico = document.getElementById("visualizar__historico");


    if (historico.style.display == "none") {
        historico.style.display = "inline";

    } else {
        historico.style.display = "none";

    }
}




//MENDAGEM APOS ENVIO >>>
function envioAparecer() {
    var mensagemenvio = document.getElementById("mensagem__envio")
    mensagemenvio.style.display = 'flex';

    setTimeout(envioDesaparecer, 1000 * 3);

}

function envioDesaparecer() {
    var mensagemenvio = document.getElementById("mensagem__envio")
    mensagemenvio.style.display = 'none';
}
