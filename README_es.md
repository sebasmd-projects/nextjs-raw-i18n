# Raw project

Proyecto base, con internacionalización y estuctura de carpetas.

## Dependencias

### [TankStack (ReactQuery)](https://tanstack.com/query/latest/docs/framework/react/installation)

Potente gestor de estado asincrónico

    ```bash
    # npm
    npm i @tanstack/react-query
    # yarn
    yarn add @tanstack/react-query
    ```

#### [TankStack (Dev Tools)](https://tanstack.com/query/latest/docs/framework/react/devtools)

Ayudan a visualizar todo el funcionamiento interno de React Query.

    ```bash
    # npm
    npm install -D @tanstack/react-query-devtools
    # yarn
    yarn add -D @tanstack/react-query-devtools
    ```

### [Axios](https://axios-http.com/)

Axios es un cliente HTTP basado en promesas para node.js y el navegador. Es isomorfo (puede ejecutarse en el navegador y nodejs con la misma base de código).

    ```bash
    # npm
    npm install axios
    # yarn
    yarn add axios
    ```

### Internacionalización

Using this video [https://www.youtube.com/watch?v=J8tnD2BWY28](https://www.youtube.com/watch?v=J8tnD2BWY28)

#### [i18next](https://www.i18next.com/)

i18next es un marco de internacionalización

    ```bash
    # npm
    npm install i18next
    # yarn
    yarn add i18next
    ```

#### [i18next-resources-to-backend](https://github.com/i18next/i18next-resources-to-backend)

i18next-resources-to-backend ayuda a transformar los recursos en un backend de i18next. Esto significa que puedes cargar traducciones de forma diferida.

    ```bash
    # npm
    npm install i18next-resources-to-backend
    # yarn
    yarn add i18next-resources-to-backend
    ```

#### [next-i18n-router](https://github.com/i18nexus/next-i18n-router)

Agrega enrutamiento internacionalizado para aplicaciones Next.js que usan App Router.

    ```bash
    # npm
    npm install next-i18n-router
    # yarn
    yarn add next-i18n-router
    ```

### [React icons](https://react-icons.github.io/react-icons/)

Incluir íconos populares en el proyecto de React fácilmente con react-icons, que utiliza importaciones de ES6 que le permiten incluir solo los íconos que utiliza su proyecto.

    ```bash
    # npm
    npm install react-icons
    # yarn
    yarn add react-icons
    ```

### [React toastify](https://github.com/fkhadra/react-toastify#readme)

React-Toastify te permite agregar notificaciones a tu aplicación con facilidad.

    ```bash
    # npm
    npm install react-toastify
    # yarn
    yarn add react-toastify
    ```

## Estructura de ejemplo

Como manejar la estructura de carpetas y archivos.
Los componentes pueden ser individuales o globales.
Se pueden manejar multiples layouts.

    ```bash
    │   i18n.js
    │   i18nConfig.js
    │   middleware.js
    │
    ├───app
    │   ├───components
    │   │       languageChanger.js
    │   │
    │   ├───css
    │   │       globals.css
    │   │
    │   ├───providers
    │   │       reactQuery.js
    │   │       translation.js
    │   │
    │   └───[locale]
    │       │   layout.js
    │       │
    │       └───(pages)
    │           ├───(home)
    │           │       page.js
    │           │
    │           └───about
    │                   page.js
    │
    ├───locales
    │   ├───en
    │   │       about.json
    │   │       common.json
    │   │       home.json
    │   │
    │   └───es
    │           about.json
    │           common.json
    │           home.json
    │
    ├───requests
    │       index.js
    │
    └───utils
            constants.js
            index.js
    ```
