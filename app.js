const foodCard = document.querySelectorAll('.food-card');
const images = document.querySelectorAll('img');
const costTags = document.querySelectorAll('.cost');
const foodNames = document.querySelectorAll('.food-name');

foodCard.forEach((card, index) => {
  card.addEventListener('mouseover', () => {
    card.style.height = '200px';
    card.style.width = '200px';
    card.style.transform = "translateY(-35px)";
    foodNames[index].style.fontSize = '30px';
    costTags[index].style.fontSize = 'larger';
    images[index].classList.remove('none');
    costTags[index].classList.remove('none');
  });
  card.addEventListener('mouseleave', () => {
    card.style.height = '150px';
    card.style.width = '150px';
    card.style.transform = 'translateY(0)';
    foodNames[index].style.fontSize = '18px';
    images[index].classList.add('none');
    costTags[index].classList.add('none');
  });
})