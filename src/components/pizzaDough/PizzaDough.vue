<template>
	<section>
		<SelectDefault
			:options="doughs"
			text="Escolha a massa"
			@choice="getDough"
		/>
	</section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('pizza');
import SelectDefault from '@/components/select/SelectDefault';

export default {
	name: 'PizzaDough',
	computed: {
		...mapState(['doughs', 'step'])
	},
	methods: {
		...mapActions(['getPizzaDough', 'getPizzasDoughs']),
		getDough(dough) {
			this.getPizzaDough(dough);
		}
	},
	mounted() {
		this.getPizzasDoughs();
	},
	components: {
		SelectDefault
	}
};
</script>
