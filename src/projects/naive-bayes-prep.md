---
title: Naïve Bayes con Atributos Continuos
headline: Cómo preparar datasets con atributos continuos en RapidMiner para un clasificador Naïve Bayes
date: 2021-10-22
slug: naive-bayes-prep
featured: ../images/naive-bayes-prep/modelo-cat.png
thumbnail: ../images/naive-bayes-prep/modelo-cat.png
tags: ["RapidMiner", "Naïve Bayes", "Algoritmos No Lineales", "Algoritmos Supervisados", "Clasificación", "Modelado", "Preparación del Dataset", "Clasificación"]
---
Es muy común tener datasets con atributos numéricos que representan variables
continuas, para la mayoría de los algoritmos de Machine Learning esto no es un
problema. Naive Bayes es un clasificador que funciona significativamente mejor con
entradas binarias, nominales y categóricas. Por lo que es necesario preparar el
dataset previo al entrenamiento del modelo para tener buenos resultados.

# Dataset
Utilizaremos un dataset de prueba llamado "Golf" para el entrenamiento y otro
llamado "Golf Test" para la validación del modelo. Ambos datasets están
incluidos en RapidMiner.  El dataset tiene la misma problemática que el dataset
de "Jugar Tenis" (en este caso para jugar al golf!), la diferencia es que los
atributos _Temperature_ y _Humidity_ son enteros en lugar de ser polinominales. 

![Dataset "Golf"](../images/naive-bayes-prep/dataset-training.png)
![Dataset "Golf Test"](../images/naive-bayes-prep/dataset-test.png)

# Preparación de los Datos
Como mencionamos anteriormente, el clasificador Naïve Bayes espera atributos categóricos.
Los atributos _Temperature_ y _Humidity_ presentan un problema ya que son enteros, para
solucionar esto utilizaremos el operador __NumericalToPolynominal__. Es importante tener
en cuenta de aplicar el operador tanto al dataset de entrenamiento como al de testing. 

![Atributos enteros del dataset de entrenamiento](../images/naive-bayes-prep/integer-data.png)

Luego de aplicar el operador __NumericalToPolynominal__ podemos ver como son ajustados
los datos.

![Atributos modificados (a polinominales) del dataset de entrenamiento](../images/naive-bayes-prep/nominal-data.png)

# Entrenamiento y Testing
Luego de preparar los datos, podemos entrenar el modelo. Como se puede observar
en RapidMiner, el modelo de Naïve Bayes no tiene ningún parametro de
configuración mas que la corrección de Laplace. La corrección de Laplace
permite que el modelo pueda lidiar con clases que no tengan valores y puedan
generar una probabilidad de 0, por lo que es recomendable mantenerla activa.

![Workflow de RapidMiner para el entrenamiento de Naïve Bayes](../images/naive-bayes-prep/modelo-cat.png)

Al correr el proyecto de RapidMiner obtenemos la siguiente matriz de confusión.

![Matriz de confusión con todos los atributos polinominales](../images/naive-bayes-prep/mc-nominal.png)

# Entrenamiento y Testing sin Preparación de los Datos
Para poder medir el impacto de convertir las variables continuas en polinominales,
entrenaremos el mismo modelo de Naïve Bayes pero manteniendo las variables originales.

![Workflow de RapidMiner para el entrenamiento de Naïve Bayes](../images/naive-bayes-prep/modelo-int.png)

![Matriz de confusión sin convertir variables continuas](../images/naive-bayes-prep/mc-int.png)

Como se puede observar, el modelo no maneja tan bien las variables continuas y tiene mas
dificultad para predecir los valores. Al convertir _Temperature_ y _Humidity_, el modelo
tuvo un accuracy de ~71%, en el caso de no convertirlas llegó a ~64%. Si bien no parece
ser una diferencia muy grande, el dataset es muy pequeño. Es importante destacar que
el impacto depende del efecto de las variables continuas en la clasificación. 
