const assertEqualArrays = require("../assertArraysEqual");





assertEqualArrays([1, 2, 3], [1, 2 ,3]);
assertEqualArrays(['2', '4', '5'], ['2', '3', '5']);
assertEqualArrays(['2', '4', '5', 8], ['2', '3', '5']);
assertEqualArrays(['a', '4', '5'], ['a', '4', '5']);