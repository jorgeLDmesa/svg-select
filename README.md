## Pasos para Inicializar el Proyecto

### 1. Clonar el Repositorio

Clona el repositorio desde GitHub a tu máquina local:

```sh
git clone https://github.com/tu-usuario/hoof-app.git
cd hoof-app
```

### 2. Instalar Dependencias

Instala las dependencias necesarias para ejecutar el proyecto:

```sh
npm install
```

### 3. Iniciar el Proyecto Expo

Inicia el proyecto utilizando Expo CLI:

```sh
expo start
```

Esto abrirá Expo Dev Tools en tu navegador. Puedes ejecutar la aplicación en un emulador de Android/iOS o en tu dispositivo físico usando la aplicación Expo Go.

## Estructura del Proyecto

El proyecto contiene los siguientes archivos principales:

### `src/Hoof.js`

Este archivo define el componente principal de la aplicación. Utiliza React y `react-native-svg` para renderizar un SVG interactivo. Las zonas del casco se pueden seleccionar, cambiando de color al hacer clic. El componente también muestra el nombre de la zona seleccionada.

### `src/hoofpaths.js`

Este archivo contiene las rutas (paths) del SVG en formato JSON. Cada objeto en el array `paths` representa una zona del casco con su respectiva información, incluyendo las coordenadas y el nombre de la zona.

## Descripción del Comportamiento de la Aplicación

1. **Renderización del SVG**: El componente `Hoof` renderiza el SVG utilizando las rutas definidas en `hoofpaths.js`.
2. **Interactividad**: Al hacer clic en una zona del SVG, se cambia el color de la zona seleccionada entre dos colores predefinidos. Las últimas dos zonas en el array no son interactivas.
3. **Visualización de la Zona Seleccionada**: Cuando una zona es seleccionada, se muestra el nombre de la zona en la parte inferior del SVG.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama (feature/nueva-funcionalidad).
3. Realiza los cambios necesarios y haz commit.
4. Envía un pull request describiendo los cambios realizados.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

