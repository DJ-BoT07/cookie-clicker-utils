import { B } from '../../constants.js';
import type { ParsedSavefile } from '../../types.js';
import { hasUpgrade } from '../../upgrade.js';
import { AllUpgrades } from '../index.js';
import type { UpgradeName } from '../types.js';
import type { UpgradeNameWithCost } from './types.js';
import { firstUpgradeYouDontHave } from './utils.js';

export function getFrontierGrandmaUpgrades(
    game: ParsedSavefile,
): Array<UpgradeNameWithCost> {
    const arr: UpgradeNameWithCost[] = [];

    const a = firstUpgradeYouDontHave(game, B.Grandma, [
        'Forwards from grandma',
        'Steel-plated rolling pins',
        'Lubricated dentures',
        'Prune juice',
        'Double-thick glasses',
        'Aging agents',
        'Xtreme walkers',
        'The Unbridling',
        'Reverse dementia',
        'Timeproof hair dyes',
        'Good manners',
        'Generation degeneration',
        'Visits',
        'Kitchen cabinets',
        'Foam-tipped canes',
    ]);
    if (a) arr.push(a);

    function checkGrandmaVariant(upgradeName: UpgradeName) {
        const upgrade = AllUpgrades[upgradeName];
        if (upgrade.type !== 'GrandmaVariant') return;

        const buildingIdx = upgrade.relatedBuilding;

        if (
            !hasUpgrade(game, upgradeName) &&
            game.buildings[B.Grandma]!.currentUnits >= 1 &&
            game.buildings[buildingIdx]!.currentUnits >= 15
        ) {
            arr.push([upgradeName, upgrade.price]);
        }
    }

    checkGrandmaVariant('Farmer grandmas');
    checkGrandmaVariant('Miner grandmas');
    checkGrandmaVariant('Worker grandmas');
    checkGrandmaVariant('Banker grandmas');
    checkGrandmaVariant('Priestess grandmas');
    checkGrandmaVariant('Witch grandmas');
    checkGrandmaVariant('Cosmic grandmas');
    checkGrandmaVariant('Transmuted grandmas');
    checkGrandmaVariant('Altered grandmas');
    checkGrandmaVariant("Grandmas' grandmas");
    checkGrandmaVariant('Antigrandmas');
    checkGrandmaVariant('Rainbow grandmas');
    checkGrandmaVariant('Lucky grandmas');
    checkGrandmaVariant('Metagrandmas');
    checkGrandmaVariant('Binary grandmas');
    checkGrandmaVariant('Alternate grandmas');
    checkGrandmaVariant('Brainy grandmas');
    checkGrandmaVariant('Clone grandmas');

    return arr;
}
