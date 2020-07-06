<template>
	<section>
		<b-field :label="text">
			<b-select
				:placeholder="text"
				v-model="itemChoice"
				@input="getChoice"
			>
				<option disabled> {{text}} </option>
				<option
					v-for="option in options"
					:value="option.name"
					:key="option.id"
				>
					{{ option.name }}
				</option>
			</b-select>
		</b-field>
	</section>
</template>

<script>
export default {
	name: 'SelectDefault',
	data() {
		return {
			itemChoice: ''
		};
	},
	props: {
		options: {
			type: Array,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	},
	methods: {
		getChoice() {
			this.$emit('choice', this.itemChoice);
		}
	}
};
</script>
