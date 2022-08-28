function merge_sort(arr, left, right) {
  if (arr.length <= 1) {
    return arr;
  }
  const newArr = arr.slice(left, right);
  const restPart = arr.slice(right, arr.length);
  const newArrLeft = newArr.slice(0, [Math.floor(newArr.length / 2)]);
  const newArrRight = newArr.slice(Math.floor(newArr.length / 2));
  const newLeft = merge_sort(newArrLeft, 0, newArrLeft.length);
  const newRight = merge_sort(newArrRight, 0, newArrRight.length);

  const result = new Array(newArr.length).fill(null);
  [l, r, k] = [0, 0, 0];
  while (l < newLeft.length && r < newRight.length) {
    if (newLeft[l] <= newRight[r]) {
      result[k] = newLeft[l];
      l += 1;
    } else {
      result[k] = newRight[r];
      r += 1;
    }
    k++;
  }

  while (l < newLeft.length) {
    result[k] = newLeft[l];
    l += 1;
    k += 1;
  }

  while (r < newRight.length) {
    result[k] = newRight[r];
    r += 1;
    k += 1;
  }
  return merge(result, restPart);
}

function merge(arr, left, mid, right) {
  let result;
  if (mid === undefined && right === undefined) {
    result = [...arr, ...left];
  } else {
    result = merge_sort(arr, left, right);
  }
  return result;
}

// function test() {
//   var a = [1, 4, 9, 2, 10, 11];
//   var b = merge(a, 0, 3, 6);
//   console.log(b);
//   // var expected = [1, 2, 4, 9, 10, 11];

//   var c = [4, 5, 3, 0, 1, 2];
//   console.log(merge_sort(c, 0, 6));
//   // expected = [1, 1, 2, 2, 4, 10];
// }
// test();
