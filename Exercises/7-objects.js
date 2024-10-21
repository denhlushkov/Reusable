'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const first = {name: 'Tom'};
    let second ={name: 'Tom'};
    first.name = 'Jerry';
    second.name = 'Jerry';
    const full = {name: 'Tom Jerry'};
    // В цьому випадку на результат не вплинула різниця між константою та змінною, бо ми не змінюємо саме посилання на об'єкт
};
module.exports = { fn };
