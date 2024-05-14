<template>
    <section id="services">
        <div class="hero-image">
            <div class="hero-text">
                <h4 class="mb-5"> Servicios </h4>
                <Divider />
            </div>
        </div>

        <div class="container mt-5 mb-5">
            <div class="row title-view">
                <h6 class=""> ¿Como lo hacemos? </h6>
                <h6 class=""> Iniciación del Proyecto </h6>
            </div>
        </div>

        <div class="container  mt-5 mb-5 position-relative">
            <div class="grid-circles">
                <div v-for="({ number, list, color }, index) in steps" class="circle-service">
                    <div class="text-white fw-bold fs-1"> {{ number }} </div>

                    <ul v-for="item in list" class="list-group">
                        <li class="list-group-item p-0">
                            <i class="fa-solid fa-circle me-2"></i> {{ item }}
                        </li>
                    </ul>

                    <div class="position-absolute bottom-0 mt-4 rounded-circle circle-bottom"
                        :style="`background-color: ${color}`"></div>
                </div>
            </div>

            <div class="rectangle-pink position-absolte"></div>
        </div>

        <div class="container-fluid p-0 mt-5 mb-5 bg-green-aqua list-services">
            <div class="row flex-wrap">
                <div class="col-12 col-sm-12 col-md-6 p-5">
                    <h6 class="text-white"> Que Incluye Nuestros Servicios: </h6>
                    <ul v-for="service in services" class="list-group">
                        <li class="list-group-item p-1">
                            <i class="fa-solid fa-circle me-2"></i> {{ service }}
                        </li>
                    </ul>
                </div>

                <div class="col-12 col-sm-12 col-md-6 bg-image"></div>
            </div>
        </div>

        <div class="container mt-5 mb-5 list-objects">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 mb-4">
                    <img src="@/assets/images/services/list-services.jpg" class="img-fluid">
                </div>

                <div class="col-12 col-sm-12 col-md-6 mb-4 align-content-center">
                    <h6> Objeto de nuestra propuesta: </h6>
                    <ul v-for="object in objects" class="list-group">
                        <li class="list-group-item p-1 text-dark">
                            <i class="fa-solid fa-circle me-2"></i> {{ object }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container mt-5 mb-5">
            <div class="row text-center mb-3">
                <h6> Nuestro Grupo Empresarial </h6>
            </div>

            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="lc-block">
                        <div id="carouselLogos" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner d-flex align-items-center">
                                <a class="carousel-control-prev position-relative d-inline" href="#carouselLogos" data-bs-slide="prev">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="text-dark"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                                        </path>
                                    </svg>
                                    <span class="visually-hidden">Previous</span>
                                </a>

                                <div>
                                    <div class="carousel-item ps-3 active">
                                        <div class="row">
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/11.png" alt="">
                                            </div>
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/2.png" alt="">
                                            </div>
                                            
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/3.png" alt="">
                                            </div>
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/12.png" alt="">
                                            </div>
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/5.png" alt="">
                                            </div>
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/6.png" alt="">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item ps-3">
                                        <div class="row">
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/11.png" alt="">
                                            </div>
                                            
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/2.png" alt="">
                                            </div>
                                            
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/5.png" alt="">
                                            </div>
                                            
                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/6.png" alt="">
                                            </div>

                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/3.png" alt="">
                                            </div>

                                            <div class="col-6 col-md-2 align-self-center">
                                                <img class="d-block w-100 px-3 mb-3 filter-bw"
                                                    src="https://cdn.livecanvas.com/media/logos/12.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a class="carousel-control-next position-relative d-inline" href="#carouselLogos" data-bs-slide="next">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg>
                                    <span class="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

import Divider from '@/components/Divider.vue';

const services = ref([
    'Licencia vitalicia del sistema.',
    'Usuarios ilimitados en todos los módulos.',
    'Multialmacenes.',
    'Nuestra plataforma puede ser Web o Cliente Servidor o una Mezcla de ambas.',
    'Lenguaje de programación WinDev 23 y WebDev.',
    'Base de Datos SQL o las compatibles con WinDev.',
    'Mantenimiento y soporte hasta el fin de esta administración.',
    'Actualizaciones con motivo de las modificaciones a la Ley General de Contabilidad Gubernamental y Ley de Disciplina Financiera durante todo el periodo de mantenimiento y soporte vigente.'
]);

const steps = ref([
    {
        number: '01',
        list: [
            'Reunión paa identificación y asignación de roles.',
            '(Cliente - Proveedor).',
            'Reunión para presentación de proyecto (Kick off).',
        ],
        color: '#F1A146',
    },
    {
        number: '02',
        list: [
            'Reunión paa identificación y asignación de roles.',
            '(Cliente - Proveedor).',
            'Reunión para presentación de proyecto (Kick off).',
        ],
        color: '#009897',
    },
    {
        number: '03',
        list: [
            'Reunión paa identificación y asignación de roles.',
            '(Cliente - Proveedor).',
            'Reunión para presentación de proyecto (Kick off).',
        ],
        color: '#735297',
    }
    , {
        number: '04',
        list: [
            'Reunión paa identificación y asignación de roles.',
            '(Cliente - Proveedor).',
            'Reunión para presentación de proyecto (Kick off).',
        ],
        color: '#D5146B',
    }
]);

const objects = ref([
    'Generar información en tiempo real, evitando conflictos interinstitucionales, por falta de comunicación o deficiencias, la operación interna de ambos.',
    'Evitar posibles observaciones de los Entes Fiscalizadores, ya que esta interacción con los proveedores nos permitirá tener información a detalle, respecto de cómo se ejerce el presupuesto.',
    'Generar certidumbre en el ejercicio de los Recursos Públicos ya que tendremos el detalle de la aplicación de los recursos en todo momento.',
    'Generar un efectivo control de los centros de costo que conforman el Ente Público, obteniendo su información en tiempo real, evitando sobregiros presupuestales.',
    'Disminuir gasto de viáticos del personal administrativo que viene a Guadalajara a entregar las comprobaciones de fondos revolventes.',
    'Mejorar el control de almacenes en todos los centros educativos, y el control de los bienes inventariables evitando fugas y pérdidas.'
])
</script>