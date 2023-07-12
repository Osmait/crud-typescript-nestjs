import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { FileManager } from './fileManager';

@Module({
  controllers: [PostController],
  providers: [PostService, FileManager],
})
export class PostModule {}
