const Tarea = require("./tarea");

require('colors');

class Tareas {
    _listado = {};

    //getter
    get listadoArr() {
        const listado = [];

        //Extrae de _listado el id -> despues recorre ese listado con el foreach(id)
        //y lo guarda en una tarea
        //para despues insertarla en el arreglo listado
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });

    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado =  (completadoEn) 
                ? 'Completada'.green
                : 'Pendiente'.red;

            console.log(`${idx}. ${desc} :: ${estado}`);
        })
    }
}




module.exports = Tareas;