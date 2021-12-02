---
title: Venta de propiedades en Ames, Iowa.
headline: Estimación de precios de ventas utilizando algoritmos de regresión. 
date: "2021-11-25"
slug: house-pricing
featured: ../images/house-pricing/featured.jpg
thumbnail: ../images/house-pricing/thumbnail.png
tags: ["Caso de Estudio", "Regresión", "Preparación del Dataset", "Proyecto Principal", "Votación", "Ensambles", "SVM", "Gradient Boosted Trees", "Regresión Linear"]
---

# Caso de Estudio
El siguiente trabajo estudia los datos recabados en la ciudad de Ames, Iowa
(Estados Unidos) relacionados a la venta de propiedades dentro de la ciudad.
La información recopilada desde 2006 al 2010, contiene datos de las
características de las propiedades a la venta; estos datos son bastante
abarcativos y realmente presentan todo lo que un comprador querría saber antes
de aventurarse a cerrar la venta. El objetivo del trabajo es poder utilizar esta
información para la creación de un algoritmo de regresión capaz de estimar los
precios de las propiedades.

# Dataset
El dataset se obtuvo de la pagina de Kaggle[^1], existen dos datasets distintos:
uno de entrenamiento y otro de testing (utilizado en Kaggle para puntuar los
trabajos). En este estudio nos centraremos en el dataset de entrenamiento y 
realizaremos la validación del modelo con este mismo. El dataset presenta 1460
instancias y tiene un atributo de ID (simplemente el numero de instancia), 45
atributos nominales y 35 atributos numéricos.
[^1]: https://www.kaggle.com/c/house-prices-advanced-regression-techniques/overview

## Atributos
A continuación se presenta una descripción de los atributos del dataset,
indicando tipo del atributo y posibles valores en caso de variables nominales.
Además se agregara un análisis estadístico de los atributos y observaciones
pertinentes al momento de cargar el dataset.

### MSSubClass:
Identifica el tipo de vivienda de la venta.

_Tipo:_ Categórico

_Valores:_
* 20 ->	1-STORY 1946 & NEWER ALL STYLES
* 30 ->	1-STORY 1945 & OLDER
* 40 ->	1-STORY W/FINISHED ATTIC ALL AGES
* 45 ->	1-1/2 STORY - UNFINISHED ALL AGES
* 50 ->	1-1/2 STORY FINISHED ALL AGES
* 60 ->	2-STORY 1946 & NEWER
* 70 ->	2-STORY 1945 & OLDER
* 75 ->	2-1/2 STORY ALL AGES
* 80 ->	SPLIT OR MULTI-LEVEL
* 85 ->	SPLIT FOYER
* 90 ->	DUPLEX - ALL STYLES AND AGES
* 120 -> 1-STORY PUD (Planned Unit Development) - 1946 & NEWER
* 150 -> 1-1/2 STORY PUD - ALL AGES
* 160 -> 2-STORY PUD - 1946 & NEWER
* 180 -> PUD - MULTILEVEL - INCL SPLIT LEV/FOYER
* 190 -> 2 FAMILY CONVERSION - ALL STYLES AND AGES

![Análisis estadístico de MSSubClass](../images/house-pricing/attrs/ms-subclass.png)

### MSZoning
Identifica la clasificación general de la zona de la venta.

_Tipo:_ Categórico
		
_Valores:_
* A ->	Agricultura
* C -> Comercial
* FV ->	Floating Village Residential
* I ->	Industrial
* RH ->	Residential Alta Densidad
* RL ->	Residential Baja Densidad
* RP ->	Residential Baja Densidad Parque
* RM ->	Residential Media Densidad

![Análisis estadístico de MSZoning](../images/house-pricing/attrs/mz-zoning.png)

### LotFrontage
Distancia en linea recta a la calle desde la propiedad (en pies)

_Tipo:_ Real

_Transformaciones:_ RapidMiner detectó el valor como polinominal, al cargar el
dataset se hizo la transformación a _Number_.

![Análisis estadístico de LotFrontage](../images/house-pricing/attrs/lot-frontage.png)

### LotArea
Tamaño del lote en pies cuadrados.

_Tipo:_ Entero

![Análisis estadístico de LotArea](../images/house-pricing/attrs/lot-area.png)

### Street
Tipo de calle para acceder a la propiedad.

_Tipo:_ Categórico

_Valores:_
* Grvl -> Gravilla
* Pave -> Pavimentada

![Análisis estadístico de Street](../images/house-pricing/attrs/street.png)

### Alley
Tipo de callejón para acceder a la propiedad.

_Tipo:_ Categórico

_Valores:_
* Grvl -> Gravilla
* Pave -> Pavimentada
* NA -> Sin acceso a callejón

![Análisis estadístico de Alley](../images/house-pricing/attrs/alley.png)

### LotShape
Forma general de la propiedad.

_Tipo:_ Categórico
       
_Valores:_
* Reg ->	Regular	
* IR1 ->	Poco irregular
* IR2 ->	Moderadamente Irregular
* IR3 ->	Irregular

![Análisis estadístico de LotShape](../images/house-pricing/attrs/lot-shape.png)

### LandContour
Determina que tan plana es la propiedad.

_Tipo:_ Categórico

_Valores:_
* Lvl ->	Casi al nivel del piso.
* Bnk ->	Banco - Aumento significativo del nivel del piso al edificio.
* HLS ->	Hillside - Pendiente significante de lado a lado
* Low ->	Depresión

![Análisis estadístico de LandContour](../images/house-pricing/attrs/land-contour.png)

### Utilities
Tipo de servicios disponibles.

_Tipo:_ Categórico

_Valores:_
* AllPub ->	Todos las servicios públicos (Electricidad, Gas, Agua y Saneamiento)	
* NoSewr ->	Electricidad, Gas y Agua (Tanque Séptico)
* NoSeWa ->	Solo Electricidad y Agua
* ELO ->	Solo Electricidad

![Análisis estadístico de Utilities](../images/house-pricing/attrs/utilities.png)

### LotConfig
Configuración del lote.

_Tipo:_ Categórico

_Valores:_
* Inside ->	Lote interior
* Corner ->	Lote esquinado
* CulDSac ->	Cul-de-sac
* FR2 ->	Frente en 2 lados de la propiedad
* FR3 ->	Frente en 3 lados de la propiedad

![Análisis estadístico de LotConfig](../images/house-pricing/attrs/lot-config.png)

### LandSlope
Pendiente de la propiedad

_Tipo:_ Categórico
		
_Valores:_
* Gtl -> Pendiente gentil	
* Mod -> Pendiente moderada
* Sev -> Pendiente severa

![Análisis estadístico de LandSlope](../images/house-pricing/attrs/land-slope.png)

### Neighborhood
Ubicación dentro de los límites de la ciudad de Ames.

_Tipo:_ Categórico

_Valores:_
* Blmngtn ->	Bloomington Heights
* Blueste ->	Bluestem
* BrDale ->	Briardale
* BrkSide ->	Brookside
* ClearCr ->	Clear Creek
* CollgCr ->	College Creek
* Crawfor ->	Crawford
* Edwards ->	Edwards
* Gilbert ->	Gilbert
* IDOTRR ->	Iowa DOT and Rail Road
* MeadowV ->	Meadow Village
* Mitchel ->	Mitchell
* Names ->	North Ames
* NoRidge ->	Northridge
* NPkVill ->	Northpark Villa
* NridgHt ->	Northridge Heights
* NWAmes ->	Northwest Ames
* OldTown ->	Old Town
* SWISU ->	South & West of Iowa State University
* Sawyer ->	Sawyer
* SawyerW ->	Sawyer West
* Somerst ->	Somerset
* StoneBr ->	Stone Brook
* Timber ->	Timberland
* Veenker ->	Veenker

![Análisis estadístico de Neighborhood](../images/house-pricing/attrs/neighborhood.png)

### Condition1
Proximidad en criterio de las condiciones especificadas.

_Tipo:_ Categórico
	
_Valores:_ 
* Artery ->	Adyacente a calle principal
* Feedr ->	Adyacente a calle secundaria
* Norm ->	Normal	
* RRNn ->	Dentro de 200' de North-South Railroad
* RRAn ->	Adyacente a North-South Railroad
* PosN ->	Cercano a caracteristicas off-site negativas.
  Parques, espacios abiertos, greenbelt, etc.
* PosA ->	Adyacente a carcteristicas off-site postivas.
* RRNe ->	Dentro de 200' de East-West Railroad
* RRAe ->	Adyacente a East-West Railroad

![Análisis estadístico de Condition1](../images/house-pricing/attrs/condition1.png)


### Condition2
Proximidad en criterio de las condiciones especificadas (si existe más de una
presente).

_Tipo:_ Categórico
	
_Valores:_ 
* Artery ->	Adyacente a calle principal
* Feedr ->	Adyacente a calle secundaria
* Norm ->	Normal	
* RRNn ->	Dentro de 200' de North-South Railroad
* RRAn ->	Adyacente a North-South Railroad
* PosN ->	Cercano a caracteristicas off-site negativas.
  Parques, espacios abiertos, greenbelt, etc.
* PosA ->	Adyacente a carcteristicas off-site postivas.
* RRNe ->	Dentro de 200' de East-West Railroad
* RRAe ->	Adyacente a East-West Railroad

![Análisis estadístico de Condition2](../images/house-pricing/attrs/condition2.png)

### BldgType
Tipo de vivienda.

_Tipo:_ Categórico
		
_Valores:_
* 1Fam ->	Familia Única
* 2FmCon ->	Two-family Conversion; originalmente construida como vivienda para familia unica.
* Duplx ->	Duplex
* TwnhsE ->	Townhouse End Unit
* TwnhsI ->	Townhouse Inside Unit

![Análisis estadístico de BldgType](../images/house-pricing/attrs/bldg-type.png)

### HouseStyle
Estilo de vivienda

_Tipo:_ Categórico
	
_Valores:_
* 1Story -> Un piso
* 1.5Fin -> Un piso y medio: Segundo nivel terminado
* 1.5Unf -> Un piso y medio: Segundo nivel no terminado
* 2Story -> Dos pisos
* 2.5Fin -> Dos pisos y medio: Segundo nivel terminado
* 2.5Unf -> Dos pisos y medio: Segundo nivel no terminado
* SFoyer -> Split Foyer
* SLvl	-> Split Level

![Análisis estadístico de HouseStyle](../images/house-pricing/attrs/house-style.png)


### OverallQual
Calidad del material y el acabado de la casa.

_Tipo:_ Categórico

_Transformación:_ Al importar el dataset se tomó el atributo como numérico, esto
facilita el tratamiento en la regresión. Como el atributo es un ranking ordenado
la transformación no debería tener un impacto negativo.

_Valores:_
* 10 ->	Muy Excelente
* 9 ->	Excelente
* 8 ->	Muy bueno
* 7 ->  bueno
* 6 ->	Sobre el promedio
* 5 ->	Promedio
* 4 ->	Debajo del promedio
* 3 ->	Aceptable
* 2 ->	Pobre
* 1 ->	Muy Pobre 

![Análisis estadístico de OverallQual](../images/house-pricing/attrs/overall-quall.png)

### OverallCond
Puntaje sobre la condición general de la vivienda.

_Tipo:_ Categórico

_Transformación:_ Al importar el dataset se tomó el atributo como numérico, esto
facilita el tratamiento en la regresión. Como el atributo es un ranking ordenado
la transformación no debería tener un impacto negativo.

_Valores:_
* 10 ->	Muy Excelente
* 9 ->	Excelente
* 8 ->	Muy bueno
* 7 ->  bueno
* 6 ->	Sobre el promedio
* 5 ->	Promedio
* 4 ->	Debajo del promedio
* 3 ->	Aceptable
* 2 ->	Pobre
* 1 ->	Muy Pobre 

![Análisis estadístico de OverallCond](../images/house-pricing/attrs/overall-cond.png)

### YearBuilt
Año original de construcción.

_Tipo:_ Entero

![Análisis estadístico de YearBuilt](../images/house-pricing/attrs/year-built.png)

### YearRemodAdd
Fecha de remodelación (igual al año original de construcción si no se realizaron).

_Tipo:_ Entero

![Análisis estadístico de YearRemodAdd](../images/house-pricing/attrs/year-remod-add.png)

### RoofStyle
Tipo de techo.

_Tipo:_ Categórico

_Valores:_
* Flat ->	Flat
* Gable ->	Gable
* Gambrel ->	Gabrel (Barn)
* Hip ->	Hip
* Mansard ->	Mansard
* Shed ->	Shed

![Análisis estadístico de RoofStyle](../images/house-pricing/attrs/roof-style.png)

### RoofMatl
Material del techo.

_Tipo:_ Categórico

_Valores:_
* ClyTile ->	Clay or Tile
* CompShg ->	Standard (Composite) Shingle
* Membran ->	Membrane
* Metal ->	Metal
* Roll ->	Roll
* Tar&Gr -> Gravel & Tar
* WdShake ->	Wood Shakes
* WdShngl ->	Wood Shingles

![Análisis estadístico de RoofMatl](../images/house-pricing/attrs/roof-matl.png)

### Exterior1st
Exterior de la casa

_Tipo:_ Categórico

_Valores:_
* AsbShng ->	Asbestos Shingles
* AsphShn ->	Asphalt Shingles
* BrkComm ->	Brick Common
* BrkFace ->	Brick Face
* CBlock ->	Cinder Block
* CemntBd ->	Cement Board
* HdBoard ->	Hard Board
* ImStucc ->	Imitation Stucco
* MetalSd ->	Metal Siding
* Other ->	Other
* Plywood ->	Plywood
* PreCast ->	PreCast	
* Stone ->	Stone
* Stucco ->	Stucco
* VinylSd ->	Vinyl Siding
* WdSdng -> Wood Siding
* WdShing ->	Wood Shingles

![Análisis estadístico de Exterior1st](../images/house-pricing/attrs/exterior-1st.png)

### Exterior2nd
Exterior de la casa (si existe más de un material)

_Tipo:_ Categórico

_Valores:_
* AsbShng ->	Asbestos Shingles
* AsphShn ->	Asphalt Shingles
* BrkComm ->	Brick Common
* BrkFace ->	Brick Face
* CBlock ->	Cinder Block
* CemntBd ->	Cement Board
* HdBoard ->	Hard Board
* ImStucc ->	Imitation Stucco
* MetalSd ->	Metal Siding
* Other ->	Other
* Plywood ->	Plywood
* PreCast ->	PreCast	
* Stone ->	Stone
* Stucco ->	Stucco
* VinylSd ->	Vinyl Siding
* WdSdng -> Wood Siding
* WdShing ->	Wood Shingles

![Análisis estadístico de Exterior2nd](../images/house-pricing/attrs/exterior-2nd.png)

### MasVnrType
Tipo de revestimiento de mampostería.

_Tipo:_ Categórico

_Valores:_
* BrkCmn ->	Brick Common
* BrkFace ->	Brick Face
* CBlock ->	Cinder Block
* None ->	None
* Stone ->	Stone

_Observaciones:_ Existen 8 valores como "NA", esto indica que son datos faltantes.
Los valores que no tienen revestimiento de mampostería deberían tener el valor "None".

![Análisis estadístico de MasVnrType](../images/house-pricing/attrs/mas-vnr-type.png)


### MasVnrArea
Área en pies cuadrados de revestimiento de mampostería.

_Tipo:_ Real

![Análisis estadístico de MasVnrArea](../images/house-pricing/attrs/mas-vnr-area.png)

### ExterQual
Evalúa la calidad de los materiales del exterior.
		
_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente
* Gd ->	Bueno
* TA ->	Promedio/Típico
* Fa ->	Aceptable
* Po ->	Pobre

![Análisis estadístico de ExterQual](../images/house-pricing/attrs/exter-qual.png)

### ExterCond
Evalúa la condición de los materiales del exterior.
		
_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente
* Gd ->	Bueno
* TA ->	Promedio/Típico
* Fa ->	Aceptable
* Po ->	Pobre

![Análisis estadístico de ExterCond](../images/house-pricing/attrs/exter-qual.png)

### Foundation
Tipo de cimiento.
		
_Tipo:_ Categórico

_Valores:_
* BrkTil ->	Brick & Tile
* CBlock ->	Cinder Block
* PConc ->	Poured Contrete	
* Slab ->	Slab
* Stone ->	Stone
* Wood ->	Wood

![Análisis estadístico de Foundation](../images/house-pricing/attrs/foundation.png)

### BsmtQual
Evalúa el alto del sótano.

_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente (100+ pulgadas)	
* Gd ->	Bueno (90-99 pulgadas)
* TA ->	Típico (80-89 pulgadas)
* Fa ->	Aceptable (70-79 pulgadas)
* Po ->	Pobre (<70 pulgadas)
* NA ->	Sin sótano

![Análisis estadístico de BsmtQual](../images/house-pricing/attrs/bsmt-qual.png)

### BsmtCond
Evalúa al condición general del sótano

_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente
* Gd ->	Bueno
* TA ->	Típico (Poco nivel de Humedad)
* Fa ->	Aceptable (Humedad o rajaduras)
* Po ->	Pobre (Rajaduras y Humedad severas)
* NA ->	Sin sótano

### BsmtExposure
Altura de las paredes contra el jardín o calle.

_Tipo:_ Categórico

_Valores:_
* Gd ->	Good Exposure
* Av ->	Average Exposure (split levels or foyers typically score average or above)	
* Mn ->	Mimimum Exposure
* No ->	No Exposure
* NA ->	No Basement

![Análisis estadístico de BsmtExposure](../images/house-pricing/attrs/bsmt-exposure.png)

### BsmtFinType1
Evaluación del acabado del sótano

* GLQ ->	Buen nivel de vivienda.
* ALQ ->	Nivel de vivienda promedio.
* BLQ ->	Nivel de vivienda debajo del promedio.
* Rec ->	Average Rec Room
* LwQ ->	Low Quality
* Unf ->	Unfinshed
* NA ->	No Basement

![Análisis estadístico de BsmtFinType1](../images/house-pricing/attrs/bsmt-fin-type1.png)

### BsmtFinSF1
Medidas en pies cuadraros del acabado de tipo 1.

_Tipo:_ Real

![Análisis estadístico de BsmtFinSF1](../images/house-pricing/attrs/bsmt-fin-sf1.png)

### BsmtFinType2
Evaluación del acabado del sótano (si existe mas de un caso)

* GLQ ->	Buen nivel de vivienda.
* ALQ ->	Nivel de vivienda promedio.
* BLQ ->	Nivel de vivienda debajo del promedio.
* Rec ->	Average Rec Room
* LwQ ->	Low Quality
* Unf ->	Unfinshed
* NA ->	No Basement

![Análisis estadístico de BsmtFinType2](../images/house-pricing/attrs/bsmt-fin-type2.png)

### BsmtFinSF2
Medidas en pies cuadraros del acabado de tipo 2.

_Tipo:_ Real

![Análisis estadístico de BsmtFinSF1](../images/house-pricing/attrs/bsmt-fin-sf2.png)

### BsmtUnfSF
Medidas en pies cuadraros del espacio sin terminar.

_Tipo:_ Real

![Análisis estadístico de BsmtUnfSF](../images/house-pricing/attrs/bsmt-unf-sf.png)

### TotalBsmtSF
Medidas en pies cuadraros total del sótano.

_Tipo:_ Real

![Análisis estadístico de TotalBsmtSF](../images/house-pricing/attrs/total-bsmt-sf.png)

### Heating
Tipo de calefacción

_Tipo:_ Categórico
		
_Valores:_
* Floor ->	Floor Furnace
* GasA ->	Gas forced warm air furnace
* GasW ->	Gas hot water or steam heat
* Grav ->	Gravity furnace	
* OthW ->	Hot water or steam heat other than gas
* Wall ->	Wall furnace

![Análisis estadístico de Heating](../images/house-pricing/attrs/heating.png)

### HeatingQC
Calidad y condición de la calefacción

_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente
* Gd ->	Bueno
* TA ->	Típico
* Fa ->	Aceptable
* Po ->	Pobre

![Análisis estadístico de HeatingQC](../images/house-pricing/attrs/heating-qc.png)

### CentralAir
Calefacción central

_Tipo:_ Categórico

_Valores:_
* N ->	No
* Y ->	Yes

![Análisis estadístico de CentralAir](../images/house-pricing/attrs/central-air.png)

### Electrical
Sistema eléctrico

_Tipo:_ Categórico

_Valores:_
* SBrkr ->	Standard Circuit Breakers & Romex
* FuseA ->	Fuse Box over 60 AMP and all Romex wiring (Average)	
* FuseF ->	60 AMP Fuse Box and mostly Romex wiring (Fair)
* FuseP ->	60 AMP Fuse Box and mostly knob & tube wiring (poor)
* Mix ->	Mixed

![Análisis estadístico de Electrical](../images/house-pricing/attrs/electrical.png)

### 1stFlrSF
Medida en pies cuadrado del primer piso.

_Tipo:_ Entero

![Análisis estadístico de 1stFlrSF](../images/house-pricing/attrs/1st-flr-sf.png)

### 2ndFlrSF
Medida en pies cuadrado del segundo piso.

_Tipo:_ Entero

![Análisis estadístico de 2ndFlrSF](../images/house-pricing/attrs/2nd-flr-sf.png)

### LowQualFinSF
Medida en pies cuadrado del acabado de baja calidad (todos los pisos).

_Tipo:_ Entero

![Análisis estadístico de LowQualFinSF](../images/house-pricing/attrs/low-qual-fin-sf.png)

### GrLivArea
Área de vivienda sobre el nivel del piso.

_Tipo:_ Entero

![Análisis estadístico de GrLivArea](../images/house-pricing/attrs/gr-live-area.png)

### BsmtFullBath
Sótano con baño completo

_Tipo:_ Entero

![Análisis estadístico de BsmtFullBath](../images/house-pricing/attrs/bsmt-full-bath.png)

### BsmtHalfBath
Sótano con baño sin bañera o duchero.

_Tipo:_ Entero

![Análisis estadístico de BsmtHalfBath](../images/house-pricing/attrs/bsmt-half-bath.png)

### FullBath
Baños completos sobre el nivel del piso.

_Tipo:_ Entero

![Análisis estadístico de FullBath](../images/house-pricing/attrs/full-bath.png)

### HalfBath
Baños sin bañera o duchero sobre el nivel del piso.

_Tipo:_ Entero

![Análisis estadístico de HalfBath](../images/house-pricing/attrs/half-bath.png)

### BedroomAbvGrd
Cuartos sobre el nivel del piso (No incluye cuartos en el sótano).

_Tipo:_ Entero

![Análisis estadístico de BedroomAbvGrd](../images/house-pricing/attrs/bedroom.png)

### KitchenAbvGrd
Cocina sobre el nivel del piso.

_Tipo:_ Entero

![Análisis estadístico de KitchenAbvGrd](../images/house-pricing/attrs/kitchen.png)

### KitchenQual
Calidad de la cocina.

_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente
* Gd ->	Bueno
* TA ->	Típico
* Fa ->	Aceptable
* Po ->	Pobre

![Análisis estadístico de KitchenQual](../images/house-pricing/attrs/kitchen-qual.png)

### TotRmsAbvGrd
Cuartos totales sobre el nivel del piso (No incluye baños).

_Tipo:_ Entero

![Análisis estadístico de TotRmsAbvGrd](../images/house-pricing/attrs/tot-rms-abv-grd.png)

### Functional
Funcionalidades del hogar

_Tipo:_ Categórico

_Valores:_
* Typ ->	Funcionalidad Típica
* Min1 ->	Reducciones Mínimas 1
* Min2 ->	Reducciones Mínimas 2
* Mod ->	Reducciones Moderadas
* Maj1 ->	Grandes Reducciones 1
* Maj2 ->	Grandes Reducciones 2
* Sev ->	Severamente Dañado
* Sal ->	Solamente Salvataje

![Análisis estadístico de Functional](../images/house-pricing/attrs/functional.png)

### Fireplaces
Cantidad de estufas

_Tipo:_ Entero

![Análisis estadístico de Fireplaces](../images/house-pricing/attrs/fireplaces.png)

### FireplaceQu
Calidad de la estufa

_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente - Excelente estufa de mampostería
* Gd ->	Bueno - Estufa de mampostería en el nivel principal
* TA ->	Promedio - Estufa prefabricada en nivel principal o estufa de mampostería en  sótano.
* Fa ->	Aceptable - Estufa prefabricada en sótano
* Po ->	Pobre - Estufa Ben Franklin
* NA ->	Sin estufa

![Análisis estadístico de FireplaceQu](../images/house-pricing/attrs/fireplace-qu.png)

### GarageType
Ubicación del garaje

_Tipo:_ Categórico
		
_Valores:_
* 2Types ->	Más de un tipo de garaje. 
* Attchd ->	Adjunto a la casa.
* Basment -> Garaje en sótano	
* BuiltIn ->	Built-In
* CarPort ->	Car Port
* Detchd ->	Aparte de la casa   
* NA ->	Sin Garaje

![Análisis estadístico de GarageType](../images/house-pricing/attrs/garage-type.png)

### GarageYrBlt
Año de construcción del garaje.

_Tipo:_ Categórico

_Observación:_ Existen 81 valores (5.55%) con valor "NA". En este contexto, podría
tomarse como que la vivienda no tiene garaje.
![Análisis estadístico de GarageYrBlt](../images/house-pricing/attrs/garage-yr-blt.png)

_Transformación_: El atributo fue transformado a numérico al cargar el dataset.
Esto se debe a que tiene más sentido en el contexto de una regresión como un
valor numérico que un valor categórico

![Análisis estadístico de GarageYrBlt luego de la transformación](../images/house-pricing/attrs/grarage-yr-blt-transf.png)

### GarageFinish
Acabado interior del garaje.

_Tipo:_ Categórico

_Valores:_
* Fin -> Finalizado
* RFn -> Acabado rústico
* Unf -> Sin acabado
* NA ->	Sin Garaje

![Análisis estadístico de GarageFinish](../images/house-pricing/attrs/garage-finish.png)

### GarageCars
Capacidad del garaje en autos.

_Tipo:_ Entero

![Análisis estadístico de GarageCars](../images/house-pricing/attrs/garage-cars.png)

### GarageArea
Medida del garaje en pies cuadrados.

_Tipo:_ Entero

![Análisis estadístico de GarageArea](../images/house-pricing/attrs/garage-area.png)

### GarageQual
Calidad del garaje.

_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente
* Gd ->	Bueno
* TA ->	Promedio
* Fa ->	Aceptable
* Po ->	Pobre
* NA ->	Sin garaje

![Análisis estadístico de GarageQual](../images/house-pricing/attrs/garage-qual.png)

### GarageCond
Condición del garaje.

_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente
* Gd ->	Bueno
* TA ->	Promedio
* Fa ->	Aceptable
* Po ->	Pobre
* NA ->	Sin garaje

![Análisis estadístico de GarageCond](../images/house-pricing/attrs/garage-cond.png)

### PavedDrive
Entrada de coche pavimentada

_Tipo:_ Categórico

_Valores:_
* Y -> Pavimentada
* P	-> Parcialmente pavimentada
* N	-> Tierra/Gravilla

![Análisis estadístico de PavedDrive](../images/house-pricing/attrs/paved-drive.png)

### WoodDeckSF
Área cubierta de madera en pies cuadrados.

_Tipo:_ Entero

![Análisis estadístico de WoodDeckSF](../images/house-pricing/attrs/wood-deck-sf.png)

### OpenPorchSF
Área del porche en pies cuadrados.

_Tipo:_ Entero

![Análisis estadístico de OpenPorchSF](../images/house-pricing/attrs/open-porch-sf.png)

### EnclosedPorch
Área del porche (cerrado) en pies cuadrados.

_Tipo:_ Entero

![Análisis estadístico de EnclosedPorch](../images/house-pricing/attrs/enclosed-porch.png)

### 3SsnPorch
Área del Porche de tres estaciones en pies cuadrados.

_Tipo:_ Entero

![Análisis estadístico de 3SsnPorch](../images/house-pricing/attrs/3sn-porch.png)

### ScreenPorch
Área del Porche con ventanas en pies cuadrados.

_Tipo:_ Entero

![Análisis estadístico de ScreenPorch](../images/house-pricing/attrs/screen-porch.png)

### PoolArea
Área de piscina en pies cuadrados.

_Tipo:_ Entero

![Análisis estadístico de PoolArea](../images/house-pricing/attrs/pool-area.png)

### PoolQC
Calidad de la piscina.		

_Tipo:_ Categórico

_Valores:_
* Ex ->	Excelente
* Gd ->	Bueno
* TA ->	Promedio
* Fa ->	Aceptable
* NA ->	Sin piscina

![Análisis estadístico de PoolQC](../images/house-pricing/attrs/pool-qc.png)

### Fence
Calidad del cerco.

_Tipo:_ Categórico
		
_Valores:_
* GdPrv -> Buena Privacidad
* MnPrv	-> Privacidad Mínima
* GdWo	-> Buena Madera
* MnWw	-> Cantidad de madera minima/Alambre
* NA	-> Sin Cerco

![Análisis estadístico de Fence](../images/house-pricing/attrs/fence.png)

### MiscFeature
Prestaciones misceláneas que no se cubrieron en otras categorías.

_Tipo:_ Categórico
		
_Valores:_
* Elev -> Elevador
* Gar2 ->	2ndo Garaje (si no está descripto en la sección de garaje)
* Othr	 -> Otro
* Shed ->  Covertizo (mas de 100 pies cuadrados)
* TenC -> Cancha de Tenis
* NA  ->  Ninguno

![Análisis estadístico de MiscFeature](../images/house-pricing/attrs/misc-feature.png)

### MiscVal
Valor de las prestaciones misceláneas.

_Tipo:_ Real

![Análisis estadístico de MiscVal](../images/house-pricing/attrs/misc-val.png)

### MoSold
Mes de la venta (MM).

_Tipo:_ Entero

![Análisis estadístico de MoSold](../images/house-pricing/attrs/mo-sold.png)

### YrSold
Año de la venta (YYYY).

_Tipo:_ Entero

![Análisis estadístico de YrSold](../images/house-pricing/attrs/yr-sold.png)

### SaleType
Tipo de venta.

_Tipo:_ Categórico
		
_Valores:_
* CWD ->	Warranty Deed - Cash
* VWD ->	Warranty Deed - VA Loan
* New ->	Home just constructed and sold
* COD ->	Court Officer Deed/Estate
* Con ->	Contract 15% Down payment regular terms
* ConLw ->	Contract Low Down payment and low interest
* ConLI ->	Contract Low Interest
* ConLD ->	Contract Low Down
* Oth ->	Other

![Análisis estadístico de SaleType](../images/house-pricing/attrs/sale-type.png)

### SaleCondition
Condición de la venta.

_Tipo:_ Categórico

_Valores:_
* Normal ->	Normal Sale
* Abnorml ->	Abnormal Sale -  trade, foreclosure, short sale
* AdjLand ->	Adjoining Land Purchase
* Alloca ->	Allocation - two linked properties with separate deeds, typically condo with a garage unit	
* Family ->	Sale between family members
* Partial ->	Home was not completed when last assessed (associated with New Homes)

![Análisis estadístico de SaleCondition](../images/house-pricing/attrs/sale-condition.png)


## Variable de Salida - SalePrice
El dataset cuenta con una variable de salida, llamada _SalePrice_ que es de
tipo entero (no hay precios con punto flotante en el dataset). Ésta variable
representa el precio en dólares americanos de la venta del inmueble y es la
variable que intentaremos predecir en nuestra regresión.

![Análisis estadístico de SalePrice](../images/house-pricing/attrs/sale-price.png)

# Preparación del Dataset
El dataset necesita mucho trabajo y preparación para poder ser utilizado en un
problema de regresión de manera eficiente. Existen varias problemáticas que a
simple vista podemos reconocer: debemos tratar los datos faltantes, estudiar el
dataset para detectar outliers, buscar variables correlacionadas que puedan
afectar la predicción y estudiar la relevancia de los atributos en el problema.
Además, por tratarse de un algoritmo de regresión, debemos resolver cómo tratar
a las variables categóricas; ya sea utilizando "dummy variables" o en casos
particulares (dónde las variables son numéricas y representan un orden)
transformando su tipo a variables numéricas.

En la sección anterior hicimos un análisis de los atributos en cuanto a sus
características estadísticas y a lo que representan en el contexto del
problema.  Existen ciertas variables que no pueden tener un efecto en el precio
final, ya que no sabemos su valor hasta el momento de realizar la compra.
Información como el año y el mes de la compra no aportan nada  a la estimación
final del precio. Es importante quitar estas variables antes de realizar un
trabajo más profundo de detección de outliers y casos faltantes ya que
cualquier información que se desprenda de éstos atributos no es de nuestro
interés.

## Configuración de Atributos Especiales
Debemos configurar la columna _SalePrice_ como nuestro "label". Esto le permite
a RapidMiner entender que es la variable que queremos estimar en nuestros
modelos de regresión. Además, el atributo _Id_ no aporta información relevante
para la problemática; por esto lo definiremos como atributo "id".Para esto
simplemente utilizaremos el operador de __SetRole__.

## Eliminación de Atributos dado el Contexto del Problema
El objetivo del algoritmo de regresión es predecir el valor de una propiedad
en base a los atributos del dataset, pero existen ciertos atributos que pierden
sentido en este contexto. Los siguientes atributos no serán tenidos en cuenta ya
que no pueden tener ningún efecto en el precio de la venta ya que su valor se
conoce después de que se concreta la misma. 

Los atributos a descartar son:
* _MoSold_: Mes de la venta (MM).
* _YrSold_: Año de la venta (MM).
* _SaleType_: Tipo de venta.
* _SaleCondition_: Condición de la venta.

Éstos atributos serán filtrados en el proceso de RapidMiner con el operador
__SelectAtributes__.

## Outliers
Los outliers afectan directamente en la capacidad de los algoritmos de
regresión a la hora de poder estimar la variable objetivo. Estos valores tan
alejados de la media "contaminan" los resultados provocando estimaciones
desviadas.

Luego de un análisis de outliers en RapidMiner a través del operador __Detect
Outlier (Distances)__, obtuvimos un total de 10 instancias.

![Outliers - LotArea en función de GrLivArea](../images/house-pricing/data-prep/outliers-lot-area-vs-gr-live-area.png)

![Outliers - SalePrice en función de GrLivArea](../images/house-pricing/data-prep/outliers-price-gr-vs-live-area.png)

![Outliers - LotArea en función de SalePrice](../images/house-pricing/data-prep/outliers-lot-area-vs-price.png)

Como podemos observar en los gráficos, los outliers detectados son propiedades
con tamaños muy grandes en relación al resto o situaciones en las que la
relación precio/tamaño no condicen. Dado el efecto tan representativo de los
outliers en los algoritmos de regresión y la cantidad baja de los mismos,
optamos por eliminar estas instancias del dataset.

## Normalización
Se realizó una normalización de los datos escalando y centrando los atributos,
esto se debe a que los algoritmos de regresión son particularmente sensibles
a datos con escalas diferentes. Para la normalización se utilizo el operador
__Normalize__ aplicando el método "Z-transformation".

## Datos Faltantes
En líneas generales el dataset tiene pocos datos faltantes, hay solamente tres 
atributos afectados: _LotFrontage_, GarageYrBlt y _MasVnrArea_. Para el caso de _MasVnrArea_,
tenemos solamente 8 instancias y sabemos que el valor faltante no significa que
no haya mampostería (ya que existe un valor "None" que indica eso); para este
atributo simplemente eliminaremos las instancias con datos faltantes.

El atributo _LotFrontage_ tiene 258 valores faltantes, y el atributo
_GarageYrBlt_ 81. Al ser valores numéricos y tener una cantidad considerable de
valores faltantes utilizaremos el operador __Replace Missing Values__. Los
valores faltantes serán reemplazados por el valor promedio.

## Tratamiento de Variables Categóricas
Las variables Nominales, Polinominales y Categóricas no pueden utilizarse 
correctamente en la regresión ya que se esperan valores numéricos. Existen casos
de variables categóricas que en representan un puntaje numérico, en estos
casos simplemente podríamos convertir esas columnas a números. Además, tenemos
otras variables categóricas que no pueden transformarse directamente a variables
numéricas, en esos casos utilizaremos variables "dummy".

### Variables Categóricas Ordinales
Las siguientes variables pueden simplemente transformarse a valores numéricos,
esto se debe a que a pesar de ser categóricas, representan una relación de
orden entre los valores.

Las variables son:

LotFrontage,
OverallQual,
ExterQual,
ExterCond,
BsmtQual,
BsmtCond,
BsmtExposure,
KitchenQual,
FireplaceQu,
GarageCond,
GarageQual,
GarageYrBlt,
y PoolQC

Los atributos _LotFrontage_ y _GarageYrBlt_ fueron transformados a valores
numéricos cuando se cargó el dataset en RapidMiner.  El resto fueron adaptadas
con el operador __Nominal to Numerical__, definiendo el parámetro _coding_type_
como "unique integers".

### Variables Categóricas No Ordinales
Las variables categóricas del dataset no representan un orden y no tiene
sentido aplicar el mismo tratamiento que aplicamos en la sección anterior. En
este caso utilizaremos las variables "dummy", que nos permiten codificar
variables categóricas en múltiples variables numéricas

Alley,
BldgType,
BsmtFinType1,
BsmtFinType2,
CentralAir,
Condition1,
Condition2,
Electrical,
Exterior1st,
Exterior2nd,
Fence,
Foundation,
Functional,
GarageFinish,
GarageType,
Heating,
HeatingQC,
HouseStyle,
LandContour,
LandSlope,
LotConfig,
LotShape,
MSSubClass,
MSZoning,
MasVnrType,
MiscFeature
Neighborhood,
PavedDrive,
RoofMatl,
RoofStyle,
Street,
Utilities,

# Feature Engineering

## Correlaciones en los Atributos
Se creo una matriz de correlaciones para los atributos numéricos.
Observando la matriz, podemos determinar como primer paso las correlaciones más
grandes del dataset. Luego de tener una lista definida, podemos realizar una
correlacione entre estas variables y _SalePrice_ para entender cual de las
variables aporta más a la estimación del precio.

![Matriz de correlación para el dataset](../images/house-pricing/feat-eng/mc-attrs.png)

Se observa una alta correlación entre los siguientes atributos (mayor a 0.8):
* _GarageCond_ y _GarageQual_
* _Fireplaces_ y _FireplaceQu_
* _PoolQC_ y _PoolArea_
* _GarageCars_ y _GarageArea_
* _GrLivArea_ y _TotRmsAbvGrd_ 
* GarageYrBlt y YearBuilt
* TotalBsmtSF y 1stFlrSF

A continuación realizaremos un estudio entre estas variables altamente
correlacionadas y la variable objetivo _SalePrice_. Ésto nos permitirá
tener información sobre el impacto final de los atributos en la estimación
del valor del inmueble.

![Matriz de correlación para los atributos más correlacionados entre sí y SalePrice](../images/house-pricing/feat-eng/cm-label.png)

![Matriz de correlación para los atributos más correlacionados entre sí y SalePrice (ordenada por correlación a SalePrice)](../images/house-pricing/feat-eng/mc-label-numbers.png)

Tenemos varios casos para estudiar de variables correlacionadas, analizaremos la
posible explicación de la correlación, su relación con la variable objetivo y
en base a esto tomaremos la decisión de que variables eliminar.

### GarageCond y GarageQual
La condición y la calidad del garaje tienen sentido en estar correlacionadas ya
que materiales de mayor calidad tienden a mantener una mejor condición. Observando
la relación con _SalePrice_ vemos que _GarageCond_ tiene una correlación de -0.245
y _GarageQual_ tiene una correlación de -0.235. No existe una diferencia sustancial
por lo que nos quedaremos con _GarageQual_.

### Fireplaces y FireplaceQu
_Fireplaces_ representa la cantidad de estufas mientras que _FireplaceQu_ su
calidad. La correlación en este caso no es tan obvia, ya que la cantidad de
estufas no tienen por qué significar un impacto en la calidad de las mismas.
_Fireplaces_ tiene una correlación de 0.469 y _FireplaceQu_ 0.402 con respecto
a _SalePrice_. En este caso nos quedaremos con las dos variables ya que no
existe una explicación para la correlación que nos lleve a la decisión de
quitar uno de los atributos.

### PoolQC y PoolArea
La calidad de la piscina y el área de la misma pueden estar correlacionadas,
es probable que las piscinas de menor calidad sean mas pequeñas. Así como
probablemente piscinas de mas alta calidad tengan un área mas grande.

Con respecto a _SalePrice_, ambas tienen muy poca correlación.
En este caso optamos por mantener a las dos variables. Recordad también que
estas variables fueron transformadas de variables nominales a numéricas.
 
### GarageCars y GarageArea
La correlación en este caso es bastante obvia, mientras más espacio más autos
podremos ubicar. _GarageCars_ tiene más correlación con _SalePrice_ (por muy
poco margen) por lo que removeremos _GarageArea_
 
### GrLivArea y TotRmsAbvGrd 
En este caso la correlación también es fácil de ver, mientras mas área general
de vivienda más cantidad de cuartos sobre el nivel del piso. _GrLivArea_ tiene
bastante más correlación con _SalePrice_ por lo que removeremos _TotRmsAbvGrd_.

### GarageYrBlt y YearBuilt
Claramente estas variables estan muy correlacionadas, si bien es probable que
se difiera en los anos en que se construye un garaje y una vivienda lo más
común es que se hagan al mismo tiempo. _YearBuilt_ tiene más correlación con
_SalePrice_, además no tiene datos faltantes. GarageYrBlt tiene unos cuantos datos que faltan, aunque probablemente sean por el hecho de que la vivienda no tiene
garaje. De todas formas, removeremos _GarageYrBlt_.

### TotalBsmtSF y 1stFlrSF
Es común que el sótano tenga las mismas dimensiones que el primer piso, o por
lo menos sean bastante similares. La correlación es clara en este ejemplo.
_TotalBsmtSF_ tiene mayor correlación con _SalePrice_ por lo que eliminaremos
_1stFlrSF_.

### Resumen
Del análisis anterior podemos determinar que removeremos los siguientes atributos:
* GarageCond
* GarageArea
* TotRmsAbvGrd
* GarageYrBlt
* 1stFlrSF

## PCA
Se realizo un análisis PCA, manteniendo una varianza de 0.95%. El resultado fue
llamativo ya que se obtuvieron 34 componentes principales (igual número de
variables analizadas). No hubo una reducción en la dimensión, esto puede deberse
a que se quitaron algunos atributos (ver Eliminación de Atributos dado el Contexto del Problema) que no tenían relación con el precio final de la venta. Cabe destacar
que antes de poder realizar el análisis de PCA se realizo el tratamiento de
outliers, normalización de datos y tratamiento de datos faltantes.

![Varianza acumulada para análisis PCA](../images/house-pricing/feat-eng/pca-plot.png)

# Modelado
Utilizaremos diferentes modelos de regresión: Regresión Lineal, Gradient Boosting Trees, RandomForest y un algoritmo de votación con los tres operadores dentro.

A continuación se muestran las configuraciones de los modelos:



# Evaluación
Para la evaluación se utilizará split validation con un 70% de entrenamiento y
un %30 testing, y una semilla (1992) para poder comparar correctamente. No se
utilizó cross validation (a pesar de ser el esquema de validación preferido en
la mayoría de los casos) por un tema de tiempo, son muchos modelos a comparar y
la ejecución demoraba mucho en finalizar.


| Modelo                  | R<sup>2</sup> | RMSE      |
| ----------------------- | ------------- | --------- |
| Random Forest           | 0.872         | 34126.973 |
| Gradient Boosting Trees | 0.836         | 55448.722 |
| Regresión Lineal        | 0.890         | 26210.603 |
| Vote                    | 0.882         | 42365.028 |


<figcaption>Tabla comparativa de los resultados obtenidos en los modelos</figcaption>

# Conclusiones
El trabajo dejo clara la importancia de la preparación de datos en los
algoritmos de regresión, si bien los modelos tuvieron diferencias no fueron
significativas, lo realmente determinante en este caso fue el tratamiento del
dataset. Utilizando el dataset original se llegaba a valores de R<sup>2</sup>
aproximados a 0.6, y al intentarse varias combinaciones no se vieron buenos
resultados.

El simple hecho de normalizar, eliminar outliers y tratar datos faltantes
mejoró claramente los resultados. Luego de todo el análisis, reduciendo
cantidad de atributos y tratando variables nominales se llegó a un buen
resultado. Es llamativo que el mejor algoritmo fue la regresión lineal,
llegando a 0.89. Probablemente haya habido un poco de overfitting y algoritmos
como Vote que tuvieron 0.88 estén mejor preparados para estimar mejor nuevos
datos.

# Anexo (Proceso de Rapidminer)
A continuación se muestran imágenes del proceso de RapidMiner para el proyecto.

![Subproceso de preparación de datos](../images/house-pricing/sp-data-prep.png)

![Proceso completo de RapidMiner](../images/house-pricing/rm-process.png)

[>> Descarga del Proyecto de Rapidminer](house-pricing.rmp)
