using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace GamersUnited.Data.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20, ErrorMessage = "Category must be less than 20 characters!")]
        public string Name { get; set; }

        [Required]
        [MaxLength(50, ErrorMessage = "Description must be less than 50 characters!")]
        public string Description { get; set; }

        [JsonIgnore]
        public ICollection<Post> Posts { get; set; } = new HashSet<Post>();
    }
}