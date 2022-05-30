
export class HabilidadesModelo {
    id?: number;
    logo: string;
    descripcion: string;
    duracion: string;
    certificado: string;
    porcentaje: string;

    constructor(imagen: string, nombre: string, tiempo: string, certificado: string, porcentaje: string
    ) {
        this.logo = imagen;
        this.descripcion = nombre;
        this.duracion = tiempo;
        this.certificado = certificado;
        this.porcentaje = porcentaje;
    }
}