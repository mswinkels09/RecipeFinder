<template>
    <div>
        <v-card class="">
            <v-card-text>
                <v-chip-group>
                    <v-chip
                        v-for="i in ingredients"
                        :key="i"
                        close
                        @click:close="removeIngredient(i)"
                        color="purple lighten-3"
                        >{{i}}</v-chip>
                </v-chip-group>
                <v-form @submit.prevent="submit">
                    <v-text-field 
                        filled 
                        outlined 
                        type="text" 
                        v-model="ingredient"
                        label="Choose Ingredients"/>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    data() {
        return {
            ingredient: "",
        } 
    },
    methods: {
        ...mapMutations(["addIngredient", "removeIngredient"]),
        submit() {
            this.addIngredient(this.ingredient);
            this.ingredient = "";
        },

    },
    computed: {
        ...mapState(["ingredients"])
    },

}
</script>

<style scoped>


</style>