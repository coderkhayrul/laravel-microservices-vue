<template>
    <div class="text-cent">
        <form class="form-signin" @submit.prevent="submit">
            <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>

            <label for="first_name" class="sr-only">First Name</label>
            <input type="text" id="first_name" class="form-control" placeholder="First Name" required autofocus
                v-model="firstName">

            <label for="last_name" class="sr-only">Last Name</label>
            <input v-model="lastName" type="text" id="last_name" class="form-control" placeholder="Last Name" required
                autofocus>

            <label for="email" class="sr-only">Email address</label>
            <input v-model="email" type="email" id="email" class="form-control" placeholder="Email address" required
                autofocus>

            <label for="password" class="sr-only">Password</label>
            <input v-model="password" type="password" id="password" class="form-control" placeholder="Password" required
                autofocus>


            <label for="passwordConfirm" class="sr-only">Password Confirm</label>
            <input v-model="passwordConfirm" type="password" id="passwordConfirm" class="form-control"
                placeholder="Password Confirm" required>

            <label for="role_id" class="sr-only">Select Role</label>
            <select v-model="role_id" class="form-control mb-2" id="role_id" required>
                <option value="3">Viewer</option>
            </select>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            <p class="mt-5 mb-3 text-muted">Already Login </p>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Register',

    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role_id: 3,
        }
    },

    methods: {
        async submit() {
            const result = axios.post('register', {
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirm,
                role_id: this.role_id
            });

            console.log((await result).data.message);
            await this.$router.push('login');
        },
    },


}
</script>

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