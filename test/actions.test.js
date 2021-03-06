/* global describe it */
/* eslint-env mocha */

import { expect } from 'chai'
import { setLocale } from '../src/actions'
import { REDUX_LANG_SET_LOCALE } from '../src/actionTypes'

describe('actions', () => {
  it('should return the correct action creator objects', () => {
    const action = {
      type: REDUX_LANG_SET_LOCALE,
      value: 'fr'
    }
    expect(setLocale('fr')).to.eql(action)
  })
})
