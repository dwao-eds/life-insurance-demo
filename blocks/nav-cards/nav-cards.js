export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('rows');
    row.classList.add('row-' + r);
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('card-icon');
      }
      if (d === 1) {
        div.classList.add('card-text');
      }
    });
  });
}
