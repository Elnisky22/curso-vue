<template>
	<v-app>
		<NavigationDrawer/>

		<Toolbar/>

		<Content/>

		<Footer/>
	</v-app>
</template>

<script>
import NavigationDrawer from './components/template/Navigation-Drawer.vue';
import Toolbar from './components/template/Toolbar.vue';
import Content from './components/widgets/Content.vue';
import Footer from './components/template/Footer.vue';

export default {
	components: {
		NavigationDrawer,
		Toolbar,
		Content,
		Footer
	},
}
</script>
