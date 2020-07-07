<template>
	<div class="container">
		<Navigation />
		<b-notification
			v-if="orderStatus && orderStatus.message"
			type="is-success"
			aria-close-label="Close notification"
		>
			<p class="title"> {{orderStatus.title}}</p>
			{{orderStatus.message}}
		</b-notification>

	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('pizza');
import Navigation from '@/components/navigation/Navigation';

export default {
	name: 'FinishOrder',
	computed: {
		...mapState(['orderStatus'])
	},
	components: {
		Navigation
	}
};
</script>
