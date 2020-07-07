<template>
	<div class="content">
		<div class="buttons">
			<b-button
				v-if="prevText"
				type="is-primary"
				@click="()=> $router.go(-1)"
			>{{prevText}}
			</b-button>
			<b-button
				v-if="nextText"
				type="is-primary"
				@click="changeStep"
			>{{nextText}}</b-button>
		</div>
		<b-notification
			v-if="errors.length > 0"
			type="is-danger"
			aria-close-label="Close notification"
			role="alert"
		>
			<p
				v-for="(error, i) in errors"
				:key="i"
			> Você ainda não escolheu <router-link :to="error.path">{{error.name}}
				</router-link>
			</p>
		</b-notification>
		<div class="buttons">
			<b-button
				type="is-primary"
				expanded
				@click="payment"
			>Comprar
			</b-button>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('pizza');

export default {
	name: 'ControlStep',
	data() {
		return {
			errors: []
		};
	},
	computed: {
		...mapState(['step', 'pizza'])
	},
	methods: {
		...mapActions(['controlSteps', 'paymentPizza']),
		changeStep() {
			this.$router.push(this.nextStep);
			this.controlSteps(this.nextStep);
		},
		payment() {
			this.pizzaRequisitsError();

			if (this.errors.length == 0) {
				this.paymentPizza(this.pizza).then(() => {
					this.$router.push('finish-order');
				});
			}
		},

		pizzaRequisitsError() {
			const translate = {
				size: {
					path: '/',
					name: 'tamanho'
				},
				filling: {
					path: 'sabor',
					name: 'sabor'
				},
				dough: {
					path: 'massa',
					name: 'massa'
				}
			};
			this.errors = Object.keys(this.pizza)
				.map(key => {
					if (this.pizza[key].length == 0) {
						return translate[key];
					}
				})
				.filter(v => v != undefined);
		}
	},
	props: {
		prevText: {
			type: String
		},
		nextText: {
			type: String
		},
		nextStep: {
			type: String
		}
	}
};
</script>
