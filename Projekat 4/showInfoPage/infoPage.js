const showId = localStorage.getItem("showId");
const button = document.querySelector("button");
button.addEventListener("click", vratiStranicu);

function vratiStranicu() {
    window.open("file:///C:/Users/student/Desktop/Web/Projekat%204/mainPage/mainPage.html", '_blank');
}

function createShow(showId) {
    const req = new XMLHttpRequest();
    req.open('GET', "http://api.tvmaze.com/shows/" + showId);
    req.onload = () => {
        const reqobj = JSON.parse(req.responseText);
        const showName = document.querySelector(".showname")
        showName.textContent = reqobj.name;
        const img = document.createElement('img');
        img.setAttribute('src', reqobj.image.original)
        const cast = document.createElement('h2');
        cast.textContent = "Cast"
            //////////////////////////////////////////////////////////////////////////////////////////////////////
        const seasons = document.createElement('h2');
        const divliste = document.createElement('div');

        const seasonslist = document.createElement('ul');
        const castlist = document.createElement('ul');

        const reqseasons = new XMLHttpRequest();
        reqseasons.open('GET', "http://api.tvmaze.com/shows/" + showId + "/seasons");
        reqseasons.send();
        reqseasons.onload = () => {
            const sezone = JSON.parse(reqseasons.responseText)
            seasons.textContent = "Seasons " + sezone.length;
            sezone.forEach((element) => {
                let listitem = document.createElement('li')
                listitem.textContent = element.premiereDate + " - " + element.endDate;
                seasonslist.appendChild(listitem);
            });
        }
        const reqcast = new XMLHttpRequest();
        reqcast.open('GET', "http://api.tvmaze.com/shows/" + showId + "/cast");
        reqcast.send();
        reqcast.onload = () => {
            const cast = JSON.parse(reqcast.responseText)
            console.log(cast)
            cast.forEach((element) => {
                let listitem = document.createElement('li')
                listitem.textContent = element.person.name;
                castlist.appendChild(listitem);
            });
        }
        divliste.appendChild(seasons)
        divliste.appendChild(seasonslist)
        divliste.appendChild(cast)
        divliste.appendChild(castlist)
            //////////////////////////////////////////////////////////////////////////////////////////////////////
        const showdetails = document.createElement('h2');
        showdetails.classList = "showdetails"
        showdetails.textContent = "Show Details"
        const description = document.createElement('p');
        description.innerHTML = reqobj.summary;
        document.querySelector('article').appendChild(img);
        document.querySelector('article').appendChild(divliste);
        document.querySelector('article').appendChild(showdetails);
        document.querySelector('article').appendChild(description);
    }
    req.send();


}
button.addEventListener("click", vratiStranicu);
createShow(showId);