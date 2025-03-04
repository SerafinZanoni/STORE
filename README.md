# Ecommerce con React, Next.js y PostgreSQL

## Descripción
Este es un proyecto de ecommerce desarrollado con **React**, **Next.js** y **PostgreSQL**. Permite a los usuarios explorar productos, agregarlos al carrito y completar compras.

## Tecnologías utilizadas
- **Next.js** - Framework de React para SSR y optimización del rendimiento.
- **React** - Biblioteca para la construcción de interfaces de usuario.
- **Tailwind CSS** - Framework de CSS para estilos rápidos y personalizados.
- **PostgreSQL** - Base de datos relacional para el almacenamiento de productos, usuarios y pedidos.

- ### **Imagenes**

![Home](public/H.png)
![Detail](public/Untitled.png)
![Log](public/Untitled1.png)
![Cart](public/Untitled2.png)
![Order](public/Untitled3.png)


## Instalación y ejecución
### 1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Instalar dependencias
```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno
Crear un archivo `.env.local` en la raíz del proyecto y agregar las variables necesarias:
```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/ecommerce
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4. Ejecutar el proyecto
```bash
npm run dev
# o
yarn dev
```

El proyecto estará disponible en `http://localhost:3000`

## Base de datos
Se utiliza **PostgreSQL** para el almacenamiento de datos. Puedes ejecutar las migraciones con:
```bash
npx prisma migrate dev
```

## Funcionalidades principales
✅ Listado de productos con detalles.
✅ Carrito de compras.
✅ Autenticación de usuarios.
✅ Gestión de pedidos.
✅ Integración con pasarelas de pago.

## Contribuir
Si deseas contribuir a este proyecto, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva`).
3. Realiza los cambios y haz commit (`git commit -m "Añadir nueva funcionalidad"`).
4. Sube los cambios (`git push origin feature-nueva`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia **MIT**.

---
✉️ Contacto: [tu-email@correo.com](mailto:tu-email@correo.com)

