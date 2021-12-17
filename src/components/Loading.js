import store from "../data";

class Loading {
  constructor(holder) {
    this.holder = holder;
    this.ref = this.init();
    this.render();
    store.subscribe(this.render.bind(this));
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
      <p class="joke__loading">Loading...</p>
    `
    );
    return this.holder.querySelector(".joke__loading");
  }
  show() {
    this.ref.style.display = "block";
  }
  hide() {
    this.ref.style.display = "none";
  }
  render() {
    if (store.getState().joke.loading) {
      this.show();
    } else {
      this.hide();
    }
  }
}

export default (holder) => new Loading(holder);
