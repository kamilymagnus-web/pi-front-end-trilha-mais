const categoriaCursos = document.getElementById('categoria-cursos');
const paineisCursos = document.querySelectorAll('.painel-cursos');
const filtrarCursos = document.getElementById('filtrar-cursos');

filtrarCursos.addEventListener('click', () => {
    const categoriaSelecionada = categoriaCursos.value;

    paineisCursos.forEach(painel => {
        painel.style.display = "none";  
    });

    if (categoriaSelecionada === "default") {
        return;
    }

    const painelSelecionado = document.getElementById(categoriaSelecionada);
    if (painelSelecionado) {
        painelSelecionado.style.display = "block"; 
    }
});

const categoriaDocumentos = document.getElementById('categoria-documentos');
const paineisDocumentos = document.querySelectorAll('.painel-documentos');
const filtrarDocumentos = document.getElementById('filtrar-documentos');

filtrarDocumentos.addEventListener('click', () => {
    const categoriaSelecionada = categoriaDocumentos.value;

    paineisDocumentos.forEach(painel => {
        painel.style.display = "none";  
    });

    if (categoriaSelecionada === "default") {
        return;
    }

    const painelSelecionado = document.getElementById(categoriaSelecionada);
    if (painelSelecionado) {
        painelSelecionado.style.display = "block"; 
    }
});
