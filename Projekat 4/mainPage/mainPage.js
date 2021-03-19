const top50url = "http://api.tvmaze.com/shows";



function top50shows(data) {
    data.forEach((element, index) => {
        if (index < 50) {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const pgf = document.createElement('p');
            img.setAttribute('src', element.image.medium);
            pgf.textContent = element.name;
            div.appendChild(img);
            div.appendChild(pgf);
            document.querySelector('article').appendChild(div);
            div.addEventListener("click", () => openShow(element.id))
        }
    });
}
fetchData(top50url, top50shows);