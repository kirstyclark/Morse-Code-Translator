import { translate } from "./translator.js";

// Valid
it ('Should translate a to .-', () => {
    const result = translate('a');
    expect(result).toBe('.-');
})

it ('Should translate g to --.', () => {
    const result = translate('g');
    expect(result).toBe('--.');
})

it ('Should translate w to .--', () => {
    const result = translate('w');
    expect(result).toBe('.--');
})


// Invalid
it ('Should translate / to invalid', () => {
    const result = translate('/');
    expect(result).toBe('invalid');
})

it ('Should translate ] to invalid', () => {
    const result = translate(']');
    expect(result).toBe('invalid');
})

it ('Should translate ; to invalid', () => {
    const result = translate(';');
    expect(result).toBe('invalid');
})


// Valid
it ('Should translate .- to a', () => {
    const result = translate('.-');
    expect(result).toBe('a');
})

it ('Should translate --. to g', () => {
    const result = translate('--.');
    expect(result).toBe('g');
})

it ('Should translate .-- to w', () => {
    const result = translate('.--');
    expect(result).toBe('w');
})


// Invalid
it ('Should translate / to invalid', () => {
    const result = translate('/');
    expect(result).toBe('invalid');
})

it ('Should translate ] to invalid', () => {
    const result = translate(']');
    expect(result).toBe('invalid');
})

it ('Should translate ; to invalid', () => {
    const result = translate(';');
    expect(result).toBe('invalid');
})
