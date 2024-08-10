# ⏰ My Fancy Clock

Este es un proyecto sencillo que muestra un reloj en tiempo real y un cronómetro controlado por botones. Hecho para practicar con TypeScript la manipulación del DOM y otros conceptos básicos de programación. 😄

## 🚀 Características

- **Reloj en tiempo real** 🕒: Muestra la hora actual actualizada cada segundo.
- **Cronómetro** ⏱️: Controlado por botones de Start, Stop, y Resume.
- **Interfaz limpia y simple** 🎨: Estilo minimalista y fácil de usar.

![Captura de pantalla](/screenshot.png)

## 🛠️ Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/beresiartejuan/fancy-clock.git
```

2. Navega al directorio del proyecto:

```bash
cd fancy-clock
```

3. Instala las dependencias necesarias:

```bash
npm install
```

4. Inicia la aplicación:

```bash
npm run build && npm run start
```

## 🖥️ Uso

- **Reloj**: El reloj se actualiza automáticamente y muestra la hora actual junto con la fecha.
- **Cronómetro**: Usa los botones `Start` y `Stop` para controlar el cronómetro.

## 📁 Estructura del Proyecto

```bash
├── src/
│   ├── clock.ts        # Lógica del reloj en tiempo real
│   ├── timer.ts        # Lógica del cronómetro
│   ├── utils.ts        # Funciones de utilidad para formatear la hora
│   ├── main.ts         # Punto de entrada y coordinación
│   ├── style.css       # Estilos personalizados
├── public/
│   ├── clock.svg       # Icono del reloj
│   ├── github.svg      # Icono de GitHub para el footer
└── index.html          # Estructura HTML de la aplicación 
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas, sugerencias o encuentras un error, no dudes en abrir un issue o enviar un pull request. 🚀

### 📜 Licencia

Este proyecto está licenciado bajo la MIT License. Puedes hacer lo que quieras con el código, siempre que incluyas la licencia original.
