const azkar = document.getElementById('azkar');
const azkarList = document.querySelector('.azkarDiv');
const addBtn = document.getElementById('addbtn');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const azkarText = azkar.value;
  fetch('/azkar/addZkir', {
    method: 'POST',
    body: JSON.stringify({ azkarText }),
    headers: {
      'Content-Type': 'application/json',
    }}).then((res) => res.json()).then((data) => {
    const azkarItem = document.createElement('div');
    azkarItem.classList.add('azkarItem');
    azkarItem.innerText = data?.[0]?.zkir;
    azkarList.appendChild(azkarItem);
  });

  azkar.value = '';
});

// display data from database
window.addEventListener('load', () => {
  fetch('/azkar/getZkir').then((res) => res.json()).then((data) => {
    data.forEach((item) => {
      const azkarItem = document.createElement('div');
      azkarItem.classList.add('azkarItem');
      azkarItem.innerText = item.zkir;
      azkarList.appendChild(azkarItem);
    });
  });
});
