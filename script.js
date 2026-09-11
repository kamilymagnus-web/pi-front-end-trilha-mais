const categoria = document.getElementById('categoria');
const painéis = document.querySelectorAll('.painel');
const filtrar = document.getElementById('filtrar');

filtrar.addEventListener('click', () => {
    const categoriaSelecionada = categoria.value;
    paineis.forEach(painel => {
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