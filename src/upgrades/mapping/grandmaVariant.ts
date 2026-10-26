import { B } from '../../constants.js';
import { n } from '../../number.js';
import type { GrandmaVariantUpgrade } from '../types.js';

export const GrandmaVariantUpgrades = {
    'Farmer grandmas': {
        id: 57,
        type: 'GrandmaVariant',
        price: n(55, 'thousand'),
        relatedBuilding: B.Farm,
    },
    'Miner grandmas': {
        id: 58,
        type: 'GrandmaVariant',
        price: n(600, 'thousand'),
        relatedBuilding: B.Mine,
    },
    'Worker grandmas': {
        id: 59,
        type: 'GrandmaVariant',
        price: n(6.5, 'million'),
        relatedBuilding: B.Factory,
    },
    'Banker grandmas': {
        id: 250,
        type: 'GrandmaVariant',
        price: n(70, 'million'),
        relatedBuilding: B.Bank,
    },
    'Priestess grandmas': {
        id: 251,
        type: 'GrandmaVariant',
        price: n(1, 'billion'),
        relatedBuilding: B.Temple,
    },
    'Witch grandmas': {
        id: 252,
        type: 'GrandmaVariant',
        price: n(16.5, 'billion'),
        relatedBuilding: B['Wizard Tower'],
    },
    'Cosmic grandmas': {
        id: 60,
        type: 'GrandmaVariant',
        price: n(255, 'billion'),
        relatedBuilding: B.Shipment,
    },
    'Transmuted grandmas': {
        id: 61,
        type: 'GrandmaVariant',
        price: n(3.75, 'trillion'),
        relatedBuilding: B['Alchemy Lab'],
    },
    'Altered grandmas': {
        id: 62,
        type: 'GrandmaVariant',
        price: n(50, 'trillion'),
        relatedBuilding: B.Portal,
    },
    "Grandmas' grandmas": {
        id: 63,
        type: 'GrandmaVariant',
        price: n(700, 'trillion'),
        relatedBuilding: B['Time Machine'],
    },
    'Antigrandmas': {
        id: 103,
        type: 'GrandmaVariant',
        price: n(8.5, 'quadrillion'),
        relatedBuilding: B['Antimatter Condenser'],
    },
    'Rainbow grandmas': {
        id: 180,
        type: 'GrandmaVariant',
        price: n(105, 'quadrillion'),
        relatedBuilding: B.Prism,
    },
    'Lucky grandmas': {
        id: 415,
        type: 'GrandmaVariant',
        price: n(1.3, 'quintillion'),
        relatedBuilding: B.Chancemaker,
    },
    'Metagrandmas': {
        id: 521,
        type: 'GrandmaVariant',
        price: n(15.5, 'quintillion'),
        relatedBuilding: B['Fractal Engine'],
    },
    'Binary grandmas': {
        id: 593,
        type: 'GrandmaVariant',
        price: n(3.55, 'sextillion'),
        relatedBuilding: B['Javascript Console'],
    },
    'Alternate grandmas': {
        id: 683,
        type: 'GrandmaVariant',
        price: n(600, 'sextillion'),
        relatedBuilding: B.Idleverse,
    },
    'Brainy grandmas': {
        id: 729,
        type: 'GrandmaVariant',
        price: n(95, 'septillion'),
        relatedBuilding: B['Cortex Baker'],
    },
    'Clone grandmas': {
        id: 825,
        type: 'GrandmaVariant',
        price: n(27, 'octillion'),
        relatedBuilding: B.You,
    },
} as const satisfies Record<string, GrandmaVariantUpgrade>;
