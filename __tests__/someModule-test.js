import someModule from '../lib/someModule'

/** @test {someModule} */
describe('someModule test suits', function () {
  /** @test {someModule#add} */
  test('#add()', () => {
    expect(someModule.add(4, 4)).toBe(8)
  })
})
