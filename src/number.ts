const normalUnits = [
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
] as const;

type NormalUnitStr = (typeof normalUnits)[number];

const prefixes = [
    '',
    'un',
    'duo',
    'tre',
    'quattuor',
    'quin',
    'sex',
    'septen',
    'octo',
    'novem',
] as const;

const suffixes = [
    'decillion',
    'vigintillion',
    'trigintillion',
    'quadragintillion',
    'quinquagintillion',
    'sexagintillion',
    'septuagintillion',
    'octogintillion',
    'nonagintillion',
] as const;

// decillion = 1 * decillion
// undecillion = 1000 * decillion

type PrefixStr = (typeof prefixes)[number];
type SuffixStr = (typeof suffixes)[number];
type CombinedStr = `${PrefixStr}${SuffixStr}`;

const combined: CombinedStr[] = suffixes
    .map((s) => prefixes.map((p) => `${p}${s}` as const))
    .flat();

type UnitStr = NormalUnitStr | CombinedStr;

const exponentToUnitStr: UnitStr[] = ([] as UnitStr[])
    .concat(normalUnits)
    .concat(combined);

const unitStrToExponent: Record<UnitStr, number> = Object.fromEntries(
    exponentToUnitStr.map((unitStr, exponent) => [unitStr, exponent]),
) as Record<UnitStr, number>;

export function n(a: number, b: UnitStr): number {
    const exponent = 3 * unitStrToExponent[b] + 3;
    const order = Math.pow(10, exponent);
    return a * order;
}
