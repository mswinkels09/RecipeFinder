<template>
    <div>
        <v-chip-group>
            <v-chip
                :value="option"
                v-for="option in options"
                :key="option"
                @click="toggle(option)">
                {{option}}
            </v-chip>
        </v-chip-group>

    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return{
            options: [
                "Breakfast",
                "Lunch",
                "Main Course",
                "Side Dish",
                "Dessert"
            ]
        }
    },
    methods: {
        ...mapMutations(["setMealType"]),
        toggle(option) {
            if(this.mealType === option) {
                this.setMealType(null);
            } else {
                this.setMealType(option)
            }
        }
    },
    computed: {
        ...mapState(['mealType'])
    }

}
</script>

<style>

</style>