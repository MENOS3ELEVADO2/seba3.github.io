# Portafolio de Sebastián Vejar - Astro

Un portafolio moderno y profesional construido con Astro para mostrar proyectos y habilidades como Analista de Datos.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con paleta de colores personalizada
- **Responsive**: Se adapta perfectamente a todos los dispositivos
- **Navegación Suave**: Transiciones fluidas entre páginas
- **Componentes Reutilizables**: Estructura modular con Astro
- **Optimización**: Rendimiento optimizado automáticamente
- **Accesibilidad**: Navegación por teclado y buenas prácticas de accesibilidad

## 🎨 Paleta de Colores

- **Primario**: #997480 (Rosa/marrón)
- **Secundario**: #293039 (Gris oscuro)
- **Acento**: #A4B5C3 (Gris claro)
- **Claro**: #EAE0DC (Beige claro)
- **Oscuro**: #731211 (Rojo oscuro)

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── layouts/            # Layouts de página
│   └── Layout.astro    # Layout principal
├── pages/              # Páginas del sitio
│   ├── index.astro     # Página de inicio
│   ├── about.astro     # Acerca de
│   ├── projects.astro  # Proyectos
│   └── contact.astro   # Contacto
├── scripts/            # JavaScript
│   └── main.js         # Funcionalidades principales
└── styles/             # Estilos CSS
    └── global.css      # Estilos globales
```

## 🛠️ Instalación

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd seba95-astro-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## 📝 Scripts Disponibles

- `npm run dev` - Ejecutar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la construcción

## 🎯 Páginas Incluidas

### 🏠 Inicio
- Presentación personal
- Descripción del trabajo
- Llamada a la acción

### 👤 Acerca de
- Información personal
- Experiencia profesional
- Habilidades técnicas

### 💼 Proyectos
- Grid de proyectos destacados
- Tecnologías utilizadas
- Descripciones detalladas

### 📧 Contacto
- Información de contacto
- Formulario de contacto
- Validación en tiempo real

## 🔧 Personalización

### Cambiar Información Personal

1. **Layout.astro**: Modificar nombre y título
2. **index.astro**: Actualizar descripción principal
3. **about.astro**: Editar información personal y experiencia
4. **projects.astro**: Agregar/modificar proyectos
5. **contact.astro**: Actualizar información de contacto

### Modificar Colores

Editar las variables CSS en `src/styles/global.css`:

```css
:root {
  --color-primary: #997480;    /* Color principal */
  --color-secondary: #293039;  /* Color secundario */
  --color-accent: #A4B5C3;     /* Color de acento */
  --color-light: #EAE0DC;      /* Color claro */
  --color-dark: #731211;       /* Color oscuro */
}
```

## 🚀 Despliegue

### GitHub Pages

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Configurar GitHub Pages**
   - Ir a Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

3. **Configurar workflow de GitHub Actions** (opcional)

### Netlify

1. **Conectar repositorio a Netlify**
2. **Configurar build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ♿ Accesibilidad

- Navegación por teclado
- Focus visible
- Contraste de colores adecuado
- Textos alternativos en imágenes
- Estructura semántica HTML

## 🔮 Futuras Mejoras

- [ ] Blog integrado
- [ ] Sistema de comentarios
- [ ] Integración con CMS
- [ ] Analytics avanzado
- [ ] PWA (Progressive Web App)
- [ ] Modo oscuro
- [ ] Internacionalización

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Sebastián Vejar**
- Email: sebastian.vejar@email.com
- LinkedIn: linkedin.com/in/sebastianvejar
- GitHub: github.com/seba95

---

¡Gracias por visitar mi portafolio! 🚀
