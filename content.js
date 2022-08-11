/*
Method: changeDifficulty
Description: always change the difficulty level to easy ;)
*/
const changeDifficulty = () => {
    setTimeout(() => {
      const node = document.querySelector('.css-t42afm') || document.querySelector('.css-dcmtd5') || document.querySelector('.css-14oi08n') ;
      if (!node) {
          return
      } else {
          node.innerHTML = 'Easy';
          node.style.color = '#43A047';
      }
      
    }, 100);
  };

window.addEventListener('load', changeDifficulty);
