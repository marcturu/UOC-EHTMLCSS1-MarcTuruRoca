# <img src="src/assets/images/SaboreaMexico.png" alt="LetsManage" width="100"/> — Saborea México

Sitio web sobre la **gastronomía mexicana** y sus recetas.

Desarrollado como parte de la asignatura Herramientas HTML y CSS I del Máster Universitario de Desarrollo de Sitios y Aplicaciones Web de la [Universitat Oberta de Catalunya](https://www.uoc.edu).

### Páginas

- **Inicio** — página de presentación con recetas destacadas e informaicón sobre las regiones de México
- **Recetas** — conjunto de 4 recetas típicas mexicanas
- **Tacos** — página personalizada que presenta información sobre la historia de los **tacos**, sus ingredientes y como prepararlos
- **Nachos** — página personalizada que presenta información sobre la historia de los **nachos**, sus ingredientes y como prepararlos
- **Fuentes** — documentació y enlaces de las fuentes consultadas durante el desarrollo del proyecto

### Metodología

- **ITCSS** — arquitectura de estilos (settings, tools, generic, elements, objects, components, utilities)
- **BEM** — convención de nomenclatura para clases CSS
- **OOCSS** — clases de objetos reutilizables (`o-container`, `o-section`)
- Diseño responsive *mobile-first*

## Desarrollado con

### Requisitos

[Node.js](http://nodejs.org/) >= 20.x

### Núcleo

| Tecnología | Uso |
| --- | --- |
| [Parcel v2](https://parceljs.org) | Empaquetador - servidor de desarrollo, build de producción, pipeline de assets |
| [Sass/SCSS](https://sass-lang.com) | Preprocesador CSS - variables, anidado, funciones, mixins, parciales (`@parcel/transformer-sass`) |
| [PostHTML](https://github.com/posthtml/posthtml) | Parciales HTML mediante `posthtml-include` |
| [Stylelint](https://stylelint.io/) | Linting de SCSS con reglas personalizadas BEM y SCSS (`stylelint-config-prettier-scss`, `stylelint-config-recommended-scss`, `stylelint-scss`) configurado en `.stylelintrc` |

### Dependencias

| Dependencia | Uso |
| --- | --- |
| [AOS](https://michalsnik.github.io/aos/) | Animaciones al hacer scroll `"aos": "^2.3.4"` |
| [Font Awesome](https://fontawesome.com/) | Iconos `"@fortawesome/fontawesome-free": "^7.2.0"` |

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run start` | Inicia el servidor de desarrollo en http://localhost:1234 con recarga en vivo |
| `npm run build` | Compila y optimiza los archivos para producción en `dist/` |
| `npm run clean` | Elimina la carpeta `dist/` y las cachés |
| `npm run stylelint` | Valida los archivos SCSS según las reglas configuradas |

## Estructura del proyecto

```
src/
├── index.html
├── categoria.html
├── det1.html
├── det2.html
├── links.html
├── views/                  # Parciales PostHTML
│   ├── partials/ 
│   ├── home/
│   ├── categoria/
│   ├── det1/
│   ├── det2/
├── assets/
│   ├── fonts/              # Fuentes autoalojadas (Unbounded, DM Sans)
│   ├── images/             
│   ├── scripts/
│   │   ├── app.js
│   │   └── modules/        # Módulos JS (aos y header)
│   └── styles/
│       ├── main.scss
│       ├── _dependencies.scss
│       ├── settings/       # Variables, fuentes
│       ├── tools/          # Funciones, mixins
│       ├── generic/        # Reset
│       ├── elements/       # Estilos base
│       ├── objects/        # Objetos OOCSS
│       ├── components/     # Componentes BEM
│       └── utilities/      # Clases de utilidad
```

## Despliegue

El proyecto está desplegado en [Netlify](https://netlify.com) desde la rama `main`:
https://uoc-ehtmlcss1-marctururoca.netlify.app/ 

- **Comando de build:** `npm run build`
- **Directorio de publicación:** `dist`

---

Marc Turu Roca (https://github.com/marcturu/UOC-EHTMLCSS1-MarcTuruRoca)  
*UOC - Herramientas HTML y CSS I - 2026*
