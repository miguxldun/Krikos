const btn = document.querySelector('#dark')
const card = document.querySelectorAll('.card')
const body = document.body

btn.addEventListener('change', ()=>{
    if(!btn.checked){
        body.className = ''
        return;
    }
    body.className = 'dark'
})