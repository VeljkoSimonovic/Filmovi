const showId1 = localStorage.getItem("showId");
const search = document.querySelector('input');
const lista = document.createElement('ul');
const showurl = "http://api.tvmaze.com/shows/" + showId1;

function openShow(showId) {
    window.open("file:///C:/Users/student/Desktop/Web/Projekat%204/showInfoPage/infoPage.html", '_blank');
    localStorage.setItem('showId', showId);
}

function popList() {
    const req = new XMLHttpRequest();
    req.open("GET", "http://api.tvmaze.com/search/shows?q=" + search.value);
    req.send();
    req.onload = () => {
        const reqobj = JSON.parse(req.responseText)
        if (search.value === "" || reqobj.length === 0) {
            lista.style.display = "none"
        } else lista.style.display = "block"
        lista.innerHTML = "";
        reqobj.forEach((e) => {
            let listitem = document.createElement("li");
            listitem.addEventListener("click", () => openShow(e.show.id))
            listitem.textContent = e.show.name;
            lista.appendChild(listitem);
        });
        document.querySelector(".headerdiv div").appendChild(lista);

    }
}
search.addEventListener("keyup", popList)