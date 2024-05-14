<template>
    <section id="home">
        <div class="hero-image">
            <div class="hero-text">
                <h4 class="mb-5"> Sistema Consolidado de Información Gubernamental </h4>
                <Divider />
            </div>
        </div>

        <div class="container mt-5 mb-5">
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
        </div>

        <div class="container mt-5 mb-5">
            <div class="row title-view">
                <h6 class=""> Nuestro Sistema ICON G </h6>
            </div>
            
            <div class="row flex-column align-items-center justify-content-center fs-10 p-5">
                <p class="text-center w-50">
                    Con <strong>ICON G</strong> podrás tener Control de Activos, desde el momento que el bien es solicitado,
                    el Sistema identifica si el bien será sujeto a inventariar, y al momento de entrega en almacén
                    solicita como requerimiento número de serie o identificador, para que el bien a lo largo de su
                    vida nunca pierda la capacidad de ser identificado y depreciado de manera automática
                    conforme a la Norma, además podrás realizar Reportes Contables, Presupuestales y Anexos
                    del CONAC emitidos de manera <strong>automática</strong>. Te presentamos las características de ICON G:
                </p>
            </div>
        </div>

        <div class="container system mt-5 mb-5">
            <div class="row flex-wrap align-items-center justify-content-center gap-3">
                <div v-for="characteristic in characteristicsSystem"  class="col-12 col-sm-12 col-md-3">
                    <div class="card rounded-0 bg-dark">
                        <div class="card-body">
                            <h6> {{ characteristic.title }} </h6>

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

                    <div class="col-12 col-sm-12 col-md-12 p-5 h-50 bg-dark d-flex align-items-center justify-content-center">
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
</script>