import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que Turbopack tome como raíz otro lockfile del home (error "Can't resolve tailwindcss").
  turbopack: { root: __dirname },
  async redirects() {
    return [
      // NutriMood se retiró (claim sin evidencia): la página de programas ya no existe.
      { source: '/programas', destination: '/cafeterias-escolares', statusCode: 301 },
      // El «servicio diario de alimentos» es comedor; catering queda solo como eventos.
      { source: '/catering-escolar-cdmx', destination: '/comedores-escolares', statusCode: 301 },
      // Errores de tipeo que reciben impresiones en Search Console.
      { source: '/comedores-esculares', destination: '/comedores-escolares', statusCode: 301 },
      // GEO 26-oct: artículos que nombraban a otras marcas se retiran; su lugar lo toma la guía de criterios.
      { source: '/blog/mejores-empresas-cafeterias-escolares-mexico', destination: '/blog/como-elegir-operador-cafeteria-escolar', statusCode: 301 },
      { source: '/blog/inteligencia-artificial-cafeteria-escolar-datos-chartwells-sodexo', destination: '/blog/como-elegir-operador-cafeteria-escolar', statusCode: 301 },
      { source: '/blog/tendencias-internacionales-food-service-escolar-2026', destination: '/blog/como-elegir-operador-cafeteria-escolar', statusCode: 301 },
      // La guía vieja de 7 criterios se consolida en la nueva (evita dos páginas que compiten por lo mismo).
      { source: '/blog/como-elegir-proveedor-cafeteria-escolar', destination: '/blog/como-elegir-operador-cafeteria-escolar', statusCode: 301 },
      { source: '/blog/regreso-clases-2026-multa-real-director-regrules-2028', destination: '/blog/regreso-clases-2026-multa-real-director-reglas-2028', statusCode: 301 },
    ];
  },
  async rewrites() {
    return [
      { source: '/demo/comedor', destination: '/demo/comedor/index.html' },
      { source: '/propuestas/tec-prepa', destination: '/propuestas/tec-prepa/index.html' },
      { source: '/propuestas/tec-santa-fe', destination: '/propuestas/tec-santa-fe/index.html' },
      { source: '/propuestas/itj-santa-monica', destination: '/propuestas/itj-santa-monica/index.html' },
      { source: '/propuestas/uvaq-halcones', destination: '/propuestas/uvaq-halcones/index.html' },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
