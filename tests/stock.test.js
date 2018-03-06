/* global test expect beforeEach afterEach */

const testEnv = require('./test-environment')

const stock = require('../server/lib/stock')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('test harness is working', () => {
  expect(true).toBeTruthy()
})

test('getStock returns all potential stock items', () => {
  return stock.getStock(testDb)
    .then(stock => {
      expect(stock.length).toBe(3)
    })
})

test('getLocations can return a list of all locations', () => {
  return stock.getLocation(testDb)
    .then(locations => {
      expect(locations[1].name).toBe('Wellington')
    })
})

test('getLocationStockByLocationId returns a locations items', () => {
  return stock.getLocationStockByLocationId(1, testDb)
    .then(location => {
      expect(location[0].quantity).toBe(30)
    })
})

test('getLastUpdate returns the last update from a location', () => {
  return stock.getLastUpdate(1, testDb)
    .then(lastUpdate => {
      expect(lastUpdate[0].last_update).toBe('29/02/2016')
    })
})

test('receiveItems can successfully update an existing row', () => {
  return stock.receiveItems(2, 20, testDb)
    .then(success => {
      expect(success).toBeTruthy()
    })
})

test('deliverItems can successfully update an existing row', () => {
  return stock.deliverItems(1, 20, testDb)
    .then(success => {
      expect(success).toBeTruthy()
    })
})

test('getLogsByLocationItemId can get logs for a location', () => {
  return stock.getLogsByLocationItemId(2, testDb)
    .then(log => {
      expect(log[0].date).toBe('Thursday 1 March 2018')
    })
})

test('updateLog can insert a new row of 4 columns into Log table', () => {
  return stock.updateLog(1, 'increment', '2018/02/11', testDb)
    .then(res => {
      expect(res).toEqual([4])
    })
})
