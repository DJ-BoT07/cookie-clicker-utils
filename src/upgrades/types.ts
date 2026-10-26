import type { AllUpgrades } from './index.js';

export type UpgradeName = keyof typeof AllUpgrades;

export type UpgradeId = (typeof AllUpgrades)[UpgradeName];

type TieredUpgrade = {
    id: number;
    type: 'TieredUpgrade';
    qty: number;
    price: number;
};

type BasicUpgrade = {
    id: number;
};

export type Upgrade = TieredUpgrade | BasicUpgrade;
