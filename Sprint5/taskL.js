function siftDown(heap, idx) {
  const left = 2 * idx;
  const right = 2 * idx + 1;
  let idxLargest;
  if (heap.length < left) {
    return idx;
  }

  if (right <= heap.length && heap[left] < heap[right]) {
    idxLargest = right;
  } else {
    idxLargest = left;
  }

  if (heap[idx] < heap[idxLargest]) {
    const tmp = heap[idx];
    heap[idx] = heap[idxLargest];
    heap[idxLargest] = tmp;

    return siftDown(heap, idxLargest);
  }

  return idx;
}

// function test() {
//   var sample = [-1, 12, 1, 8, 3, 4, 7];
//   console.log(siftDown(sample, 2));
// }
//
// test();
