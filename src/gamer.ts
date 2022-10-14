

class Gamer {

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

  public winPercentage(gamer: Gamer) {
    //Logical Bussiness no cohesion
    return Number(gamer.getWin() / (gamer.getWin() + gamer.getLose()));
  }
  public lossPercentage(gamer: Gamer) {
    //Logical Bussiness no cohesion
    return 0.0;
  }

  public saveGamer(gamer: Gamer){
    //Access database no cohesion
  }

  public deleteGamer(gamer: Gamer){
    //Access database no cohesion
  }

  public showGamerHD(gamer: Gamer){
    //Print in screen no cohesion
    //Cambios independientes entre showGamerHD - showGamer con saveGamer - deleteGamer
  }

  public showGamer(gamer: Gamer){
    //Print in screen no cohesion

  }
}