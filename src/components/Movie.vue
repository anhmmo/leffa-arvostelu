<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ movie.name }}</div>
            <span class="grey--text">{{ movie.release_year }} &bull;
              {{ movie.genre }} &bull;
              {{ movie.movie_length }}
			</span>
          </div>
        </v-card-title>
        <v-row justify="center">
				<v-dialog v-model="dialog" persistent width="400">
				<template v-slot:activator="{ on }">
					<v-btn color="primary" dark v-on="on">Rate this movie</v-btn>
				</template>
				<v-card
					class="mx-auto elevation-20"
					color="purple"
					dark
					style="width: 400px; overflow-x: hidden;"
				>
					<v-row justify="space-between">
					<v-col cols="8">
						<v-card-title primary-title>
						<div>
							<div class="headline">{{ movie.name }}</div>
							<div>‧ {{ movie.genre }}</div>
							<div>{{ movie.release_year }} </div>
						</div>
						</v-card-title>
					</v-col>
					<v-img
						class="shrink ma-2"
						contain
						height="125px"
						:src="movie.movie_picture"
						style="flex-basis: 125px"
					></v-img>
					</v-row>
					<v-divider dark></v-divider>
					
					
					<v-card-actions class="pa-4" @click="rate">
					<div class="my-2">
						<v-btn x-small color="secondary" dark >Rate this movie</v-btn>
					</div>
						
					<v-spacer></v-spacer>
					
					<span class="grey--text text--lighten-2 caption mr-2">
						({{ rating }})
					</span>
					<v-rating
						v-model="rating"
						background-color="white"
						color="yellow accent-4"
						dense
						half-increments
						hover
						size="18"
					></v-rating>
					</v-card-actions>
					<div class="btnBox">
						<v-btn class="ma-1" id="acceptBtn" color="primary" text @click="dialog = false">Accept
							<v-icon class="acceptBtn" right>mdi-checkbox-marked-circle</v-icon>
						</v-btn>

						<v-btn class="ma-1" id="acceptBtn" color="red" dark text @click="dialog = false">Close
							<v-icon right>mdi-cancel</v-icon>
						</v-btn>
					</div>
				</v-card>
			</v-dialog>
			</v-row>
        <v-card-text>
          {{ movie.description }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>


			
        

<script>
	import axios from 'axios';

	export default {
		
		name: 'Movie',
		data() {
			return {
				movie: [],
				rating: 5,
				dialog: false
			};
		},
		mounted() {
			this.fetchMovie();
		},
		methods: {
			async rate() {
				
					const movieId = this.$route.params.id;
					return axios({
						method: 'post',
						data: {
							rate: this.rating,
							dialog: false
						},
						url: `http://localhost:8081/movies/rate/${movieId}`,
						headers: {
							'Content-Type': 'application/json',
						},
					})
					.then(() => {
						this.$swal(`Thank you for rating! ${this.rating}`, 'success');
					})
					.catch((error) => {
						const message = error.response.data.message;
						this.$swal('Oh oo!', `${message}`, 'error');
					});
				
			},
			async fetchMovie() {
				return axios({
					method: 'get',
					url: `http://localhost:8081/api/movies/${this.$route.params.id}`,
				})
				.then((response) => {
					this.movie = response.data;
				})
				.catch(() => {
				});
			},
		},
	};


</script>