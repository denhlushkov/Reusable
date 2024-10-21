'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [{name: 'Karl', phone: '+380442835433'}, {name: 'Klara', phone: '+380449455433'}];

const findPhoneByName = (name) => {
    for (const k of phonebook){
        if (k.name === name) return k.phone;
    }
};

module.exports = { phonebook, findPhoneByName };
