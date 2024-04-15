<script>

import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',

    setup() {
        const email = ref('');
        const password = ref('');
        const router = useRouter();

        const submit = async () => {
            const result = await axios.post('login', {
                email: email.value,
                password: password.value,
            });
            console.log(result.data);
            localStorage.setItem('token', result.data.data.token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.data.token;
            await router.push('/');
        }

        return {
            email,
            password,
            submit,
        }
    }

}
</script>

<template>
    <form class="form-signin" @submit.prevent="submit">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="email" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="email" class="form-control" placeholder="Email address" required
            autofocus>
        <label for="password" class="sr-only">Password</label>
        <input v-model="password" type="password" id="password" class="form-control" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
</template>

<style scoped>
html,
body {
    height: 100%;
}

body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}

.form-signin .form-control:focus {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>