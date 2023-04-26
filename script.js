function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

/* Esta é uma função JavaScript chamada "menuShow", que é usada para mostrar e ocultar um menu em dispositivos móveis. 

A primeira linha da função declara uma variável chamada "menuMobile" e atribui a ela o elemento HTML com a classe "mobile-menu" usando o método "querySelector".

Em seguida, a função verifica se a classe "open" está presente no elemento "menuMobile" usando o método "classList.contains". 
Se a classe "open" estiver presente, significa que o menu está aberto e a função remove essa classe do elemento "menuMobile" usando o método "classList.remove". 
A seguir, a função atualiza a imagem do ícone do menu para o ícone de menu padrão usando o método "querySelector" para selecionar o elemento com a classe "icon" e atualizando seu atributo "src" com a imagem do ícone do menu.

Caso contrário, se a classe "open" não estiver presente, significa que o menu está fechado e a função adiciona a classe "open" ao elemento "menuMobile" usando o método "classList.add". 
A seguir, a função atualiza a imagem do ícone do menu para o ícone de fechar usando o método "querySelector" para selecionar o elemento com a classe "icon" e atualizando seu atributo "src" com a imagem do ícone de fechar.

Em resumo, esta função permite que os usuários alternem entre a exibição e ocultação do menu em dispositivos móveis, bem como a troca do ícone do menu para indicar se o menu está aberto ou fechado.
*/