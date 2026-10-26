import type { Upgrade } from '../types.js';

export const FarmUpgrades = {
    'Cheap hoes': { id: 10, type: 'pingle' },
    'Fertilizer': { id: 11, type: 'pingle' },
    'Cookie trees': { id: 12, type: 'pingle' },
    'Genetically-modified cookies': { id: 45, type: 'pingle' },
    'Gingerbread scarecrows': { id: 111, type: 'pingle' },
    'Pulsar sprinklers': { id: 193, type: 'pingle' },
    'Fudge fungus': { id: 295, type: 'pingle' },
    'Wheat triffids': { id: 308, type: 'pingle' },
    'Humane pesticides': { id: 429, type: 'pingle' },
    'Barnstars': { id: 481, type: 'pingle' },
    'Lindworms': { id: 507, type: 'pingle' },
    'Global seed vault': { id: 663, type: 'pingle' },
    'Reverse-veganism': { id: 701, type: 'pingle' },
    'Cookie mulch': { id: 744, type: 'pingle' },
    'Self-driving tractors': { id: 841, type: 'pingle' },
} as const satisfies Record<string, Upgrade>;
