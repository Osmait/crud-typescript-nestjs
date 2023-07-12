import { Injectable } from '@nestjs/common';
import { Post } from './post.model';
import { FileManager } from './fileManager';
import { randomUUID } from 'crypto';

@Injectable()
export class PostService {
  constructor(private fileManager: FileManager) {}

  public async findAll(): Promise<Post[]> {
    return await this.fileManager.readFileRp();
  }
  public create(post: Post): void {
    post.id = randomUUID();
    this.fileManager.WriteFileRp(post);
  }
}
