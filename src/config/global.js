export default {
  global: {
    componenteFormativo: 'Marketing digital',
    descripcionCurso:
      'Con la llegada de las nuevas tecnologías, el internet ha marcado un gran impacto en todos los aspectos de la vida cotidiana, lo que ha permitido adaptarnos a escenarios desconocidos en una nueva era donde priman los entornos digitales y, en el contexto empresarial, estos aparecen idóneos para el <i>marketing</i> digital, reuniendo una serie elementos y estrategias para lograr los objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conoce el entorno digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes del entorno digital',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Plataformas digitales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos de marketing digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Breve historia del marketing digital',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Las 4C del marketing digital',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas del marketing digital',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diferencia entre SEO y SEM. ¿Cómo definir su uso?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estrategia digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-play-circle',
            numero: '4.1',
            titulo: 'Tipos de estrategias',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Plan de marketing digital',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Social media',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Redes sociales',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Contenidos para redes sociales',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Analítica de redes sociales',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Marco legal de las redes sociales',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Derechos de autor de contenidos digitales',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo: 'Normatividad colombiana',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Maria Camila Álvarez',
        cargo: 'Contratista diseño Curricular',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
        regional: 'Regional Antioquia',
      },
      {
        nombre: 'Liliana Ceballos',
        cargo: 'Contratista diseño Curricular',
        centro: 'Centro de Formación en Diseño, Confección y Moda',
        regional: 'Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica del SENA',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La Granja',
        regional: 'Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: [
          'Adriana Marcela Suarez',
          'Angela Maldonado Jaime',
          'Daniela Bedoya Muñoz',
          'Gilberto Junior Rodriguez Rodriguez',
          'Wilson Andrés Arenales Caceres',
        ],
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Adventures Digital Agency. (Septiembre 5 de 2018). Ante todo, definamos términos: ¿Qué es el entorno digital? Blog Adventures. ',
      link: 'https://blog.adventures.do/que-es-el-entorno-digital/',
    },
    {
      referencia:
        'Boada, N. (Julio 26 de 2009). Los 8 pasos de un plan de marketing en redes sociales. Cyberclick. ',
      link:
        'https://www.cyberclick.es/numerical-blog/los-8-pasos-de-un-plan-de-marketing-en-redes-sociales',
    },
    {
      referencia:
        'Cibrián, I. (2018). Marketing digital: Mide, analiza y mejora. ESIC.',
    },
    {
      referencia:
        'Cyberclick Academy. (Abril de 2020). ¿Qué es el SEM o Search Engine Marketing? (2021). ',
      link: 'https://www.cyberclick.es/sem',
    },
    {
      referencia:
        'Decisión Andina 351 de 1993. [Comisión del Acuerdo de Cartagena]. Régimen común sobre derecho de autor y derechos conexos. Diciembre 17 de 1993. ',
      link: 'https://www.wipo.int/edocs/lexdocs/laws/es/can/can010es.pdf',
    },
    {
      referencia:
        'De Castro, I. (Septiembre 30 de 2019). ¿Qué son herramientas de marketing y por qué debo contar con ellas? Innovacode - Resolución de problemas. ',
      link:
        'https://www.innovacode.com.do/marketing/herramientas-de-marketing/#:%7E:text=Son%20las%20herramientas%20de%20marketing,variada%20de%20posibilidades%20de%20implementaci%C3%B3n.',
    },
    {
      referencia:
        'De Paul, V. (Diciembre 18 de 2020). 20 ideas de redes sociales para mantener el feed de tu marca al día. Sprout Social. ',
      link: 'https://sproutsocial.com/insights/ideas-de-redes-sociales/',
    },
    {
      referencia:
        'Dotras, A. (2018). Social Media. Herramientas y estrategias empresariales. Ediciones de la U. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8001',
    },
    {
      referencia:
        'Giraldo, V. (Febrero 14 de 2019). Plataformas digitales: ¿qué son y qué tipos existen? Rock Content - ES. ',
      link: 'https://rockcontent.com/es/blog/plataformas-digitales/',
    },
    {
      referencia:
        'Giu, W. (Julio 18 de 2018). Qué es una Estrategia Digital. WalterGiu. ',
      link: 'https://waltergiu.com/blog/que-es-una-estrategia-digital',
    },
    {
      referencia:
        'Laudon, K., y Laudon, J. (2012). Sistemas de información gerencial. Pearson. ',
      link: 'https://es.calameo.com/read/0045399238b63175162a6',
    },
    {
      referencia: 'Ley 23 de 1982. Sobre derechos de autor. Enero 28 de 1982. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=3431&dt=S',
    },
    {
      referencia:
        'Ley 241 del 2011. Por la cual se regula la responsabilidad por las infracciones al derecho de autor y los derechos conexos en Internet. Abril de 2011. ',
      link:
        'http://www.informatica-juridica.com/proyecto-de-ley/proyecto-ley-241-derecho-autor-los-derechos-conexos-internet/',
    },
    {
      referencia:
        'Ley 1834 del 2017. Por medio de la cual se fomenta la economía creativa. Mayo 23 de 2017. ',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30030647',
    },
    {
      referencia:
        'Ley 1915 del 2018. Por la cual se modifica la ley 23 del 1982 y se establecen otras disposiciones en materia de derecho de autor y derechos conexos. Julio 12 de 2018. ',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/LEY%201915%20DEL%2012%20DE%20JULIO%20DE%202018.pdf',
    },
    {
      referencia:
        'MES academy. (2017, October 10). Tono de comunicación en entornos digitales - Lección 10 [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=MIHtogevWZM&feature=youtu.be',
    },
    {
      referencia:
        'MinTIC. (Septiembre 12 de 2015). Redes sociales: Leyes para tener en cuenta. En TIC confío. ',
      link:
        'https://www.enticconfio.gov.co/redes-sociales-leyes-para-tener-en-cuenta',
    },
    {
      referencia:
        'Newberry, C. (Julio 17 de 2020). Análisis de redes sociales: Una guía para principiantes. Social Media Marketing & Management Dashboard. ',
      link: 'https://blog.hootsuite.com/es/analisis-de-redes-sociales/',
    },
    {
      referencia: 'OMPI. (2020). ¿Qué es la propiedad intelectual? ',
      link: 'https://www.wipo.int/publications/es/details.jsp?id=4528',
    },
    {
      referencia:
        'Pérez, A. y Acosta, H. (2003). La convergencia mediática: un nuevo escenario para la gestión de información. Revista Cubana de Información en Ciencias de la Salud, 11(1). ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1024-94352003000500003',
    },
    {
      referencia:
        'Pino, C. (2009). El entorno digital en la nueva era de los medios y la publicidad: la metamorfosis del consumidor. Razón y Palabra, (66). ',
      link: 'https://www.redalyc.org/articulo.oa?id=199520908015',
    },
    {
      referencia: 'SENA, (1989). Hablemos de marketing. 11-13. ',
      link: 'https://hdl.handle.net/11404/876',
    },
    {
      referencia:
        'Silva, R. (2009). Beneficios del comercio electrónico. Perspectivas,  (24),151-164. ',
      link: 'https://www.redalyc.org/articulo.oa?id=425942160008',
    },
    {
      referencia:
        'Socialmood. (Marzo 13 de 2020). ¿Qué es el SEO y por qué lo necesito? 40deFiebre. ',
      link: 'https://www.40defiebre.com/guia-seo/que-es-seo-por-que-necesito',
    },
    {
      referencia:
        'Thompson, I. (Octubre de 2006). Definición de Marketing. Portal de marketing - Marketing-free.com. ',
      link:
        'https://www.marketing-free.com/marketing/definicion-marketing.html',
    },
    {
      referencia:
        'Xie, Y. M. S. (2019). Marketing digital: Navegando en aguas digitales, sumérgete conmigo. Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=9100',
    },
  ],
  glosario: [
    {
      termino: 'Alcance',
      significado: 'Determinar hasta qué punto se puede llegar.',
    },
    {
      termino: 'Banners',
      significado: 'Formato publicitario en Internet.',
    },
    {
      termino: 'Business',
      significado: 'Traducción al inglés de ‘negocio’.',
    },
    {
      termino: 'Consumer',
      significado: 'Traducción al inglés de ‘consumidor’.',
    },
    {
      termino: 'Fidelización de clientes',
      significado:
        'Proceso para retener consumidores, con el objetivo de que se conviertan en clientes habituales.',
    },
    {
      termino: 'Intrusivo',
      significado: 'Que se impone sin autorización.',
    },
    {
      termino: 'Jingle',
      significado:
        'Canción publicitaria para promocionar un producto o servicio.',
    },
    {
      termino: 'KPI (Key Performance Indicators)',
      significado:
        'Indicadores clave de desempeño para el despliegue de una estrategia de marketing.',
    },
    {
      termino: 'Sitio web',
      significado: 'Conjunto de archivos digitales referentes a un tema.',
    },
    {
      termino: 'Tráfico de usuarios',
      significado: 'Flujo de información de usuarios en una página web.',
    },
  ],
  complementario: [
    {
      texto:
        'MES academy. (2017, October 10). Tono de comunicación en entornos digitales - Lección 10 [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MIHtogevWZM&ab_channel=MESacademy',
    },
    {
      texto:
        'Boada, N. (Julio 26 de 2009). Los 8 pasos de un plan de marketing en redes sociales. Cyberclick. ',
      tipo: 'página web',
      link:
        'https://www.cyberclick.es/numerical-blog/los-8-pasos-de-un-plan-de-marketing-en-redes-sociales',
    },
    {
      texto:
        'De Paul, V. (Diciembre 18 de 2020). 20 ideas de redes sociales para mantener el feed de tu marca al día. Sprout Social. ',
      tipo: 'página web',
      link: 'https://sproutsocial.com/insights/ideas-de-redes-sociales/',
    },
  ],
}
