let hamburger = document.querySelector('.hamburger');
let clos = document.querySelector('.close');
let dr = document.querySelector('.drp');
let main = document.querySelector('.main');
let footer = document.querySelector('.info');
let article = document.querySelector('.article');
hamburger.addEventListener('click',()=>{

    if(!dr.classList.contains('drop')){
        dr.classList.add('drop');
        hamburger.style.display = 'none';
        clos.style.display = 'block';
        main.style.display = 'none';
        footer.style.display = 'none';
        article.style.display = 'none';
    }
})
clos.addEventListener('click',()=>{
    if(dr.classList.contains('drop')){
        dr.classList.remove('drop');
        clos.style.display = 'none';
        hamburger.style.display ='block';
        main.style.display = 'block';
        footer.style.display = 'block';
        article.style.display = 'block';
    }
})



