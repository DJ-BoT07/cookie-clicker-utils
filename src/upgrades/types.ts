import type { AllUpgrades } from './index.js';

export type UpgradeName = keyof typeof AllUpgrades;

export type UpgradeId = (typeof AllUpgrades)[UpgradeName];
