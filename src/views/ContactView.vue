<template>
    <section id="contact">
        <div class="hero-image mb-5">
            <div class="hero-text">
                <h4 class="mb-5"> Contacto </h4>
                <Divider />
            </div>
        </div>

        <div class="container mt-5">
            <div class="row title-view">
                <h6> Ubicación </h6>
            </div>
        </div>

        <div class="container-fluid p-0 mt-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1218501703283!2d-103.39057522578845!3d20.664621100187873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae76779a47c3%3A0x5326f5c14a77a264!2sCalle%20de%20la%20Nebulosa%202913%2C%20Jardines%20del%20Bosque%2C%2044520%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1715700703754!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

        <div class="container mt-5">
            <div class="row title-view">
                <h6> Contáctenos </h6>
            </div>
        </div>

        <div class="container-fluid mt-5 mb-5 p-0 container-contact">
            <div class="container d-flex justify-content-center flex-column">
                <div class="d-flex flex-wrap align-items-center justify-content-center mb-5">
                    <div class="col-12 col-sm-12 col-md-5 p-5 ">
                        <div class="row mb-4">
                            <h6 class="text-uppercase"> Dirección </h6>
                            <p>
                                Calle de la Nebulosa 2913, Jardines
                                del Bosque, 44520 Guadalajara, Jal.
                            </p>
                        </div>

                        <div class="row">
                            <h6 class="text-uppercase"> Contacto </h6>
                            <p> 01 (33) 3333 3333 </p>
                            <p> contacto@icong.com </p>
                        </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-5 p-5 ">
                        <form action="POST" autocomplete="off">
                            <div class="row mb-3">
                                <input type="text" class="form-control form-control-sm rounded-0" placeholder="Nombre">
                            </div>

                            <div class="row mb-3">
                                <input type="tel" class="form-control form-control-sm rounded-0" placeholder="Teléfono">
                            </div>

                            <div class="row mb-3">
                                <textarea class="form-control form-control-sm rounded-0" id="" rows="1" placeholder="Mensaje"></textarea>
                            </div>

                            <div class="row mb-3">
                                <button type="button" class="btn btn-lg btn-primary btn-contact">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex align-items-center justify-content-center">
                    <Divider />
                </div>
            </div>
        </div>

        <div class="container mt-5 p-5"></div>
    </section>
</template>

<script setup>
import Divider from '@/components/Divider.vue';
</script>