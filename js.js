Vue.component('card', {
    template: `
        <div class="container">
            <div class="card" v-bind:class="{card_active}">
                <div class="wrapper wrapper_active">
                    <div class="card__head">
                        <figure class="card__figure">
                            <img :src="image" alt="Modern BCAA" class="card__image">
                        </figure>
                        <div class="card__description">
                            <h3 class="card__header" v-bind:class="{black:black}">{{product}}</h3>
                            <h4 class="card__brand">{{brand}}</h4>
                            <p class="card__text">{{description}}</p>
                        </div>
                    </div>
                    <div class="card__details">
                        <h4>Details:</h4>
                        <p>{{details}}</p>
                    </div>
                    <div class="card__footer">
                        <div class="card__components">
                            <button v-on:click="f2" class="btn card__btn">Components</button>
                        </div>
                        <div class="card__price">
                            <p>Price: <span>{{price}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shadow"></div>
            <div class="card__components_description" v-bind:class="{card__components_description_passive,card__components_description_active}">
                <ul class="card__list">
                    <li v-for="component in components" class="card__list_item">{{ component}}</li>
                </ul>
            </div>
        </div>
    `,
    data() {
        return {
            image: 'modern_bcaa.png',
            product: "Modern BCAA",
            brand: 'USPlabs',
            description: 'Branched-chain essential amino acids',
            details: 'The trendy new dietary supplement offers an improved formula that contains 15 grams of amino acids — an increase of 5 grams over the original formula, which had 10 grams of amino acids per serving',
            price: '$49.99',
            components: [
                '10 gramms BCAA',
                '2 gramms active form of glutamine',
                'no artifitial colors and additors added',
                'GREAT taste!!!',
            ],
            trigger: false,
            card_active: true,
            card__components_description_active: false,
            card__components_description_passive: true,
        }
    },

    methods: {
        f1() {
            let comp = document.querySelector('.card__components_description');
            let card = document.querySelector('.card');
            if (!this.trigger) {
                card.classList.toggle('card_active');
                comp.classList.toggle('card__components_description_active');
                comp.classList.toggle('card__components_description_passive');
                this.trigger = true;
            } else {
                comp.classList.toggle('card__intermediate');
                comp.classList.toggle('card__components_description_active');
                comp.classList.toggle('card__components_description_passive');
                this.trigger = false;
                setTimeout(function () {
                    comp.classList.toggle('card__intermediate');
                    card.classList.toggle('card_active');
                }, 500)
            }
        },
        f2() {
            this.card_active = !this.card_active;
            this.card__components_description_passive = !this.card__components_description_passive;
            this.card__components_description_active = !this.card__components_description_active;
        }
    },
})



let app = new Vue({
    el: '#app',
})

// let comp = document.querySelector('.card__components_description');
// let btn = document.querySelector('.btn');
// let card = document.querySelector('.card');
// let wrapper = document.querySelector('.wrapper');
// let trigger = false;
// btn.onclick = showMenu;

// function showMenu() {
//     if (!trigger) {
//         card.classList.toggle('card_active');
//         comp.classList.toggle('card__components_description_active');
//         comp.classList.toggle('card__components_description_passive');
//         // wrapper.classList.remove('card_active');
//         trigger = true;
//     } else {
//         comp.classList.toggle('card__intermediate');
//         comp.classList.toggle('card__components_description_active');
//         comp.classList.toggle('card__components_description_passive');
//         trigger = false;
//         setTimeout(function () {
//             comp.classList.toggle('card__intermediate');
//             card.classList.toggle('card_active');
//         }, 500)
//     }
// }