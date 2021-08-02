using GamersUnited.Data.Models.Enums;
using GamersUnited.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace GamersUnited.Data.Models
{
    public class Vote
    {
        [Required]
        public string Id { get; set; } = new Guid().ToString();

        public AppUser CreatedBy { get; set; }

        [Required]
        public string CreatedById { get; set; }

        public Post Post { get; set; }

        [Required]
        public string PostId { get; set; }

        public string CommentId { get; set; }

        public Comment Comment { get; set; }

        public VoteType VoteType { get; set; }
    }
}

