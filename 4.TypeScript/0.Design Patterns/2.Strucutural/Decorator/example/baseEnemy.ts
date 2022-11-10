import { Enemy } from "./Enemy";

export default class baseEnemy implements Enemy {
    takeDamage(): number {
        return 10;
    }
}