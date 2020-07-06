<template>
	<div class="container">
		<Header />
		<PizzaCard />
		<div class="content">
			<PizzaSize />
		</div>
		<ControlStep
			next-text="Recheio"
			next-step="recheio"
		/>
	</div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import PizzaCard from '@/components/pizzaCard/PizzaCard';
import PizzaSize from '@/components/pizzaSize/PizzaSize';
import ControlStep from '@/components/controlStep/ControlStep';

export default {
	name: 'Home',
	components: {
		Header,
		PizzaSize,
		PizzaCard,
		ControlStep
	}
};
</script>
