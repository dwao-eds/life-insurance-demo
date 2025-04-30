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

  //   we are moving the card under nav here
  const navDesc = document.querySelector('.nav-desc');
  const navCardsWrapper = document.querySelector('.nav-cards-wrapper');

  if (navDesc && navCardsWrapper) {
    // Insert nav-cards-wrapper after nav-desc
    navDesc.parentNode.insertBefore(navCardsWrapper, navDesc.nextSibling);
  }
  //   we are moving the card under nav here

  const navItem = document.querySelector('.nav-item');
  const navCards = document.querySelector('.nav-cards-wrapper');
  const navHeading = document.querySelector('.nav-heading');

  if (navItem && navCards && navHeading) {
    navItem.addEventListener('mouseenter', () => {
      navCards.style.display = 'block';
      navCards.style.opacity = '1';
      navCards.style.transform = 'translateY(0)';
      navCards.style.pointerEvents = 'auto';

      navHeading.style.setProperty('--rotate-caret', '270deg');
    });

    navItem.addEventListener('mouseleave', () => {
      navCards.style.display = 'none';
      navCards.style.opacity = '0';
      navCards.style.transform = 'translateY(-10px)';
      navCards.style.pointerEvents = 'none';

      navHeading.style.setProperty('--rotate-caret', '90deg');
    });
  }
}