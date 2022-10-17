import EnemyDecorator from "./enemyDecorator";

export class HelmetDecorator extends EnemyDecorator {

    takeDamage(): number {
        return this.enemy.takeDamage() / 2;
    }
}