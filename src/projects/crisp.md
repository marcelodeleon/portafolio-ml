---
title: Crisp-DM
headline: ¿Qué es CRISP-DM?
date: 2021-01-04
slug: crisp
featured: ../images/crisp/featured.png
thumbnail: ../images/crisp/thumbnail.png
tags: ["CRISP-DM"]
---

CRISP-DM es un acrónimo, significa CRoss Industry Standard Process for Data Mining.
Es un proceso que tiene seis etapas que describen naturalmente al ciclo de vida de
de la ciencia de datos. Es un marco de trabajo para ayudar a planificar, organizar
e implementar los proyectos de Machine Learning o Data Science.

Las etapas del proceso son:

1. Entendimiento del negocio
2. Entendimiento de los datos
3. Preparación de los datos
4. Modelado
5. Evaluación
6. Despliegue

## Entendimiento del Negocio
En ésta etapa el foco se encuentra en entender los objetivos y requerimientos del
proyecto.

### Determinar Objetivos del Negocio
Lo primero es entender lo mejor posible, desde una perspectiva de negocio, que es lo
que el cliente realmente quiere conseguir y luego definir el criterio de negocio.

### Evaluar la Situación
Determinar los recursos disponibles, requerimientos del proyecto, evaluar los riesgos
y contingencias, y realizar un análisis costo beneficio.

### Determinar los Objetivos de Minado de Datos
Además de definir los requerimientos del negocio, se debe definir lo que se entiende
como éxito desde una perspectiva de data mining.

### Producir un Plan de Proyecto.
Elegir las tecnologias y herramientas necesarias, detallar un plan para cada fase del
proyecto.

## Entendimiento de los Datos
Identificar, obtener, y analizar los datasets que pueden ayudarte a obtener los objetivos
definidos en la etapa anterior.

1. Recolectar información inicial: Obtener toda la información necesaria (y de
   ser necesario) cargarla a la herramienta de análisis de datos.
2. Describir los datos: Examinar los datos y documentar las propiedades como formato,
   cantidad de instancias, e identidad de los campos.
3. Explorar los datos: Realizar una exploración profunda de los datos. Hacer consultas
   , visualizarla e identificar la relación entre los diferentes datos.
4. Verificar la calidad de los datos: ¿Qué tan limpia/sucia está? Documentar los cualquier
   problema relacionado a la calidad de los datos.

## Preparación de los Datos
La siguiente etapa prepara los datasets para poder iniciar el modelado. Tiene 5 pasos:

1. Elegir los datos: Determinar que datasets van a ser utilizados y documentar las decisiones.
2. Limpiar los datos: Normalmente es la parte más engorrosa, pero sin esto los reslutados
   estarán contaminados y no aportarán valor. Una tarea común en esta etapa es corregir,
   imputar o remover valores erróneos.
3. Construir información: Derivar nuevos atributos que puedan ser de ayuda.
4. Integrar los datos: Crear nuevos datasets combinando la información de múltiples fuentes.
5. Dar formato a los datos: Re-formatear los datos si es necesario.

## Modelado
En esta etapa se construirán y evaluaran múltiples modelos basados en diferentes técnicas.  
Existen 4 etapas:

1. Seleccionar las técnicas de modelado: Determinar los algoritmos a utilizar.
2. Generar el diseño del test: Dividir el dataset en partes para entrenamiento, test y
   validación.
3. Construir el modelo: Simplemente configurar el algoritmo y ejecutarlo.
4. Evaluar el modelo: Generalmente, muchos modelos compiten, el profesional debe
   interpretar los resultados.

## Evaluación
Evaluar los modelos, entendiendo cuál de estos se alinea mejor con los objetivos del
negocio y los pasos a seguir. Hay 3 etapas:

1. Evaluar resultados: ¿Los modelos alcanzan el criterio de éxito del negocio? ¿Cuál/es
   debemos aprobar para el negocio? 
2. Evaluar el proceso: Evaluar el trabajo realizado. Documentar los hallazgos y realizar 
   cambios si es necesario.
3. Determinar pasos a seguir: Basados en las tres tareas previas, determinar si continuar
   con el despliegue, realizar más iteraciones o iniciar nuevos proyectos.

## Despliegue
Los modelos no son de mayor utilidad hasta que están en las manos de los clientes.
Esta etapa tiene 4 pasos:

1. Planificar despliegue: Desarrollar y documentar un plan.
2. Planificar monitoreo y mantenimiento: Desarrollar un plan de monitoreo y mantenimiento
   para evitar problemas durante la etapa de operación.
3. Producir el reporte final: El equipo del proyecto documenta un resumen del proyecto
   el que puede incluir una presentación final de los resultados del proceso de minado
   de datos.
4. Revisar el proyecto: Realizar una retrospectiva de proyecto sobre lo que salió bien,
   lo que pudo haber sido mejor, y como mejorar en el futuro

# Referencias
What is CRISP-DM. (2021, 7 Agosto). Data Science Process Alliance: https://www.datascience-pm.com/crisp-dm-2/
