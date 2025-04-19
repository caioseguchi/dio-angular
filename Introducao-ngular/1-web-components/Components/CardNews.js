class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    //Component Root
    const componentRoot = document.createElement("div"); //Cria elemenyo div
    componentRoot.setAttribute("class", "card"); //Set o nome div class

    //Filho 1
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    //Filho 1.1
    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    //Filho 1.2
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    //Filho 1.3
    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    //Ancoragem 1
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    //Filho 2
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    //Filho 2.1
    const newImage = document.createElement("img");
    newImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
    newImage.alt = "Foto da Noticia";

    //Ancoragem 2
    cardRight.appendChild(newImage);

    //Ancoragem Root
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .card {
          width: 80%;
          box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
        }
        
        .card__left > span {
          font-weight: 400;
        }
        
        .card__left > a {
          margin-top: 15px;
          font-size: 25px;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        
        .card__left > p {
          color: rgb(70, 70, 70);
        }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
