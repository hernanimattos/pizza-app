<template>
	<section>
		<b-message
			title="Atencão"
			type="is-warning"
			aria-close-label="Close message"
		>
			<p class="title">
				{{` A pizza ${productName} está em promocão, compre e acumule pontos!`}}
			</p>

			<div class="ingredients">
				<p>Detalhes: </p>
				<p><strong> Sabor: </strong>{{ingredients.filling}}</p>
				<p><strong> Massa: </strong>{{ingredients.dough}}</p>
				<p><strong> Tamanho: </strong>{{ingredients.size}}</p>
			</div>
			<div class="buttons">
				<b-button
					type="is-primary"
					expanded
					@click="action"
				>Comprar
				</b-button>
			</div>
		</b-message>
	</section>
</template>

<script>
export default {
	name: 'Atencion',
	props: {
		ingredients: {
			type: Object
		},
		productName: {
			type: String
		},
		action: {
			type: Function
		}
	}
};
</script>
