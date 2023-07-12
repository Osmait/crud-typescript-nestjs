import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { FileManager } from './fileManager';
import { Post } from './post.model';

describe('PostService', () => {
  let fileManager: FileManager;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService, FileManager],
    }).compile();

    service = module.get<PostService>(PostService);
    fileManager = module.get<FileManager>(FileManager);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll', async () => {
    const expectArray = [new Post('java', 'Pueba', '1212121')];
    const result = Promise.resolve(expectArray);

    jest.spyOn(fileManager, 'readFileRp').mockImplementation(() => result);
    await expect(service.findAll()).resolves.toEqual(expectArray);
  });
});
