import { expect, jest, test } from '@jest/globals'
import fizzbuzz from "./fizzbuzz.js"

describe('fizzbuzz()', () => {
    test('Should return fizzbuzz', () => {
        expect(fizzbuzz(30)).toBe('fizzbuzz')
    })

    test('Should return fizz', () => {
        expect(fizzbuzz(27)).toBe('fizz')
    })

    test('Should return buzz', () => {
        expect(fizzbuzz(35)).toBe('buzz')
    })

    test('Should return an empty string', () => {
        expect(fizzbuzz(28)).toBe('')
    })

    test('Should return an error if parameter is not a positive number', () => {
        try {
            fizzbuzz(-2)
        } catch (err) {
            expect(err).toBeInstanceOf(TypeError)
            expect(err.message).toBe('Number should be a positive integer')
        }
    })

})
