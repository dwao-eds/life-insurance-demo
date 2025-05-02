export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0){
      row.classList.add("footer-links");
      [...row.children].forEach((div, d) => {
        div.classList.add('foot-cols');
        div.classList.add('foot-col-'+d);
      });
    }
    // [...row.children].forEach((div, d) => {
    //   if (d === 0) {
    //     div.classList.add('class-name');
    //   }
    // });
  });
}