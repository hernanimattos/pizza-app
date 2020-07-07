<template>
	<section class="content">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">
					Pizza escolhida
				</p>
			</header>
			<div class="card-content">
				<div class="content">
					<router-link
						to="/"
						disabled
					>
						<p><strong>Tamanho: </strong> {{pizza.size}}</p>
					</router-link>
					<router-link to="/recheio">
						<p>
							<strong>Recheio: </strong> {{pizza.filling}}
						</p>
					</router-link>
					<router-link to="/massa">
						<p>
							<strong>Massa: </strong> {{pizza.dough}}
						</p>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('pizza');

export default {
	name: 'PizzaIngredients',
	computed: {
		...mapState(['pizza'])
	}
};
</script>
