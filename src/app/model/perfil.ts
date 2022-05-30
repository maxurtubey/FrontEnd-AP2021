
export class PerfilModelo {
    id?: number;
    imgfondo: string;
    imgperfil: string;
    nombre: string;
    ciudad: string;
    provincia: string;

    constructor(fondo: string, perfil: string, name: string, city: string, prov: string) {
        this.imgfondo = fondo;
        this.imgperfil = perfil;
        this.nombre = name;
        this.ciudad = city;
        this.provincia = prov;
    }
}