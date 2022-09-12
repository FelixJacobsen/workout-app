<template>
<header class="bg-light-green text-white">
        <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
                <div class="flex-items-center gap-x-4">
                    <img class="w-14" src="../assets/img/logo.png" alt="logo"> 
                    <h1 class="text-lg">workout-app</h1>
                </div>
            <ul class="flex flex-1 justify-end gap-x-10">
                <router-link class="cursor-pointer" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="cursor-pointer" :to="{ name: 'Create' }">Create</router-link>
                <router-link class="cursor-pointer" :to="{ name: 'Login' }">About</router-link>
            </ul>
        </nav>
    </header> 
</template>
<script setup>
    
</script>

