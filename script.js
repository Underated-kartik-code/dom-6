let allelem = document.querySelectorAll('.elem');
let fullelem = document.querySelectorAll('.fullelems');
let closebtn = document.querySelectorAll('.btn');

allelem.forEach(function(elem){
    elem.addEventListener('click',()=>{
        fullelem[elem.id].style.display = 'block'

    })
})

closebtn.forEach(function(backbtn){
    backbtn.addEventListener('click',function(){
        fullelem[backbtn.id].style.display = 'none'
    })
})
