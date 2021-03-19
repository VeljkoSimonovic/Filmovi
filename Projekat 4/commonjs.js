const search = document.querySelector('input');
const lista = document.createElement('ul');

function openShow(showId) {
    window.open("file:///C:/Users/student/Desktop/Web/Projekat%204/showInfoPage/infoPage.html", '_blank');
    localStorage.setItem('showId', showId);
}

function fetchData(url, fn) {
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();
    req.onload = () => fn(JSON.parse(req.responseText));
}

function popList(data) {
    if (search.value === "" || data.length === 0) {
        lista.style.display = "none"
    } else lista.style.display = "block"
    lista.innerHTML = "";
    data.forEach((e) => {
        let listitem = document.createElement("li");
        listitem.addEventListener("click", () => openShow(e.show.id))
        listitem.textContent = e.show.name;
        lista.appendChild(listitem);
    });
    document.querySelector(".headerdiv div").appendChild(lista);
}
search.addEventListener("keyup", () => fetchData("http://api.tvmaze.com/search/shows?q=" + search.value, popList))