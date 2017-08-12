
/* Details

Write function parseFloat (for Javascript parseF) which takes a string and returns
a number or Nothing (for Python None, for Javascript null) if conversion is not possible.

End Details */

/* --- Solution --- */
function parseF(s) {
  if (typeof s == "boolean" || typeof s == "undefined") {
    return null;
  } else if (isNaN(s) === true){
    return null;
  }
    return parseFloat(s);
}
