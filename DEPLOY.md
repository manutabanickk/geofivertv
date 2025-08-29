# Instrucciones para desplegar en Vercel o Hostinger

## 1. Despliegue en Vercel (recomendado para Next.js)

1. Sube tu proyecto a un repositorio en GitHub, GitLab o Bitbucket.
2. Ve a https://vercel.com y crea una cuenta (puedes usar tu cuenta de GitHub).
3. Haz clic en "New Project" y conecta tu repositorio.
4. Vercel detectará automáticamente que es un proyecto Next.js. No necesitas configuración extra.
5. Haz clic en "Deploy". Espera a que termine el build.
6. ¡Listo! Tu app estará online y tus páginas de error visuales funcionarán automáticamente.

**Ventajas:**
- No necesitas configurar servidores ni Nginx.
- Soporte nativo para Next.js, SSR, ISR, API routes, etc.
- Tus archivos `error.tsx` y `not-found.tsx` funcionan sin tocar nada.

---

## 2. Despliegue en Hostinger (con Node.js)

1. Sube tu proyecto a Hostinger usando FTP o Git.
2. En el panel de Hostinger, crea una app Node.js y selecciona la carpeta de tu proyecto.
3. Instala dependencias:
   ```sh
   npm install
   ```
4. Haz el build de producción:
   ```sh
   npm run build
   ```
5. Inicia tu app:
   ```sh
   npm start
   ```
6. Asegúrate de que el puerto de tu app coincida con el configurado en Hostinger.
7. Si Hostinger permite configuración de errores personalizados, asegúrate de que las rutas de error apunten a `/error` y `/not-found` de tu app.

**Nota:**
- En Hostinger, si usas un proxy inverso (como Nginx/Apache), sigue las instrucciones previas para redirigir errores a tu app.
- Si no tienes control sobre el proxy, los errores 403/404 del servidor seguirán mostrándose en crudo.

---

## 3. Recomendaciones generales
- Mantén tus archivos `src/app/error.tsx` y `src/app/not-found.tsx` con el diseño visual moderno.
- No borres ni cambies la estructura de carpetas de Next.js.
- Si usas imágenes, asegúrate de que estén en la carpeta `public/icons/`.
- Si usas variables de entorno, configura `.env.production` según el entorno de despliegue.

---

¿Listo para desplegar? Solo sigue la guía según la plataforma que elijas. Si necesitas ayuda con el proceso, dime en cuál y te guío paso a paso.
