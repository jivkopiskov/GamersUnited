using GamersUnited.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GamersUnited.Data.Models
{
    public class Post
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        [MaxLength(100, ErrorMessage = "Title must be less than 100 characters")]
        public string Title { get; set; }

        public string Body { get; set; }

        public AppUser CreatedBy { get; set; }
        [Required]
        public string CreatedById { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public ICollection<Vote> Votes { get; set; } = new HashSet<Vote>();

        public Category Category { get; set; }

        public int CategoryId { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
