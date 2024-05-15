<template>
    <nav class="navbar navbar-expand-lg p-lg-0">
        <div class="container">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fa-solid fa-bars"></i>
            </button>
            
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link">
                            Inicio
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <!-- <router-link :to="{ name: 'about' }" class="nav-link">
                            Nosotros
                        </router-link> -->
                        <a class="nav-link" @click="goTo('about')"> Nosotros </a>
                    </li>

                    <li class="nav-item">
                        <!-- <router-link :to="{ name: 'system' }" class="nav-link">
                            Sistema
                        </router-link> -->
                        <a class="nav-link" @click="goTo('system')"> Sistema </a>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ name: 'services' }" class="nav-link">
                            Servicios
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ name: 'support' }" class="nav-link">
                            Soporte
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{ name: 'contact' }" class="nav-link">
                            Contacto
                        </router-link>
                    </li>

                    <li class="nav-item nav-item-join">
                        <router-link :to="{ name: 'join' }" class="nav-link">
                            Únete
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
const goTo = (to) => {
    const element = document.getElementById(to);
    element.scrollIntoView();
}
</script>