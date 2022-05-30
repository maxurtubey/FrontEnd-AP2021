export class EstudioModelo {
    id?: number;
    logo: string;
    centro: string;
    centro_nombre: string;
    titulo: string;
    anio_ingreso: string;
    anio_egreso: string;

    constructor(imagen: string, instituto: string, nombre: string, disciplina: string, ingreso: string, egreso: string) {
        this.logo = imagen;
        this.centro = instituto;
        this.centro_nombre = nombre;
        this.titulo = disciplina;
        this.anio_ingreso = ingreso;
        this.anio_egreso = egreso
    }
}