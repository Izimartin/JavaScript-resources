import EnemyDecorator from "./enemyDecorator";

export class ArmourDecorator extends EnemyDecorator {

    takeDamage(): number {
        return this.enemy.takeDamage() / 1.5;
    }
}