using GamersUnited.Data.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamersUnited.Models
{
    public class AppUser : IdentityUser
    {
        public ICollection<Post> Posts { get; set; } = new HashSet<Post>();

        public ICollection<Comment> Comments { get; set; } = new HashSet<Comment>();

        public ICollection<Vote> Votes { get; set; } = new HashSet<Vote>();
    }
}
