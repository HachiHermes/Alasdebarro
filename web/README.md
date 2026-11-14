# Alas de Barro — borrador web estático

Primera versión HTML/CSS/JavaScript, sin backend, pagos ni formularios.
No representa una aprobación de contenido, diseño o datos comerciales.

## Ejecutar
Desde la raíz del repositorio:

```sh
python3 -m http.server 8000 --directory web
```
Abrir http://localhost:8000/ en el mismo equipo que ejecuta el servidor.

## Procedencia y alcance
Copia del borrador local entregado por FORGE. Referencias de trabajo:
- [Conclusiones del proyecto](../CONCLUSIONES-PROYECTO.md).
- https://dehesasostenible.com/alas-de-barro/

Para esta copia pública se han retirado nombre personal y datos de contacto,
y se ha sustituido la imagen externa por un degradado, pendiente de validar
los derechos y recursos definitivos. Los originales locales no se modifican.
El logo sigue siendo tipográfico. No incluye fotografías de productos.

## Verificación
Se han comprobado HTTP 200 para HTML, CSS y JS, y la existencia de los
identificadores de destino de todas las anclas internas. Estas comprobaciones
no validan ejecución JavaScript, accesibilidad ni presentación responsive.

## Pendientes
- Revisar textos, catálogo y disponibilidad de talleres.
- Incorporar logo, fotografías y contactos autorizados.
- Revisar diseño en navegador y navegación móvil: el CSS actual oculta
  el menú en pantallas pequeñas y no implementa un menú alternativo.
- Revisar accesibilidad y comportamiento JavaScript.
- Configurar y verificar GitHub Pages en un paso posterior.

Esta subida guarda el código; no configura ni acredita un despliegue público.
