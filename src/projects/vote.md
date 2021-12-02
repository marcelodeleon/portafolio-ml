---
title: Algoritmos de Ensamble
headline: Comparación de los algoritmos de Votación y Bagging en el dataset Iris.
date: 2021-11-26
slug: vote
featured: ../images/vote/featured.jpg
thumbnail: ../images/vote/thumbnail.jpg
tags: ["Votación", "Ensambles", "Naïve Bayes", "k-NN", "CART", "Bagging"]
---

Los algoritmos de ensable son muy utilizados en Machine Learning, estos se
basan en el principio de "wisdom of the crowd" (sabiduría de la multitud); éste
principio dice que la opinión colectiva es superior a la opinión individual.
Tomando esto en cuenta, los algoritmos de ensamble toman varios modelos de
Machine Learning y en base al resultado de todos estos llega a una conclusión.
El algoritmo de Votación, simplemente se basa en la decisión de la mayoría.

# Descripción del Problema
Utilizaremos el dataset de Iris como prueba, y compararemos el resultado de
utilizar el algoritmo de votación (compuesto por Naïve Bayes, Árboles de
Decisión y k-NN) contra sus componentes individuales, por ultimo configuraremos
un modelo de Bagging con arboles de decisión (10 iteraciones).

# Modelado
Definiremos los modelos como se muestra a continuación:

![Parámetros Naïve Bayes](../images/vote/nb-params.png)

![Parámetros Árbol de Decisión](../images/vote/cart-params.png)

![Parámetros k-NN](../images/vote/knn-params.png)

![Parámetros Bagging](../images/vote/bg-params.png)

El operador de Bagging tiene adentro un árbol de decisión con la misma configuración
utilizada anteriormente.

![Proceso de RapidMiner](../images/vote/rm-process.png)

Al evaluar los resultados utilizaremos la misma configuración para los modelos base.

# Evaluación
Utilizaremos split validation en todos los casos, con un 70% de entrenamiento y
un 30% de testing. Además, se utilizara una semilla (1992) para que los
resultados sean reproducibles y las comparaciones tengan sentido.

![Resultados de Naïve Bayes](../images/vote/p-naive.png)

![Resultados de Árbol de Decisión](../images/vote/p-naive.png)

![Resultados de k-NN](../images/vote/p-knn.png)

![Resultados de Votación](../images/vote/p-vote.png)

![Resultados de Bagging](../images/vote/bg-p.png)

Cómo puede observarse en todos los casos se obtuvieron buenos resultados, los
algoritmos independientemente tuvieron mejores resultados pero esto se debe a
que el dataset es pequeño y probablemente se esté haciendo overfitting. Los
algoritmos de votación tuvieron un poco menos de performance pero son más
robustos a la hora de clasificar nueva información.

# Recursos
[>>Proceso de RapidMiner](vote.rmp)
