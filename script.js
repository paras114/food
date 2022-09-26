const icons=document.querySelectorAll('.sec-1-icons i');

let i=1;
setInterval(()=>{
    const icon=document.querySelector('.sec-1-icons i.change');
    icon.classList.remove('change');

    if(i>=icons.length){
        icons[0].classList.add('change');
        i=0;
    }else{

        icon.nextElementSibling.classList.add('change')
    }
    i++;

},3500)


// menu

const menu=document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    const target=document.querySelectorAll('.target');

    target.forEach((item)=>{
        item.classList.toggle('change');
    })
})