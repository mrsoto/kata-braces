/* eslint-disable  no-unused-expressions */

require('chai').should();
const braces = require('./braces.js');

describe('Dada la funcion brace', () => {
  it('debe ser una funcion', () => {
    braces.should.be.a('function');
  });

  describe('cuando recibe una patrón', () => {
    it('debe aceptar una apertura y un cierre', () => {
      braces('{}').should.be.true;
    });

    it('no debe aceptar una cadena vacia', () => {
      braces('').should.be.false;
    });

    it('no debe aceptar una apertura sin cierre', () => {
      braces('{').should.be.false;
    });

    it('no debe aceptar un cierre sin apertura', () => {
      braces('}').should.be.false;
    });

    describe('cuando el patrón contiene un patrón interno', () => {
      it('entonces debe aceptar una apertura seguido de un patrón seguigo de un cierre', () => {
        braces('{{}}').should.be.true;
      });

      it('entonces no debe aceptar una apertura seguido de un patrón sin estar seguigo de un cierre', () => {
        braces('{{}').should.be.false;
      });

      it('entonces no debe aceptar un patrón seguigo de un cierre', () => {
        braces('{}}').should.be.false;
      });
    });

    describe('cuando y el patrón le sigue un patrón', () => {
      it('debe aceptar una apertura seguido de un patrón seguigo de un cierre', () => {
        braces('{}{}').should.be.true;
      });

      it('no debe aceptar una apertura seguido de un patrón sin estar seguigo de un cierre', () => {
        braces('{}{').should.be.false;
      });
    });
  });

  describe('cuando el patrón recibido es múltiple y profundo', () => {
    describe('y el patrón contiene un patrón interno', () => {
      it('entonces debe aceptar una apertura seguido de un patrón anidado seguigo de un cierre', () => {
        braces('{{{{{}}}}}').should.be.true;
      });
      it('entonces debe rechazar una apertura seguido de un patrón anidado seguigo de un cierre seguido de un cierre incorrecto', () => {
        braces('{{}}}').should.not.be.true;
      });
    });

    describe('cuando y el patrón le sigue un patrón', () => {
      it('debe aceptar una apertura seguido de un patrón anidado seguigo de un cierre', () => {
        braces('{}{}{}{}{}').should.be.true;
      });
    });

    describe('cuando y el patrón le sigue un patrón', () => {
      it('debe aceptar una apertura seguido de un patrón anidado seguigo de un cierre', () => {
        braces('{{{{}}}}{}{}{}{}').should.be.true;
      });
    });
  });

  describe('cuando el token de apertura y cierre son distintos a {}', () => {
    describe('y recibe caracteres inválidos', () => {
      it('debe rechazar cualquier caracter no incluido en el dominio de entrada', () => {
        braces('x').should.be.false;
      });
    });

    describe('y los tokens son [ ]', () => {
      it('entonces debe reconocer los corchetes', () => {
        braces('[]').should.be.true;
      });

      it('entonces debe reconocer los corchetesen conjunto con las llaves', () => {
        braces('[{}]{}').should.be.true;
      });
    });

    describe('y los tokens son ( )', () => {
      it('entonces debe reconocer los paréntesis', () => {
        braces('()').should.be.true;
      });

      it('entonces debe reconocer los paréntesis conjunto con las llaves y los corchetes', () => {
        braces('[({})]{}').should.be.true;
      });
    });
  });
});
