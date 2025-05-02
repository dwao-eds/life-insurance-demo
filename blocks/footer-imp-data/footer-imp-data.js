export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0){
      row.classList.add("foot-desc");
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('tnc');
        }
        if (d === 1) {
          div.classList.add("contact-us");
          const ptag = div.querySelectorAll('p');
          ptag.forEach((p ,i) => {
            if(i === 0) {
                p.classList.add("follow-us");
            }
            if (i === 1) {
              p.classList.add("social-links");
            }
            if (i != 0 && i!=1 ) {
              p.classList.add("address-data");
            }
          });
        }
      });
    }
    if (r === 1) {
      row.classList.add("foot-warning");
    }
    if (r === 2) {
      row.classList.add("foot-notice");
    }
    if (r === 3) {
      row.classList.add("foot-quicklinks");
    }
    if (r === 4) {
      row.classList.add("foot-covid");
    }
    if (r === 5) {
      row.classList.add("foot-disclaimer");
    }
    // [...row.children].forEach((div, d) => {
    //   if (d === 0) {
    //     div.classList.add('class-name');
    //   }
    // });
  });
}