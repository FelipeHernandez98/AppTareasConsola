require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
    pausa,
    leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareaDB = leerDB();

    if (tareaDB) {//Verifica si hay tareas en base de datos y las carga al listado
        tareas.cargarTareasFromArray(tareaDB);
    }

    do {
        opt = await inquirerMenu();
        console.log({ opt })

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc)
                break;

            case '2':
                tareas.listadoCompleto();
                break;
        }

        guardarDB(tareas.listadoArr);

        if (opt !== '0') await pausa();

    } while (opt != '0');

}

main();