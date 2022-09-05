function siftUp(heap, idx) {
  if (idx === 1) {
    return idx;
  }

  const pIdx = Math.floor(idx / 2);

  if (heap[pIdx] < heap[idx]) {
    const tmp = heap[idx];
    heap[idx] = heap[pIdx];
    heap[pIdx] = tmp;
    return siftUp(heap, pIdx);
  }

  return idx;
}

// function test() {
//   var sample = [-1, 12, 6, 8, 3, 15, 7];
//   console.log(siftUp(sample, 5));
// }
//
// test();
