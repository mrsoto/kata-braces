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
      braces('').should.not.be.true;
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
});
