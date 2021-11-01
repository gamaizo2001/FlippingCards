new Vue(

    {
        el: "#flashcards-app",
        data: {
            cards:[

                {
                    question:"What year was IUPUI founded?",
                    answer:"1969",
                    category:"history",
                    flipped:false
                },



                {
                    question:"What is 2+2?",
                    answer:"Fish",
                    category:"math",
                    flipped:false
                },


                {
                    question:"Is mayonnaise an instrument?",
                    answer:"No",
                    category:"science",
                    flipped:false
                }
            ]
        }
    }

)

// Define a new component called button-counter
/*
Vue.component('flash-card', {
    props: ['question','answer', 'category', 'flipped'],
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        flipCard: function(index) {
            cards[index].flipped = cards[index].!flipped;
        }
    },
    template:

        <div class="card" v-on:click="flipCard">
    <div class="top" v-bind:class="category"></div>
<div class="side1" v-bind:class="{ hide: flipped }">
    <h1>{{ question }}</h1>
</div>>

</div>},

<div class="side2" v-bind:class="{ hide: !flipped }"></div>>
<h1>{{ answer }}</h1>
</div>
</div>


})

*/
