import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { FileManager } from './fileManager';
import { AuthGuard } from 'src/auth/auth/auth.guard';

@Module({
  controllers: [PostController],
  providers: [PostService, FileManager],
})
export class PostModule {}
