// function that consumes a word
function isThisWordZany( aWord ){
  // our zany word
  var zanyWords = [ 'squeegee', 'barnacle', 'zany', 'barbecue', 'swamp', 'quagmire', 'bog', 'loofah', 'oasis', 'squeezy' ];
  // log out our zany word
  console.log( 'in isThisWordZany:', aWord );
  // check if aWord is in zanyWords
  if( zanyWords.includes( aWord ) ){
    return true
  } // end is in array
  else{
    return false
  } // end is not in the array
} // end function isThisWordZany

console.log( isThisWordZany( 'squeegee' ) );
var someWordThatMayBeZany = 'barnacle';
console.log( isThisWordZany( someWordThatMayBeZany ) );
console.log( isThisWordZany( 'coconut' ) );
var wordThatIsNotZanyPossibly = 'shrug';
var isZany = isThisWordZany( wordThatIsNotZanyPossibly );
console.log( isZany );
