# SERVER-OPTICA-ARANA

Back-End: Sistema de Gestión de Clientes de la Optica.
Bases de Datos, MongoDB

# Datos para la conexión URI

USER_MONGODB=prequena
KEY_MONGODB=52ohHwBT7MaMy9p9
CLOUSTER_OPERATIONS=DB-Operaciones
URI_MONGO=.ktjoy.mongodb.net/?retryWrites=true&w=majority&appName=

# Puertos de la App

default Port = 3000
Config Port = 3100

# Información de la Base de Datos de una Optica

1. DPN L / DPN R (Distancia Pupilar - DP o DNP)
DPN o DP: “Distancia Pupilar”. Es la distancia entre el centro de las pupilas, normalmente medida en milímetros.

Se divide en:

DPN L → Ojo Izquierdo (Left)

DPN R → Ojo Derecho (Right)

Es vital para centrar correctamente las lentes en los anteojos.

2. Altura Focal (o Altura de montaje)
Es la altura desde la base del lente hasta el centro de la pupila, muy importante en lentes multifocales o progresivos.

Garantiza que el usuario mire a través del punto correcto del lente.

# Otros datos comunes en recetas ópticas:
Campo	Descripción
Esfera (ESF)	Corrección de miopía (-) o hipermetropía (+).
Cilindro (CIL)	Corrección de astigmatismo. Puede ser negativo o positivo.
Eje	Ángulo del astigmatismo, entre 0° y 180°. Solo si hay cilindro.
Adición (ADD)	Potencia adicional para visión cercana (en lentes bifocales o progresivos).
Tipo de lente	Monofocal, bifocal, progresivo, ocupacional, etc.
Material del lente	Policarbonato, CR-39, alto índice, etc.
Tratamientos	Antirreflejo, fotocromático, filtro azul, etc.
Diagnóstico	Miopía, hipermetropía, astigmatismo, presbicia, etc.
Observaciones	Recomendaciones adicionales del optometrista.

# Estructura de la base de datos

* Documento Usuario:
    - idUsuario => Number.
    - userName => String.
    - Nombres => String.
    - Apellidos => String.
    - Email => String
    - WhastApp => Number.

* Documento Cliente:
    - idCliente => Number.
    - Nombre => string.
    - Apellido => string.
    - Fecha_Nacimiento => Date.
    - Edad => Number.
    - Dirección => string.
    - Teléfono => Number.
    - WhastApp => Number .
    - Email => String.

* Documento Prescripcion: 
    - idCliente(FK) => Number.
    - Fecha => Date.
    - Esfera_D => Number.
    - Esfera_I => Number.
    - Cilindro_D => Number.
    - Cilindro_I => Number.
    - Eje_D => Number.
    - Eje_I => Number.
    - Add_D => Number.
    - Add_I => Number.
    - DPN_D => Number.
    - DPN_I => Number.
    - Altura_Focal_D => Number.
    - Altura_Focal_I => Number.
    - Tipo_Lente => String.
    - Material_Lente => String.
    - Tratamiento => String.
    - Observaciones => String.

# Para Instalar el Proyecto de Back-End se necesita crear un Archivo .env con la Sigueiente Información

---------- .env ---------------------

## Datos de la Conexion de la Base de Datos de MongoDB
USER_MONGODB=prequena
KEY_MONGODB=52ohHwBT7MaMy9p9
CLOUSTER_OPERATIONS=DB-Operaciones
URI_MONGO=.ktjoy.mongodb.net/?retryWrites=true&w=majority&appName=

## Definición de los puertos de la APP
PORT=3100

------------ fin del archivo .env ---------

# Para instarlar las librerias es corre "NPM install" en la carpeta de root del proyecto.

// Consola
npm install

## Compilación de Proyecto para Producción
npm run build

## Ejeuctar el Proyecto en modo desarrollo
npm run dev

## Ejecutar el Proyecto en modo producción
npm run start