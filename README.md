# Team4_NET_ProyectoFinal_FundacionEsplai


#### 1. Description
```
Demo API REST creada con .NET COre 3.1 utilizando varias entidades ER y conectada con base de datos 
MS Sql Virtualizada sobre Fedora 32  y Virtualbox 6.1. Aplicación con fines educativos.
```

#### 2. Link a un demo con el proyecto desplegado: https://github.com/SeClaMa/Team4_NET_ProyectoFinal_FundacionEsplai/tree/main

```
* Nombre de la App: [GIT] (https://github.com/)
```
#### 3. Lista con los pasos mínimos que se necesitan para clonar exitosamente el proyecto y echarlo a andar en local.

###### Install
```
IDE               Visual Studio 2019 Community Version
Core              C# 
Framework         NET Core 3.1
DataBase          Microsoft Sql Server 
Virtual           VirtualBox 6.1
SO                Fedora 32
```
###### packages Nuget 
```
Install-Package Microsoft.VisualStudio.Web.CodeGeneration.Design  -Version 3.1.4
Install-Package Microsoft.EntityFrameworkCore.Tools               -Version 3.1.8
Install-Package Microsoft.EntityFrameworkCore.SqlServer           -Version 3.1.8
```
###### Cadena de Conexión Base de datos 
```
"AllowedHosts": "*",
    "ConnectionStrings": {
        "DatabaseConnection": "Server=192.168.0.29;Database=BootcampDB;User ID=Eric; Password=Root_1234"  //El User ID y el Password se deben introducir los correspondientes a la base de datos donde se ejecuta el proyecto, la IP del Server también puede llegar a variar.
    }
```
#### 4. URIs endpoints.
```
Cuerpos
GET       /api/Cuerpos
GET       /api/Cuerpos/{id}

Token
POST /api/Token

Trabajadores
GET       /api/Trabajadores
GET       /api/Trabajadores/Cuerpo/{nombre}
GET       /api/Trabajadores/all
GET       /api/Trabajadores/pdf/{id}
GET       /api/Trabajadores/{id}

UserInfo
GET       /api/UserInfo
POST      /api/UserInfo
GET       /api/UserInfo/{id}
PUT       /api/UserInfo/{id}
DELETE    /api/UserInfo/{id}
```

#### 5. Screenshot imagen que indique cómo debe verse el proyecto.
##### Vista del Swagger de la API
En esta vista se pueden ver todos los endpoints disponibles en la API
![image](https://user-images.githubusercontent.com/11030691/110203814-79cf5580-7e70-11eb-9d73-3e92e4f45252.png)
