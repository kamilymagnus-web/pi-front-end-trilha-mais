const campoPesquisa = document.getElementById('pesquisa');

campoPesquisa.addEventListener('input', function() {
    const termo = campoPesquisa.value.toLowerCase();
    const cursos = document.querySelectorAll('.curso');

    cursos.forEach(function(curso){
        const titulo = curso.querySelector('h2', 'h3'). textContent.toLowerCase();

        if (titulo.includes (termo)) {
            curso.sty
        }
    })
})

const categoriaperfil = document.getElementById('categoriaPerfil');
const paineisPerfil = document.querySelectorAll('.painelPerfil');
const filtrarPerfil = document.getElementById('filtrarPerfil');

if (filtrarPerfil) {
    filtrarPerfil.addEventListener('click', () => {
        const categoriaSelecionada = categoriaperfil.value;

        paineisPerfil.forEach(painel => {
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

const categoriaDocumentos = document.getElementById('categoria-documentos');
const paineisDocumentos = document.querySelectorAll('.painel-documentos');
const filtrarDocumentos = document.getElementById('filtrar-documentos');

if (filtrarDocumentos) {
    filtrarDocumentos.addEventListener('click', () => {
        const categoriaSelecionada = categoriaDocumentos.value;

        paineisDocumentos.forEach(painel => {
            painel.classList.remove ('selecionado');  
        });

        if (categoriaSelecionada === "default") {
            return;
        }

        const painelSelecionado = document.getElementById(categoriaSelecionada);
        if (painelSelecionado) {
            painelSelecionado.classList.add('selecionado');
            
            painelSelecionado.scrollIntoView ({behavior: 'smooth', block: 'center'}); 
        }
    });
}    

const categoriaCursos = document.getElementById('categoriaCursos');
const paineisCursos = document.querySelectorAll('.painelCursos');
const filtrarCursos = document.getElementById('filtrarCursos');
if (filtrarCursos) {
    filtrarCursos.addEventListener('click', () => {
        const categoriaSelecionada = categoriaCursos.value;

        paineisCursos.forEach(painel => {
            painel.classList.remove ('selecionado');  
        });

        if (categoriaSelecionada === "default") {
            return;
        }


        const painelSelecionado = document.getElementById(categoriaSelecionada);
        if (painelSelecionado) {
            painelSelecionado.classList.add('selecionado');
            
            painelSelecionado.scrollIntoView ({behavior: 'smooth', block: 'center'});
        }
    });
}

const formularioMatricula = document.getElementById('formularioMatricula');
const mensagemSucesso = document.getElementById('mensagemSucesso');
const mensagemErro = document.getElementById('mensagemErro');

formularioMatricula.addEventListener('submit', function(event) {
    event.preventDefault();

    const selects = [
        document.getElementById('cursosTecnicos'),
        document.getElementById('cursosGraduacao'),
        document.getElementById('cursosLivres'),
        document.getElementById('Idiomas')
    ];

    const cursoSelecionado = selects.some(select => select.value !== '');
    const formularioValido = nome !== '' && email !== '' && telefone !== '' && cursoSelecionado;

    if (formularioValido) {
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display ='none';
    } else {
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    }
});
