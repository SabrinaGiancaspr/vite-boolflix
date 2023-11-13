// Importa la funzione "reactive" da Vue
import { reactive } from "vue";
// Crea un oggetto "store" reattivo che conterrà i dati
export const store = reactive({
  saveName: '',
  moviesArray: [],
  seriesArray:[],
  API_KEY: '2666caa6db838aa58fe40fb4511ab3df&',
  genresArray:[]
});
