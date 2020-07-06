<template>
	<b-navbar class="block mb-3">
		<template slot="brand">
			<b-navbar-item
				tag="router-link"
				:to="{ path: '/' }"
			>
				<img
					src="@/assets/images/logo.svg"
					alt="Monte sua pizza"
				>
				<h1 class="title">Monte sua pizza</h1>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script>
export default {
	name: 'Header'
};
</script>

