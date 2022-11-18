let data = [
    {
        "Materia": "Arquitectura de Software",
        "Periodo": 202210,
        "Nota Final": 4.2
    },
    {
        "Materia": "Emprendimiento de Base Tecnologica",
        "Periodo": 202210,
        "Nota Final": 4.9
    },
    {
        "Materia": "Pruebas y Calidad de Software",
        "Periodo": 202210,
        "Nota Final": 4.4
    },
    {
        "Materia": "Sistemas Distribuidos",
        "Periodo": 202210,
        "Nota Final": 5.0
    },
    {
        "Materia": "Investigacion de Operaciones",
        "Periodo": 202210,
        "Nota Final": 3.8
    },
    {
        "Materia": "Arquitectura del Computador",
        "Periodo": 202198,
        "Nota Final": 4.3
    },
    {
        "Materia": "Sistemas Operacionales",
        "Periodo": 202198,
        "Nota Final": 4.7
    },
    {
        "Materia": "Analisis y Verificacion de Algoritmos",
        "Periodo": 202160,
        "Nota Final": 5.0
    },
    {
        "Materia": "Opcion de Grado [INS]",
        "Periodo": 202160,
        "Nota Final": 4.6
    },
    {
        "Materia": "Opcion de Grado [INS]",
        "Periodo": 202160,
        "Nota Final": 3.9
    },
    {
        "Materia": "Probabilidad",
        "Periodo": 202160,
        "Nota Final": 4.6
    },
    {
        "Materia": "Metodos Numericos",
        "Periodo": 202160,
        "Nota Final": 3.8
    },
    {
        "Materia": "Gerencia de Proyectos Informaticos",
        "Periodo": 202110,
        "Nota Final": 4.9
    },
    {
        "Materia": "Calculo 2",
        "Periodo": 202110,
        "Nota Final": 4.5
    },
    {
        "Materia": "enfasis Profesional 1 [INS]",
        "Periodo": 202110,
        "Nota Final": 3.5
    },
    {
        "Materia": "enfasis Profesional 2 [INS]",
        "Periodo": 202110,
        "Nota Final": 5.0
    },
    {
        "Materia": "Fisica 1",
        "Periodo": 202110,
        "Nota Final": 4.2
    },
    {
        "Materia": "Bases de Datos",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Constitucion e Instruccion Civica",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Cultura Ambiental",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Desarrollo de Software en Equipo - TSP",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Electiva 1",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Electiva 2",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Electiva 3",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Elementos de Teoria de la Computacion",
        "Periodo": 202060,
        "Nota Final": 4.6
    },
    {
        "Materia": "enfasis Profesional 3 [INS]",
        "Periodo": 202060,
        "Nota Final": 5.0
    },
    {
        "Materia": "Estructuras de Datos",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Fundamentos de Gestion Informatica",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Persistencia y Datos Transaccionales",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Proceso de Software Personal - PSP",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Sistemas Digitales y Ensambladores",
        "Periodo": 202060,
        "Nota Final": 4
    },
    {
        "Materia": "Telecomunicaciones",
        "Periodo": 202060,
        "Nota Final": 4.6
    },
    {
        "Materia": "Herramientas de Logica Computacional",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Ingenieria de Software 1",
        "Periodo": 202060,
        "Nota Final": 3.7
    },
    {
        "Materia": "Ingles General 1",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Ingles General 2",
        "Periodo": 202060,
        "Nota Final": "APROBO"
    },
    {
        "Materia": "Calculo 1",
        "Periodo": 201560,
        "Nota Final": 4.4
    },
    {
        "Materia": "etica Empresarial",
        "Periodo": 201560,
        "Nota Final": 3.5
    },
    {
        "Materia": "Paradigmas de Programacion",
        "Periodo": 201560,
        "Nota Final": 3.2
    },
    {
        "Materia": "Programacion de Computadores",
        "Periodo": 201560,
        "Nota Final": 3.5
    },
    {
        "Materia": "algebra Lineal",
        "Periodo": 201560,
        "Nota Final": 3.6
    },
    {
        "Materia": "Matematicas",
        "Periodo": 201510,
        "Nota Final": 3.7
    },
    {
        "Materia": "Pensamiento Algoritmico",
        "Periodo": 201510,
        "Nota Final": 3.5
    },
    {
        "Materia": "Tecnicas para el Aprendizaje Autonomo",
        "Periodo": 201510,
        "Nota Final": 3.9
    },
    {
        "Materia": "Herramientas para la Productividad",
        "Periodo": 201510,
        "Nota Final": 4.7
    }
]

var selectColums = Object.keys(data[0]);

var objeto = {};
columnsSelects = [];
selectColums.forEach(function (d) {
    columnsSelects.push(d)
    objeto[d] = true
});

var array = []
data.forEach(function (d) {
    obj = {}
    selectColums.forEach(function (j, i) {
        if (objeto[j]) {
            obj[j] = d[selectColums[i]];
        }
    })
    array.push(obj)
})

var arrColumnas = [];
selectColums.forEach(function (d) {
    arrColumnas.push({
        title: d,
        data: d,
        className: "dt-body-center"
    })
});

$("#myTable")
    .empty()
    .append('<table id="table" class="table table-hover"></table>')
    .html();

var table = $('#table').DataTable({
    //"lengthMenu": [5],
    dom: 'Bfrtip',
    buttons: [
        {
            text: 'Exportar tabla Excel',
            className: 'btn btn-outline-success',
            action: function () {
                exportTableToExcel('table', 'Notas');
            }
        }
    ],
    responsive: true,
    data: array,
    columns: arrColumnas,
});

table.buttons().container()
    .appendTo('#example_wrapper .col-md-6:eq(0)');

function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Especifique el nombre del archivo
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Crear elemento de enlace de descarga
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Crear un enlace al archivo
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Configuración del nombre del archivo
        downloadLink.download = filename;

        // Activación de la función
        downloadLink.click();
    }
}