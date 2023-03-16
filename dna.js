/*2. Write a function that takes in a DNA string (for example 'CTAGGGTA') 
and returns a new string with any non-canonical DNA base values removed.
 Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. 
 Make the function case sensitive - meaning 'c' (lower case) should be removed from the string,
  but 'C' (upper case) is a good value and should remain.
  If the DNA string is empty, just return an empty string.
  */

  let filtro =function removeDNA(sstring) {
    /*if (!sstring) { 
      return '';
    }
    return sstring.replace(/[^CTAG]/g, '');
  }*/
  const canonical = ["C", "T", "A", "G"];
  let newString = "";
  if(sstring==""){
    return "";
  }else{
    for (let index = 0; index < sstring.length; index++) {

      const canonicalBase = sstring [index];
      if (canonical.includes(canonicalBase.toUpperCase())) {
          newString += canonicalBase;
          console.log(newString);
      }
  }
  console.log(newString.trim().substring(0,4));
  return newString.trim().substring(0,4);
}
}

module.exports = filtro;