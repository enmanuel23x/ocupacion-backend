![Logo](https://www.intelix.biz/site/public/images/Home_0007_logo_color.png "InteliX")
# Sistema de Digitalización de Facturas

#### v-1.0.0

## 1. Introducción.

Este repositorio contiene el backend de la aplicacion "Gestión ........" , 
la cual esta diseñada para ...


## 2. Funcionalidad.

Sistema para ...


## 3. Tipos de conexión.

-  La aplicacion realiza las peticiones (REST API) en el puerto **2000**.
- Las rutas para metodos "GET" en el servidor virtual son:
  - Ruta "/rg/resources/ids".
      - Retorna en formato de JSON las ids de los usuarios.

- Las rutas para metodos "POST" en el servidor virtual son:



## 4. Generalidades sobre la implementación.

- Esta aplicacion ha sido desarrollada con Node.js usando los siguientes modulos:
  - "body-parser": "^1.19.0",
  - "cors": "^2.8.5",
  - "dotenv": "^8.2.0",
  - "express": "^4.17.1",
  - "express-jwt": "^6.0.0",
  - "jsonwebtoken": "^8.5.1",
  - "mysql2": "^2.2.5",
  - "rootpath": "^0.1.2",
  - "sequelize": "^6.5.1"

- Arbol de la aplicación:

	```
    back-end
    │   README.md
    │   package.json   
    │   package-lock.json   
    │   server.js
    └───config
    │   ...
    └───src
    │   └───controllers
    │   │   ...
    │   └───models
    │   │   ...
    │   └───routes
    │   │   ...
    │   ...
    ```
	
- Nivel de conocimiento: -medio.


## 5. Configuración y Despliegue.

Aspectos a considerar:

- Se describe el proceso de instalación y despliegue para la aplicación.
- Seguirlo paso a paso debería garantizar la correcta instalación y posterior despliegue o puesta en funcionamiento de los servicios. 
- Cualquier tipo de contingencia o caso atípico que se pudiera presentar durante el despliegue en un ambiente determinado será documentado en esta fase en el punto **5.3 Resolución de problemas**.

### 5.1. Prerrequisitos.

**Se deben tener configurados los siguientes entornos:**

- NodeJS
- pm2 (production)
#### Comandos basicos de pm2 (production)
  - `pm2 ls`: Devuelve una lista de los procesos con: Nombre y ID de cada proceso.
  - `pm2 start << ARCHIVO >>`: Inicia el proceso del archivo en cuestion.
  - `pm2 restart << ID >>`: Reiniciar el proceso identificado con la ID en cuestion.
  - `pm2 stop << ID >>`: Detiene el proceso identificado con la ID en cuestion.
  - `pm2 delete << ID >>`: Elimina el proceso identificado con la ID en cuestion.

### 5.2. Actualizaciones, instalación y configuración.
#### Instalación (development)
- Si el contenedor tiene acceso a git:
  1. Acceder al contenedor mediante SSH **(ejemplo: ssh USUARIO@HOST -pPUERTO)**.
  2. Clonar el repositorio con `git`.
  3. Acceder a la carpeta donde se haya descargado todo el código fuente del servicio desde la consola de comando.
  4. Ejecutar `npm install` para instalar todas las dependencias necesarias del servicio.
  5. Ejecutar `npm start` o `npm run dev` esto levantar la aplicacion..

#### Instalación (production)
- Si el contenedor tiene acceso a git:
  1. Acceder al contenedor mediante SSH **(ejemplo: ssh USUARIO@HOST -pPUERTO)**.
  2. Clonar el repositorio con `git`.
  3. Acceder a la carpeta donde se haya descargado todo el código fuente del servicio desde la consola de comando.
  4. Ejecutar `npm install` para instalar todas las dependencias necesarias del servicio.
  5. Ejecutar `pm2 start app.config.json` esto levantar la aplicacion segun lo especificado en el archivo de configuracion para despliegue.
- En caso de que el contenedor no tenga acceso a git:
  1. Clonar el repositorio de forma local y comprimir como archivo ZIP.
  2. Enviar el archivo zip del repositorio al contenedor mediante el comando SCP **(ejemplo: scp -P PUERTO ARCHIVO usuario@HOST:/home/produccion/)**.
  3. Acceder al contenedor mediante SSH **(ejemplo: ssh USUARIO@HOST -pPUERTO)**.
  4. Descomprimir el archivo ZIP del repositorio.
  5. Acceder a la carpeta donde se haya descargado todo el código fuente del servicio desde la consola de comando.
  6. Ejecutar `npm install` para instalar todas las dependencias necesarias del servicio.
  7. Ejecutar `pm2 start app.config.json` esto levantar la aplicacion segun lo especificado en el archivo de configuracion para
  9. Eliminar el archivo ZIP previamente descomprimido.
  
#### Actualizaciones
- Si el contenedor tiene acceso a git:
  1. Acceder al contenedor mediante SSH **(ejemplo: ssh USUARIO@HOST -pPUERTO)**.
  2. Detener el proceso con pm2.
  3. Acceder a la carpeta del repositorio.
  4. Ejecutar `git pull`.
  5. Ejecutar `npm install` para instalar todas las dependencias necesarias del servicio**Opcional si no hay que agregar una nueva dependencia**.
  5. Reiniciar el proceso con pm2.
- En caso de que el contenedor no tenga acceso a git:
  1. Clonar el repositorio de forma local y comprimir como archivo ZIP.
  2. Enviar el archivo zip del repositorio al contenedor mediante el comando SCP **(ejemplo: scp -P PUERTO ARCHIVO usuario@HOST:/home/produccion/)**.
  3. Acceder al contenedor mediante SSH **(ejemplo: ssh USUARIO@HOST -pPUERTO)**.
  4. Detener el proceso con pm2.
  5. Eliminar la carpeta del repositorio en cuestion.
  6. Descomprimir el archivo ZIP del repositorio actualizado.
  7. Acceder a la carpeta del repositorio actualizado
  8. Ejecutar `npm install` para instalar todas las dependencias necesarias del servicio.
  9. Reiniciar el proceso con pm2.
  10. Eliminar el archivo ZIP previamente descomprimido.

#### Configuraciones de credenciales *(Solo de ser necesario)*
Editar el archivo `.env` que se encuentran en la ruta `<<root>>`.

**`.env`**

```bash
# BD ( MySQL)
DB_HOSTNAME = localhost
DB_PORT = 3306
DB_USERNAME = root
DB_PASSWORD = 
DB_NAME = occupation_indicators
DB_ACQUIRETIMEOUT = 30000
DB_DIALECT = mysql
DB_CONNECTIONLIMITMAX = 10
DB_CONNECTIONLIMITMIN = 1
DB_IDLE = 30000


# Config API
NODE_ENV = development
```
**Importante: Solo alterar estos valores de ser necesario**
  - **BD ( MySQL - facturacion)** en donde: 
    - `DB_HOSTNAME` es la direccion donde esta alojado el servidor de Mysql.
    - `DB_PORT` es el puerto para la ejecucion de consultas **(default: 3306)**.
    - `DB_USERNAME` es el usuario para acceder a la base de datos.
    - `DB_PASSWORD` es la contraseña para acceder a la base de datos.
    - `DB_NAME` es el nombre de la base de datos a la cual se quiere acceder.
    - `DB_ACQUIRETIMEOUT` es el tiempo en que se refresca la conexion con la base de datos, expresado en milisegundos **(default: 30000)**
    - `DB_DIALECT` es el dialecto usado por el gestor de BD **NO ALTERAR ESTE PARAMETRO**.
    - `DB_CONNECTIONLIMITMAX` es el limite maximo de conexiones simultaneas, las conexiones de exceso entraran en cola y luego en ejecucion **(default: 10)**.
    - `DB_CONNECTIONLIMITMIN` es el limite minimo de conexiones simultaneas, las conexiones de exceso entraran en cola y luego en ejecucion **(default: 1)**.
    - `DB_IDLE` es el tiempo necesario para que una conexion entre en estado inactiva **(default: 30000)**.
  
  - **API REST** en donde: 
    - `NODE_ENV` indica el tipo de ejecucion del servicio (production o development, respectivamete en los puertos 80 y 2000) **(default: development)**.

### 5.3. Ejecución.

**Importante**.
*(Se recomienda leer mas en EL README.md en el repositorio "front-end")*.

En esta sección se deben considerar los siguientes pasos:

1. Inicializa el servidor `npm start`

2. Una vez desplegado, ejecutar consultas en [http://localhost:2000](http://localhost:2000)

### 5.4. Resolución de problemas.

- ......

---
_(c) 2021 Intelix Synergy C.A. Documentación técnica de aplicación **v1.0.0**_
