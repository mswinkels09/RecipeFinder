<template>
    <v-row>
        <div v-for="recipe in searchResults" :key="recipe.id" class="ma-6">
            <v-card width="350" class="mx-auto" height="100%">
                <v-img :src="recipe.image" width="350"></v-img>
                <v-card-title class="recipe-name">{{ recipe.title }}</v-card-title>

                <v-card-text>
                    <div class="subtitle-1">
                        <v-icon class="mr-1">mdi-clock</v-icon>
                        <span>{{ recipe.readyInMinutes }}min</span>
                    </div>
                    <div class="my-2 subtitle-1">
                        <v-icon class="mr-1">mdi-silverware</v-icon>
                        <span>Serves {{ recipe.servings }}</span>
                    </div>
                    <div class="mb-2 subtitle-1">
                        <a :href="recipe.sourceUrl" target="_blank">View Full Recipe</a>
                    </div>

                    <div><strong>Credits</strong>: {{ recipe.creditsText }}</div>
                    </v-card-text>
            </v-card>
        </div>
    </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["searchResults"])
  }
};
</script>
