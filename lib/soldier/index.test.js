import test from 'ava'
import soldier from '.'

test('soldier has ID', (t) => {
    t.is(soldier.id, 'soldier')
})