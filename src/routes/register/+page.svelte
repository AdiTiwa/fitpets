<script>
// @ts-nocheck

    import { db, auth } from '$lib/config'
    import { userStore } from 'sveltefire'
    import { get } from 'svelte/store';
    import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
    import { CreateUser, UserConverter } from '$lib/schema/user';
	import { onMount } from 'svelte';
    const user = userStore(auth);

    onMount(async () => {

        try {
            const userId = get(user).uid;

            const userdoc = await getDoc(doc(db, `users/${user.uid}`))

            try {
                var username = userdoc.data().name

                goto('/home')
            } catch (e) {
                
            }
        } catch (e) {
            console.log(e)

            if (browser) {
                goto("/home")
            }
        }
    })
    
    function onsubmit() {
        const form = document.getElementById("registration_form");
        
        const userId = get(user).uid;

        if (form.elements["username"] && form.elements["petname"] && form.elements["pettype"]) {
            setDoc(doc(db, `users/${userId}`).withConverter(UserConverter), {
                name: form.elements["username"].value,
                pet: { 
                    name: form.elements["petname"].value,
                    type: form.elements["pettype"].value,
                    stats: {
                        health: 100,
                        defense: 100,
                        strength: 100,
                        speed: 100,
                    },
                    experience: 0,
                    level: 1,
                    cosmetics: [],
                },
                items: [],
                friends: [],
                battles: [],
                workouts: [],
                timestamp: Timestamp.now(),
                uninitialized: false,
            })
            if (browser) {
                goto("/home")
            }
        }
    }
</script>

<p>create a new user :D</p>

<form id = "registration_form">
    <input name="username">
    <p>Pet Information</p>
    <input name="petname">
    <select name="pettype" multiple>
        <option value="strength">Strength</option>
        <option value="stamina">Stamina</option>
        <option value="option3">Option3</option>
        <option value="option4">Option4</option>
    </select>
    <button on:click={onsubmit}>Submit Form Information</button>
</form>