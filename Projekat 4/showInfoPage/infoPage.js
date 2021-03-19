const showId = localStorage.getItem("showId");
const button = document.querySelector("button");
const casturl = "http://api.tvmaze.com/shows/" + showId + "/cast";
const seasonsurl = "http://api.tvmaze.com/shows/" + showId + "/seasons"
const showurl = "http://api.tvmaze.com/shows/" + showId;
const divliste = document.createElement('div');
button.addEventListener("click", vratiStranicu);

function vratiStranicu() {
    window.open("file:///C:/Users/student/Desktop/Web/Projekat%204/mainPage/mainPage.html", '_blank');
}

function createShow(data) {
    const showName = document.querySelector(".showname")
    showName.textContent = data.name;
    const img = document.createElement('img');
    img.setAttribute('src', data.image.original)
    const showdetails = document.createElement('h2');
    showdetails.classList = "showdetails"
    showdetails.textContent = "Show Details"
    const description = document.createElement('p');
    description.innerHTML = data.summary;
    document.querySelector('article').appendChild(img);
    document.querySelector('article').appendChild(divliste);
    document.querySelector('article').appendChild(showdetails);
    document.querySelector('article').appendChild(description)


}

function createSeasons(data) {
    const seasons = document.createElement('h2');
    const seasonslist = document.createElement('ul');
    seasons.textContent = "Seasons " + data.length;
    data.forEach((element) => {
        let listitem = document.createElement('li')
        listitem.textContent = element.premiereDate + " - " + element.endDate;
        seasonslist.appendChild(listitem);
    });
    divliste.appendChild(seasons)
    divliste.appendChild(seasonslist)
}

function createCast(data) {
    const castlist = document.createElement('ul');
    const cast = document.createElement('h2');
    cast.textContent = "Cast"
    data.forEach((element) => {
        let listitem = document.createElement('li')
        listitem.textContent = element.person.name;
        castlist.appendChild(listitem);
    });
    divliste.appendChild(cast)
    divliste.appendChild(castlist)
}



fetchData(showurl, createShow)
fetchData(seasonsurl, createSeasons)
fetchData(casturl, createCast)