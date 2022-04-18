
const btn = document.querySelector("#btn");
const cookieBtn = document.querySelector('#btn__cookie');
const text__field = document.querySelector(".text__field");
const cookie = document.querySelector(".cookie");

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

$('document').ready(function() {
    $('#btn').on('click', function() {
      $('.registration__labels .rfield').each(function() {
        if ($(this).val() == '') {
            console.log(2);
            $('input[required]').addClass('error');
        } else {
            console.log(1);
            $('input[required]').removeClass('error');
        }
      });
    });
});

