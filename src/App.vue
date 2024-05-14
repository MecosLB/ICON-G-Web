<template>
    <header>
        <Navbar />
    </header>

    <main>
        <router-view/>
    </main>

    <footer>
        <Footer />
    </footer>
</template>

<style>
@import url('@/assets/css/main.css');
</style>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>