document.querySelector('#ntitle').onclick = function(){
    document.querySelector('#titulo').innerHTML = "novoTexto"
}
document.querySelector('#pcolor').onclick = function(){
    document.querySelector('p').style.color = 'red'
}
document.querySelector('#mario').onclick = function(){
    document.querySelector('#ad').play()
}
let buttons = document.querySelectorAll('.btnst')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            buttons[i].classList.toggle('active');
        };
    }
    const novaImagem = 'cogumelo.png'; 
    document.querySelector('.trocaImg').onclick = function() {
        document.querySelector('.img1').src = novaImagem;
    };
