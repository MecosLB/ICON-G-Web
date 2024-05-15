<template>
    <section id="home">
        <div class="hero-image">
            <div class="hero-text">
                <h4 class="mb-5"> Sistema Consolidado de Información Gubernamental </h4>
                <Divider />
            </div>
        </div>

        <section id="about" class="container mt-5 mb-5">
            <div class="row title-view">
                <h6 class=""> Soluciones </h6>
                <h6 class=""> Administrativas Inovadoras </h6>
            </div>

            <div class="row flex-column align-items-center justify-content-center fs-10 p-5 mb-section">
                <p class="text-center w-50">
                    Somos una empresa mexicana dedicada 100% al desarrollo de Soluciones Administrativas,
                    especializada en el desarrollo de Software Administrativo y Contable para medianas y grandes
                    empresas; en los sectores Educativo, Industrias diversas, Empresas de Servicio y Gobierno.
                </p>

                <p class="text-center w-50">
                    Más de 17 años de experiencia en la implementación de aplicaciones y soluciones tecnológicas.
                    Aplicamos las mejores prácticas para hacer su negocio más eficiente, pensando en la velocidad
                    con la que el sistema genera información en tiempo real.
                </p>
            </div>
        </section>

        <section id="system">
            <div class="container mt-5 mb-5">
                <div class="row title-view">
                    <h6 class=""> Nuestro Sistema ICON G </h6>
                </div>

                <div class="row flex-column align-items-center justify-content-center fs-10 p-5">
                    <p class="text-center w-50">
                        Con <strong>ICON G</strong> podrás tener Control de Activos, desde el momento que el bien es
                        solicitado,
                        el Sistema identifica si el bien será sujeto a inventariar, y al momento de entrega en almacén
                        solicita como requerimiento número de serie o identificador, para que el bien a lo largo de su
                        vida nunca pierda la capacidad de ser identificado y depreciado de manera automática
                        conforme a la Norma, además podrás realizar Reportes Contables, Presupuestales y Anexos
                        del CONAC emitidos de manera <strong>automática</strong>. Te presentamos las características de ICON
                        G:
                    </p>
                </div>
            </div>

            <div class="container system mt-5 mb-5">
                <div class="row flex-wrap align-items-center justify-content-center gap-3">
                    <div v-for="characteristic in characteristicsSystem" class="col-12 col-sm-12 col-md-3">
                        <div class="card rounded-0 bg-dark">
                            <div class="card-body">
                                <h6 class="text-white"> {{ characteristic.title }} </h6>

                                <ul v-for="item in characteristic.list" class="list-group">
                                    <li class="list-group-item p-0">
                                        <i class="fa-solid fa-circle me-2"></i> {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container system p-5 mt-5 mb-5">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 p-0">
                        <img src="@/assets/images/services/list-services.jpg" class="img-fluid">

                    </div>

                    <div class="col-12 col-sm-12 col-md-6 p-0 align-content-center">
                        <div class="col-12 col-sm-12 col-md-12 p-5 h-50 bg-yellow align-content-center">
                            <h6 class="text-white">
                                CARACTERÍSTICAS DE UN SISTEMA EMITIDO POR CONAC
                            </h6>

                            <p class="text-white fs-10">
                                Estas características se establecen en el documento Marco
                                Conceptual de la Contabilidad Gubernamental, emitido por
                                el Consejo Nacional de Armonización Contable CONAC, y
                                publicado en el diario Oficial de la Federación el 13 de
                                agosto de 2009.
                            </p>
                        </div>

                        <div
                            class="col-12 col-sm-12 col-md-12 p-5 h-50 bg-dark d-flex align-items-center justify-content-center">
                            <div class="col-12 col-sm-12 col-md-6">
                                <ul v-for="item in list1" class="list-group">
                                    <li class="list-group-item p-0 fs-6">
                                        <i class="fa-solid fa-circle me-2"></i> {{ item }}
                                    </li>
                                </ul>
                            </div>

                            <div class="col-12 col-sm-12 col-md-6">
                                <ul v-for="item in list2" class="list-group">
                                    <li class="list-group-item p-0 fs-6">
                                        <i class="fa-solid fa-circle me-2"></i> {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid p-0 bg-black mt-5 mb-5">
                <div class="container p-5">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-4 p-3">
                            <h6 class="fw-bold text-white"> FUNCIONALIDADES QUE DEBE TENER EL SISTEMA PARA CUMPLIR CON LA
                                LEY DE CONFORMIDAD CON CONAC </h6>

                            <Divider />
                        </div>

                        <div class="col-12 col-sm-12 col-md-4 p-3">
                            <h6 class="fw-bold text-white"> Obligatorias </h6>

                            <ul v-for="obligatoria in obligatorias" class="list-group">
                                <li class="list-group-item p-0">
                                    <i class="fa-solid fa-circle me-2"></i> {{ obligatoria }}
                                </li>
                            </ul>
                        </div>

                        <div class="col-12 col-sm-12 col-md-4 p-3">
                            <h6 class="fw-bold text-white"> De Valor Agregado </h6>

                            <ul v-for="valors in valorAgregado" class="list-group">
                                <li class="list-group-item p-0">
                                    <i class="fa-solid fa-circle me-2"></i> {{ valors }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container p-0 mt-5 mb-5">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-4 p-4 align-content-center">
                        <h6 class="fw-bold">ELEMENTOS QUE DEBE GENERAR EL SISTEMA: UNA CUENTA PÚBLICA DE CONFORMIDAD CON LA
                            LEY.</h6>
                    </div>

                    <div class="col-12 col-sm-12 col-md-4 p-4 bl-gray br-gray align-content-center">
                        <h6 class="fw-bold"> ARTÍCULO 48 </h6>

                        <p class="fs-10">
                            En lo relativo a los ayuntamientos de los municipios y los órganos
                            político-administrativos de las demarcaciones territoriales del Distrito Federal,
                            los Sistemas deberán producir, como mínimo, la información contable y
                            presupuestaria a que se refiere el artículo 46, fracción 1, incisos a), b), c), e) y f);
                            y fracción II, incisos a) y b)
                        </p>
                    </div>

                    <div class="col-12 col-sm-12 col-md-4 p-4 align-content-center">
                        <h6 class="fw-bold"> ARTÍCULO 46 FRACC. I </h6>

                        <p class="fs-10">Información contable, con la desagregación siguiente: </p>

                        <ul v-for="inciso in incisos" class="list-group">
                            <li class="list-group-item p-0 text-dark">
                                <i class="fa-solid fa-circle me-2"></i> {{ inciso }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container mt-5 mb-5">
                <div class="row flex-column align-items-center justify-content-center fs-10 p-5 mb-section">
                    <p class="text-center">
                        Los mecanismos para lograr esta armonización se obtienen a través de la estructuración de un sólo
                        catálogo Contable y
                        Presupuestal como un sólo Ente, a partir de la utilización de las cuentas de orden, tal como se
                        establece en los manuales emitidos
                        por el CONAC, y la misma Ley, la cual establece que la integración presupuestaria debe ser a partir
                        de Cuentas Contables.
                    </p>

                    <p class="text-center">
                        Toda vez que el objeto de la Ley es de alcance nacional y es la consolidación de una sola Cuenta
                        Pública Nacional, el CONAC,
                        emitió una serie de catálogos Presupuestario Programáticos Administrativos y de distintas vertientes
                        para agrupar el presupuesto
                        y cumplir con los alcance de evaluación del mismo.
                    </p>
                </div>
            </div>

            <div class="container mt-5 mb-5">
                <div class="row text-center mb-3">
                    <h6 class="fw-bold"> Nuestro Grupo Empresarial </h6>
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
    </section>
</template>

<script setup>
import { ref } from 'vue';

import Divider from '@/components/Divider.vue';

const characteristicsSystem = ref([
    {
        title: 'ARMONIZACIÓN CONTABLE',
        list: [
            'Integral.',
            'Modular.',
            'Adaptable.',
            'Fácil de aprender y utilizar.',
            'Intuitivo.',
            'Confiable.',
            'Consistente.',
            'Transaccional.',
            'Seguro.',
            'Compatible.',
        ]
    },
    {
        title: 'OBLIGATORIAS',
        list: [
            'Características Generales.',
            'Registro de Presupuesto de Egresos.',
            'Ejecución del Gasto.',
            'Tesorería.',
            'Contabilidad.',
            'Recursos Humanos.',
            'Deuda Pública.',
            'Adquisiciones y Contrataciones.',
            'Administración de bienes.',
            'Explotación de información en tiempo real.',
        ]
    },
    {
        title: 'DE VALOR AGREGADO',
        list: [
            'Formulación Presupuestaria.',
            'Ejecución de gasto.',
            'Tesorería.',
            'Inversiones y obra pública.',
            'Deuda pública.',
            'Adquisiciones y contrataciones.',
            'Recursos Humanos',
            'Administración de bienes.',
            'Funcionalidad general.',
            'Control Vehicular.',
            'Control de Asistencias.',
            'Acceso por internet.',
        ]
    },
]);

const list1 = ref([
    'Integral',
    'Modular',
    'Adaptable',
    'Fácil de aprender',
    'Intuitivo',
]);

const list2 = ref([
    'Confiable',
    'Consistente',
    'Transaccional',
    'Seguro',
    'Compatible',
]);

const obligatorias = ref([
    'Características Generales.',
    'Registro de Presupuesto de Egresos.',
    'Ejecución del gasto.',
    'Tesorería.',
    'Contabilidad.',
    'Recursos Humanos.',
    'Deuda Pública.',
    'Adquisiciones y contrataciones.',
    'Administración de Bienes.',
    'Explotación de información en tiempo real.',
]);

const valorAgregado = ref([
    'Formulación Presupuestaria.',
    'Ejecución de gasto.',
    'Tesorería.',
    'Inversiones y Obra Pública.',
    'Deuda pública.',
    'Adquisiciones y contrataciones.',
    'Administración de Bienes.',
    'Funcionalidad General.',
    'Control Vehicular y asistencias.',
    'Acceso por Internet.',
]);

const incisos = ref([
    'A. Estado de situación financiera.',
    'B. Estado de variación en la hacienda pública.',
    'C. Estado de cambios en la situación financiera.',
    'D. Notas a los estados financieros.',
    'E. Estado analítico del activo.',
]);
</script>