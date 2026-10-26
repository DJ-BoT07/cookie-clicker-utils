import { n } from '../../number.js';
import type { Upgrade } from '../types.js';

export const GrandmaUpgrades = {
    'Forwards from grandma': {
        id: 7,
        type: 'TieredUpgrade',
        price: n(1, 'thousand'),
        qty: 1,
    },
    'Steel-plated rolling pins': {
        id: 8,
        type: 'TieredUpgrade',
        price: n(5, 'thousand'),
        qty: 5,
    },
    'Lubricated dentures': {
        id: 9,
        type: 'TieredUpgrade',
        price: n(50, 'thousand'),
        qty: 25,
    },
    'Prune juice': {
        id: 44,
        type: 'TieredUpgrade',
        price: n(5, 'million'),
        qty: 50,
    },
    'Double-thick glasses': {
        id: 110,
        type: 'TieredUpgrade',
        price: n(500, 'million'),
        qty: 100,
    },
    'Aging agents': {
        id: 192,
        type: 'TieredUpgrade',
        price: n(50, 'billion'),
        qty: 150,
    },
    'Xtreme walkers': {
        id: 294,
        type: 'TieredUpgrade',
        price: n(50, 'trillion'),
        qty: 200,
    },
    'The Unbridling': {
        id: 307,
        type: 'TieredUpgrade',
        price: n(50, 'quadrillion'),
        qty: 250,
    },
    'Reverse dementia': {
        id: 428,
        type: 'TieredUpgrade',
        price: n(50, 'quintillion'),
        qty: 300,
    },
    'Timeproof hair dyes': {
        id: 480,
        type: 'TieredUpgrade',
        price: n(50, 'sextillion'),
        qty: 350,
    },
    'Good manners': {
        id: 506,
        type: 'TieredUpgrade',
        price: n(500, 'septillion'),
        qty: 400,
    },
    'Generation degeneration': {
        id: 662,
        type: 'TieredUpgrade',
        price: n(5, 'nonillion'),
        qty: 450,
    },
    'Visits': {
        id: 700,
        type: 'TieredUpgrade',
        price: n(50, 'decillion'),
        qty: 500,
    },
    'Kitchen cabinets': {
        id: 743,
        type: 'TieredUpgrade',
        price: n(500, 'undecillion'),
        qty: 550,
    },
    'Foam-tipped canes': {
        id: 840,
        type: 'TieredUpgrade',
        price: n(5, 'tredecillion'),
        qty: 600,
    },
} as const satisfies Record<string, Upgrade>;
