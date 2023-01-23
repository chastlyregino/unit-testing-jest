export default function fizzbuzz(number) {
    if (number < 0) {
        return new TypeError('Number should be a positive integer')
    }

    if ((number % 5) === 0 && (number % 3) === 0) {
        return 'fizzbuzz'
    } else if ((number % 5) === 0) {
        return 'buzz'
    } else if ((number % 3) === 0) {
        return 'fizz'
    }

    return ''
}
