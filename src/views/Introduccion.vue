<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      .h3 Introducción

    p Apreciado participante, bienvenido a este momento de aprendizaje orientado a las herramientas del entorno digital según el público objetivo y las condiciones de la empresa. Antes de empezar se sugiere revisar la siguiente infografía para identificar el contexto de aprendizaje.    
    .row.justify-content-center.align-items-center
      .col-10    
        .tarjeta-numerada.color-acento-contenido.p-5.mt-5
          .tarjeta-numerada__numero
            .h4.numero 1
          .h5 ¿Cómo surge este curso?
          p.mt-5 Durante este componente de formación, el marketing digital es el pretexto de aprendizaje y desde donde se direcciona esta experiencia de aprendizaje. Sin embargo, es importante tener presente la información que se puede leer a continuación:

          .p El #[b marketing digital] ha generado un impacto importante en la sociedad, al demostrar que es posible generar nuevas opciones de mercado haciendo uso de las TIC (Tecnologías de la Información y las Comunicaciones) como herramientas de conexión y comercialización. 
          
          .p El mundo está conectado en todo momento y lugar a través de las redes sociales. Queriendo o no, éstas se han convertido en un canal imprescindible para desarrollar relaciones interpersonales, promocionar productos y servicios, o impartir educación. En fin, un amplio abanico de posibilidades que se desencadenaron a partir de la industria 4.0. Es aquí donde se observan nuevas oportunidades de desarrollo. Entendiendo que el uso de una red social va más allá de ver memes o estar enterado de la vida de los demás, el marketing digital demuestra que se puede generar desarrollo a través de medios alternativos con amplio alcance a nivel mundial. Pero, ¿qué es el marketing digital? ¿Dónde surge el marketing digital? Para contestar estas y otras preguntas, se sugiere mantener la atención en este componente de formación.
                  

        .tarjeta-numerada.color-acento-contenido.p-5.mt-5
          .tarjeta-numerada__numero
            .h4.numero 2
          .h5 ¿Cuál es el objeto de aprendizaje?
          p.mt-5 Como se mencionó anteriormente, el marketing digital es el objeto de aprendizaje que, a través de unas acciones de formación, se espera que desarrolle:
          .row.justify-content-center.align-items-center.mt-5
            .col-4
              img.img-t.img-a(src='@/assets/ilustraciones/img24.svg', alt='')
              .p.text-center #[b Conocimientos]

            .col-4
              img.img-t.img-a(src='@/assets/ilustraciones/img25.svg', alt='')
              .p.text-center #[b Habilidades]

            .col-4
              img.img-t.img-a(src='@/assets/ilustraciones/img26.svg', alt='')
              .p.text-center #[b Actitudes]
          p.mt-5 Algunos temas que se verán son:
          ul.lista-ul.mt-3
            li 
              i.fas.fa-angle-right 
              |Entrono digital    
            li 
              i.fas.fa-angle-right 
              |Fundamentos del marketing digital 
            li 
              i.fas.fa-angle-right 
              |Comercio electrónico
            li 
              i.fas.fa-angle-right 
              |Estrategia digital
            li 
              i.fas.fa-angle-right 
              |Social media

        .tarjeta-numerada.color-acento-contenido.p-5.mt-5
          .tarjeta-numerada__numero
            .h4.numero 3
          .h5 ¿Cómo está estructurado el componente de formación?
          .p El curso virtual está estructurado a partir de componentes de formación que contienen la información necesaria para que se puedan desarrollar conocimientos, habilidades y actitudes en el marco de la competencia #[b estructuración de la estrategia de marketing digital acorde con los objetivos de campaña.]

          .p En cada componente, es posible encontrar diferentes recursos de aprendizaje y unas actividades de aprendizaje. Es necesario buscar la guía de actividades de aprendizaje para desarrollarla.

        .tarjeta-numerada.color-acento-contenido.p-5.mt-5
          .tarjeta-numerada__numero
            .h4.numero 4
          .h5 ¿Quiénes están en el curso? 
          .p Los cursos virtuales son entornos de aprendizaje donde convergen:
          .row.justify-content-center.align-items-center.mt-5
            .col-4
              img.img-t.img-a(src='@/assets/ilustraciones/img27.svg', alt='')
              .p.text-center #[b Contenidos]

            .col-4
              img.img-t.img-a(src='@/assets/ilustraciones/img28.svg', alt='')
              .p.text-center #[b Recursos]

            .col-4
              img.img-t.img-a(src='@/assets/ilustraciones/img29.svg', alt='')
              .p.text-center #[b Personas]
        
          .row.justify-content-center.align-items-stretch.mt-5
            .col-auto
              img.img-t.img-a(src='@/assets/ilustraciones/img30.svg', alt='')

            .col 
              p Que de una forma intencionada constituyen una comunidad de aprendizaje y práctica. Es decir, no se está solo, se tiene un conjunto de personas de diferentes lugares que se unen a las reflexiones e inquietudes. Por eso, es preciso recordar la importancia de participar en los foros y utilizar otras herramientas del curso para comunicarse.

              .p Finalmente, recuerde estos aspectos para iniciar y culminar con éxito el curso.

              ol.lista-ol--cuadro.mt-3
                li 
                  .lista-ol--cuadro__vineta
                    span.numero 1
                  | Organizar un horario de estudio individual y colaborativo.
                li 
                  .lista-ol--cuadro__vineta
                    span.numero 2
                  | Revisar las notificaciones del curso constantemente.
                li 
                  .lista-ol--cuadro__vineta
                    span.numero 3
                  | Participar en los foros y actividades sugeridas por el instructor.
                li 
                  .lista-ol--cuadro__vineta
                    span.numero 4
                  | Entregar las evidencias esperadas durante este componente de formación. 
              .p En caso de alguna inquietud, no dude en escribirnos. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
