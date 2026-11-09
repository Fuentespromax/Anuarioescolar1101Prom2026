/* Datos del anuario: edita aquí el texto de cada persona. Las fotos y firmas están en /img */
const PERSONAS = [
  {
    "nombre": "Alarcon Cortes Laura Liney",
    "rol": "estudiante",
    "foto": "estudiante-1.jpg",
    "firma": "firma-1.png",
    "frase": "El que persevera alcanza",
    "aspiraciones": [
      "Enfermera",
      "Doctora",
      "Ingeniera"
    ],
    "recuerdo": "Haber encontrado una persona realmente leal en mi vida",
    "agradecimientos": "Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia."
  },
  {
    "nombre": "Amaya Losada Narly Lizeth",
    "rol": "estudiante",
    "foto": "estudiante-2.jpg",
    "firma": "firma-2.png",
    "frase": "No entendí nada",
    "aspiraciones": [
      "Seguir estudiando",
      "Terminar hasta sacar el tecnólogo",
      "Trabajar para conseguir mis cosas"
    ],
    "recuerdo": "Mi recuerdo favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa",
    "agradecimientos": "A mis padres y a todos los docentes que me acompañaron"
  },
  {
    "nombre": "Barrera Mosquera Nycot Danihela",
    "rol": "estudiante",
    "foto": "estudiante-3.jpg",
    "firma": "firma-3.png",
    "frase": "Su Madreeee",
    "aspiraciones": [
      "Estudiar en el Sena",
      "Hacer orgullosa a mi madre",
      "Infante de Marina",
      "Chef"
    ],
    "recuerdo": "Mi recuerdo favorito fue cuando iniciamos nuestro grupito de 4 en séptimo con unas amigas",
    "agradecimientos": "Le doy gracias a mi madre por darme su apoyo incondicional en mis estudios y por siempre confiar en mí"
  },
  {
    "nombre": "Bastidas Lombrana Andres Felipe",
    "rol": "estudiante",
    "foto": "estudiante-4.jpg",
    "firma": "firma-4.png",
    "frase": "Relax que yo remonto",
    "aspiraciones": [
      "Odontólogo"
    ],
    "recuerdo": "Mi noviazgo",
    "agradecimientos": "Agradezco a mis padres por todo el esfuerzo que hicieron todos estos años para que yo pudiera llegar hasta acá MI GRADO DE BACHILLER"
  },
  {
    "nombre": "Benitez Castro Estiven Julian",
    "rol": "estudiante",
    "foto": "estudiante-5.jpg",
    "firma": "firma-5.png",
    "frase": "Mire a este negro",
    "aspiraciones": [
      "Mi mayor aspiración es convertirme en doctor y alcanzar todas mis metas profesionales, preparándome con dedicación para proteger la salud de las personas y cumplir con éxito cada objetivo que me proponga en el futuro."
    ],
    "recuerdo": "Sin duda, mi recuerdo favorito fue el día en que me organizaron una fiesta de cumpleaños sorpresa. Ver reunidos a mis 4 mejores amigos para celebrar conmigo es un momento que guardo con muchísimo cariño en el corazón.",
    "agradecimientos": "Agradezco profundamente a mis compañeros, familiares y profesores por haberme acompañado y guiado en esta etapa. Su apoyo y compañía fueron fundamentales durante todo mi proceso educativo en la secundaria."
  },
  {
    "nombre": "Bocanegra Giraldo Nikoll Lizeth",
    "rol": "estudiante",
    "foto": "estudiante-6.jpg",
    "firma": "firma-6.png",
    "frase": "En nombre de Dios, todo lo lograré",
    "aspiraciones": [
      "Estudiar la carrera de mis sueños"
    ],
    "recuerdo": "Todos los recuerdos de octavo, pero especialmente cuando dañamos un candado para no tener clases con una profesora",
    "agradecimientos": "Gracias a mi familia por el apoyo"
  },
  {
    "nombre": "Caviedes Perdomo Danna Valentina",
    "rol": "estudiante",
    "foto": "estudiante-7.jpg",
    "firma": "firma-7.png",
    "frase": "Ay Dios mío",
    "aspiraciones": [
      "Estudiar psicología, o seguir con el técnico."
    ],
    "recuerdo": "Mi recuerdo favorito es cuando unos compañeros estaban jugando con una pelota de papel, y accidentalmente le pegaron a una profesora casi dañándole las gafas.",
    "agradecimientos": "Les doy las gracias a mis padres por su apoyo emocional, económico, a mis maestros por su paciencia, y todas las enseñanzas que me han dejado."
  },
  {
    "nombre": "Cuellar Caviedes Zaidy Liseth",
    "rol": "estudiante",
    "foto": "estudiante-8.jpg",
    "firma": "firma-8.png",
    "frase": "Ay no que pena",
    "aspiraciones": [
      "Estudiar en el SENA",
      "Hacer el orgullosa de mi familia",
      "Cumplir mi sueño sin rendirme",
      "Crecer como persona y aprender de mis errores"
    ],
    "recuerdo": "Mi recuerdo favorito de décimo fue compartir risas, locuras y momentos inolvidables con mis compañeros, creando recuerdos que siempre llevaré en mi corazón.",
    "agradecimientos": "Agradezco a mis padres por su amor incondicional, por apoyarme en cada momento y por hacer tantos esfuerzos para darme lo mejor. Gracias por sus consejos, por confiar en mí y por motivarme a seguir adelante, incluso cuando las cosas se ponen difíciles. Ustedes son una parte fundamental de mi vida y una de mis mayores motivaciones para cumplir mis sueños. Todo lo que hacen por mí lo llevo en mi corazón, y espero algún día poder devolverles un poquito de todo lo que me han dado. Los amo mucho y me siento muy afortunada de tenerlos en mi vida."
  },
  {
    "nombre": "Escobar Ramirez Kewin Daniel",
    "rol": "estudiante",
    "foto": "estudiante-9.jpg",
    "firma": "firma-9.png",
    "frase": "Ole no",
    "aspiraciones": [
      "Ser profesional en multimedia",
      "Debutar como jugador"
    ],
    "recuerdo": "El día que jugué un torneo departamental",
    "agradecimientos": "Le agradezco a mi familia por apoyarme"
  },
  {
    "nombre": "Fuentes Aranda Laura Valentina",
    "rol": "estudiante",
    "foto": "estudiante-10.jpg",
    "firma": "firma-10.png",
    "frase": "Estoy siendo víctima de Xenofobia por parte de mi compañero Benítez",
    "aspiraciones": [
      "Ser programadora y tener una vida tranquila y digna."
    ],
    "recuerdo": "Todos los días a partir de 9no (2024) han sido como el mejor de todos. Pero los mejores como Prom fueron las horas lúdicas a la última hora de todos los miércoles.",
    "agradecimientos": "Agradezco a cada uno de mis compañeros por haber formado parte de los recuerdos más bonitos de mi último año escolar. Me llevo conmigo las risas, las enseñanzas, los momentos compartidos y la tristeza de saber que una etapa tan especial está llegando a su fin.\n\nA Yuvettslit Yunda, por ser mi primera amiga al llegar a la institución, por permitirme verla crecer y por ocupar un lugar en mi corazón que el tiempo nunca podrá borrar. A Julieta Rocha, por ser mi compañía, cómplice, apoyo incondicional y una de las amistades más valiosas de este camino. A Isabella Monje, por tenderme la mano cuando más lo necesité; a Laura Serrato, por los momentos vividos; a Estiven Benítez, por su liderazgo, amistad y por hacerme bullying de vez en cuando; a Laura Marinez, por tantas risas y su apoyo; a Cristian Muñoz, por su compañía; a Heilyn Sánchez y Saory Montaña, por estar presentes cuando pudieron; a Laura Galindo, por su cariño y confianza; y a Johan Ramírez, por su carisma y honestidad. Gracias a todos por dejar un pedacito de ustedes en esta historia que siempre recordaré con cariño.\n\nA mis profesores, especialmente al profe Sebastián Masmelas, gracias por despertar en mí el amor por la programación.\n\nA mi padre, Leonardo Fuentes, por su apoyo económico durante mi formación; a mis hermanos mayores, Cristian Galindo y Yonatan Galindo, por tenderme la mano cuando lo necesité; y a Esther Hernández, por acompañarme espiritual y emocionalmente en este proceso.\n\nPero, sobre todo, mi agradecimiento más profundo es para mi mamá, Lina Aranda. Gracias por cada sacrificio, por cada esfuerzo silencioso y por luchar incansablemente para darme un futuro mejor. Gracias por salvarme de la ignorancia, por creer en mí incluso en medio de las dificultades y por dejarlo todo con tal de verme llegar lejos. Si hoy puedo soñar con un futuro lleno de oportunidades, es porque tú has construido el camino con tus propias manos."
  },
  {
    "nombre": "Galindo Diaz Laura Valentina",
    "rol": "estudiante",
    "foto": "estudiante-11.jpg",
    "firma": "firma-11.png",
    "frase": "Tengo Sueño",
    "aspiraciones": [
      "Poder especializarme en lo que más aspiro."
    ],
    "recuerdo": "Mi recuerdo favorito es cuando conocí por primera vez a mi mejor amiga Valeria",
    "agradecimientos": "Le agradezco a mis padres por darme motivación y fuerzas para lograr mis metas y poder seguir adelante."
  },
  {
    "nombre": "Garcia Perez Mariana",
    "rol": "estudiante",
    "foto": "estudiante-12.jpg",
    "firma": "firma-12.png",
    "frase": "Falsos",
    "aspiraciones": [
      "Psicología o licenciatura en lengua castellana"
    ],
    "recuerdo": "La vez que hicieron caer a Edwin y de paso a Natalia en el puente de guaunda y quedó cochino",
    "agradecimientos": "Agradezco principalmente a Dios y a mis padres, sobre todo a mi hermana Nubia quien ha hecho el papel principal en apoyarme tanto académica como financieramente, los amo."
  },
  {
    "nombre": "Gutierrez Diz Jesus Fernando",
    "rol": "estudiante",
    "foto": "estudiante-13.jpg",
    "firma": "firma-13.png",
    "frase": "Los errores ocurren",
    "aspiraciones": [
      "Convertirme en un Médico"
    ],
    "recuerdo": "Cuando obtuve las 80 horas sociales sin hacer prácticamente nada.",
    "agradecimientos": "Gracias a mis padres, hermano y profesores que me apoyaron en todo para poder salir adelante."
  },
  {
    "nombre": "Marinez Olaya Laura Angeline",
    "rol": "estudiante",
    "foto": "estudiante-14.jpg",
    "firma": "firma-14.png",
    "frase": "No joda",
    "aspiraciones": [
      "Estudiar derecho"
    ],
    "recuerdo": "Con mis padres de pequeña",
    "agradecimientos": "Agradezco a mi familia"
  },
  {
    "nombre": "Medina Garcia Francy Fidelina",
    "rol": "estudiante",
    "foto": "estudiante-15.jpg",
    "firma": "firma-15.png",
    "frase": "Todo es mental",
    "aspiraciones": [
      "Graduarme",
      "Ingresar a la universidad",
      "Estudiar Medicina",
      "Crecer como persona",
      "Ayudar a mi familia",
      "Conocer nuevos lugares",
      "Cumplir cada uno de mis sueños"
    ],
    "recuerdo": "Mi recuerdo favorito en general es cuando compartimos",
    "agradecimientos": "Agradezco a mi familia, docentes y compañeros por su apoyo, dedicación y enseñanzas durante esta etapa, que han contribuido a mi formación personal y académica."
  },
  {
    "nombre": "Monje Vega Isabella",
    "rol": "estudiante",
    "foto": "estudiante-16.jpg",
    "firma": "firma-16.png",
    "frase": "Te cuento un chiste amiga",
    "aspiraciones": [
      "Tener mi propia empresa",
      "Llegar a componer mis propias canciones"
    ],
    "recuerdo": "Cuando estaba en el puente con mis amigos y nos inventamos un caso para un juicio",
    "agradecimientos": "Le agradezco a mi mamá, tío y abuela por nunca dejarme sola y confiar en mí incluso cuando yo no lo podía hacer"
  },
  {
    "nombre": "Montaña Piñeros Saory Valentina",
    "rol": "estudiante",
    "foto": "estudiante-17.jpg",
    "firma": "firma-17.png",
    "frase": "Tengo hambre",
    "aspiraciones": [
      "Salir del colegio y formar una carrera"
    ],
    "recuerdo": "Cuando me la pasaba jugando voleibol",
    "agradecimientos": "Agradecimiento a todos los que me acompañaron en mi formación académica"
  },
  {
    "nombre": "Mora Esquivel Julieth Valentina",
    "rol": "estudiante",
    "foto": "estudiante-18.jpg",
    "firma": "firma-18.png",
    "frase": "Somos la resistencia",
    "aspiraciones": [
      "Estudiar lo que me gusta y terminarlo",
      "Trabajar en eso y formar una hermosa familia"
    ],
    "recuerdo": "En 7mo cuando jugábamos fútbol la mayoría del salón unidos",
    "agradecimientos": "Agradezco primeramente a Dios por haberme permitido estar donde estoy y con vida, y a mis padres por apoyarme en cada momento de mi vida y supliendo cada necesidad que tengo"
  },
  {
    "nombre": "Muñoz Quintero Cristian Rene",
    "rol": "estudiante",
    "foto": "estudiante-19.jpg",
    "firma": "firma-19.png",
    "frase": "Amo a angeline",
    "aspiraciones": [
      "Hacer un tecnólogo en el SENA",
      "Ir a la UNI y estudiar lo que me gusta para ganar mucha plata"
    ],
    "recuerdo": "Cuando fui novio de angeline",
    "agradecimientos": "Cc"
  },
  {
    "nombre": "Ortiz Narvaez Alex Felipe",
    "rol": "estudiante",
    "foto": "estudiante-20.jpg",
    "firma": "firma-20.png",
    "frase": "No mienta",
    "aspiraciones": [
      "Estudiar mi carrera de mis sueños y ser un gran profesional"
    ],
    "recuerdo": "Cuando jugaba micro con mis compañeros",
    "agradecimientos": "Primero que todo, quiero dar gracias a Dios por haberme permitido vivir esta experiencia escolar con salud y vida. También agradecer a los profesores que se esforzaron por enseñarnos con dedicación, paciencia y esfuerzo todos sus conocimientos y valores que nos puedan servir en nuestra vida cotidiana. Por último, estaré infinitamente agradecido con mis padres por haberme acompañado y apoyado en todos mis proyectos y en mi trayectoria como estudiante a través del tiempo."
  },
  {
    "nombre": "Ortiz Sarmiento Duvan Felipe",
    "rol": "estudiante",
    "foto": "estudiante-21.jpg",
    "firma": "firma-21.png",
    "frase": "Yo si estudié pero se me olvidó todo",
    "aspiraciones": [
      "Mis aspiraciones son terminar mis estudios, graduarme del colegio, estudiar lo que me gusta y convertirme en un gran profesional. Sueño con tener un buen trabajo, una casa propia, ayudar económicamente a mi familia, hacer sentir orgullosos a mi mamá y hermano, viajar y conocer nuevos lugares. Aspiro a ser una persona responsable, humilde y respetuosa, cumplir cada uno de mis sueños y construir un futuro lleno de felicidad, éxitos y bendiciones, siempre con la ayuda de Dios."
    ],
    "recuerdo": "Cuando jugué fútbol con mis compañeros y nos golearon pero no faltaron las risas",
    "agradecimientos": "Gracias, Dios, por permitirme vivir esta hermosa etapa de mi vida, por darme la oportunidad de aprender, por cada compañero que puso una sonrisa en mis días y por cada maestro que me enseñó algo más que una lección. Gracias por los momentos felices, por las dificultades que me hicieron más fuerte y por los recuerdos que siempre llevaré en mi corazón. Hoy entiendo que el colegio no solo me dejó conocimientos, sino también amistades, experiencias y enseñanzas que me acompañarán toda la vida."
  },
  {
    "nombre": "Ramirez Garcia Joan Sebastian",
    "rol": "estudiante",
    "foto": "estudiante-22.jpg",
    "firma": "firma-22.png",
    "frase": "Sapa",
    "aspiraciones": [
      "Ser un gran empresario"
    ],
    "recuerdo": "C",
    "agradecimientos": "Ccc"
  },
  {
    "nombre": "Rocha Losada Julieta",
    "rol": "estudiante",
    "foto": "estudiante-23.jpg",
    "firma": "firma-23.png",
    "frase": "Todo pasa por algo, los planes de Dios son perfectos",
    "aspiraciones": [
      "Quiero cumplir mis dos sueños que es llegar a ser profesora de pedagogía infantil para mostrar ese amor tan grande que tengo con los niños y enseñarles las bases que les van a servir para el resto de su vida, y también después de cumplir eso estudiar para ser azafata, es uno de mis mayores sueños"
    ],
    "recuerdo": "Cuando me caí en un río con mis amigos y aprovechamos y nos bañamos.",
    "agradecimientos": "A mis papás que han estado desde el momento en que nací y me han apoyado en todo"
  },
  {
    "nombre": "Sanchez Dussan Heilyn Yireth",
    "rol": "estudiante",
    "foto": "estudiante-24.jpg",
    "firma": "firma-24.png",
    "frase": "Ya quisiera yo",
    "aspiraciones": [
      "Llegar a ser una persona exitosa que no necesita ayuda de los demás"
    ],
    "recuerdo": "El compartir de la salchipapa",
    "agradecimientos": "Agradezco a mi familia, amigos, compañeros y profesores por darme enseñanzas, ejemplos y aprendizaje que me ayudaron a formarme como la persona que soy ahora."
  },
  {
    "nombre": "Sanchez Rocha Thaliana Sofia",
    "rol": "estudiante",
    "foto": "estudiante-25.jpg",
    "firma": "firma-25.png",
    "frase": "Vive la vida",
    "aspiraciones": [
      "Ser feliz"
    ],
    "recuerdo": "El 2022 con mis amigas",
    "agradecimientos": "Agradezco a mdzs, a mis padres, a mis profesores y a los compañeros para ayudarme a lograr mis metas"
  },
  {
    "nombre": "Serrato Acosta Hillary Natalia",
    "rol": "estudiante",
    "foto": "estudiante-26.jpg",
    "firma": "firma-26.png",
    "frase": "No todo es para siempre, pero tú sí vas a poder con todo.",
    "aspiraciones": [
      "Quiero terminar mi bachillerato con la ayuda de Dios, graduarme y estudiar para ser una gran licenciada en educación infantil"
    ],
    "recuerdo": "Una vez que estaba caminando con mis amigos por el patio del colegio y después nos fuimos para un lado el cual había un río; esa vez me lanzaron al río con otro compañero. Yo no quería culpar ni avisar a la responsable pero ya la habían delatado en coordinación, nos llevaron para allá, le pusieron observación y nos regañaron.",
    "agradecimientos": "Quiero terminar mi bachillerato con la ayuda de Dios, graduarme y estudiar para ser una gran licenciada en educación infantil"
  },
  {
    "nombre": "Serrato Trujillo Laura Sofia",
    "rol": "estudiante",
    "foto": "estudiante-27.jpg",
    "firma": "firma-27.png",
    "frase": "Uy no atrás satanás",
    "aspiraciones": [
      "Quiero graduarme feliz junto a mis amigos",
      "Terminar el tecnólogo",
      "Homologar y estudiar diseño",
      "Estudiar más cursos en el SENA",
      "Entrar en la universidad y estudiar biología",
      "Graduarme de la universidad",
      "Ser profesional con lo estudiado"
    ],
    "recuerdo": "Mi recuerdo favorito es cuando todos fuimos a la casa del man que me gustaba y ellos se pusieron a hacer serenata la canción de la ventana marroncita",
    "agradecimientos": "Gracias a mis amigos: Laura Fuentes, Ancizar Triana, Joan Ramírez, Isabella Monje, Yuvettslit Yunda… y a todo el salón por ser tan especial para mí y por ser tan unidos a pesar de nuestras diferencias"
  },
  {
    "nombre": "Soto Calderon Nicolas",
    "rol": "estudiante",
    "foto": "estudiante-28.jpg",
    "firma": "firma-28.png",
    "frase": "Yo que me saqué un 3 me conformo",
    "aspiraciones": [
      "Tener un trabajo estable",
      "Tener un título profesional de ingeniero y estar junto a mis padres"
    ],
    "recuerdo": "Cuando jugamos un partido con mis amigos y nos golearon",
    "agradecimientos": "Primero que todo darle el agradecimiento a mis padres que son los que me han apoyado siempre y en cualquier circunstancia, también a mis abuelas que es otro mérito de orgullo saber que tengo una familia unida y que me apoya en todo y gracias a eso he podido con todo y siempre salir adelante afrontando todo"
  },
  {
    "nombre": "Triana Murcia Ancizar Steven",
    "rol": "estudiante",
    "foto": "estudiante-29.jpg",
    "firma": "firma-29.png",
    "frase": "Six seven",
    "aspiraciones": [
      "Terminar el tecnólogo",
      "Irme del país junto a mi familia",
      "Hacer la Universidad",
      "Tener hijos"
    ],
    "recuerdo": "El día del compartir en 10°",
    "agradecimientos": "Agradezco a mis padres por el gran amor que me han dado, a mis hermanos, al profe Sebas por ser tan buen docente y a mis amigos por hacer los días tan divertidos y más fáciles"
  },
  {
    "nombre": "Yunda Cortes Yuvettslit",
    "rol": "estudiante",
    "foto": "estudiante-30.jpg",
    "firma": "firma-30.png",
    "frase": "Life goes on",
    "aspiraciones": [
      "Ayudar a mi mamá",
      "Llegar a ser profesional en marketing",
      "Viajar",
      "Tener un trabajo estable",
      "Obtener dinero",
      "Especializarme en algo"
    ],
    "recuerdo": "Mi mamá y yo en la graduación de 9no, por como se veía y sentí su orgullo",
    "agradecimientos": "A mi mamá y a mi hermano, por acompañarme durante todo este proceso, por su esfuerzo para conseguir lo que yo necesitaba y, sobre todo, por demostrarme su apoyo, amor y orgullo"
  },
  {
    "nombre": "Johan Sebastian Masmelas Vega",
    "rol": "docente",
    "foto": "docente-1.jpg",
    "firma": "firma-docente-1.png",
    "frase": "La constancia concede la victoria",
    "aspiraciones": [
      "Doctorado en Educación",
      "Tener Salud",
      "Ser feliz"
    ],
    "recuerdo": "Cuando me gradué de Ingeniero",
    "agradecimientos": "A mi familia quiero agradecerles por ser mi mayor refugio y mi equipo incondicional."
  }
];

/* Textos generales del libro (edítalos aquí) */
const LIBRO = {
  colegio: 'I.E. Eugenio Ferro Falla',
  titulo: 'Anuario 2026',
  grupo: 'PROM 1101',
  lema: 'Jamás olvidaremos los años vividos',
  piefoto: 'Grado 11.º · Promoción 1101',
  frasePagina: 'La vida también se trata de los momentos que no se planean.',
  mensaje: {
    titulo: 'Para mi promoción',
    saludo: 'Queridos compañeros de la PROM 1101:',
    parrafos: [
      'Llegamos al final de una etapa que empezó con nervios y termina con orgullo. Aquí quedaron las risas, los trabajos de última hora, los ratos en el patio y esos recuerdos que solo nosotros entendemos.',
      'Gracias a nuestros padres, que nos sostuvieron con su esfuerzo; a nuestros profesores, que nos enseñaron con paciencia; y a cada compañero, que hizo más liviano el camino.',
      'Hoy cerramos el colegio, pero no nuestra historia. Que la ciencia y la virtud que aprendimos aquí nos acompañen a donde vayamos. ¡Los llevo en el corazón!'
    ],
    firma: '— Tu nombre aquí'
  }
};
