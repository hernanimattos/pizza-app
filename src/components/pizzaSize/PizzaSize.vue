<template>
	<section>
		<SelectDefault
			v-if="sizes"
			:options="sizes"
			@choice="getSize"
			text="Escolha o Tamanho da Pizza"
		/>
	</section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('pizza');
import SelectDefault from '@/components/select/SelectDefault';

export default {
	name: 'PizzaSize',
	computed: {
		...mapState(['sizes', 'step']),
	},
	methods: {
		...mapActions(['getPizzaSize', 'controlSteps', 'getPizzasSizes']),
		getSize(sizeChoiced) {
			this.controlSteps('size');
			this.getPizzaSize(sizeChoiced);
		},
	},
	components: {
		SelectDefault,
	},
	mounted() {
		this.getPizzasSizes();
	},
};
</script>

<style></style>
