const toggler = document.querySelector('.fa-bars');
const togglerClose = document.querySelector('.fa-times');
const nav = document.querySelector('.right');
const btn = document.querySelector('.nav-right li button');
const feature = document.querySelector('.feature');
const company = document.querySelector('.Company')

toggler.addEventListener('click', ()=> {
    nav.classList.add('active-navbar')
    btn.classList.add('btn')
    document.querySelector('body').classList.add('bg')
})

togglerClose.addEventListener('click', ()=> {
    nav.classList.remove('active-navbar')
    btn.classList.add('none')
    btn.classList.remove('btn')
    document.querySelector('body').classList.remove('bg')

})

feature.addEventListener('click', ()=> {
    document.querySelector('.dropdown-list').classList.toggle('dropdown')
})
company.addEventListener('click', ()=> {
    document.querySelector('.dropdown-list2').classList.toggle('dropdown2')
})


// if (nav.classList === 'active-navbar') {
//     document.querySelector('body').addEventListener('click', ()=> {
//     nav.classList.remove('active-navbar')
//     })
// }

