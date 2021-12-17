import store from "../data";
import { getRandomJoke } from "../data/joke";

class Joke {
  constructor(holder) {
    this.holder = holder;
    this.h1_1 = null;
    this.h1_2 = null;
    this.btn = null;
    this.init();
    this.render();
    this.events();
    store.subscribe(this.render.bind(this));
  }
  events() {
    this.btn.onclick = () => {
      store.dispatch(getRandomJoke());
      if (document.getElementById("name").value == "") {
        document.getElementById("info").innerText = "Invulveld is leeg!!";
        document.getElementById("info").style.color = "#DE3C4B";
      } else {
        document.getElementById("info").innerText = "Voer een naam in";
        document.getElementById("info").style.color = "#fff";
      }
    };
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
      <h1>XXX</h1>
      <h1>YYY</h1>

      <input id ="name" type="text" name="name">
      <input id="submitName" type="submit" value="Submit">

    `
    );
    this.h1_1 = this.holder.querySelector("h1:nth-of-type(1)");
    this.h1_2 = this.holder.querySelector("h1:nth-of-type(2)");
    this.btn = this.holder.querySelector("#submitName");
  }
  show() {
    this.h1_1.style.display = "block";
    this.h1_2.style.display = "block";
    this.btn.style.display = "block";
  }
  hide() {
    this.h1_1.style.display = "none";
    this.h1_2.style.display = "none";
    //this.btn.style.display = "none";
  }
  render() {
    const {
      joke: { age, count },
      loading
    } = store.getState().joke;
    if (loading || !age) {
      this.hide();
    } else {
      this.show();
    }
    if (age) {
      function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      this.h1_1.innerText = `De gemiddelde leeftijd van ${cap(
        document.getElementById("name").value
      )} is ${age}.`;

      this.h1_2.innerText = `De naam ${cap(
        document.getElementById("name").value
      )} komt ${count} keer voor.`;
    }
  }
}

export default (holder) => new Joke(holder);
