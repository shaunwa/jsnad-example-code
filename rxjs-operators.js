const { Observable, of, map, filter } = require('rxjs');

const o = new Observable(s => {
    s.next(1);
    s.next(2);
    s.next(3);
    s.next(4);
});

const numbers = [10, 45, 16, 100];

of(1, 2, 3, 4).pipe(
    filter(x => !!numbers[x]),
    map(x => numbers[x]),
).subscribe(value => console.log(value));
