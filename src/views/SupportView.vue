<template>
    <section id="support">
        <div class="hero-image mb-5">
            <div class="hero-text">
                <h4 class="mb-5"> Soporte </h4>
                <Divider />
            </div>
        </div>

        <div class="container mt-5 mb-5">
            <div class="row title-view">
                <h6> Pregunta Frecuentes </h6>
            </div>
        </div>

        <div class="container-fluid p-0 bg-gray">
            <div class="container">
                <div class="p-5">
                    <div class="card bg-gray">
                        <div class="card-body bg-gray">
                            <div class="accordion accordion-flush" id="accordion">
                                <div v-for="({ id, user, date, question, response }, index) in questions"
                                    class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" :data-bs-target="`#flush-collapse${id}`"
                                            aria-expanded="false" :aria-controls="`flush-collapse${id}`">
                                            <div class="details-accordion">
                                                <div class="d-flex flex-wrap mb-3">
                                                    <div class="col-12 col-sm-12 mb-3 mb-sm-0 col-md-6">
                                                        <strong> Usuario: {{ user }} </strong>
                                                    </div>

                                                    <div class="col-12 col-sm-12 mb-3 mb-sm-0 col-md-6 text-end">
                                                        <span v-html="date"></span>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-wrap">
                                                    <div class="col-12 col-sm-12 mb-3 mb-sm-0 col-md-6">
                                                        <span v-html="question"></span>
                                                    </div>

                                                    <div class="col-12 col-sm-12 mb-3 mb-sm-0 col-md-6 text-end">
                                                        <span class="see-details">
                                                            Ver detalles
                                                            <i class="fa-solid fa-arrow-right-long ms-2"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>

                                    <div :id="`flush-collapse${id}`" class="accordion-collapse collapse"
                                        data-bs-parent="#accordion">
                                        <div class="accordion-body" v-html="response"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5 p-5"></div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

import Divider from '@/components/Divider.vue';

const questions = ref([
    {
        id: '1',
        user: 'Administrador',
        date: '14 de Mayo 2024',
        question: '¿Como entrar al sistema ICON G?',
        response: 'Placeholder content for this accordion, which is intended to demonstrate the.'
    },
    {
        id: '2',
        user: 'Administrador',
        date: '10 de Mayo 2024',
        question: 'Olvidé mi contraseña ¿cómo la recupero?',
        response: 'Placeholder content for this accordion, which is intended to demonstrate the.'
    },
    {
        id: '3',
        user: 'Administrador',
        date: '01 de Mayo 2024',
        question: '¿Cómo generar un reporte general?',
        response: 'Placeholder content for this accordion, which is intended to demonstrate the.'
    },
]);
</script>