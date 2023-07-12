import { Injectable, Logger } from '@nestjs/common';
import { Post } from './post.model';
import { FileManager } from './fileManager';
import { randomUUID } from 'crypto';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);
  constructor(private fileManager: FileManager) {}

  public async findAll(): Promise<Post[]> {
    this.logger.log('Finding Post');
    return await this.fileManager.readFileRp();
  }
  public create(post: Post): void {
    post.id = randomUUID();
    this.logger.log('Save Post');
    this.fileManager.WriteFileRp(post);
  }
}
