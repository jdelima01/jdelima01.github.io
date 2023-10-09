window.addEventListener('load', function () {


    var headertext = document.getElementById("page_header");
    fetch("/components/header.html")
        .then((res) => res.text())
        .then((text) => {
            headertext.innerHTML = text;
        })
        .catch((e) => console.error(e));


    var footertext = document.getElementById("page_footer");
    fetch("/components/footer.html")
        .then((res) => res.text())
        .then((text) => {
            footertext.innerHTML = text;
        })
        .catch((e) => console.error(e));


    readJson();


})

function readJson() {
    // http://localhost:8080

    var articles = document.getElementById("articles_container");



    fetch('/data/articles.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {

            var article = document.createElement('div');

            json["articles"].forEach(element => {
                console.log(element);
                article.innerHTML = element["Data"];


                articles.appendChild(article);
            });



            //console.log(this.users);
        })
        .catch(function () {
            this.dataError = true;
        })
};