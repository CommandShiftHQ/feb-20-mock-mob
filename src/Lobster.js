class Lobster {
    constructor(){
        this.tickets = [];
        this.transactions = [];
    }

addTickets(ticketTypes) {
    this.tickets.push(ticketTypes);
}

scan(ticket, paymentCard){
    this.transactions.push({ticket, paymentCard})
    paymentCard.deduct(ticket.amount);
}

};

module.exports = Lobster