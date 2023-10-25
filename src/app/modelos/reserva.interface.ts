export interface reservaIn{
    idReservacion: number;
    usuarioId: number;
    eventoId: number;
    numAsistentes: number;
    estado: string;
    fechaCreacion: string;
    pago: number;
}