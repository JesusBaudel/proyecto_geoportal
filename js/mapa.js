/* ================================================================
   MAPA.JS — lógica del geoportal (sección Observatorio)
   ----------------------------------------------------------------
   Los puntos se cargan desde /data/lugares.geojson mediante fetch().
   Esto requiere servir el sitio con un servidor local (ej. Live
   Server de VS Code); abrir el HTML directamente con doble clic
   (file://) puede bloquear el fetch en algunos navegadores.
================================================================ */

const coloresPorCategoria = { "Institucional": "#1e3a3f", "Proyecto": "#b8863b" };

// Colores de respaldo si agregas una categoría nueva y olvidas asignarle color
const colorPorDefecto = "#333333";

const map = L.map('map').setView([32.5211, -117.0100], 12);

// Usamos CARTO en vez del servidor de demostración de OpenStreetMap:
// tile.openstreetmap.org es solo para pruebas muy ligeras y bloquea
// el acceso si detecta uso continuo ("access blocked... tile usage policy").
// CARTO usa los mismos datos de OpenStreetMap pero permite uso normal
// de un proyecto real, gratis y sin API key.
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

function icono(color){
  return L.divIcon({
    className: "",
    html: `<div style="background:${color};width:16px;height:16px;border-radius:50%;border:2px solid white;box-shadow:0 0 2px rgba(0,0,0,.4)"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });
}

/* ----------------------------------------------------------------
   CAPA DE EJEMPLO TIPO POLÍGONO
   Muestra cómo sumar otro tipo de geometría al geoportal (no solo
   puntos). Sustitúyela por tu propio polígono o por otro fetch()
   a un GeoJSON de polígonos.
---------------------------------------------------------------- */
const capaZonaEjemplo = L.polygon([
  [32.5300, -117.0300],
  [32.5300, -116.9900],
  [32.5000, -116.9900],
  [32.5000, -117.0300]
], { color: "#1e3a3f", weight: 1.5, fillOpacity: 0.08 })
  .bindPopup("<div class='popup-contenido'><h3>Zona de ejemplo</h3><p>Polígono de muestra: sustitúyelo por tu propia capa GeoJSON.</p></div>");

capaZonaEjemplo.addTo(map);

/* ----------------------------------------------------------------
   CARGA DE PUNTOS DESDE lugares.geojson
---------------------------------------------------------------- */
let lugares = [];                 // lista plana, usada por la barra lateral
const marcadoresPorId = {};       // { id: L.marker }
const capasPorCategoria = {};     // { categoria: L.layerGroup }

fetch('data/lugares.geojson')
  .then(res => res.json())
  .then(geojson => {
    // Convertimos cada Feature del GeoJSON a un objeto plano "lugar"
    lugares = geojson.features.map(f => ({
      id: f.properties.id,
      nombre: f.properties.nombre,
      categoria: f.properties.categoria,
      descripcion: f.properties.descripcion,
      lat: f.geometry.coordinates[1],   // GeoJSON usa [lng, lat]
      lng: f.geometry.coordinates[0]
    }));

    // Crear una capa (layerGroup) por cada categoría encontrada
    [...new Set(lugares.map(l => l.categoria))].forEach(categoria => {
      capasPorCategoria[categoria] = L.layerGroup();
    });

    // Crear un marcador por lugar y añadirlo a su capa de categoría
    lugares.forEach(l => {
      const color = coloresPorCategoria[l.categoria] || colorPorDefecto;
      const m = L.marker([l.lat, l.lng], { icon: icono(color) });
      m.bindPopup(`<div class="popup-contenido"><h3>${l.nombre}</h3><p>${l.descripcion}</p></div>`);
      marcadoresPorId[l.id] = m;
      capasPorCategoria[l.categoria].addLayer(m);
    });

    // Mostrar todas las capas por defecto
    Object.values(capasPorCategoria).forEach(capa => capa.addTo(map));

    // Control de capas nativo de Leaflet (arriba a la derecha del mapa)
    const overlaysControl = { "Zona de ejemplo (polígono)": capaZonaEjemplo };
    Object.entries(capasPorCategoria).forEach(([categoria, capa]) => {
      overlaysControl[categoria] = capa;
    });
    L.control.layers(null, overlaysControl, { collapsed: false }).addTo(map);

    // Ahora que los datos están listos, dibujar la lista y los filtros
    renderizarLista(null);
    construirFiltros();
  })
  .catch(err => {
    console.error('No se pudo cargar data/lugares.geojson:', err);
  });

/* ----------------------------------------------------------------
   LISTA LATERAL — solo filtra visualmente la lista;
   la visibilidad de capas en el mapa la controla el control de capas.
---------------------------------------------------------------- */
const listaEl = document.getElementById('lista-lugares');

function renderizarLista(filtro){
  listaEl.innerHTML = "";
  lugares
    .filter(l => !filtro || l.categoria === filtro)
    .forEach(l => {
      const item = document.createElement('div');
      item.className = 'punto';
      item.innerHTML = `<div class="nombre">${l.nombre}</div><div class="categoria">${l.categoria}</div>`;
      item.addEventListener('click', () => {
        document.querySelectorAll('.punto.seleccionado').forEach(e => e.classList.remove('seleccionado'));
        item.classList.add('seleccionado');
        map.flyTo([l.lat, l.lng], 14, { duration: 0.8 });
        marcadoresPorId[l.id].openPopup();
      });
      listaEl.appendChild(item);
    });
}

/* ----------------------------------------------------------------
   BOTONES DE FILTRO (encima de la lista lateral)
---------------------------------------------------------------- */
const filtrosEl = document.getElementById('filtros');

function botonFiltro(texto, categoria){
  const b = document.createElement('button');
  b.textContent = texto;
  b.addEventListener('click', () => {
    document.querySelectorAll('.filtros button').forEach(x => x.classList.remove('activo'));
    b.classList.add('activo');
    renderizarLista(categoria);
  });
  return b;
}

function construirFiltros(){
  filtrosEl.innerHTML = "";
  const bTodos = botonFiltro("Todos", null);
  bTodos.classList.add('activo');
  filtrosEl.appendChild(bTodos);
  [...new Set(lugares.map(l => l.categoria))].forEach(c => filtrosEl.appendChild(botonFiltro(c, c)));
}
