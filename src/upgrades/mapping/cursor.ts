import { n } from '../../number.js';
import type { Upgrade } from '../types.js';

export const CursorUpgrades = {
    'Reinforced index finger': {
        id: 0,
        type: 'TieredUpgrade',
        price: 100,
        qty: 1,
    },
    'Carpal tunnel prevention cream': {
        id: 1,
        type: 'TieredUpgrade',
        price: 500,
        qty: 1,
    },
    'Ambidextrous': {
        id: 2,
        type: 'TieredUpgrade',
        price: n(10, 'thousand'),
        qty: 10,
    },

    'Thousand fingers': {
        id: 3,
        type: 'TieredUpgrade',
        price: n(100, 'thousand'),
        qty: 25,
    },

    'Million fingers': {
        id: 4,
        type: 'TieredUpgrade',
        price: n(10, 'million'),
        qty: 50,
    },
    'Billion fingers': {
        id: 5,
        type: 'TieredUpgrade',
        price: n(100, 'million'),
        qty: 100,
    },
    'Trillion fingers': {
        id: 6,
        type: 'TieredUpgrade',
        price: n(1, 'billion'),
        qty: 150,
    },
    'Quadrillion fingers': {
        id: 43,
        type: 'TieredUpgrade',
        price: n(10, 'billion'),
        qty: 200,
    },
    'Quintillion fingers': {
        id: 82,
        type: 'TieredUpgrade',
        price: n(10, 'trillion'),
        qty: 250,
    },
    'Sextillion fingers': {
        id: 109,
        type: 'TieredUpgrade',
        price: n(10, 'quadrillion'),
        qty: 300,
    },
    'Septillion fingers': {
        id: 188,
        type: 'TieredUpgrade',
        price: n(10, 'quintillion'),
        qty: 350,
    },
    'Octillion fingers': {
        id: 189,
        type: 'TieredUpgrade',
        price: n(10, 'sextillion'),
        qty: 400,
    },
    'Nonillion fingers': {
        id: 660,
        type: 'TieredUpgrade',
        price: n(10, 'septillion'),
        qty: 450,
    },
    'Decillion fingers': {
        id: 764,
        type: 'TieredUpgrade',
        price: n(10, 'octillion'),
        qty: 500,
    },
    'Undecillion fingers': {
        id: 873,
        type: 'TieredUpgrade',
        price: n(10, 'nonillion'),
        qty: 550,
    },
} as const satisfies Record<string, Upgrade>;
