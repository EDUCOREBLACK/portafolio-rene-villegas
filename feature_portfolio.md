# Feature: Creación e Implementación del Portal Profesional Completo

## 📋 Descripción del Producto
Un portal web estático, responsivo y moderno en modo oscuro por defecto que actúa como CV interactivo, portafolio de proyectos de infraestructura/automatización, blog técnico personal y vitrina para servicios de consultoría TI.

## 🗺️ Estructura del Repositorio (Árbol de Directorios)
my-portfolio/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   └── Experience.astro
│   ├── layouts/          # Layout principal
│   │   └── Layout.astro
│   ├── content/          # Contenido en Markdown
│   │   ├── config.ts     # Configuración de Esquemas (Colecciones)
│   │   ├── blog/
│   │   └── projects/
│   ├── styles/           # Estilos globales
│   │   └── global.css
│   └── pages/            # Rutas de la aplicación
│       ├── index.astro   # Inicio (Hero, Servicios, Experiencia)
│       ├── blog.astro    # Listado de artículos
│       └── proyectos.astro# Galería de proyectos
├── public/               # Archivos estáticos (CV en PDF, imágenes)
│   └── favicon.svg
├── astro.config.mjs      # Configuración de Astro
├── package.json          # Dependencias
├── tailwind.config.mjs   # Configuración de Tailwind
└── .gitignore
