console.log("My News App");

let accordion = document.getElementById("accordion");

let xhr = new XMLHttpRequest();
xhr.open("GET","https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5ff3357ebd1a4c1f8d60f2676ea43fa1",true);

xhr.onloadend = function(){
    // console.log(this.responseText)
    articles_json = JSON.parse(this.responseText);
    articles_json = articles_json.articles;
    // console.log(articles_json.articles);
    newsHtml = "";
    articles_json.forEach((article,index) => {
        newsArticle = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        ${article.title}
                                    </button>
                                </h2>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
                                <div class="card-body">
                                    ${article.description}
                                </div>
                            </div>
                        </div>`;
        console.log(article)
        newsHtml += newsArticle;
    });

    accordion.innerHTML = newsHtml;

}

xhr.send();

