using ILC.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace ILC.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    
    public DbSet<Beneficiario> Beneficiario { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Beneficiario>(entity =>
        {
            entity.ToTable("beneficiario_ilc");
            
            entity.Property(e => e.Id)
                .HasColumnName("id")
                .ValueGeneratedOnAdd();
            
            entity.Property(e => e.Nome)
                .HasColumnName("nome")
                .IsRequired()
                .HasMaxLength(100);
            
            entity.Property(e => e.DataNascimento)
                .HasColumnName("data_nascimento")
                .IsRequired();
            
            entity.Property(e => e.Telefone)
                .HasColumnName("telefone")
                .HasMaxLength(15);
            
            entity.Property(e => e.PessoasNaCasa)
                .HasColumnName("pessoas_na_casa")
                .IsRequired();
            
            entity.Property(e => e.TipoEscola)
                .HasColumnName("tipo_escola")
                .IsRequired()
                .HasConversion(
                    v => v.ToString(),
                    v => v)
                .HasMaxLength(50);
        });

    }
}