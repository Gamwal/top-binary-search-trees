export default function mergeSort(array) {
  let result = [...array];
  if (array.length > 1) {
    const midPoint = Math.floor(array.length / 2);
    let leftHand = mergeSort(array.slice(0, midPoint));
    let rightHand = mergeSort(array.slice(midPoint));

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftHand.length && j < rightHand.length) {
      if (leftHand[i] < rightHand[j]) {
        result[k] = leftHand[i];
        i += 1;
      } else {
        result[k] = rightHand[j];
        j += 1;
      }
      k += 1;
    }
    while (i < leftHand.length || j < rightHand.length) {
      if (i < leftHand.length) {
        result[k] = leftHand[i];
        i += 1;
      } else {
        result[k] = rightHand[j];
        j += 1;
      }
      k += 1;
    }
  } else {
    return result;
  }
  return result;
}
