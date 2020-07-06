<template>
	<div class="container">
		<Header />
		<PizzaCard />
		<div class="content">
			<PizzaFilling />
		</div>
		<ControlStep
			prev-text="Tamanho"
			next-text="Massa"
			next-step="massa"
		/>
	</div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import PizzaCard from '@/components/pizzaCard/PizzaCard';
import PizzaFilling from '@/components/pizzaFilling/PizzaFilling';
import ControlStep from '@/components/controlStep/ControlStep';

export default {
	name: 'Felling',
	components: {
		Header,
		PizzaCard,
		PizzaFilling,
		ControlStep
	}
};
</script>
