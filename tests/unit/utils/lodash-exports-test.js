
import _ from 'lodash/lodash';
import _now from 'lodash/now';
import _forEach from 'lodash/forEach';

import { module, test } from 'qunit';

module('Unit | Utility | lodash exports');


test('temp', function(assert) {

    assert.ok(true);
});

test('lodash as a single module has been exported', function(assert) {
    assert.ok(_, 'lodash is exported');
    assert.equal(typeof _.sortBy, 'function', 'lodash has a known function on it (sortBy)');
});


test('lodash individual modules have been exported', function(assert) {
    assert.equal(typeof _now, 'function', 'lodash date#now() exists');
    assert.equal(typeof _forEach, 'function', 'lodash forEach() exists');
});
