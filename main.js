document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const summaryContainer = document.getElementById('summary-container');
            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('caja', item.category.toLowerCase());

                const contenedorIMG = document.createElement('DIV');
                contenedorIMG.classList.add('contenedorImg', item.category.toLowerCase());
                const img = document.createElement('img');
                img.src = item.icon;
                img.alt = item.category;
                div.appendChild(img);

                div.innerHTML += `
            ${item.category}  <span class="result">${item.score} <span class="opacity">/ 100</span> </span>
          `;

                summaryContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching the data:', error));
});
