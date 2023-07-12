export class Post {
  private _id: string;
  private _title: string;
  private _description: string;

  constructor(title: string, description: string, id: string) {
    this._id = id;
    this._title = title;
    this._description = description;
  }

  public set id(valor: string) {
    this._id = valor;
  }
  public get id(): string {
    return this._id;
  }
}
