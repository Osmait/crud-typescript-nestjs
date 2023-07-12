import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as postModel } from './post.model';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  @HttpCode(200)
  public async findAll(): Promise<postModel[]> {
    return await this.postService.findAll();
  }

  @Post()
  @HttpCode(201)
  public create(@Body() post: postModel): void {
    return this.postService.create(post);
  }
}
