var app = new Vue({

    el: "#root",

    data: {

        discsList: [],

    },

    mounted() {

        axios

        .get("https://flynn.boolean.careers/exercises/api/array/music")

        .then((result) => {

            this.discsList= result.data.response;
        })
    }
});