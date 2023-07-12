import * as fs from 'node:fs/promises';
import { Post } from './post.model';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FileManager {
  private readonly logger = new Logger(FileManager.name);

  public async readFileRp(): Promise<Post[]> {
    this.logger.log('Reading file...');
    const response = await fs.readFile('./src/db.json', 'utf8');
    this.logger.log('parsing file to JSON..');
    const post: Post[] = JSON.parse(response);
    this.logger.log('Returning Posts...');
    return post;
  }

  public async WriteFileRp(post: Post): Promise<void> {
    const postList = await this.readFileRp();
    this.logger.log('adding post at list of Post ');
    postList.push(post);
    this.logger.log('saving post...');
    fs.writeFile('./src/db.json', JSON.stringify(postList));
  }
}
