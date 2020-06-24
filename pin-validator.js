const VALID_PIN = '1234';


const pinValidator = (input) => {

  if (input.length === 0)
    return '';

  let pinCodeCollection = input.split('');

  let securedPin = pinCodeCollection.map((digit, index) => {

    if (index == pinCodeCollection.length - 1) {
      return digit;
    }

    return '*';
  })

  //input

  if (input.length === 4) {
    return (input === VALID_PIN) ? 'Ok' : 'Error';
  }

  return securedPin.join('');
}


module.exports = {
  pinValidator
}
