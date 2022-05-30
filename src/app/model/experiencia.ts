
export class ExperienciaModelo {
    id?: number;
    logo: string;
    empresa: string;
    empresa_nomb: string;
    puesto: string;
    jornada: string;
    tarea: string;
    anio_ingreso: string;
    anio_egreso: string;

    constructor(imagen: string, empresa: string, empresa_nomb: string, puesto: string, jornada: string, tarea: string, ingreso: string, egreso: string
    ) {
        this.logo = imagen;
        this.empresa = empresa;
        this.empresa_nomb = empresa_nomb;
        this.puesto = puesto;
        this.jornada = jornada;
        this.tarea = tarea;
        this.anio_ingreso = ingreso;
        this.anio_egreso = egreso
    }
}