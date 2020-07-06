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
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('pizza');

export default {
	name: 'ControlStep',
	computed: {
		...mapState(['step'])
	},
	methods: {
		...mapActions(['controlSteps']),
		changeStep() {
			this.$router.push(this.nextStep);
			this.controlSteps(this.nextStep);
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
