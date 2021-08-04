using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GamersUnited.Models
{
    public class CreatePostDto
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        [MaxLength(100, ErrorMessage = "Title must be less than 50 characters")]
        public string Title { get; set; }

        public string Body { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Category is required")]
        public int CategoryId { get; set; }

    }
}
