using System;
using System.Collections.Generic;

namespace ProyectoU3Eventos.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string? NombreUsuario { get; set; }

    public string? EmailUsuario { get; set; }

    public string? Telefono { get; set; }

    public virtual ICollection<Reservacion> Reservacions { get; } = new List<Reservacion>();
}
