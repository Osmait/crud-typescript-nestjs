import * as fs from 'node:fs/promises';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as postModel } from './post.model';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const destinationPath = `./uploads/${file.originalname}`;
    await fs.writeFile(destinationPath, file.buffer);
  }
  @Get('filter')
  filter(@Query('user') user: string, @Query('edad') edad: number) {
    console.log(user, edad);
  }
}
