export default class Api {
  static BASE = "https://api.jikan.moe/";

  static async topAnime() {
    const response = await fetch(`${Api.BASE}v4/top/anime`, {
      method: "GET",
      headers: {},
    });
    const data = await response.json();
    return data.data
  }

  static render(data) {

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = data.trailer.images.maximum_image_url;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = data.title;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = data.synopsis;

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const cardFooterText = document.createElement("small");
    cardFooterText.classList.add("text-muted");
    cardFooterText.innerText = `Episodes: ${data.episodes} | Score: ${data.score} | Members: ${data.members}`;

    const cardFooterLink = document.createElement("a");
    cardFooterLink.classList.add("card-link");
    cardFooterLink.href = data.url;
    cardFooterLink.innerText = "More Info";
    cardFooterLink.target = "_blank";

    cardFooter.append(cardFooterText, cardFooterLink);

    cardBody.append(cardTitle, cardText, cardFooter);

    card.append(img, cardBody);

    return card;

  }

  static async createElement (){
    const array = await Api.topAnime()
    console.log(array)
    array.forEach((element) => {
      document.body.append(this.render(element))
    })

  }
}
console.log(Api.topAnime())

Api.createElement()