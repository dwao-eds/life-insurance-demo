export default function decorate(block) {
  [...block.children].forEach((row, r) => {

    if (r === 0) {
        row.classList.add('nav-logo');
    }

    if (r === 1) {
      row.classList.add('nav-items');
      [...row.children].forEach((div, d) => {
        div.classList.add('nav-item');
        if (d <= 4) {
          div.classList.add('nav-item-'+d);
        }
        const pTags = div.querySelectorAll('p');
         if (pTags[0]) {
           pTags[0].classList.add('nav-heading');
         }
         if (pTags[1]) {
           pTags[1].classList.add('nav-desc');
         }
      });
    }

    if (r === 2) {
      row.classList.add('nav-cta');
      [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('pd-button');
      }
      if (d === 1) {
        div.classList.add('nav-search');
        // Replace <p> with <img>
        const pTag = div.querySelector('p');
        if (pTag) {
          const img = document.createElement('img');
          img.src = '../../images/searchIcon.svg'; // Replace with your actual image path
          img.alt = 'Search Icon';
          div.replaceChild(img, pTag);
        }
      }
      if (d === 2) {
        div.classList.add('mp-button');
      }
      });
    }



    // [...row.children].forEach((div, d) => {
    //   if (d === 0) {
    //     div.classList.add('class-name');
    //   }
    // });
  });
}