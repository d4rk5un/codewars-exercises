
/* Details

Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers.

End Details */

/* --- Solution --- */
function invert(array) {
   let x = array.map(index => {
      if (index != 0) {
        return index * (-1);
      } else
        return index;
   });
   return x;
}
