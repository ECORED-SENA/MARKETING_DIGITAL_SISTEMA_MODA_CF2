<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      .h3.text-in Diferencia entre SEO y SEM. ¿Cómo definir su uso? 
    p Para entender el significado de Search Engine Optimization (SEO) y Search Engine #[i marketing] (SEM), es importante conocer que, al momento de consultar acerca de un tema en específico, es normal dirigirse a Google y en la barra principal digitar la palabra clave que uno cree lo puede llevar al sitio web de su interés. Este elemento, que se usa con total normalidad, detona un mecanismo dentro de Google denominado “motor de búsqueda”, el cual recopila la información existente en los sitios web y dirige hacia los distintos lugares donde se cree es posible encontrar todo lo que se necesita, teniendo en cuenta la palabra clave.
    .row.justify-content-center.align-items-center.mt-5
      .col-8
        .tarjeta--container.row

          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/ilustraciones/img22.svg', alt='Texto que describa la imagen')
              
            .h3.text-center SEO
            p.text-white Teniendo en cuenta lo anterior, según el portal web 40deFiebre (Socialmood, 2020), es posible definir SEO como el proceso de mejorar la visibilidad de un sitio web en una búsqueda orgánica, es decir, que no necesita pagarse. Es de destacar que el SEO radica su importancia en la ayuda a los motores de búsqueda para entender de qué se trata una página web y si es útil para la persona que busca información relacionada con esta. Esto permite que una empresa tenga presencia en la web y tenga mayor reconocimiento por el público que se espera.

          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/ilustraciones/img23.svg', alt='Texto que describa la imagen')
              
            .h3.text-center SEM
            p.text-white Por otro lado, según el portal web Cyberclick (Cyberclick Academy, 2020), se denomina SEM a las campañas de anuncios pagados desarrolladas en los buscadores y se muestran en la parte superior derecha. Este es un gran plus para las campañas digitales, posicionándolas en primer lugar de búsqueda, siempre y cuando el anunciante tenga un presupuesto definido para esta estrategia, en la que se cobra por cada clic que realicen los usuarios.

    p.mt-5 Con la información suministrada, se puede ver que la gran diferencia entre SEO y SEM radica en que la marca anunciante, por el hecho de realizar un pago definido, tendrá total certeza de posicionarse en las búsquedas relacionadas con su público objetivo. Mientras que el posicionamiento que no requiere de pago sí necesita mayor trabajo, con una constante generación de contenidos de interés y un sitio web que inspire visitar, con relación a determinadas palabras clave.


    .p Dependiendo de lo que se espera de la presencia web de una empresa, es como se define la estrategia más adecuada (Xie, 2019). Para campañas de lanzamiento o eventos de gran escala, se recomienda hacer uso del SEM; pero, si la idea es seguir creciendo y posicionar el sitio web, se considera más rentable aplicar SEO, puesto que resulta más económico y duradero en los motores de búsqueda.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
