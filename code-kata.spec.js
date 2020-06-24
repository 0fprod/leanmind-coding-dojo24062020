const pinValidator = require('./pin-validator').pinValidator;

describe('PinValidator specs', () => {
  /*
    cadena vacia -> cadena vacia
    un digito -> un digito
    dos digitos -> * + ultimo digito
    4 digitos -> OK ó Error en funcion del pin

    a -> lanza exception
  */
  it('should return empty string if empty string is passed', () => {

    // Arrange
    let expectedResult = '';
    // Act
    let givenResult = pinValidator('');
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it('should return the given input', () => {

    // Arrange
    let expectedResult = '1';
    // Act
    let givenResult = pinValidator('1');
    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it('should return N"*" - 1 plus the last digit ', () => {

    // Arrange
    let expectedResultA = '*2';
    let expectedResultB = '******6';
    // Act
    let givenResultA = pinValidator('12');
    let givenResultB = pinValidator('1234556');
    // Assert
    expect(expectedResultA).toEqual(givenResultA)
    expect(expectedResultB).toEqual(givenResultB)
  })

  it('should return OK if the given input its 1234', () => {

    // Arrange
    let expectedResult = 'Ok';
    // Act
    let givenResult = pinValidator('1234');

    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

  it('should return Error if the given input its != 1234', () => {

    // Arrange
    let expectedResult = 'Error';
    // Act
    let givenResult = pinValidator('1334');

    // Assert
    expect(expectedResult).toEqual(givenResult)
  })

})