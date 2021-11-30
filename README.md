# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mohamed7/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual()`: The function for asserting that two arrays are equal.
- `assertEqual()`: The function compares the two values it takes in and print out a message telling us if they match or not, this does not include arrays or objects.
- `assertObjectsEqual()`: The function will take in two objects and console.log an appropriate message to the console.
- `countLetters()`: The function takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `countOnly()`: The function will be given an array and an object. It will return an object containing counts of everything that the input object listed.
- `eqArrays()`: The function compares two arrays for a perfect match.
- `eqObjects()`: The function will take in two objects and returns true or false, based on a perfect match.
- `findKey()`: The function takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
- `findKeyByValue()`: The function takes in an object and a value. It scans the object and return the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- `head()`: The function retrieves the first element from an array
- `letterPositions()`: The function will return all the indices (zero-based positions) in the string where each character is found.

- `map()`: The function will take in two arguments, an array to map and a callback function. The function will then return a new array based on the results of the callback function.
- `middle()`: The function returns an array with only the middle element(s) of the provided array.
- `tail()`: The function returns every element except the head (first element) of the array.
- `takeUntil()`: The function will return a slice of the array with elements taken from the beginning. It should keep going until the callback returns a truthy value.
- `without()`: The function returns a new array with only those elements from source array that are not present in the itemsToRemove array.
