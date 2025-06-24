using System.ComponentModel.DataAnnotations.Schema;

namespace ILC.Api.Models;

public class Beneficiario
{
    [Column("id")]
    public int Id { get; set; }
    
    [Column("nome")]
    public string Nome { get; set; } = string.Empty;
    
    [Column("data_nascimento")]
    public DateTime DataNascimento { get; set; }
    
    [Column("telefone")]
    public string? Telefone { get; set; }
    
    [Column("pessoas_na_casa")]
    public int PessoasNaCasa { get; set; }
    
    [Column("tipo_escola")]
    public string TipoEscola { get; set; } = "Pública";
}