const Lobster = require('../src/Lobster.js')

let lobster
let ticket
let paymentCard

beforeEach(() => {
    lobster = new Lobster()
     ticket = {
        amount: 5,
        type: 'dayRider',
    }
     paymentCard = {
        type: 'visa',
        id: 1,
        name: 'Shelby',
        balance: 10,
        deduct: jest.fn(),
    }   
});

describe('lobster', () => {
    it('object instantiates', () => {
        expect(lobster).toBeInstanceOf(Object)
    })

    it('has access to a range of tickets', () => {
        expect(lobster).toHaveProperty('tickets')
        expect(lobster.tickets).toEqual([])
    })
    it('has transactions property', () => {
        expect(lobster).toHaveProperty('transactions')
  })

});
describe('methods in lobster object', () => {
    it('add a ticket to array', () => {
        const ticketTypes = jest.fn()
        lobster.addTickets(ticketTypes)
      expect(lobster.tickets).toContain(ticketTypes)
    })
    it('scans a ticket', () => {
       lobster.scan(ticket, paymentCard)
      expect(lobster.transactions).toEqual([{ticket, paymentCard}])
    })
    it('deducts ticket amount from balance', () => {       
        lobster.scan(ticket, paymentCard)
        expect(paymentCard.deduct).toHaveBeenCalledWith(ticket.amount)
    })
});


