fetch('data/funnies.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("funnyGrid");
    data.forEach(item => {
      let html = '';
      if (item.text) {
        html = `<div class="bg-gray-800 p-4 rounded-xl shadow-md">${item.text}</div>`;
      } else if (item.image) {
        html = `<img src="${item.image}" class="rounded-xl shadow-md" alt="Funny Meme">`;
      } else if (item.gif) {
        html = `<img src="${item.gif}" class="rounded-xl shadow-md" alt="Funny Gif">`;
      }
      container.innerHTML += html;
    });
  });￼Enter
