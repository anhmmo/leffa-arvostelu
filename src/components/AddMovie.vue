<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
            label="Movie Name"
            v-model="name"
            :rules="nameRules"
            required
        ></v-text-field>
        <v-textarea
            name="input-7-1"
            label="Movie Description"
            v-model="description">
        </v-textarea>
        <v-select
            label="Movie Release Year"
            v-model="release_year"
            required
            :rules="releaseRules"
            :items="years"
        ></v-select>
         <v-text-field
            label="Movie Length"
            v-model="movie_length"
            required>
        </v-text-field>
        <v-text-field
            label="Movie Genre"
            v-model="genre"
            required
            :rules="genreRules"
        ></v-text-field>
        <v-text-field
            label="Movie Picture (must be JPG, PNG format)"
            v-model="movie_picture"
            required
            :rules="imagesRules"
        ></v-text-field>
        <v-btn
            @click="submit"
            :disabled="!valid"
            >
        submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
    </v-form>
</template>
<script>

 import axios from 'axios';
 export default {
    data: () => ({
        valid: true,
        name: '',
        description: '',
        movie_length: '',
        genre: '',
        release_year: '',
        movie_picture: '',
        nameRules: [
            (v) => !!v || 'Movie name is required'
        ],
        genreRules: [
            v => !!v || 'Movie genre year is required',
            v => (v && v.length <= 80) || 'Genre must be less than equal to 80 characters.',
        ],
        releaseRules: [
            v => !!v || 'Movie release year is required',
        ],
        imagesRules: [
            v => (v.match(/\.(jpeg|jpg|gif|png)$/) != null) || 'Not valid image url',
        ],
        select: null,
        years: [
            '2020',
            '2019',
            '2018',
            '2017',
            '2016',
            '2015',
            '2014',
            '2013',
            '2012',
            '2011',
            '2010',
            '2009',
            '2008',
            '2007',
            '2006',
            '2005',
        ]
    }),
    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                return axios({
                    method: 'post',
                    data: {
                    name: this.name,
                    description: this.description,
                    release_year: this.release_year,
                    movie_length: this.movie_length,
                    genre: this.genre,
                    movie_picture: this.movie_picture
                    },
                    url: '/movies',
                    headers: {
                    'Content-Type': 'application/json'
                    }
                })
                .then((response) => {
                    console.log(response);
                    this.$swal(
                    'Great!',
                    'Movie added successfully!',
                    'success',
                    );
                    this.$router.push({ name: 'Home' });
                    this.$refs.form.reset();
                })
                .catch((error) => {
                    console.log(error);
                    this.$swal(
                'Oh oo!',
                'Could not add the movie!',
                'error',
                );

                });
            }
        },
        clear () {
        this.$refs.form.reset()
        }
    }
 }
</script>