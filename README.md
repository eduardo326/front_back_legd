# Desplegar en local Proyecto FRONT

Esta es una aplicacion tipo Front que consume el Api_rest de GitHub

Este proyecto se generó con Angular CLI versión 16.1.0. Para correr el proyecto en el local, debe seguir las siguientes instrucciones

## descargue las dependencias

Ejecutar `npm install` para descargar las dependencias. De esta manera estara listo para correr la aplicacion en su local.

## servidor de desarrollo

Ejecutar `ng serve` para levantar un servidor en su local. Navegar con la ruta http://localhost:4200/.





# Desplegar en local Proyecto BACK

Esta es la aplicacion Back, esta contruida con lenguaje php en la version 7.3 y con el framework Laravel en la version 10. La base de datos utilizada es MySQL
Para ejecutar el proyecto en local debe seguir las siguientes instrucciones.

## configuracion de base de datos

Una vez se tenga la base de datos MySQL, se debe proceder a configurar los parametros de conexion DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD en el archivo .env 

## descargue las dependencias

Ejecutar `composer install` en la raiz del proyecto back para descargar las dependencias. Para esto se debe tener instalado con anticipacion la aplicacion Composer (https://getcomposer.org/download/).

## Import de base de datos

Para importar la base de datos se creo una migracion la cual permite crear la tabla desde Laravel para esto se debe ejecutar el comando `php artisan migrate`
Tambien se sube el archivo bd.sql con el backup de la base de datos por si desean realizar este paso de forma manual.

## Ejecucion del proyecto en local

Ejecutar `php artisan serve` para levantar un servidor en su local. Navegar con la ruta http://localhost:8000/.

## Consumir API con Postman

En la raiz del proyecto back tambien dejo un archivo llamado Back-php.postman_collection.json para importar el proyecto en Postam para que puedan realizar la prueba de los EndPoint rapidamente.
