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
    }
}
