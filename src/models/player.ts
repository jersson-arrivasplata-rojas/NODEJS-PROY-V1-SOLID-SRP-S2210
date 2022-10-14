

class Player {

  private id: number;
  private name: string;
  private win: number;
  private lose: number;
  private date: string;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getWin(): number {
    return this.win;
  }

  public setWin(win: number): void {
    this.win = win;
  }

  public getLose(): number {
    return this.lose;
  }

  public setLose(lose: number): void {
    this.lose = lose;
  }

  public getDate(): string {
    return this.date;
  }

  public setDate(date: string): void {
    this.date = date;
  }

}