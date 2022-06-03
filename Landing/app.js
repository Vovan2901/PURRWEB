
const btn = document.querySelector("#btn");
const cookieBtn = document.querySelector('#btn__cookie');
const text__field = document.querySelector(".text__field");
const cookie = document.querySelector(".cookie");
const inputs = document.querySelector(".input[required]");

cookie.classList.add('hidden')

  if (document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        cookie.classList.remove('hidden')
      }, 5000)
  }));

cookieBtn.addEventListener("click", function(){
    console.log(0)
    cookie.classList.add('hidden')
});

window.addEventListener('DOMContentLoaded', () => 
  {
  const allRegLabs = document.querySelectorAll('.registration__labels .rfield')  

  document.querySelector('#btn').onclick = () =>
    {
    allRegLabs.forEach( el =>
      {
      let err =  el.classList.toggle('error', (el.value === ''))
      console.log( (err ? '2':'1' ))
      })
    }
  })




