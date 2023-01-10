const assert = require('assert');
const core = require('./oop');
const {Point3D} = require("./oop");

describe('ООП', () => {
    describe('#Point', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y', () => {
            const point = new core.Point(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
        });

        it('Точка создается без параметров, x и y принимают нули как значение по умолчанию', () => {
            const point = new core.Point();

            assert.strictEqual(point.x, 0);
            assert.strictEqual(point.y, 0);
        });

        it('Точка создается с одним параметром, x принимает значение, y принимают нуль как значение по умолчанию', () => {
            const point = new core.Point(1);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 0);
        });
    });

    describe('#Point3D', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y, z принимает нуль как значение по умолчанию', () => {
            const point = new core.Point3D(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
            assert.strictEqual(point.z, 0);
        });

        it('Точка создается с тремя параметрами, которые становятся x, y, z', () => {
            const point = new core.Point3D(1, 2.5, -3);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2.5);
            assert.strictEqual(point.z, -3);
        });

        it('Point3D имеет статический метод vectorLength', () => {
            const pointA = new core.Point3D(1, 2, -3);
            const pointB = new core.Point3D(1, -1, 1);

            assert.strictEqual(typeof Point3D.vectorLength, 'function');

            const length = Point3D.vectorLength(pointA, pointB);

            assert.strictEqual(length, 5);
        });
    });

    describe('#Queue', () => {
        it('создается без параметров', () =>{
            const queue = new core.Queue();
            assert.deepEqual(queue.array, []);
        });

        it('проверка массивом', () => {
            const queue = new core.Queue([1,4,2]);
            queue.enqueue(5);
            assert.deepEqual(queue.array, [1,4,2,5]);
            assert.deepEqual(queue.dequeue(), 1);

        });

        it('проверка на пограничные случаи', () => {
            const queue = new core.Queue();
            queue.enqueue(1);
            assert.strictEqual(queue.dequeue(), 1);
            assert.strictEqual(queue.dequeue(), 'There is no elements to get');
            assert.strictEqual(queue.dequeue(), 'There is no elements to get');
        });

        it('может создаться из массива', () => {
            const queue = new core.Queue([1,2,3,4,5,6,7,8,9,10]);
            assert.deepEqual(queue.array, [1,2,3,4,5,6,7,8,9,10]);
        });
    });
});
