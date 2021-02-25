import { translateEnglishtoMorse, translateMorseToEnglish } from "./translator.js";

// Valid
it ('Should translate a to .-', () => {
    const result = translateEnglishtoMorse('a');
    expect(result).toBe('.-');
})

it ('Should translate g to --.', () => {
    const result = translateEnglishtoMorse('g');
    expect(result).toBe('--.');
})

it ('Should translate w to .--', () => {
    const result = translateEnglishtoMorse('w');
    expect(result).toBe('.--');
})


// Invalid
it ('Should translate / to invalid', () => {
    const result = translateEnglishtoMorse('/');
    expect(result).toBe('invalid');
})

it ('Should translate ] to invalid', () => {
    const result = translateEnglishtoMorse(']');
    expect(result).toBe('invalid');
})

it ('Should translate ; to invalid', () => {
    const result = translateEnglishtoMorse(';');
    expect(result).toBe('invalid');
})


// Null/ empty
it ('Should translate  to invalid', () => {
    const result = translateEnglishtoMorse('');
    expect(result).toBe('invalid');
})


// Valid
it ('Should translate .- to a', () => {
    const result = translateMorseToEnglish('.-');
    expect(result).toBe('a');
})

it ('Should translate --. to g', () => {
    const result = translateMorseToEnglish('--.');
    expect(result).toBe('g');
})

it ('Should translate .-- to w', () => {
    const result = translateMorseToEnglish('.--');
    expect(result).toBe('w');
})


// Invalid
it ('Should translate / to invalid', () => {
    const result = translateMorseToEnglish('/');
    expect(result).toBe('invalid');
})

it ('Should translate ] to invalid', () => {
    const result = translateMorseToEnglish(']');
    expect(result).toBe('invalid');
})

it ('Should translate ; to invalid', () => {
    const result = translateMorseToEnglish(';');
    expect(result).toBe('invalid');
})


// Null/ empty
it ('Should translate  to invalid', () => {
    const result = translateMorseToEnglish('');
    expect(result).toBe('invalid');
})