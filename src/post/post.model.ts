export class Post {
  id?: string;
  title: string;
  content: string;

  constructor(title: string, content: string, id: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
