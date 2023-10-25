using System;
using System.Collections.Generic;

namespace ProyectoU3Eventos.Models;

public partial class Reservacion
{
    public int IdReservacion { get; set; }

    public int? UsuarioId { get; set; }

    public int? EventoId { get; set; }

    public int? NumAsistentes { get; set; }

    public string? Estado { get; set; }

    public string? FechaCreacion { get; set; }

    public int? Pago { get; set; }

    public virtual Evento? Evento { get; set; }

    public virtual Usuario? Usuario { get; set; }
}
