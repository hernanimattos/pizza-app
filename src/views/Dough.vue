<template>
	<div class="container">
		<Header />
		<PizzaCard />
		<div class="content">
			<PizzaDough />
		</div>
		<ControlStep prev-text="Recheio" />
	</div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import PizzaCard from '@/components/pizzaCard/PizzaCard';
import PizzaDough from '@/components/pizzaDough/PizzaDough';
import ControlStep from '@/components/controlStep/ControlStep';

export default {
	name: 'Dough',
	components: {
		Header,
		PizzaCard,
		PizzaDough,
		ControlStep
	}
};
</script>
