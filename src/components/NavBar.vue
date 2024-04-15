<script>
import { useRouter } from 'vue-router';
export default {
    name: 'NavBar',
    props: ['user'],
    setup() {
        const router = useRouter();
        const logout = async () => {
            localStorage.clear()    // Clear All Local Storage
            await router.push('/login');
        }
        return {
            logout,
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">MicroService</a>

        <nav class="my-2 my-md-0 mr-md-3">
            <router-link to="/profile" class="p-2 text-white">{{ user?.first_name }} {{ user?.last_name }}</router-link>
            <a class="p-2 text-white" href="#" @click="logout">Sign out</a>
        </nav>
    </nav>
</template>