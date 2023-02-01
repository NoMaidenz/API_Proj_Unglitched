class Card {
  constructor(image) {
    this.WaifuCard = Object.assign(document.createElement("div"), {
      className: "card",
      innerHTML: `
           
 
  <img class="img" src="" alt="">
 
              `,
    });
  }
  injectObject() {
    document.querySelector(".card-container").append(this.WaifuCard);
  }
}
export { Card };
