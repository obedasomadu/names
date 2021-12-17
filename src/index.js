import store from "./data";
import { getRandomJoke } from "./data/joke";
import loading from "./components/Loading";
import joke from "./components/Joke";

loading(document.getElementById("app"));
joke(document.getElementById("app"));
//console.log(store.getState().joke.test);

store.dispatch(getRandomJoke());
