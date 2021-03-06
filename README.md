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
BackEnd
Install-Package Microsoft.VisualStudio.Web.CodeGeneration.Design  -Version 3.1.5
Install-Package Microsoft.EntityFrameworkCore.Tools               -Version 3.1.12
Install-Package Microsoft.EntityFrameworkCore.SqlServer           -Version 3.1.12
Install-Package Microsoft.AspNetCore.Authentication.JwtBearer     -Version 3.1.8
Install-Package Microsoft.EntityFrameworkCore.Sqlite              -Version 3.1.12
Install-Package Swashbuckle.AspNetCore                            -Version 6.0.7
Install-Package System.IdentityModel.Tokens.Jwt                   -Version 5.6.0

FrontEnd
Install-Package bootstrap                                         -Version 4.6.0
Install-Package Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore  -Version 3.1.10
Install-Package Microsoft.AspNetCore.Identity.EntityFrameworkCore -Version 3.1.12
Install-Package Microsoft.AspNetCore.Identity.UI                  -Version 3.1.12
Install-Package Microsoft.EntityFramework.SqlServer               -Version 3.1.12
Install-Package Microsoft.EntityFrameworkCore.Tools               -Version 3.1.12
Install-Package Microsoft.VisualStudio.Web.CodeGeneration.Design  -Version 3.1.5


```
###### Cadena de Conexión Base de datos 
```
"AllowedHosts": "*",
    "ConnectionStrings": {
        "DatabaseConnection": "Server=192.168.0.29;Database=BootcampDB;User ID=Eric; Password=Root_1234"  
        //El User ID y el Password se deben introducir los correspondientes a la base de datos donde se ejecuta el proyecto, la IP del Server también puede llegar a variar.
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
En esta vista se puede ver todos los endpoints disponibles en la API.

![image](https://user-images.githubusercontent.com/11030691/110203814-79cf5580-7e70-11eb-9d73-3e92e4f45252.png)

##### Vista del login de la aplicación
En esta vista se puede ver como se logearian los usuarios que tengan cuenta en la aplicación.

![image](https://user-images.githubusercontent.com/11030691/110204630-5c03ef80-7e74-11eb-9fe6-b0b27bd707a9.png)

##### Vista del registro de la aplicación
En esta vista se puede ver como se registraria un usuario que no tiene cuenta en la aplicación, para registrarse se necesita que la contraseña contenga una mayuscula, una minúscula, un carácter especial, un número y tiene que tener como mínimo 8 carácteres.

![image](https://user-images.githubusercontent.com/11030691/110204689-a8e7c600-7e74-11eb-870f-a304d4224e82.png)

##### Vista del interior de la aplicación una vez logeado el usuario
En esta vista se puede ver la tabla de trabajadores, en esta tabla se muestran los campos de ID, Foto, Trabajador/a, TP, Tipo Empleado/a, Grupo, Cuerpo y Categoria. A partir de esta vista se puede hacer que se muestren los trabajadores según el cuerpo donde hay de 7 tipos: Administrativos, Bomberos, Educación, Justicia, Personal militar, Policias y Seguridad municipal.

![image](https://user-images.githubusercontent.com/11030691/110205877-e2bbcb00-7e7a-11eb-8f28-a2f03b60dbae.png)



