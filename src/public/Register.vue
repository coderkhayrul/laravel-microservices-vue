<script>
export default {
    name: 'Register',
}
</script>

<template>
    <form class="form-signin">
        <img class="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
        <label for="first_name" class="sr-only">First Name</label>
        <input type="text" id="first_name" class="form-control" placeholder="First Name" required autofocus>
        <label for="last_name" class="sr-only">Last Name</label>
        <input type="email" id="last_name" class="form-control" placeholder="Last Name" required autofocus>
        <label for="email" class="sr-only">Email address</label>
        <input type="email" id="email" class="form-control" placeholder="Email address" required autofocus>

        <label for="password" class="sr-only">Password</label>
        <input type="password" id="password" class="form-control" placeholder="Password" required autofocus>


        <label for="confirmPassword" class="sr-only">Confirm Password</label>
        <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm Password" required>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
    </form>
</template>