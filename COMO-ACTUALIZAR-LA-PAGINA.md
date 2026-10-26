# Cómo actualizar la página de Ansar del Páramo

Guía para Laura, Jairo y Stefany. No hace falta saber programar.

Hay **dos archivos** que pueden editar:

| Archivo | Qué cambia en la página |
|---|---|
| **`conciertos.js`** | Próximas fechas y Conciertos realizados |
| **`musica.js`** | Lanzamientos, Videoclips y el video del Show en vivo |

**No toquen ningún otro archivo.**

---

## Paso a paso para editar (desde el navegador)

1. Entren a **github.com** con su usuario.
2. Abran el repositorio **ansardelparamo**.
3. Toquen el archivo que quieren cambiar (`conciertos.js` o `musica.js`).
4. Arriba a la derecha del contenido, toquen el **lápiz ✏️** (*Edit this file*).
5. Hagan el cambio (más abajo están los ejemplos).
6. Toquen el botón verde **Commit changes…** y luego **Commit changes** otra vez.
7. Esperen **1 o 2 minutos** y abran la página. Si no ven el cambio, recarguen con **Ctrl + Shift + R** (en Mac **Cmd + Shift + R**).

> **Consejo:** antes de editar, copien todo el contenido del archivo y péguenlo en una nota. Si algo sale mal, lo pegan de nuevo y queda como estaba.

---

## Las 5 reglas de oro

Casi todos los errores vienen de alguna de estas cosas:

1. **Cada dato va entre comillas dobles:** `"Pasto"` ✅  ·  `Pasto` ❌  ·  `'Pasto'` ❌
2. **Cada línea termina en coma** después de la llave de cierre: `},`
3. **No borren** las líneas que empiezan con `window.`, ni los corchetes `[` `]`, ni la última línea `};` o `];`
4. **Las fechas se escriben año-mes-día con guiones:** `"2026-12-05"` es el 5 de diciembre de 2026.
5. Las líneas que empiezan con `//` son **notas de ayuda**. La página las ignora, pueden dejarlas.

Si quieren poner comillas dentro de un título, usen comillas simples dentro: `"La canción 'especial'"`.

---

# 📅 ARCHIVO `conciertos.js`

Así se ve cada concierto:

```js
  { nombre: "Cafe del parque", lugar: "Pasto", fecha: "2025" },
```

- **nombre:** el lugar o el evento
- **lugar:** la ciudad
- **fecha:** cuándo es. Puede ser:
  - fecha completa `"2026-12-05"`, **obligatoria para las próximas fechas**
  - solo el año `"2024"`, para conciertos pasados cuando no recuerdan el día

### Botón de entradas (opcional)
Si un concierto vende entradas, agréguenle `entradas` con el link de compra:

```js
  { nombre: "La Ruta · Lanzamiento", lugar: "Teatro Aleph, Pasto", fecha: "2026-11-14", entradas: "https://wa.me/573113346169?text=Hola%2C%20quiero%20mi%20entrada%20para%20La%20Ruta" },
```

Mientras la fecha no haya pasado, sale el botón **Comprar entrada** en *Próximas fechas* y **Comprar entradas** en la portada. Cuando pasa la fecha, los dos botones desaparecen solos.

### La página ordena todo sola
- Si la fecha es **hoy o más adelante**, el concierto aparece en **Próximas fechas**.
- Si la fecha **ya pasó**, se mueve solo a **Conciertos realizados**. No hay que hacer nada.
- No importa en qué orden escriban las líneas. La página las ordena.

### ➕ Agregar un concierto próximo
Copien esta línea y péguenla **debajo de** `window.ANSAR_CONCIERTOS = [`:

```js
  { nombre: "Teatro Imperial", lugar: "Pasto", fecha: "2026-12-05" },
```

Cambien el nombre, la ciudad y la fecha. Así queda el principio del archivo:

```js
window.ANSAR_CONCIERTOS = [
  { nombre: "Teatro Imperial", lugar: "Pasto", fecha: "2026-12-05" },
  { nombre: "Cafe del parque", lugar: "Pasto", fecha: "2025" },
  ...
```

### ✏️ Corregir un concierto
Cambien solo el texto **entre las comillas**.

### 🗑️ Borrar un concierto
Borren **la línea completa**, desde `{` hasta `},`.

---

# 🎵 ARCHIVO `musica.js`

Tiene **tres partes**: lanzamientos, videos y video en vivo.

## 1. Lanzamientos

```js
  lanzamientos: [
    { titulo: "Hoy quiero cantarte (mamá)", fecha: "2025" },
    { titulo: "Aprender a olvidar", fecha: "2025" },
    { titulo: "Ingrato sentimiento", fecha: "2024" },
  ],
```

- **El orden de la lista es el orden en la página.** Pongan el más nuevo arriba.
- Si la **fecha es futura** (ej. `"2026-11-20"`), la página muestra **"Próximamente"** y oculta el botón Escuchar. Cuando llega el día, cambia sola a publicado.

**➕ Agregar una canción nueva:** copien esta línea y péguenla justo debajo de `lanzamientos: [`

```js
    { titulo: "Nombre de la canción", fecha: "2026-11-20" },
```

## 2. Videoclips

```js
  videos: [
    { titulo: "Aprender a olvidar", tipo: "Videoclip", enlace: "https://youtu.be/Z1y_EPQNvlQ" },
    ...
  ],
```

- **La página muestra solo los 3 primeros.** Para mostrar un video nuevo, pónganlo **arriba**. Los de abajo dejan de verse, pero pueden quedarse en la lista.
- **tipo:** lo que aparece debajo del título, por ejemplo `"Videoclip"` o `"Cover - Videoclip"`.
- **enlace:** el link del video en YouTube.

**¿Cómo copiar el link de YouTube?**
1. Abran el video en YouTube.
2. Toquen **Compartir** debajo del video.
3. Toquen **Copiar**.
4. Péguenlo entre las comillas de `enlace: ""`.

Sirve cualquier forma del link: `https://youtu.be/...`, `https://www.youtube.com/watch?v=...`, o con `?si=...` al final.

**➕ Agregar un video nuevo:** copien esta línea y péguenla justo debajo de `videos: [`

```js
    { titulo: "Nombre del video", tipo: "Videoclip", enlace: "PEGUEN-AQUÍ-EL-LINK" },
```

## 3. Video del show en vivo

```js
  videoEnVivo: "",
```

Peguen el link de YouTube del video recopilatorio entre las comillas:

```js
  videoEnVivo: "https://youtu.be/XXXXXXXXXXX",
```

Mientras esté vacío `""`, la página muestra una foto en su lugar.

---

## 🆘 Algo se dañó, ¿qué hago?

**Síntoma:** desaparecieron todos los conciertos o todos los videos de la página.
**Causa:** hay un error de escritura en el archivo que editaron.

1. Abran el archivo en GitHub y revisen la línea que cambiaron:
   - ¿Falta una comilla `"` al principio o al final de algún dato?
   - ¿Falta la coma después de `}`?
   - ¿Borraron sin querer un `[`, un `]` o el `};` del final?
2. Si no lo encuentran, peguen el contenido que guardaron antes en su nota.
3. Otra opción: en GitHub toquen **History** (arriba a la derecha del archivo), abran la versión anterior y copien su contenido.

**Síntoma:** un video aparece en negro o con error.
**Causa:** el link está mal copiado. Cópienlo de nuevo con el botón **Compartir** de YouTube.

---

## Ejemplo completo y correcto de `conciertos.js`

```js
window.ANSAR_CONCIERTOS = [
  { nombre: "Teatro Imperial", lugar: "Pasto", fecha: "2026-12-05" },
  { nombre: "Cafe del parque", lugar: "Pasto", fecha: "2025" },
  { nombre: "Casa Cultivarte", lugar: "Ipiales", fecha: "2024" },
];
```

## Ejemplo completo y correcto de `musica.js`

```js
window.ANSAR_MUSICA = {
  lanzamientos: [
    { titulo: "Canción nueva", fecha: "2026-11-20" },
    { titulo: "Hoy quiero cantarte (mamá)", fecha: "2025" },
  ],
  videos: [
    { titulo: "Canción nueva", tipo: "Videoclip", enlace: "https://youtu.be/XXXXXXXXXXX" },
    { titulo: "Aprender a olvidar", tipo: "Videoclip", enlace: "https://youtu.be/Z1y_EPQNvlQ" },
  ],
  videoEnVivo: "https://youtu.be/YYYYYYYYYYY",
};
```
