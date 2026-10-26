import type { AllUpgrades } from './index.js';

export type UpgradeName = keyof typeof AllUpgrades;

export type UpgradeId = (typeof AllUpgrades)[UpgradeName];

type TieredUpgrade = {
    id: number;
    type: 'TieredUpgrade';
    qty: number;
    price: number;
};

export type GrandmaVariantUpgrade = {
    id: number;
    type: 'GrandmaVariant';
    price: number;
    relatedBuilding: number;
};

type BasicUpgrade = {
    id: number;
    type: 'pingle';
};

export type Upgrade = TieredUpgrade | BasicUpgrade;
