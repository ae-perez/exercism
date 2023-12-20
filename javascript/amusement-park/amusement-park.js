/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const Visitor = {
    name: name,
    age: age,
    ticketId: ticketId,
  };
  return Visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;

  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  let message = '';
  if (tickets.hasOwnProperty(ticketId)) {
    if (tickets[ticketId] === null) {
      message = 'not sold';
    } else {
      message = 'sold to ' + tickets[ticketId];
    }
  } else {
    message = 'unknown ticket id';
  }

  return message;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  let message;
  if (tickets.hasOwnProperty(ticketId)) {
    if (tickets[ticketId] === null) {
      message = 'invalid ticket !!!';
    } else {
      message = `${tickets[ticketId]}`;
    }
  } else {
    message = 'invalid ticket !!!';
  }

  return message;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  let version;
  if (visitor.hasOwnProperty('gtc') && visitor.gtc?.hasOwnProperty('version')) {
    version = visitor.gtc?.version;
  } else {
    version = undefined;
  }

  return version;
}
