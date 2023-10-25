using System;
using System.Collections.Generic;

namespace ProyectoU3Eventos.Models;

public partial class Evento
{
    public int IdEvento { get; set; }

    public string? NombreEvento { get; set; }

    public string? FechaEvento { get; set; }

    public string? LugarEvento { get; set; }

    public int? CapacidadEvento { get; set; }

    public virtual ICollection<Reservacion> Reservacions { get; } = new List<Reservacion>();
}
