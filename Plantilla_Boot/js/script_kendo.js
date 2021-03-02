function buena(){
        $(document).ready(function() {
            $("#resultados2").kendoGrid({
                dataSource: {
                    type: "json",
                    transport: {
                        read: "https://restcountries.eu/rest/v2/region/europe"
                    },
                    schema: {
                        model: {
                            fields: {
                                name: { type: "string" },
                                capital: { type: "string"},
                                region: { type: "string" }
                            }
                        }
                    },
                    pageSize: 20
                },
                height: 550,
                filterable: true,
                sortable: true,
                pageable: true,
                columns: [{
                        field:"name",
                        title: "País"
                    },
                    {
                        field: "capital",
                        title: "Capital"
                    }, {
                        field: "region",
                        title: "Zona"
                    }
                ]
            });
        });
}

function a(){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/region/europe",
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
            //'Authorization':'Bearer dnfkasjdflñasjfdasnlewjoidasjñldfjjadkl'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            var text;
            var orderData;
            alert("HOla");
            /*
            console.log(data.data[0].id);
            console.log(JSON.stringify(data));
            */
           
           data.forEach(element => {
               //document.getElementById("resultados").innerHTML=document.getElementById("resultados").textContent + element.name
              // text = text + "</tr>" + "<td>" + element.id + "</td>" + "<td>" + element.name + "</td>" + "<td>" + element.capital + "</td>" + "<td>" + element.region + "</td>";
              text = text + element;
            });
            
           //text=data[0].name;
           console.log(JSON.stringify(data));//retorna todo el paquete por consola
           console.log(JSON.stringify(data[0]));//retorna los valores del registro 0
           console.log(JSON.stringify(data[0].name));//retorna el nombre del registro 0
           document.getElementById("resultados2").innerHTML=JSON.stringify(data);//pinto los registros en el div resultados
           orderData=JSON.stringify(data);
        },
        error:function(error){
            console.log(error);
        }
    })
/*
    var gridDataSource = new kendo.data.DataSource({
        data: orderData,
        schema: {
          model: {
            fields: {
              País: { type: "string" },
              Capital: { type: "string" },
              Zona: { type: "string" }
            }
          }
        },
        pageSize: 15,
        sort: {
          field: "Pais",
          dir: "desc"
        }
      });

      $("#ordersGrid").kendoGrid({
        dataSource: gridDataSource,
        height: 600,
pageable: true,
sortable: true,
filterable: true,
columns: [{
field:"Pais",
title: "Pais",
width: 160
},{
field: "Capital",
title: "Capital",
width: 200
}, {
field: "Zona",
title: "Zona"
}]
      });
      */
}

function getPaisxRegion(){
    function getFreightColor(freight) {
        if (freight > 60) {
          return "#090";
        } else if (freight < 30) {
          return "#f00";
        } else {
          return "#00c";
        }
    }
    

      $(function() {
      
        $("#kendoVersion").text(kendo.version);

        var orderData = [
          { OrderID: 1, OrderDate: "2017-11-06T12:00:00", Freight: 12.34, ShipCity: "Antwerp", ShipCountry: "Belgium" },
          { OrderID: 2, OrderDate: "2019-03-02T12:00:00", Freight: 23.45, ShipCity: "Singapore", ShipCountry: "Singapore" },
          { OrderID: 3, OrderDate: "2019-06-26T12:00:00", Freight: 34.56, ShipCity: "Shanghai", ShipCountry: "China" },
          { OrderID: 4, OrderDate: "2017-09-20T12:00:00", Freight: 45.67, ShipCity: "Hamburg", ShipCountry: "Germany" },
          { OrderID: 5, OrderDate: "2017-12-12T12:00:00", Freight: 56.78, ShipCity: "Mumbai", ShipCountry: "India" },
          { OrderID: 6, OrderDate: "2018-02-08T12:00:00", Freight: 67.89, ShipCity: "Shanghai", ShipCountry: "China" },
          { OrderID: 7, OrderDate: "2018-05-05T12:00:00", Freight: 78.90, ShipCity: "Tokyo", ShipCountry: "Japan" },
          { OrderID: 8, OrderDate: "2019-08-03T12:00:00", Freight: 89.01, ShipCity: "Port Klang", ShipCountry: "Malaysia" },
          { OrderID: 9, OrderDate: "2018-10-29T12:00:00", Freight: 90.12, ShipCity: "Rotterdam", ShipCountry: "Netherlands" },
          { OrderID: 10, OrderDate: "2018-01-23T12:00:00", Freight: 10.32, ShipCity: "Vancouver", ShipCountry: "Canada" },
          { OrderID: 11, OrderDate: "2018-04-17T12:00:00", Freight: 21.43, ShipCity: "Colón", ShipCountry: "Panama" },
          { OrderID: 12, OrderDate: "2017-07-11T12:00:00", Freight: 32.54, ShipCity: "Manila", ShipCountry: "Philippines" },
          { OrderID: 13, OrderDate: "2017-10-24T12:00:00", Freight: 43.65, ShipCity: "Singapore", ShipCountry: "Singapore" },
          { OrderID: 14, OrderDate: "2018-03-11T12:00:00", Freight: 54.76, ShipCity: "Busan", ShipCountry: "South Korea" },
          { OrderID: 15, OrderDate: "2018-06-17T12:00:00", Freight: 65.87, ShipCity: "Shenzhen", ShipCountry: "China" },
          { OrderID: 16, OrderDate: "2018-10-13T12:00:00", Freight: 76.98, ShipCity: "Hong Kong", ShipCountry: "China" },
          { OrderID: 17, OrderDate: "2019-04-19T12:00:00", Freight: 87.09, ShipCity: "Dubai", ShipCountry: "UAE" },
          { OrderID: 18, OrderDate: "2019-07-25T12:00:00", Freight: 98.21, ShipCity: "Felixstowe", ShipCountry: "UK" },
          { OrderID: 19, OrderDate: "2017-09-22T12:00:00", Freight: 13.24, ShipCity: "Los Angeles", ShipCountry: "USA" },
          { OrderID: 20, OrderDate: "2018-12-09T12:00:00", Freight: 35.46, ShipCity: "New York", ShipCountry: "USA" },
          { OrderID: 21, OrderDate: "2018-02-04T12:00:00", Freight: 57.68, ShipCity: "Guangzhou", ShipCountry: "China" },
          { OrderID: 22, OrderDate: "2019-05-16T12:00:00", Freight: 9.87, ShipCity: "Long Beach", ShipCountry: "USA" },
          { OrderID: 23, OrderDate: "2019-08-18T12:00:00", Freight: 24.13, ShipCity: "Singapore", ShipCountry: "Singapore" }
        ];

        var gridDataSource = new kendo.data.DataSource({
          data: orderData,
          schema: {
            model: {
              fields: {
                OrderID: { type: "number" },
                Freight: { type: "number" },
                OrderDate: { type: "date" },
                ShipCountry: { type: "string" },
                ShipCity: { type: "string" }
              }
            }
          },
          pageSize: 15,
          sort: {
            field: "Freight",
            dir: "desc"
          }
        });

        $("#ordersGrid").kendoGrid({
          dataSource: gridDataSource,
          height: 600,
pageable: true,
sortable: true,
filterable: true,
columns: [{
field:"OrderID",
title: "Order ID",
width: 160
}, {
field: "Freight",
//width: 160,
template: "<span style='color:#= getFreightColor(Freight) #'>#= Freight #</span>"
}, {
field: "OrderDate",
title: "Order Date",
width: 200,
format: "{0:dd-M-yyyy}"
}, {
field: "ShipCountry",
title: "Ship Country"
}, {
field: "ShipCity",
title: "Ship City"
}]
        });

        

      });

}