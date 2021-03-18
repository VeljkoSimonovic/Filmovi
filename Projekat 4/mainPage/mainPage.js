function top50shows() {
    const req = new XMLHttpRequest();
    req.open('GET', "http://api.tvmaze.com/shows");
    req.onload = () => {
        const reqobj = JSON.parse(req.responseText);
        reqobj.forEach((element, index) => {
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
    req.send();


}
top50shows();