import type { BuildingInfo, ParsedSavefile } from '../../types.js';
import { hasUpgrade } from '../../upgrade.js';
import type { UpgradeName } from '../types.js';
import { firstOneYouDontHaveWithQty } from './utils.js';

export function getFrontierGrandmaUpgrades(
    game: ParsedSavefile,
): UpgradeName[] {
    const arr: UpgradeName[] = [];

    const a = firstOneYouDontHaveWithQty(game, game.buildings.Grandma, [
        ['Forwards from grandma', 1],
        ['Steel-plated rolling pins', 5],
        ['Lubricated dentures', 25],
        ['Prune juice', 50],
        ['Double-thick glasses', 100],
        ['Aging agents', 150],
        ['Xtreme walkers', 200],
        ['The Unbridling', 250],
        ['Reverse dementia', 300],
        ['Timeproof hair dyes', 350],
        ['Good manners', 400],
        ['Generation degeneration', 450],
        ['Visits', 500],
        ['Kitchen cabinets', 550],
        ['Foam-tipped canes', 600],
    ]);
    if (a) arr.push(a);

    function checkGrandmaVariant(
        upgradeName: UpgradeName,
        buildingInfo: BuildingInfo,
    ) {
        if (
            !hasUpgrade(game, upgradeName) &&
            game.buildings.Grandma.currentUnits >= 1 &&
            buildingInfo.currentUnits >= 15
        ) {
            arr.push(upgradeName);
        }
    }

    checkGrandmaVariant('Farmer grandmas', game.buildings.Farm);
    checkGrandmaVariant('Miner grandmas', game.buildings.Mine);
    checkGrandmaVariant('Worker grandmas', game.buildings.Factory);
    checkGrandmaVariant('Banker grandmas', game.buildings.Bank);
    checkGrandmaVariant('Priestess grandmas', game.buildings.Temple);
    checkGrandmaVariant('Witch grandmas', game.buildings['Wizard Tower']);
    checkGrandmaVariant('Cosmic grandmas', game.buildings.Shipment);
    checkGrandmaVariant('Transmuted grandmas', game.buildings['Alchemy Lab']);
    checkGrandmaVariant('Altered grandmas', game.buildings.Portal);
    checkGrandmaVariant("Grandmas' grandmas", game.buildings['Time Machine']);
    checkGrandmaVariant('Antigrandmas', game.buildings['Antimatter Condenser']);
    checkGrandmaVariant('Rainbow grandmas', game.buildings.Prism);
    checkGrandmaVariant('Lucky grandmas', game.buildings.Chancemaker);
    checkGrandmaVariant('Metagrandmas', game.buildings['Fractal Engine']);
    checkGrandmaVariant(
        'Binary grandmas',
        game.buildings['Javascript Console'],
    );
    checkGrandmaVariant('Alternate grandmas', game.buildings.Idleverse);
    checkGrandmaVariant('Brainy grandmas', game.buildings['Cortex Baker']);
    checkGrandmaVariant('Clone grandmas', game.buildings.You);

    return arr;
}
