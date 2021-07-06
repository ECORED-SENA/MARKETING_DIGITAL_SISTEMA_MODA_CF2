<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Estrategia digital
    p De acuerdo con el portal web Walter Giu, una estrategia digital se define como “Una combinación de procesos que apuntan a identificar y aprovechar oportunidades digitales para mejorar las ventajas competitivas” (Giu, 2018); en otras palabras, es el conjunto y manejo de herramientas que se identifican para posicionar una empresa en la web.

    .p Dentro de la estructura de la estrategia digital, se tienen en cuenta una lista de acciones, donde se debe desarrollar una investigación previa, definir objetivos claros, determinar qué herramientas son útiles, ejecutar y realizar seguimiento de las tácticas propuestas y analizar los resultados. En la siguiente imagen, se observan estas acciones.  

    .row.justify-content-center.align-items-stretch.mt-5.card-p-color-1.p-3
      .col-12.col-md-3
        .row.justify-content-center.align-items-center.mt-3
          .col-auto
            img.img-t.img-a(src='@/assets/ilustraciones/img31.svg', alt='')           
          .col
            .h6 Investigación
            .hr.mr-2     
        ul.lista-ul--color.mt-4
          li 
            i.fas.fa-atom 
            | Público
          li 
            i.fas.fa-atom 
            | Contenido y diseño
          li 
            i.fas.fa-atom 
            | Redes sociales
          li 
            i.fas.fa-atom 
            | Comunicación
          li 
            i.fas.fa-atom 
            | Competencia

      .col-12.col-md-3
        .row.justify-content-center.align-items-center.mt-3
          .col-auto
            img.img-t.img-a(src='@/assets/ilustraciones/img32.svg', alt='')           
          .col
            .h6 Objetivos
            .hr.mr-2        
        ul.lista-ul--color.mt-4
          li       
            i.fas.fa-atom 
            | Objetivos cuantitativos  
          li       
            i.fas.fa-atom 
            | Objetivos cualitativos  
          li       
            i.fas.fa-atom 
            | Definición de KPI  

      .col-12.col-md-3
        .row.justify-content-center.align-items-center.mt-3
          .col-auto
            img.img-t.img-a(src='@/assets/ilustraciones/img33.svg', alt='')           
          .col
            .h6 Estrategias
            .hr.mr-2        
        ul.lista-ul--color.mt-4
          li       
            i.fas.fa-atom 
            | Segmentación 
          li       
            i.fas.fa-atom 
            | Posicionamiento  
          li       
            i.fas.fa-atom 
            | Definición de estrategias  
          li       
            i.fas.fa-atom 
            | Ejecución de tácticas  

      .col-12.col-md-3
        .row.justify-content-center.align-items-center.mt-3
          .col-auto
            img.img-t.img-a(src='@/assets/ilustraciones/img31.svg', alt='')           
          .col
            .h6 Análisis
            .hr.mr-2        
        ul.lista-ul--color.mt-4
          li       
            i.fas.fa-atom 
            | Monitorización 
          li       
            i.fas.fa-atom 
            | Medición de KPI  
          li       
            i.fas.fa-atom 
            | Análisis de los resultados  
          li       
            i.fas.fa-atom 
            | Elaboración de informes  

    .p-r.mt-3 #[b Nota.] Adaptada de Giu, W. (2018). Qué es una Estrategia Digital.
    
    .hr.my-5

    .titulo-segundo#t_4_1.mt-5
      .h4 4.1 Tipos de estrategias
    p.mt-5 Hay una amplia variedad de opciones que las empresas pueden adoptar como estrategia digital para el logro de sus objetivos propuestos, todo esto teniendo en cuenta las herramientas con las que cuenta, el público al cual se dirige y el entorno en el que se desenvuelve.

    .p Según Xie (2019), algunas estrategias destacadas y sus objetivos se presentan en el siguiente video: 
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U2juCftBrTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .p-r.mt-3 #[b Nota.] Adaptado de Xie (2019). Marketing digital: Navegando en aguas digitales, sumérgete conmigo.
    
    .hr.my-5

    .titulo-segundo#t_4_2.mt-5
      .h4 4.2 Plan de marketing digital  
    p.mt-5 El plan de marketing digital se puede definir como el plan de ruta para la consecución de una meta determinada, lo que permite un enfoque más preciso en la centralización de todos los esfuerzos por un único objetivo y fomenta la creatividad en la búsqueda de los mejores mecanismos para su desarrollo.

    .p Según Xie (2019), se definen los siguientes pasos para un plan de marketing digital:
    .row.justify-content-center.align-items-center.mt-5
      .col-10
        PasosA.color-acento-contenido(tipo="n" :datos="datosPasosA")
        .p-r.mt-3 #[b Nota.] Adaptado de Xie (2019). Marketing digital: Navegando en aguas digitales, sumérgete conmigo.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosPasosA: [
      {
        titulo: 'Análisis de la marca',
        texto:
          'Para marcar la ruta a seguir, como primera medida, se debe conocer la marca en todos sus aspectos. Partiendo de esto, se desarrolla una matriz DOFA (Debilidades, Oportunidades, Fortalezas y Amenazas).',
      },
      {
        titulo: 'Conocimiento de los objetivos de la empresa',
        texto:
          'Definir y entender los objetivos más grandes a los que apunta la empresa, teniendo en cuenta los que se pueden desarrollar a corto y largo plazo.',
      },
      {
        titulo: 'Análisis del mercado',
        texto:
          'Se debe analizar completamente el mercado que se va a abordar, teniendo en cuenta factores geográficos, demográficos, socioeconómicos y psicográficos.',
      },
      {
        titulo: 'Segmentar el cliente objetivo',
        texto:
          'Conocer y definir el público al cual serán dirigidas todas las estrategias, reconociendo datos básicos, pero sobre todo identificando gustos, necesidades o aspiraciones.',
      },
      {
        titulo: 'Análisis del mercado digital',
        texto:
          'Conocer la competencia, a través de una serie de técnicas de mercadotecnia, permitirá situarnos en un contexto aterrizado.',
      },
      {
        titulo: 'Establecer objetivos del marketing',
        texto:
          'Definir los objetivos específicos que se espera lograr de determinada campaña.',
      },
      {
        titulo: 'Definir actividades, KPI y presupuestos',
        texto:
          'Definir las estrategias a utilizar para lograr los resultados propuestos, estableciendo los costos que estas conllevan.',
      },
      {
        titulo: 'Inicio de actividades definidas',
        texto: 'Poner en marcha las actividades propuestas en el plan.',
      },
      {
        titulo: 'Seguimiento del plan de marketing',
        texto:
          'Constantemente, se deben revisar las actividades desarrolladas para que concuerden con los objetivos propuestos, identificar si se alejan o siguen el camino propuesto, con el fin de ajustar o mejorar.',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
