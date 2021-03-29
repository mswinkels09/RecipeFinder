import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.VUE_APP_SPOONACULAR_KEY}`;

export default new Vuex.Store({
  state: {
    ingredients: [],
    searchResults: [],
    mealType: null
  },
  mutations: {
    addIngredient(state, payload) {
      state.ingredients = [...state.ingredients, payload];
    },
    removeIngredient(state, payload) {
      state.ingredients = state.ingredients.filter(i => {
        return i !== payload;
      });
    },
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    setMealType(state, payload) {
      state.mealType = payload
    }
  },
  actions: {
    async getRandomRecipes({getters, commit}) {
      const res = await fetch(getters.recipeURL);
      const data = await res.json();
      commit("setSearchResults", data.recipes);
    }
  },
  getters: {
    recipeURL({ingredients, mealType}) {
      const tags = [...ingredients, mealType].join(",").toLowerCase();
      return `${url}&tags=${tags}`;
    }
  },

});