var select = document.getElementById('select-promo');
var coders = document.getElementsByClassName('promo');
var promLab = document.getElementById('promLab');

promLab.addEventListener('click',showImage);
select.onchange = selectionPromo;
function selectionPromo(event) {
  switch (true) {
    case event.target.value === '4chile':
      coders[0].classList.add('show')
      coders[0].classList.remove('lab')
      coders[1].classList.add('lab');
      coders[1].classList.add('lab');
      coders[1].classList.remove('show');
      coders[2].classList.add('lab');
      coders[2].classList.remove('show');
      break;
    case event.target.value === '5lima':
      coders[0].classList.add('lab');
      coders[0].classList.remove('show')
      coders[1].classList.remove('lab');
      coders[1].classList.add('show');
      coders[2].classList.add('lab');
      coders[2].classList.remove('show');
      break;
    case event.target.value === '6lima':
      coders[0].classList.add('lab');
      coders[0].classList.remove('show')
      coders[1].classList.add('lab');
      coders[1].classList.remove('show');
      coders[2].classList.remove('lab');
      coders[2].classList.add('show');
      break;
  }
}

function showImage(event) {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.left = '0';

    event.target.style.display = 'block';
    event.target.style.margin = 'auto';

    modal.appendChild(event.target);
    document.body.appendChild(modal);
    modal.addEventListener('click', closeModal);
}    

  function closeModal(event) {
    event.target.parentElement.removeChild(event.currentTarget);
  }


