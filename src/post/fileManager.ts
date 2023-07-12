import * as fs from 'node:fs/promises';
import { Post } from './post.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileManager {
  public async readFileRp(): Promise<Post[]> {
    const response = await fs.readFile('./src/db.json', 'utf8');
    const post: Post[] = JSON.parse(response);
    return post;
  }

  public async WriteFileRp(post: Post): Promise<void> {
    const postList = await this.readFileRp();
    postList.push(post);

    fs.writeFile('./src/db.json', JSON.stringify(postList));
  }
}
