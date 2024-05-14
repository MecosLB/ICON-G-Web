<template>
    <div class="container p-5">
        <div class="row mb-5">
            <div class="col-12 col-sm-12 col-md-4">
                <h6 class="fw-bold mb-3"> Dirección </h6>

                <p>
                    Calle de la Nebulosa 2913, Jardines del Bosque, 44520 Guadalajara, Jal.
                </p>
            </div>

            <div class="col-12 col-sm-12 col-md-4">
                <h6 class="fw-bold mb-3"> Contacto </h6>

                <p> 01 (33) 3333 3333 </p>
                <p> contacto@icong.com </p>
            </div>

            <div class="col-12 col-sm-12 col-md-4">
                <input type="text" class="form-control rounded-0 mb-2"
                    placeholder="Correo Electrónico...">
                <button class="btn btn-primary btn-footer"> Buscar Asesor </button>
            </div>
        </div>

        <div class="row bt-footer">
            <div class="col-12 col-sm-12 col-md-4 text-center p-2">
                <span href="#" target="_blank">
                    &copy;
                    {{ year }}
                    Todos los derechos reservados. Desarrollado por Punto CHG
                </span>
            </div>

            <div class="col-12 col-sm-12 col-md-4 text-center p-2">
                <a href="#" target="_blank"> Política de Privacidad </a>
            </div>
            
            <div class="col-12 col-sm-12 col-md-4 text-center p-2">
                <a href="#" target="_blank"> Términos y Condiciones </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const date = new Date();
const year = ref(date.getFullYear());
</script>