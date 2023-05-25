// function updateDateBadge() {
//     const dateBadge = document.querySelector('.date-badge');
//     const now = new Date();
//     const date = now.getDate();
//     const month = now.toLocaleString('default', { month: 'long' });
//     const year = now.getFullYear();
//     dateBadge.innerHTML = `${date} ${month} ${year}`;
//   }
  
//   setInterval(updateDateBadge, 10000);
function updateDate() {
  const dateElement = document.getElementById('date');
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const formattedDate = `${day} ${month} ${year}`;
  dateElement.textContent = formattedDate;
}

setInterval(updateDate, 1000);