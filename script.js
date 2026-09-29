const indice = [
    { titulo: "Informática", url: "informatica.html", palavras: ["informática", "info", "informatica"] },
    { titulo: "Redes", url: "redes.html", palavras: ["redes, rede"] },
    { titulo: "Administração", url: "administracao.html", palavras: ["administração", "administracao", "adm", "admin"] },
    { titulo: "Fármacia", url: "farmacia.html", palavras: ["farmacia", "farmácia", "farm"] },
    { titulo: "Turismo", url: "turismo.html", palavras: ["turismo"] },
    { titulo: "Audiovisual", url: "audiovisual.html", palavras: ["audiovisual"] },
    { titulo: "Psicologia", url: "psicologia.html", palavras: ["psicologia", "psico", "psi"] },
    { titulo: "Mecatrônica", url: "mecatronica.html", palavras: ["mecatronica", "mecatrônica"] },
    { titulo: "Medicina", url: "medicina.html", palavras: ["medicina", "med"] },
    { titulo: "Direito", url: "direito.html", palavras: ["direito"] },
    { titulo: "Engenharia de Software", url: "engenheirodesoftware.html", palavras: ["engenharia", "software", "eng"] },
    { titulo: "Marketing", url: "marketing.html", palavras: ["marketing"] },
    { titulo: "Aromaterapia", url: "aromaterapia.html", palavras: ["aromaterapia"] },
    { titulo: "Dança", url: "danca.html", palavras: ["danca", "dança", "dança livre"] },
    { titulo: "Teatro", url: "teatro.html", palavras: ["teatro"] },
    { titulo: "Pintura em Tela", url: "pintura-em-tela.html", palavras: ["pintura"] },
    { titulo: "Cerâmica", url: "ceramica.html", palavras: ["ceramica", "cerâmica"] },
    { titulo: "Biscuit", url: "biscuit.html", palavras: ["biscuit"] },
    { titulo: "Inglês", url: "ingles.html", palavras: ["ingles", "inglês"] },
    { titulo: "Espanhol", url: "espanhol.html", palavras: ["espanhol"] },
    { titulo: "Francês", url: "frances.html", palavras: ["frances", "francês"] },
    { titulo: "Italiano", url: "italiano.html", palavras: ["italiano"] },
    { titulo: "Japonês", url: "japones.html", palavras: ["japones", "japonês"] },
    { titulo: "Valiriano", url: "valiriano.html", palavras: ["valiriano"] },
    { titulo: "Perfil", url: "perfil.html", palavras: ["perfil", "conta"] },
    { titulo: "Home", url: "index.html", palavras: ["home", "inicio", "início"] },
    { titulo: "Técnico", url: "cursos.html#tecnicos", palavras: ["tecnico", "tec", "técnico"] },
    { titulo: "Graduação", url: "cursos.html#graduacao", palavras: ["graduacao", "graduação", "grad"] },
    { titulo: "Livre", url: "cursos.html#livres", palavras: ["livre", "livres"] },
    { titulo: "Idiomas", url: "cursos.html#idiomas", palavras: ["idioma", "idiomas"] },  
];

function normalizar(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function exibirPainel(id) {
    document.querySelectorAll('.painelCursos').forEach(function (painel){
        painel.style.display = (painel.id === id) ? 'block' : 'none';
    });
}    

function limparDestaques(){
    document.querySelectorAll('.destaque').forEach(function(el){
        el.classList.remove('destaque');
    });
}

function executarBusca(termoBusca,ancora) {
    limparDestaques();

    if(termoBusca){
        document.getElementById('pesquisa').value = termoBusca;
    }

    const termo = termoBusca ? normalizar(termoBusca):'';
    let primeiroResultado = null;

    if (termo) {
        document.querySelectorAll('h1, h2, h3, h4, p , li').forEach(function(el){
            if(normalizar(el.textContent).icludes(termo)) {
                el.classList.add('destaque');
                if (!primeiroResultado) primeiroResultado = el;
            }
        });
    }
    
    if (ancora && document.getElementById(ancora)){
        exibirPainel(ancora);
        document.getElementById(ancora).scrollIntoView({behavior: 'smooth'});
    } else if (primeiroResultado) {
        const painel = primeiroResultado.closest('.painelCursos');
        if (painel) exibirPainel (painel.id);
        primeiroResultado.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}

    function aplicarUrl(){
        const busca = new URLSearchParams(location.search).get('busca');
        const ancora = location.hash.slice(1);
        if (busca || ancora) executarBusca (busca, ancora);
    }

    aplicarUrl();
    window.addEventListener('popstate', aplicarUrl);

    const formPesquisa = document.getElementById('formPesquisa');

    formPesquisa.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const termo = document.getElementById('pesquisa').value.trim().toLowerCase();
    
    const resultado = indice.find(function (pagina) {
        return pagina.titulo.toLowerCase().includes(termo) ||
            pagina.palavras.some(function (palavra) {
                return palavra.includes(termo);
            });
    });
    
    if (!resultado) {
        alert('Nenhum resultado encontrado para: ' + termo);
        return;
    }

    const partes = resultado.url.split('#');
    const pagina = partes[0];
    const ancora = partes[1];
    
    let destino = `${pagina}?busca=${encodeURIComponent(termo)}`;
    if (ancora) destino += `#${ancora}`;

    const paginaAtual = location.pathname.split('/').pop() || 'index.html';

    if (pagina === paginaAtual) {
        history.pushState(null, '', destino)
        executarBusca(termo, ancora);
    } else {
        window.location.href = destino;
    }
});    
    

if (termoBusca) {
    document.getElementById('pesquisa').value = termoBusca;
    
    const termo = normalizar(termoBusca);
    let primeiroResultado = null;
    
    const elementos = document.querySelectorAll('h1, h2, h3, h4, p , li');
    elementos.forEach(function(el){
        if(el.offsetParent === null) return;

        if(normalizar(el.textContent).includes(termo)){
            el.classList.add('destaque');
            if 
            (!primeiroResultado) primeiroResultado = el;
        }
    });
    
    if (primeiroResultado && !hash){
        primeiroResultado.scrollIntoView({behavior: 'smooth', block: 'center'});
    }      
}

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

const formMatricula = document.getElementById('formMatricula');
const mensagemSucesso = document.getElementById('mensagemSucesso');
const mensagemErro = document.getElementById('mensagemErro');

if (formMatricula) {
    formMatricula.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById ('telefone').value.trim();

        const formularioValido = nome !== '' && email !== '' && telefone;

        if (formularioValido) {
            mensagemSucesso.style.display = 'block';
            mensagemErro.style.display ='none';
        } else {
            mensagemErro.style.display = 'block';
            mensagemSucesso.style.display = 'none';
        }
    });
}

function chaveProgresso(cursoId) {
    return `progresso-${cursoId}`;
}

function carregarProgresso(cursoId) {
    const dados = localStorage.getItem(chaveProgresso(cursoId));
    return dados ? JSON.parse(dados) : { modulos: {}, cancelado: false };
}

function salvarProgresso(cursoId, progresso) {
    localStorage.setItem(chaveProgresso(cursoId), JSON.stringify(progresso));
}

function calcularPorcentagem(progresso, totalModulos) {
    const concluidas = Object.values(progresso.modulos).filter(Boolean).length;
    return totalModulos > 0 ? Math.round((concluidas / totalModulos) * 100) : 0;
}

function atualizarBarra(card, porcentagem) {
    card.querySelector('.barra-preenchida').style.width = porcentagem + '%';
    card.querySelector('.progresso-texto').textContent = porcentagem + '% concluído';
}

function inicializarCard(card) {
    const cursoId = card.dataset.curso;
    const progresso = carregarProgresso(cursoId);
    const checkboxes = card.querySelectorAll('.lista-modulos input[type="checkbox"]');

    if (progresso.cancelado) {
        card.style.display = 'none';
        return;
    }

    checkboxes.forEach(function(checkbox) {
        checkbox.checked = !!progresso.modulos[checkbox.dataset.modulo];
    });
    
    atualizarBarra(card, calcularPorcentagem(progresso, checkboxes.length));
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
        const atual = carregarProgresso(cursoId);
        atual.modulos[checkbox.dataset.modulo] = checkbox.checked;
        salvarProgresso(cursoId, atual);
        atualizarBarra(card, calcularPorcentagem(atual, checkboxes.length));
        });
    });
    
    const botaoCancelar = card.querySelector('.btn-cancelar');
    if (botaoCancelar) {
        botaoCancelar.addEventListener('click', function() {
        const confirmar = confirm(
            'Tem certeza que deseja cancelar a matrícula?\n' +
            'Seu progresso será mantido salvo — se você se matricular novamente, poderá continuar de onde parou.'
        );

        if (confirmar) {
            const atual = carregarProgresso(cursoId);
            atual.cancelado = true;
            salvarProgresso(cursoId, atual);
            card.style.display = 'none';
        }
        });
    }
}
const cardsAndamento = document.querySelectorAll('#andamento .card-andamento');
    cardsAndamento.forEach(inicializarCard);
