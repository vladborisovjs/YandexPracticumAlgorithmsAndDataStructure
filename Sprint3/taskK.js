/**
 * Гоше дали задание написать красивую сортировку слиянием. Поэтому Гоше обязательно надо реализовать отдельно функцию merge и функцию merge_sort.
 Функция merge принимает два отсортированных массива, сливает их в один отсортированный массив и возвращает его. Если требуемая сигнатура имеет вид merge(array, left, mid, right), то первый массив задаётся полуинтервалом
 [left,mid) массива array, а второй – полуинтервалом [mid,right) массива array.
 Функция merge_sort принимает некоторый подмассив, который нужно отсортировать. Подмассив задаётся полуинтервалом — его началом и концом. Функция должна отсортировать передаваемый в неё подмассив, она ничего не возвращает.
 Функция merge_sort разбивает полуинтервал на две половинки и рекурсивно вызывает сортировку отдельно для каждой. Затем два отсортированных массива сливаются в один с помощью merge.
 * */
function merge_sort(arr, left, right) {
  if(left < right - 1) {
    const mid = left + Math.floor((right - left) / 2)

    merge_sort(arr, left, mid)
    merge_sort(arr, mid, right)
    const temp = merge(arr, left, mid, right);

    for(let i = left; i < right; i++) {
      arr[i] = temp[i - left];
    }
  }
}

function merge(arr, left, mid, right) {
  let result = new Array(right - left);
  let l = left;
  let r = mid;
  let k = 0;

  while (l < mid && r < right) {
    if (arr[l] <= arr[r]) {
      result[k] = arr[l]
      l += 1
    } else {
      result[k] = arr[r]
      r += 1
    }
    k += 1
  }

  while (l < mid) {
    result[k] = arr[l];
    l += 1
    k += 1
  }

  while (r < right) {
    result[k] = arr[r];
    r += 1
    k += 1
  }

  return result;
}

