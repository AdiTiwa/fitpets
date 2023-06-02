<script>
	import { fire_config } from "$lib/config";
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    import { getAuth } from "firebase/auth";


    const app = initializeApp(fire_config);
    const db = getFirestore(app);
    const auth = getAuth(app);
</script>

<div class="app">
	<p>Header</p>

	<main>
		<slot />
	</main>

	<p>Footer</p>
</div>

<style>
	
</style>
