using GamersUnited.Data;
using GamersUnited.Data.Models;
using GamersUnited.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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

        [Authorize]
        [HttpPost]
        public async Task<CreatePostDto> CreatePost(CreatePostDto newPost)
        {
            var id = this.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var dbPost = new Post() { Body = newPost.Body, CategoryId = newPost.CategoryId, Title = newPost.Title, CreatedById = id };
            await this.dbContext.AddAsync(dbPost);
            await this.dbContext.SaveChangesAsync();
            newPost.Id = dbPost.Id;
            return newPost;
        }

        [Route("category/{id}")]
        public async Task<IEnumerable<PostSummaryDto>> GetAllPOotsByCategory(int id)
        {
            var posts =  await this.dbContext.Posts.Where(x => x.CategoryId == id).Select(x => new PostSummaryDto
            {
                Title = x.Title,
                Body = x.Body,
                CategoryId = x.CategoryId,
                CreatedBy = x.CreatedBy.Email,
                CommentsCount = x.Comments.Count()
            })
                .ToListAsync();

            return posts;
        }
    }
}
