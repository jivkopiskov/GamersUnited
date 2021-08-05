using GamersUnited.Data;
using GamersUnited.Data.Models;
using GamersUnited.Data.Models.Enums;
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
            var userId = GetUserId();
            var dbPost = new Post() { Body = newPost.Body, CategoryId = newPost.CategoryId, Title = newPost.Title, CreatedById = userId };
            await this.dbContext.AddAsync(dbPost);
            await this.dbContext.SaveChangesAsync();
            newPost.Id = dbPost.Id;
            return newPost;
        }

        [Authorize]
        [Route("votes")]
        [HttpPost]
        public async Task VotePost(VoteDto voteDto)
        {
            var userId = GetUserId();
            var vote = this.dbContext.Votes.FirstOrDefault(x => x.CreatedById == userId && x.PostId == voteDto.PostId);
            if (vote == null)
            {
                vote = new Vote { CreatedById = userId, PostId = voteDto.PostId, VoteType = voteDto.Vote };
                this.dbContext.Votes.Add(vote);
            }
            else
            {
                if (vote.VoteType == voteDto.Vote)
                {
                    vote.VoteType = VoteType.Neutral;
                }
                else
                {
                    vote.VoteType = voteDto.Vote;
                }
            }
            await this.dbContext.SaveChangesAsync();
        }

        [Route("category/{id}")]
        public async Task<IEnumerable<PostSummaryDto>> GetAllPOotsByCategory(int id)
        {
            var userId = GetUserId();
            var posts = await this.dbContext.Posts.Where(x => x.CategoryId == id).Select(x => new PostSummaryDto
            {
                Id = x.Id,
                Title = x.Title,
                Body = x.Body,
                CategoryId = x.CategoryId,
                CategoryName = x.Category.Name,
                CreatedBy = x.CreatedBy.Email,
                CommentsCount = x.Comments.Count(),
                VotesScore = x.Votes.Where(x => x.VoteType == VoteType.Upvote).Count() - x.Votes.Where(x => x.VoteType == VoteType.Downvote).Count(),
                Vote = x.Votes.FirstOrDefault(x => x.CreatedById == userId)
            })
                .ToListAsync();

            return posts;
        }

        private string GetUserId()
        {
            return this.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}
