import Api from "./Api.js";

export default class Card {
    constructor(data) {
        this.data = data;
    }
    
    render() {
        console.log(data);
        const {
        title,
        image_url,
        synopsis,
        episodes,
        score,
        type,
        members,
        url,
        mal_id
        } = this.data;
    
        const card = document.createElement("div");
        card.classList.add("card");
    
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = image_url;
    
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
    
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = title;
    
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = synopsis;
    
        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
    
        const cardFooterText = document.createElement("small");
        cardFooterText.classList.add("text-muted");
        cardFooterText.innerText = `Episodes: ${episodes} | Score: ${score} | Members: ${members}`;
    
        const cardFooterLink = document.createElement("a");
        cardFooterLink.classList.add("card-link");
        cardFooterLink.href = url;
        cardFooterLink.innerText = "More Info";
    
        cardFooter.append(cardFooterText, cardFooterLink);
    
        cardBody.append(cardTitle, cardText, cardFooter);
    
        card.append(img, cardBody);
    
        return card;
    }
}
