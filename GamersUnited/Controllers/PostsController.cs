using GamersUnited.Data;
using GamersUnited.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamersUnited.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public PostsController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [Route("categories")]
        public IEnumerable<Category> GetAllCatogories() 
        {
            return this.dbContext.Categories.ToList();
        }
}
}
