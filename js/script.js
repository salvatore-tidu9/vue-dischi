var app = new Vue({

    el: "#root",

    data: {

        discsList: [],

        genres: [],

        selectedGenre: ""

    },

    mounted() {

        axios

        .get("https://flynn.boolean.careers/exercises/api/array/music")

        .then((result) => {

            this.discsList= result.data.response;

            //-------------------------------------------

            this.discsList.forEach(disc => {

                // if (!this.genres.includes(disc.genre)) {

                //     this.genres.push(disc.genre);

                // }

                //-----Metodo indexOf-----

                if (this.genres.indexOf(disc.genre) == -1) {

                    this.genres.push(disc.genre);
                }

            });

            //-------------------------------------------

            this.discsList.sort(function(a, b) {

                return (a.year) - (b.year);

            });

        });

    }

});