# Test Práctico - Frontend - Mercado Libre
Martín Estigarribia - martinestiga@gmail.com - [LinkedIn](https://www.linkedin.com/in/martinestiga/)


## Code styling:

- [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## Tecnologías y librerías utilizadas:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- Server Side Rendering con [Next](https://nextjs.org/)
- i18n con [next-i18next](https://github.com/isaachinman/next-i18next)
- Estilos con [SASS](https://sass-lang.com/) y [CSS Modules](https://github.com/css-modules/css-modules)
- Server con [Express](https://expressjs.com/)
- Reinicio automático del server en desarrollo con [Nodemon](https://nodemon.io/)
- Linting con [ESLint](https://eslint.org/)
- Testing con [Jest](https://jestjs.io/), [Enzyme](https://enzymejs.github.io/enzyme/), [Nock](https://github.com/nock/nock) y [SuperTest](https://github.com/visionmedia/supertest)

### Por qué Typescript?

- Teniendo en cuenta la escalabilidad del proyecto, utilizar Typescript favorece en el largo plazo la mantenibilidad del código.

- **Menos errores:** Ayuda a descubrir errores durante el desarrollo y previene posibles bugs.

- **Código auto-documentado:** Los tipos, las interfaces, los enumerativos, los tipos en los parámetros de las funciones y el tipo de retorno de ellas, etc. hacen que el código en general sea más predictivo. Además ayuda a auto-documentar el código y la experiencia de lectura del código es mucho mejor.

- Sugerencias del IDE a la hora de desarrollar.

### ¿Por qué Server Side Rendering?

- **SEO:** Además de que lo solicita el enunciado, creo que para Mercado Libre y para cualquier plataforma que comercialice un producto es clave el SEO. Ser líderes en posicionamiento en resultados de Google (ya ni vale la pena generalizar) aumenta considerablemente las posibilidades que el usuario visite nuestro sitio. 

- **Performance:** Con SSR mejoramos el tiempo de pintado de la página, y delegamos el poder de procesamiento en nuestro hardware. De esta manera beneficiamos a usuarios que visitan el sitio desde dispositivos móviles principalmente (cada dia más porcentaje), y además, no tan modernos, mejorando para dichos usuarios la experiencia. 

- **Social sharing:** De la mano con SEO, muy importante hoy en día, todas las redes sociales o aplicaciones de mensajería "leen" diferentes meta-tags (Open Graph en el caso de Facebook - Whatsapp) para mostrar ciertos snippets visualmente atractivos con un resumen del contenido de la página.

## Ejecución:

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Ejecutar en modo producción

Primero buildear y luego iniciar el server

```bash
npm run build
```
```bash
npm run start
```

## Demo:

El proyecto se encuentra deployado en Heroku: https://ejercicio-mercado-libre.herokuapp.com/

> Si no inicia rápidamente tener paciencia, ya que Heroku (cuenta gratuita) desactiva la instancia si la aplicación está inactiva y la vuelve a activar cuando recibe un request de nuevo. Si esto no sucede (a veces pasa) comuníquense conmigo que la restarteo.

## Notas:
- Se intentó utilizar la menor cantidad de dependencias posibles.
- Se intentó que los componentes se re-renderizaran la manor cantidad de veces.
- Ademas de la ventaja de SSR, **Next.js** suma un montón de optimizaciones que ayudan tanto a performance como al soporte de diversos Browsers.
- Se utilizó **CSS modules** para que cada componente tenga su estilo scopeado.
- Se ejecutan los request a la API de Mercado libre en simultaneo cuando es posible para beneficiar la experiencia del usuario, siendo consiente que si el ID del producto es inválido, 1 de las 2 requests se hizo innecesariamente.
