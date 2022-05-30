
export class ProyectosModelo {
    id?: number;
    logo: string;
    titulo: string;
    tecnologias: string;
    descripcion: string;
    year: string;
    link: string;

    constructor(imagen: string, titulo: string, tecnologias: string, descripcion: string, year: string, link: string
    ) {
        this.logo = imagen;
        this.titulo = titulo;
        this.tecnologias = tecnologias;
        this.descripcion = descripcion;
        this.year = year;
        this.link = link;
    }
}