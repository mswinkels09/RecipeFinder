<template>
  <v-app>
    <v-app-bar app color="primary" class="font-weight-bold" dark>
      RECIPE FINDER
    </v-app-bar>
    <v-main>
      <v-row class="justify-center mt-5">
        <KeyIngredients />
      </v-row>
      <v-row class="justify-center mt-7">
        <MealType />
      </v-row>
      <v-row class="justify-center mt-10">
        <v-btn color="primary" @click="getRandomRecipes">Find recipes</v-btn>
      </v-row>
      <v-row class="justify-space-around ma-10">
        <RecipeResults />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import RecipeResults from "./components/RecipeResults.vue";
import KeyIngredients from "./components/KeyIngredients";
import  MealType  from "./components/MealType";

export default {
  components: {
    RecipeResults,
    KeyIngredients,
    MealType,
  },
  methods: {
    ...mapActions(["getRandomRecipes"])
  }
};
</script>
