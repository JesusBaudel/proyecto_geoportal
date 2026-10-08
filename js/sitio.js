/* ================================================================
   SITIO.JS — lógica general del sitio (Equipo y Biblioteca)
   ----------------------------------------------------------------
   Los nombres y grados académicos son datos reales publicados por
   la institución. Las fotos son PLACEHOLDER (iniciales) porque no
   se pueden redistribuir las fotos originales sin autorización;
   colócalas en /img/ y cambia el <div class="avatar"> por
   <img src="img/nombre.jpg">.
================================================================ */

const equipo = [
  { nombre: "Dra. Erika Chávez Nungaray",
    foto: "imagenes/DRAERIKA.png",
    rol: "Dra. en Ciencias Económicas",
    bio: "Doctora en Ciencias Económicas por la Universidad Autónoma de Baja California, Maestra en Economía Regional por la Universidad Autónoma de Coahuila, y Licenciada en Comercio Internacional por la Universidad Autónoma de Sinaloa. Actualmente directora de la Facultad de Economía y Relaciones Internacionales (FEyRI) de la Universidad Autónoma de Baja California, además de ser miembro del Sistema Nacional de Investigadores e Investigadoras Nivel I. Cuenta con el Perfil Deseable del Programa para el Desarrollo Profesional Docente (PRODEP). Coordinadora de Investigación y Posgrado de la facultad de 2018 a 2024. Ha realizado estancias de investigación en la Universidad de Castilla La Mancha, España y en la Universidad de Harvard, a través del Real Colegio Complutense y la Fundación David Rockefeller Center for Latin American Studies. Ha participado en actividades de investigación en la Red CLACSO-FACSO-CROP sobre estudios de Pobreza en América Latina y el Caribe. Ha presentado ponencias a nivel nacional e internacional; participado con diversos capítulos en libros, en revistas de divulgación y especializadas. Su línea de investigación se orienta al estudio de la dinámica industrial, crecimiento urbano y bienestar en la Frontera Norte." },

  { nombre: "Dr. Alejandro Mungaray Moctezuma",
    foto: "imagenes/DRALEJANDRO.png",
    rol: "Dr. en Planeación Urbana y Ordenación del Territorio",
    bio: "Profesor – Investigador de la Facultad de Economía y Relaciones Internacionales de la Universidad Autónoma de Baja California (UABC). Miembro Nivel 1 del Sistema Nacional de Investigadores desde 2012. Con formación como Ingeniero Civil por parte de la UABC, y obtención del grado de maestría y doctorado en Planeación Urbana y Ordenación del Territorio por parte de la Universidad de Castilla La – Mancha, España. En materia de investigación, ha creado grupos de investigación especializados en temas de movilidad y diseño de redes de infraestructura de transporte, gestión de recursos hídricos y pavimentos; y actualmente forma parte del cuerpo académico denominado Valuación, Economía y Territorio. Cuenta con más de 20 artículos de alta indización, 6 libros, al igual que diversas publicaciones adicionales arbitradas y presentaciones en eventos académicos nacionales e internacionales. En materia de gestión, ha coordinado más de 20 proyectos aplicados de alto impacto vinculados y financiados por los sectores privado y gubernamental. Ha sido Director del Sistema Integrado de Transporte y  Secretario de Movilidad Urbana Sustentable de la ciudad de Tijuana en el XXIV Ayuntamiento; y gremialmente se ha desempeñado como Delegado Estatal de la Asociación Mexicana de Ingenieros de Vías Terrestres y actualmente es miembro del organismo metropolitano Compañías Mexicanas de la Industria de la Construcción de Tijuana – Tecate – Rosarito." },

  { nombre: "Dr. Jesús Emilio Hernández Bernal",
    foto: "imagenes/DRJESUSEMILIO.png",
    rol: "Dr. en Geografía y Desarrollo Geotecnológico",
    bio: "Doctor en Geografía y Desarrollo Geotecnológico, con Maestría en Análisis Espacial y Geoinformática y Licenciado en Geografía, egresado de la Universidad Autónoma del Estado de México. Actualmente funge como Coordinador del Programa de Maestría y Doctorado en Valuación en donde también es parte del Núcleo Académico Básico. Es Profesor-Investigador de Tiempo Completo de la Facultad de Economía y Relaciones Internacionales (FEyRI) de la Universidad Autónoma de Baja California. Es miembro del Sistema Nacional de Investigadores Nivel Candidato. Sus líneas de investigación se orientan a temáticas relacionadas con estadística espacial, geografía de la salud, geodemografía, geografía urbana, teledetección y Sistemas de Información Geográfica (SIG). Autor de diversos capítulos de libro, artículos de investigación en revistas arbitradas e indexadas, ponencias en congresos nacionales e internacionales." },

  { nombre: "Dr. Julio Ernesto Torres Coto Mazier",
    foto: "imagenes/DRJULIO.png",
    rol: "Ingeniero Civil (UNAM), Maestro en Valuación",
    bio: "Ingeniero Civil por la Universidad Nacional Autónoma de México (UNAM) y maestro en Valuación por la UABC. Ha escrito diversos productos científicos relativos al área de la Valuación inmobiliaria, agropecuaria, de maquinaria y equipo, industrial y de empresas. Su ejercicio profesional se orienta a la valuación general, el diseño y análisis estructural, así como en la consultoría ingenieril en materia civil. Es miembro fundador de la Asociación de Ingenieros Civiles y Arquitectos de Tijuana; del Colegio Estatal de Valuadores de Baja California y del Instituto Mexicano de Valuación de Baja California. Es agremiado en la Asociación Internacional de Ciencias de la Vivienda; Instituto Americano del Concreto; Sociedad Americana de Ingenieros Civiles; Sociedad Americana de Valuadores; Appraisal Institute; Centro Studi di Estimo e di Economia Territoriale de la Universidad de Florencia, Italia; y del Royal Institute of Chartered Surveyors de Londres. Asimismo, se desempeña como integrante del Consejo Técnico de la Federación de Colegios de Valuadores, A.C. (FECOVAL). Actualmente preside la Unión Panamericana de Asociaciones en Valuación (UPAV)." },

  { nombre: "Dr. Alonso Hernández Guitrón",
    foto: "imagenes/DRALONSO.png",
    rol: "Arquitecto, Dr. en Valuación (en curso)",
    bio: "Profesor investigador Facultad de Economía y Relaciones Internacionales. Arquitecto por la Universidad Autónoma de Baja California (I1988-1992); con Maestría en Urbanismo por la Universidad Nacional Autónoma de México (1994-1996); Especialización en Planificación Estratégica Urbana por el Centro Iberoamericano de Desarrollo Estratégico Urbano (2010-2011); Actualmente estudiando Doctorado en Valuación, Universidad Autónoma de Baja California. Servidor Público, Estatal y Municipal en áreas urbano-ambientales, de 1999 a 2010, Coordinador del Programa Educativo de Arquitectura ECITEC UABC, 2013-2015. Director de la Escuela de Ciencias de la Ingeniería y Tecnología hoy FCITEC, UABC 2015 -2019. Miembro del Cuerpo Académico “Desarrollo Urbano y Sustentabilidad”, (En consolidación). Miembro Fundador de la Sociedad de Urbanistas de la Zona Metropolitana de Tijuana SUZMT. Perfil Prodep vigente 2021-2024 Cuenta con diversas publicaciones artículos y capítulos de libro y ha participado en investigaciones en temas relacionados con Desarrollo, Planeación y Habitabilidad Urbana, Asentamientos Irregulares. Actualmente apoyando los programas educativos de Economía, Administración pública y ciencia política, así como la Maestría en Valuación ." }
];

const rejillaEquipo = document.getElementById('rejilla-equipo');
equipo.forEach(p => {
  const iniciales = p.nombre.replace(/^(Dra?\.|Dr\.)\s*/, '').split(' ').map(w => w[0]).join('').slice(0, 2);

  // Si el docente tiene foto, la muestra; si no, muestra el círculo con iniciales
  const imagen = p.foto
    ? `<img class="avatar-foto" src="${p.foto}" alt="${p.nombre}">`
    : `<div class="avatar">${iniciales}</div>`;

  const el = document.createElement('div');
  el.className = 'tarjeta';
  el.innerHTML = `${imagen}
    <h4>${p.nombre}</h4><div class="rol">${p.rol}</div><p>${p.bio}</p>`;
  rejillaEquipo.appendChild(el);
});



/* ================================================================
   BIBLIOTECA — misma estructura de categorías que el sitio original.
   "Próximamente" = obra aún no publicada en el sitio real; deja el
   placeholder hasta que exista el documento y su enlace.
================================================================ */
const biblioteca = {
  "Libros": [
    { titulo: "Mujeres en zonas de atención prioritaria: Hacia una intervención social para el bienestar y la equidad",
      url: "https://astraeditorialshop.com/archivo-doi/mujeres-en-zonas-de-atencion-prioritaria/" },
    { titulo: "Enclaves económicos: desarrollo turístico y sustentable en el territorio",
      url: "https://c43c779b-2250-441f-ac72-643dc07a9f82.filesusr.com/ugd/e82f2a_bba547a501a84d1b81207f7bd55ed154.pdf" }
  ],
  "Artículos científicos": [
    { titulo: "Segregación territorial de la población migrante en Tijuana, 2010 y 2020",
      url: "https://estudiosyperspectivas.org/index.php/EstudiosyPerspectivas/article/view/318" },
    { titulo: "Valuación ecosistémica del Rancho Buenos Aires, un predio en conservación, Tijuana",
      url: "https://revista.uniandes.edu.ec/ojs/index.php/METANOIA/article/view/3565" },
    { titulo: "Distribución territorial de la transición demográfica del Estado de México, 1980-2020",
      url: "https://revista.uniandes.edu.ec/ojs/index.php/METANOIA/article/view/3565" },
    { titulo: "Análisis territorial de la transición epidemiológica de 0-14 años de edad, Estado de México, 1980-2020",
      url: "https://www.researchgate.net/publication/371038129_ANALISIS_TERRITORIAL_DE_LA_TRANSICION_EPIDEMIOLOGICA_DE_0-14_ANOS_DE_EDAD_ESTADO_DE_MEXICO_1980-2020" }
  ],
  "Informes": [],
  "Ponencias y artículos de difusión": []
}
const faq = [
  "¿Cómo se obtienen los datos de investigación?",
  "¿Qué tipo de investigaciones realizan?",
  "¿Es posible acceder a los reportes finales?",
  "¿Cómo se garantiza la integridad de la información?"
];

const catsEl = document.getElementById('biblioteca-categorias');
Object.entries(biblioteca).forEach(([categoria, items]) => {
  const bloque = document.createElement('div');
  bloque.className = 'biblio-categoria';

  const listaItems = items.length
    ? items.map(obra => {
        // Si hay liga, muestra el botón "Ver"; si no, muestra "Próximamente"
        const enlace = obra.url
          ? `<a href="${obra.url}" class="biblio-ver" target="_blank" rel="noopener">Ver</a>`
          : `<span class="biblio-proximo">Próximamente</span>`;
        return `<div class="biblio-item"><span>${obra.titulo}</span>${enlace}</div>`;
      }).join('')
    : Array.from({ length: 3 }).map(() =>
        `<div class="biblio-item biblio-vacio"><span>Próximamente</span></div>`).join('');

  bloque.innerHTML = `<h4>${categoria}</h4><div class="biblio-lista">${listaItems}</div>`;
  catsEl.appendChild(bloque);
});

const faqEl = document.getElementById('biblioteca-faq');
faq.forEach(pregunta => {
  const p = document.createElement('div');
  p.className = 'faq-item';
  // El texto de la respuesta no estaba disponible públicamente: reemplázalo por el real.
  p.innerHTML = `<div class="faq-pregunta">${pregunta}</div><div class="faq-respuesta">Agrega aquí la respuesta.</div>`;
  faqEl.appendChild(p);
});
