<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      .h3 Fundamentos de marketing digital
    p Para hablar de marketing digital, primero es importante hacer una breve exploración del marketing como tal, el cual, según la American Marketing Association (AMA), "es una función de la organización y un conjunto de procesos para crear, comunicar y entregar valor a los clientes, y para manejar las relaciones con estos últimos, de manera que beneficien a toda la organización [...]” (American Marketing Association, s.f.  como se citó en Iván Thompson, 2006). De esta forma, se entiende que el marketing da respuesta a muchas necesidades de los consumidores y, a partir de esto, permite generar nuevos mercados, estableciendo ofertas de valor a través de la comunicación, el servicio al cliente y demás conexiones que surgen según el comportamiento del público, y teniendo en cuenta que el enfoque máximo de este son las personas.
    .row.justify-content-center.align-items-center
      .col-10
        img.img-t.img-a.my-5(src='@/assets/ilustraciones/img9.svg', alt='') 

    p A lo largo de la historia, el mercadeo se desenvolvió en diferentes fases que marcaron una ruta para su desarrollo, iniciando con los primeros tiempos de la humanidad, en la etapa de la autosuficiencia económica, donde no existía el mercadeo como tal. Se da a continuación una etapa de trueque, donde se empieza a vislumbrar el paso a seguir para los mercados locales, en un primer acercamiento a la comercialización. Seguido de esto, aparece la moneda, que agiliza diversos procesos; lo que da paso a la etapa de la Revolución Industrial y, a su vez, a la producción en masa. De esta manera, tienen lugar importantes sucesos, como las guerras mundiales, luego de los cuales se genera un increíble desarrollo de los medios publicitarios, seguido de la creación del computador y la adaptación de nuevos sistemas de marketing, de acuerdo con los nuevos tiempos y las necesidades que surgen con estos (SENA, 1989).

    .p A partir del gran avance que ha tenido la tecnología y el importante impacto generado, surge el marketing digital como uno de los tipos de marketing, y comienza a aplicarse desde los años 90, con la gran diferencia de desarrollarse en el entorno digital, utilizando todo tipo de herramientas y plataformas que este provee. Según Cibrián (2018), el gran plus que posee este es la capacidad de medir todo lo que sea necesario, además de generar mayor trascendencia y alcance. Aquí es donde se determina el gran poder que posee la información, sobre todo en un mercado tan competitivo como el que se vive en la actualidad.
    
    .hr.my-5

    .titulo-segundo#t_2_1.mt-5
      .h4 2.1 Breve historia del marketing digital 

    p.mt-5 El marketing digital ha tenido una gran evolución a medida que han evolucionado los medios de comunicación a lo largo de los últimos 40 años. A continuación, se presenta un breve recorrido por su historia, desde la perspectiva de Xie (2019). 
    .h6.mt-5 Historia del marketing
    .row.justify-content-center.align-items-center
      .col-10
        LineaTiempoB.color-secundario.mt-5(:datos="datosLineaTiempoB")
    p.mt-4.text-center Nota. Adaptada de Xie (2019). #[i Marketing digital: Navegando en aguas digitales, sumérgete conmigo.] 
    
    .hr.my-5
    
    .titulo-segundo#t_2_2.mt-5
      .h4 2.2 Las 4C del marketing digital 
    p.mt-5 También conocidas como el marketing mix, donde se distinguen cuatro importantes aspectos a tener en cuenta para entender y desplegar una estrategia: Consumidor, Costo, Conveniencia y Comunicación. Este modelo fue propuesto por Robert F. Lauterborn, en 1990, quien vio la necesidad de actualizar al entorno digital el modelo del mercadeo tradicional de 4P (Producto, Precio, Plaza y Promoción), sin perder su esencia (Xie, 2019). En el siguiente gráfico, se aprecian las definiciones.


    ImagenInfografica.color-secundario.mt-5

      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/ilustraciones/img16.svg', alt='Texto que describa la imagen')

      .tarjeta.btn-color-1.p-4(x="35%" y="25%")
        p Todas las estrategias para promocionar y vender un producto se basan en los gustos, deseos y necesidades de los consumidores; por ello, el marketing digital está tan enfocado en conocer y analizar su público través de diversas técnicas para lograr efectividad en sus procesos.

      .tarjeta.btn-color-2.p-4(x="65%" y="25%")
        p Este se entiende como el precio a pagar por un bien o servicio, el cual puede depender de distintos factores, como la producción, la calidad o el poder adquisitivo del público objetivo. Esta información será usada por el consumidor para decidir si adquiere o no dicho elemento.

      .tarjeta.btn-color-3.p-4(x="35%" y="75%")
        p Supone el proceso de compra, teniendo en cuenta el servicio al cliente, la comodidad del consumidor y la claridad de la información del producto o servicio que va a adquirir; lo que permite fidelizar a un público.
  

      .tarjeta.btn-color-4.p-4(x="65%" y="75%")
        p Los procesos comunicativos dentro del marketing digital juegan un papel muy importante. Estos pueden definir la personalidad, interacción y conexión de la marca con su público. Además, permiten realizar una entrega de información coherente que logre una capitalización del tiempo invertido en lograr estos lazos de unión.             
    .hr.mt-5
    .titulo-segundo#t_2_3.mt-5
      .h4 2.3 Herramientas del marketing digital
    p.mt-5 Dentro del marketing digital, es posible identificar las principales herramientas para llevar a cabo las estrategias que se propongan para el posicionamiento de una empresa o marca. Es de destacar que estas se mantienen en constante evolución y es viable encontrar otras que faciliten los objetivos a alcanzar.

    .p De acuerdo con De Castro (2019), se podrían identificar las siguientes herramientas:
      
    TabsC.color-acento-contenido.mt-5
      .py-3.py-md-4(titulo="Blog")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img17.svg', alt='Texto que describa la imagen')

          .col-md-6
            .h5 Blog
            p Permite generar mayor captación del interés del público objetivo, con contenidos frescos, como imágenes, textos de opinión, videos o podcasts; lo cual ofrece mejor posicionamiento en los motores de búsqueda.

      .py-3.py-md-4(titulo="E-mail marketing")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img18.svg', alt='Texto que describa la imagen')

          .col-md-6
            .h5 E-mail marketing
            p Se define como una estrategia de comunicaciones que entrega una información puntual de contenido promocional de productos o servicios por medio del correo electrónico. Esto permite fidelizar el público objetivo y permite la captación de nuevos usuarios con la ayuda de bases de datos especializadas.
        
      .py-3.py-md-4(titulo="Social media")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img19.svg', alt='Texto que describa la imagen')

          .col-md-6
            .h5 Social media
            p Este radica en las redes sociales, que, como su nombre lo indica, son redes que atrapan usuarios en torno a una empresa o marca definida. Lo que se espera de esto es generar y mantener una comunidad que interactúa al compartir contenido y experiencias que surgen a partir de lo que se promociona.
            p Según los intereses de la marca y el comportamiento del público objetivo, es como se eligen las redes sociales adecuadas.

      .py-3.py-md-4(titulo="Posicionamiento en motores de búsqueda")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img20.svg', alt='Texto que describa la imagen')

          .col-md-6
            .h5 Posicionamiento en motores de búsqueda
            p Al hablar de posicionamiento en motores de búsqueda, se hace referencia al SEO (Search Engine Optimization). Este permite que la marca o empresa aparezca en el motor de búsqueda al momento en que un usuario utilice palabras relacionadas con esta, lo cual genera un mayor flujo de tráfico al sitio web. Aquí es muy importante la definición de palabras clave que se relacionen con la página web en cuestión.
        
      
      .py-3.py-md-4(titulo="Publicidad online")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-a.img-t(src='@/assets/ilustraciones/img21.svg', alt='Texto que describa la imagen')

          .col-md-6
            .h5  Publicidad online
            p Es el pago de publicidad digital por medio de las distintas plataformas que la empresa o marca necesite para potenciar el mensaje con el público que desea alcanzar, lo que se traduce como una buena forma de darse a conocer y captar nuevos usuarios. Esto significa que, además de los contenidos publicitarios orgánicos que generan atención, el pago de pauta digital llega al público deseado a partir de una adecuada segmentación.
    .p-r.mt-5 #[b Nota.] Adaptado de De Castro, I. (2019). ¿Qué son herramientas de marketing y por qué debo contar con ellas? 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '1440 – 1900 Aparece la publicidad impresa',
        texto:
          'En 1440 se inventa la imprenta y con ella aparecen los medios impresos que en este lapsus de tiempo permitieron por primera vez la difusión masiva de textos, como la revista o el periódico. Esto permitió la creación de posters y afiches para la promoción de las empresas del momento.',
        icono: require('@/assets/ilustraciones/img10.svg'),
      },
      {
        titulo: '1920 – 1949 La emergencia de los nuevos medios',
        texto:
          'Con la llegada de la radio y su progresiva difusión en los hogares, se da origen a este importante medio. Igualmente, surge la publicidad televisiva y el teléfono empieza a tener gran presencia en las familias de la época.',
        icono: require('@/assets/ilustraciones/img11.svg'),
      },
      {
        titulo: '1950 – 1972 El marketing florece',
        texto:
          'En este periodo, se evidencia que los ingresos de la publicidad televisiva superan a los medios impresos o radiales, lo que permite un crecimiento de la inversión en el medio audiovisual y emerge el telemarketing.<br>En 1970, se pronuncia por primera vez la palabra Internet; a su vez, se crea el primer programa para enviar un correo electrónico y se evidencia una caída en los medios impresos. Del mismo modo, se funda Microsoft y se crean los emoticones.',
        icono: require('@/assets/ilustraciones/img12.svg'),
      },
      {
        titulo: '1973 – 1994 Emerge la era digital',
        texto:
          'Aparecen las empresas que conocemos hasta el día de hoy. Motorola genera la primera llamada por teléfono móvil, IBM lanza su primer ordenador personal y Apple presenta su Macintosh en un comercial del Superbowl. <br>En este tiempo, se producen importantes avances en la tecnología 2G y se menciona por primera vez el marketing digital, dado que se crea la primera página web y se presenta de forma pública la World Wide Web (www); además, se da a conocer el primer buscador web y se evidencia una combinación de publicidad televisiva en los medios impresos.',
        icono: require('@/assets/ilustraciones/img13.svg'),
      },
      {
        titulo: '1995 – 2002 La burbuja .com',
        texto:
          'El GPS (Sistema de Posicionamiento Global) puede ser usado en modo civil; se crean las primeras e-commerce, como Amazon y Netscape; surge por primera vez el concepto de SEO (Search Engine Optimization) y se crea el primer blog. Además, en este tiempo aparece la primera red social, llamada SixDegrees. En 1998, nace Google; igualmente, el popular MSN Messenger y también se crea Google Analytics.',
        icono: require('@/assets/ilustraciones/img14.svg'),
      },
      {
        titulo: '2003 – Actualidad. La era del marketing digital',
        texto:
          'En el año 2003, llegan a reinar las redes sociales en todo su esplendor. Algunas mantienen su fuerza y otras van decayendo. Igualmente, se actualizan los algoritmos y se entiende que esta es la era para mantener al mundo hiperconectado, consumiendo contenidos y al mismo tiempo creándolos.',
        icono: require('@/assets/ilustraciones/img15.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
