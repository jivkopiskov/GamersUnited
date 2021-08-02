using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GamersUnited.Data.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20, ErrorMessage = "Category must be less than 20 characters!")]
        public string Name { get; set; }

        public ICollection<Post> Posts { get; set; } = new HashSet<Post>();
    }
}