<template>
	<section>
		<SelectDefault
			:options="fillings"
			text="Escolhe o recheio"
			@choice="getFilling"
		/>
	</section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('pizza');
import SelectDefault from '@/components/select/SelectDefault';

export default {
	name: 'PizzaFilling',
	computed: {
		...mapState(['fillings', 'step'])
	},
	methods: {
		...mapActions(['getPizzaFilling', 'getPizzasFillings']),
		getFilling(filling) {
			this.getPizzaFilling(filling);
		}
	},
	mounted() {
		this.getPizzasFillings();
	},
	components: {
		SelectDefault
	}
};
</script>

