import test from 'ava'

import db from '../../server/db/db'

var createServer = require('../../server/server')
var setupDb = require('./setup-db')

setupDb(test,createServer)


test('getVibe returns all vibes', (t) => {
  return db.getVibes(t.context.db)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.length, 3)
        resolve()
      })
    })
})

test('addVibe adds a vibe', (t) => {
  const addedVibe = {
      quote: 'Help me',
      image: 'http://bit.ly/2tf3phC',
      author: 'Simon'
  }
  return db.addVibe(t.context.db, addedVibe)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res[0], 4)
        resolve()
      })
    })
})
