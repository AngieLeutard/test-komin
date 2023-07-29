const articles = [
    {
        "picture": "assets/pictures/cards_pictures/picture1.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 2j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "13 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture2.png",
        "text": "Sales & Marketing update",
        "info": "Il y a 5j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "11 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture2.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 6j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "18 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture3.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 7j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "13 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture4.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 9j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "13 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture5.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 10j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "13 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture6.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 13j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "13 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture7.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 16j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "13 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture8.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 18j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "13 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture9.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 22j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "43 min"
    },
    {
        "picture": "assets/pictures/cards_pictures/picture10.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 23j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "13 min",
        "disable": true
    },
    {
        "picture": "assets/pictures/cards_pictures/picture11.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
        "info": "Il y a 27j",
        "title": "Onboarding",
        "description": "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
        "timer": "28 min",
        "disable": true
    }
]

let totalArticles = articles.length;

for (let i = 0; i < totalArticles; i++) {

    var card = document.createElement("a");
    card.classList.add("card");
    card.href = "#";

    card.innerHTML = 
    `<div class="card_pictureWrapper">
        <img class="card_picture" src=${articles[i].picture} alt="">
        <div class="card_descriptionWrapper">
            <h2 class="card_title text -xsmall -white">${articles[i].title}</h2>
            <p class="card_description text -small -white">${articles[i].description}</p>
        </div>
        <div class="card_timerWrapper">
            <svg class="card_timerIcon" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path d="M6.613.525c-.431.051-.639.33-.606.814.02.284.113.451.315.566l.145.082 1.44.008c1.561.01 1.639.004 1.824-.129.194-.141.284-.436.237-.779C9.936.846 9.838.701 9.641.6L9.484.52 8.095.517c-.763-.002-1.43.002-1.482.008m5.476 1.274c-.278.141-.499.453-.5.708-.001.252.054.324.888 1.156.824.822.896.876 1.15.874.343-.002.773-.435.773-.776-.001-.249-.078-.353-.834-1.113-.384-.387-.762-.747-.841-.801a.476.476 0 0 0-.32-.108.497.497 0 0 0-.316.06M7.24 2.44a5.739 5.739 0 0 0-4.826 7.055 5.75 5.75 0 0 0 3.415 3.955c.66.27 1.243.39 1.987.409.778.021 1.28-.049 1.979-.278a5.75 5.75 0 0 0 3.724-3.887 5.58 5.58 0 0 0 .207-1.773c-.094-2.721-2.09-4.993-4.793-5.456-.355-.061-1.339-.075-1.693-.025m1.333 1.483c1.563.202 2.926 1.322 3.436 2.824.177.521.216.77.216 1.386 0 .617-.039.866-.216 1.387A4.264 4.264 0 0 1 9 12.264a4.412 4.412 0 0 1-2.063-.01 4.281 4.281 0 0 1-3.055-3.037 4.516 4.516 0 0 1-.054-1.957c.283-1.398 1.353-2.631 2.705-3.122a4.282 4.282 0 0 1 2.04-.215m-.746.984c-.258.04-.392.128-.503.333-.056.105-.057.128-.065 1.587-.008 1.597-.006 1.627.135 1.817.141.191.554.286.861.197.283-.082.405-.222.463-.533.038-.208.039-2.604 0-2.841-.036-.223-.129-.381-.272-.464a1.015 1.015 0 0 0-.619-.096" fill-rule="evenodd" /></svg>
            <span class="card_timerText text -xxsmall">${articles[i].timer}</span>
        </div>
    </div>
    <p class="card_text text -medium">${articles[i].text}</p>
    <span class="card_info text -small">${articles[i].info}</span>`;

    let cardsWrapper = document.getElementById("cardsWrapper");
    cardsWrapper.appendChild(card);

    if(articles[i].disable) {
        card.classList.add("-disable")
    }
}