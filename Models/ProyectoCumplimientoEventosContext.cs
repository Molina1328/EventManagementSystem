using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ProyectoU3Eventos.Models;

public partial class ProyectoCumplimientoEventosContext : DbContext
{
    public ProyectoCumplimientoEventosContext()
    {
    }

    public ProyectoCumplimientoEventosContext(DbContextOptions<ProyectoCumplimientoEventosContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Evento> Eventos { get; set; }

    public virtual DbSet<Reservacion> Reservacions { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=JOELMOLINA\\SQLEXPRESS01;Initial Catalog=ProyectoCumplimientoEventos;User ID=BDD_MS_Usuarios;Password=1234;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Evento>(entity =>
        {
            entity.HasKey(e => e.IdEvento);

            entity.ToTable("Evento");

            entity.Property(e => e.IdEvento).HasColumnName("idEvento");
            entity.Property(e => e.CapacidadEvento).HasColumnName("capacidadEvento");
            entity.Property(e => e.FechaEvento)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("fechaEvento");
            entity.Property(e => e.LugarEvento)
                .IsUnicode(false)
                .HasColumnName("lugarEvento");
            entity.Property(e => e.NombreEvento)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombreEvento");
        });

        modelBuilder.Entity<Reservacion>(entity =>
        {
            entity.HasKey(e => e.IdReservacion);

            entity.ToTable("Reservacion");

            entity.Property(e => e.IdReservacion).HasColumnName("idReservacion");
            entity.Property(e => e.Estado)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("estado");
            entity.Property(e => e.EventoId).HasColumnName("eventoID");
            entity.Property(e => e.FechaCreacion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("fechaCreacion");
            entity.Property(e => e.NumAsistentes).HasColumnName("numAsistentes");
            entity.Property(e => e.Pago).HasColumnName("pago");
            entity.Property(e => e.UsuarioId).HasColumnName("usuarioID");

            entity.HasOne(d => d.Evento).WithMany(p => p.Reservacions)
                .HasForeignKey(d => d.EventoId)
                .HasConstraintName("FK_Reservacion_Evento");

            entity.HasOne(d => d.Usuario).WithMany(p => p.Reservacions)
                .HasForeignKey(d => d.UsuarioId)
                .HasConstraintName("FK_Reservacion_Usuario");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario);

            entity.ToTable("Usuario");

            entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");
            entity.Property(e => e.EmailUsuario)
                .IsUnicode(false)
                .HasColumnName("emailUsuario");
            entity.Property(e => e.NombreUsuario)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombreUsuario");
            entity.Property(e => e.Telefono)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("telefono");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
