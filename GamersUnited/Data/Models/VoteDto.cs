using GamersUnited.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamersUnited.Data.Models
{
    public class VoteDto
    {
        public VoteType Vote { get; set; }

        public string PostId { get; set; }

        public string CommentId { get; set; }
    }
}
