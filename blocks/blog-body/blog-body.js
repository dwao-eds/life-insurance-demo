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
      row.classList.add('blog-faq');
        const paragraphs = row.querySelectorAll("p");

        paragraphs.forEach((p) => {
          if (p.querySelector("strong")) {
            p.classList.add("faq-ques");
          } else {
            p.classList.add("faq-ans");
          }
        });
    }
    if (r === 5) {
      row.classList.add("blog-foot");
      [...row.children].forEach((div, d) => {
       if (d === 0){
        div.classList.add("help-icon");
       }
       if (d === 1){
        div.classList.add("help-desc");
       }
       if (d === 2) {
         div.classList.add("share-icon");
       }
      });

    }
  });
}
