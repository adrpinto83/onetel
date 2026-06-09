# OneTel LLC - Website

Sitio web corporativo de OneTel LLC, empresa de telecomunicaciones y automatización industrial ubicada en Doral, Florida.

## Tecnologías

- **Framework:** [Astro](https://astro.build/) v4.16
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) v3.4
- **Lenguaje:** TypeScript
- **Fuente:** Inter (Google Fonts)

## Estructura del Proyecto

```
onetel/
├── public/
│   ├── Logo.png
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Alliances.astro
│   │   ├── Portfolio.astro
│   │   ├── Testimonials.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppButton.astro
│   ├── i18n/
│   │   ├── translations.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro (español)
│       └── en/index.astro (inglés)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Colores de Marca

| Color | Hex | Uso |
|-------|-----|-----|
| Negro | `#000000` | Texto principal |
| Azul | `#0066CC` | Color primario |
| Naranja | `#FF6600` | Color secundario/acento |
| Blanco | `#FFFFFF` | Fondos |
| Gris oscuro | `#333333` | Texto secundario |
| Gris claro | `#F5F5F5` | Fondos alternos |

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Crear build de producción
npm run build

# Previsualizar build
npm run preview
```

El servidor de desarrollo estará disponible en `http://localhost:4321/`

## Despliegue

### Hosting

- **Proveedor:** Hosting compartido con cPanel
- **IP:** `51.81.48.12`
- **Conexión:** SFTP (SSH shell deshabilitado)
- **Usuario:** `fibercom`
- **Directorio web:** `/home/fibercom/public_html/onetel.cloud/`

### URLs del Sitio

| URL | Descripción |
|-----|-------------|
| https://onetel.cloud/ | Página en construcción |
| https://onetel.cloud/build/ | Sitio completo (staging) |
| https://onetel.cloud/en/ | Versión en inglés (construcción) |
| https://onetel.cloud/build/en/ | Versión en inglés (staging) |

### Proceso de Despliegue

1. Generar build de producción:
   ```bash
   npm run build
   ```

2. Subir contenido de `dist/` al servidor via SFTP:
   ```bash
   sftp fibercom@51.81.48.12
   cd public_html/onetel.cloud
   put -r dist/*
   ```

3. O usar sshpass para automatizar:
   ```bash
   sshpass -p 'PASSWORD' sftp fibercom@51.81.48.12 << 'EOF'
   cd public_html/onetel.cloud
   lcd dist
   put -r *
   bye
   EOF
   ```

## Funcionalidades

- Diseño responsive (mobile-first)
- Soporte multiidioma (Español/Inglés)
- Formulario de contacto (Web3Forms API)
- Botón flotante de WhatsApp
- Animaciones de scroll reveal
- SEO optimizado con Open Graph
- Certificado SSL activo

## Secciones del Sitio

1. **Header** - Navegación con selector de idioma
2. **Hero** - Propuesta de valor y estadísticas
3. **Servicios** - Telecomunicaciones, Automatización, Soluciones
4. **Alianzas** - Partnership con Yokogawa
5. **Portafolio** - Casos de éxito por industria
6. **Testimonios** - Opiniones de clientes
7. **Nosotros** - Misión, visión, ubicación
8. **Contacto** - Formulario y datos de contacto
9. **Footer** - Enlaces y redes sociales

## Contacto

- **Empresa:** OneTel LLC
- **Ubicación:** Doral, Florida, USA
- **Teléfono:** +1 (786) 274-1961
- **Email:** info@onetel.cloud
- **WhatsApp:** +1 (786) 274-1961
