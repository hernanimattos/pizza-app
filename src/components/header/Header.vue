<template>
	<section>
		<Navigation />
		<Atencion
			v-if="pizzaOfTheDay.length > 0"
			:product-name="pizzaOfTheDay[0].name"
			:ingredients="pizzaOfTheDay[0].ingredients"
			:action="payment"
		/>
	</section>

</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('pizza');
import Navigation from '../navigation/Navigation';
import Atencion from '../atencion/Atencion';
export default {
	name: 'Header',
	computed: {
		...mapState(['pizzaOfTheDay'])
	},
	methods: {
		...mapActions(['getPizzasInPromotion', 'paymentPromtionPizza']),
		payment() {
			this.paymentPromtionPizza(this.pizzaOfTheDay[0].id).then(() => {
				this.$router.push('finish-order');
			});
		}
	},
	mounted() {
		if (this.pizzaOfTheDay.length <= 0) {
			this.getPizzasInPromotion();
		}
	},
	components: {
		Atencion,
		Navigation
	}
};
</script>

