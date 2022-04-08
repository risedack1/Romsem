import IMask from 'imask';

const footerMask = document.getElementById('footer-input');
const maskOptions = {
  mask: '+{996}(000)000-00-00',
  placeholderChar: '+{996}(000)000-00-00'
};
var mask = IMask(footerMask, maskOptions);
