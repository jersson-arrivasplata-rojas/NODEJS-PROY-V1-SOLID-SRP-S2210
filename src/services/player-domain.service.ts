

class PlayerDomainService {

    public winPercentage(player: Player) {
        return Number(player.getWin() / (player.getWin() + player.getLose()));
    }
    public lossPercentage(player: Player) {
        return 0.0;
    }
}