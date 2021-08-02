using GamersUnited.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GamersUnited.Data.Models
{
    public class Comment
    {
        [Required]
        public string Id { get; set; } = new Guid().ToString();

        [Required]
        public string PostId { get; set; }

        public Post Post { get; set; }

        [Required]
        public string Text { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public AppUser CreatedBy { get; set; }

        [Required]
        public string CreatedById { get; set; }

        public string ParentId { get; set; }

        public Comment ParentComment { get; set; }

        public ICollection<Vote> Votes { get; set; } = new HashSet<Vote>();
    }
}