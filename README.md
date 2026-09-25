# pi-front-end-trilha-mais

const progresso = JSON.parse(localStorage.getItem('progresso-informatica'));
progresso.cancelado = false;
localStorage.setItem('progresso-informatica', JSON.stringify(progresso));
location.reload();

