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

        private string GetUserId()
        {
            return this.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

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
        [Route("comments/{postId}")]

        public async Task<IEnumerable<CommentDto>> GetComments(string postId)
        {

            var userId = GetUserId();
            var comments = await this.dbContext.Comments.Where(x => x.PostId == postId).OrderBy(x => x.CreatedAt).Select(x => new CommentDto
            {
                Id = x.Id,
                PostId = x.PostId,
                Text = x.Text,
                CreatedAt = x.CreatedAt,
                CreatedBy = x.CreatedBy.Email,
                Vote = x.Votes.FirstOrDefault(x => x.CreatedById == userId),
                VotesScore = x.Votes.Where(x => x.VoteType == VoteType.Upvote).Count() - x.Votes.Where(x => x.VoteType == VoteType.Downvote).Count(),
            })
                .ToListAsync();

            return comments;

        }

        [Authorize]
        [HttpPost]
        [Route("comments/{postId}")]
        public async Task<CommentDto> AddComment(string postId, CreateCommentDto comment)
        {
            var userId = GetUserId();
            var dbComment = new Comment() { PostId = postId, Text = comment.Comment, CreatedById = userId };
            await this.dbContext.Comments.AddAsync(dbComment);
            await this.dbContext.SaveChangesAsync();
            return new CommentDto() { Id = dbComment.Id, PostId = postId };
        }

        [Authorize]
        [Route("votes")]
        [HttpPost]
        public async Task VotePost(VoteDto voteDto)
        {
            var userId = GetUserId();
            var vote = this.dbContext.Votes.FirstOrDefault(x => x.CreatedById == userId && x.PostId == voteDto.PostId && x.CommentId == voteDto.CommentId);
            if (vote == null)
            {
                vote = new Vote { CreatedById = userId, PostId = voteDto.PostId, VoteType = voteDto.Vote, CommentId = voteDto.CommentId };
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

        [Route("{id}")]
        public async Task<PostSummaryDto> GetPostSummary(string id)
        {
            var userId = GetUserId();
            var post = await this.dbContext.Posts.Where(x => x.Id == id).Select(x => new PostSummaryDto
            {
                Id = x.Id,
                Title = x.Title,
                Body = x.Body,
                CategoryId = x.CategoryId,
                CategoryName = x.Category.Name,
                CreatedBy = x.CreatedBy.Email,
                CommentsCount = x.Comments.Count(),
                VotesScore = x.Votes.Where(x => x.VoteType == VoteType.Upvote && x.CommentId == null).Count() - x.Votes.Where(x => x.VoteType == VoteType.Downvote && x.CommentId == null).Count(),
                Vote = x.Votes.FirstOrDefault(x => x.CreatedById == userId)
            }).FirstOrDefaultAsync();

            return post;
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
                VotesScore = x.Votes.Where(x => x.VoteType == VoteType.Upvote && x.CommentId == null).Count() - x.Votes.Where(x => x.VoteType == VoteType.Downvote && x.CommentId == null).Count(),
                Vote = x.Votes.FirstOrDefault(x => x.CreatedById == userId)
            })
                .ToListAsync();

            return posts;
        }
    }
}
