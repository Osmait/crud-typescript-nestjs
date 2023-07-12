import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './post.model';
import { ModuleRef } from '@nestjs/core';
import { FileManager } from './fileManager';

describe('PostController', () => {
  let controller: PostController;
  let service: PostService;

  beforeEach(async () => {
    const ModuleRef: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService, FileManager],
    }).compile();

    controller = ModuleRef.get<PostController>(PostController);
    service = ModuleRef.get<PostService>(PostService);
  });

  it('should be defined', async () => {
    const expectArray = [new Post('java', 'Pueba', '1212121')];
    const result = Promise.resolve(expectArray);
    jest.spyOn(service, 'findAll').mockImplementation(() => result);

    await expect(controller.findAll()).resolves.toEqual(expectArray);
  });
});
