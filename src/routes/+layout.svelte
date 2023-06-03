<script>
    import "../app.css";
</script>

<div class="app">
	<p class="flex justify-center">Header</p>
	<main>
        <nav class = "flex justify-center">
            <a href="/" class="px-1">Landing Page</a>
            <a href="/home" class="px-1">Home</a>
            <a href="/battle" class="px-1">Battle</a>
            <a href="/train" class="px-1">Train</a>
        </nav>
		<slot />
	</main>

	<p class="flex justify-center">Footer</p>
</div>

<style>
	
</style>