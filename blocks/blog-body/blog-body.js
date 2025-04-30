export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0){
    row.classList.add('blog-pill');
    }
    if (r === 1) {
      row.classList.add('blog-heading');
    }
    if (r === 2) {
      row.classList.add('blog-date');
    }
    if (r === 3) {
      row.classList.add('blog-data');
    }
    if (r === 4) {
      row.classList.add('blog-foot');
    }

    // [...row.children].forEach((div, d) => {
    //   if (d === 0) {
    //     div.classList.add('class-name');
    //   }
    // });
  });
}
