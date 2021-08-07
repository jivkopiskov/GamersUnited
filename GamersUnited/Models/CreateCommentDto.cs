using System.ComponentModel.DataAnnotations;

namespace GamersUnited.Models
{
    public class CreateCommentDto
    {
        [Required]
        [MinLength(1)]
        public string Comment { get; set; }
    }
}