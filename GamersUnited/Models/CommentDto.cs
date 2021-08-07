using GamersUnited.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamersUnited.Models
{
    public class CommentDto
    {
        public string Id { get; set; }

        public string PostId { get; set; }

        public string Text { get; set; }

        public string CreatedBy { get; set; }

        public DateTime CreatedAt { get; set; }

        public Vote Vote { get; set; }

        public int VotesScore { get; set; }
    }
}
