<script>
// @ts-nocheck

    import { Doc, User } from 'sveltefire'
    import { db, auth } from '$lib/config'
    import { GoogleAuthProvider, OAuthCredential, signInWithPopup } from 'firebase/auth'
    import { DocumentSnapshot, doc, getDoc, setDoc, collection } from 'firebase/firestore'
    import { UserConverter, CreateUser, CreateUserUninitialized } from '$lib/schema/user'
	import { goto } from '$app/navigation';
    import { userStore } from 'sveltefire'

    const store = userStore(auth);

    async function gotosetup() {
        const user = get(store)

        const userdoc = await getDoc(doc(db, `users/${user.uid}`))

        console.log(userdoc.data())

        if (!userdoc.exists()) {
            setDoc(doc(db, `users/${user.uid}`), { uninitialized: true })
            setTimeout(function () {
                goto('/register');
            }, 2000);
        } else if (userdoc.data().uninitialized) {
            setTimeout(function () {
                goto('/register');
            }, 2000);
        } 
    }

    async function loginwithgoogle() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);

                const user = result.user;

                await gotosetup()
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    async function signupwithemail() {
        const form = document.getElementById("signup")

        if (form.elements["email"] && form.elements["password"]) {
            auth.createUserWithEmailAndPassword(form.elements["email"], form.elements["password"]).then(cred => {
                gotosetup();
            })
        }
    }

    async function signinwithemail() {
        const form = document.getElementById("signin")

        if (form.elements["email"] && form.elements["password"]) {
            auth.signInWithEmailAndPassword(form.elements["email"], form.elements["password"])
                .then(cred => {
                    gotosetup();
                })
                .catch(error => {
                console.log(error.message);
                })
        }
    }

    async function signout() {
        await auth.signOut()
    }
</script>

<User auth={auth} let:user>
    Hello {user.uid}
    <button on:click={signout}>Sign out</button>

    <div slot="signedOut">
        <button on:click={loginwithgoogle}>Sign In With Google</button>
        <p>Register with Email</p>
        <form id = "signup">
            <input name = "email">
            <input name = "password">
            <button on:click={signupwithemail}>Sign Up</button>
        </form>
        <p>Sign In with Email</p>
        <form id = "signin">
            <input name="email">
            <input name="password">
            <button on:click={signinwithemail}>Sing in</button>
        </form>
    </div>
</User>

