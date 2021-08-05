using GamersUnited.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamersUnited.Models
{
    public class PostSummaryDto : CreatePostDto
    {
        public string CreatedBy { get; set; }

        public int CommentsCount { get; set; }

        public int VotesScore { get; set; }

        public Vote Vote { get; set; }

        public string CategoryName { get; set; }
    }
}
