const markBtn = document.querySelector('.mark')
const cards = document.querySelectorAll('.card')
const badge = document.querySelector('.badge')


markBtn.addEventListener('click', () => {
  for(let card of cards) {
    if(card.classList.contains('unread-card')) {
      card.classList.remove('unread-card')
      badge.style.display = 'none'
    }
  }
})