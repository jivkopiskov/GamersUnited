using GamersUnited.Data.Models;
using GamersUnited.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamersUnited.Data
{
    public class AppDbContext : ApiAuthorizationDbContext<AppUser>
    {
        public AppDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Post> Posts { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<Vote> Votes { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}
