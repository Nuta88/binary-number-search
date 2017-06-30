function searchNum(arr, searchNum) {
	var cursor = 0;
	if (arr[cursor] === searchNum
			|| arr[cursor = getAverIndexArr(arr.length - 1)] === searchNum) {
		return cursor;
	}
	var right = arr.length - 1;
	var left = 0;
	if (arr[cursor] < searchNum) {
		return numOnRightSideOfArr(arr, cursor, searchNum, left, right);
	}
	if (arr[cursor] > searchNum) {
		return numOnLeftSideOfArr(arr, cursor, searchNum, left, right);
	} else {
		return "There's no number in the array";
	}
}

function numOnRightSideOfArr(arr, cursor, searchNum, left, right) {
	while (arr[cursor] != searchNum) {
		left = cursor + 1;
		cursor = getAverIndexArr(right - left) + left;
		if (arr[cursor] > searchNum) {
			while (arr[cursor] != searchNum) {
				right = cursor;
				cursor = getAverIndexArr(right - left) + left;
				if (arr[cursor - 1] === searchNum) {
					return cursor - 1;
				}
			}
		}
	}
	return cursor;
}

function numOnLeftSideOfArr(arr, cursor, searchNum, left, right) {
	while (arr[cursor] != searchNum) {
		right = cursor - 1;
		cursor = getAverIndexArr(right - left);
		if (arr[cursor] < searchNum) {
			while (arr[cursor] != searchNum) {
				left = cursor;
				cursor = getAverIndexArr(right - left) + left;
				if (arr[cursor - 1] === searchNum) {
					return cursor - 1;
				}
			}
		}
	}
	return cursor;
}

function getAverIndexArr(value) {
	return Math.ceil(value / 2);
}

function testingFuncGetAverIndexArr() {
	var expected = 2;
	var actual = [ 1, 2, 5, 7 ];
	var receivedArr = getAverIndexArr(actual);
	if (expected !== receivedArr) {
		document.write("function is working bad " + receivedArr);
	} else {
		document.write("function is working good " + receivedArr);
	}
}

function testingFuncSearchNum() {
	var input = [ 1, 2, 5, 7, 20, 27, 34, 56, 59, 60, 70 ];
	var expected = 10;
	var searNum = 70;
	var receiveNum = searchNum(input, searNum);
	if (expected === receiveNum) {
		document.write("function is working good. Index is " + receiveNum);
	} else {
		document.write("function is working bad. Index is " + receiveNum);
	}
}
testingFuncSearchNum();