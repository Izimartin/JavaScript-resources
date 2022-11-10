import baseEnemy from "./baseEnemy";
import DifficultEnemy from "./difficultEnemy";
import { HelmetDecorator } from "./helmetDecorator";
import { ArmourDecorator } from "./armourDecorator";

// let enemy = new baseEnemy();
// let enemyWithHelmet = new HelmetDecorator(enemy);
// let enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);

let enemy = new DifficultEnemy();
let enemyWithHelmet = new HelmetDecorator(enemy);
let enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);

let computeDamaged = enemyWithHelmetAndArmour.takeDamage();
console.log(computeDamaged);