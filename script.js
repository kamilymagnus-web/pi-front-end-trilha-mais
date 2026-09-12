const categoriaperfil = document.getElementById('categoriaPerfil');
const paineisperfil = document.querySelectorAll('.painelPerfil');
const filtrarperfil = document.getElementById('filtrarPerfil');

filtrarperfil.addEventListener('click', () => {
    const categoriaSelecionada = categoriaperfil.value;

    paineisperfil.forEach(painel => {
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

const categoriaCursos = document.getElementById('categoriaCursos');
const painelCursos = document.querySelectorAll('.painelCursos');
const filtrarCursos = document.getElementById('filtrarCursos');

if (filtrarCursos) {
    filtrarCursos.addEventListener('click', () => {
        const categoriaSelecionada = categoriaCursos.value;
        painelCursos.forEach(painel => {
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
}
    
