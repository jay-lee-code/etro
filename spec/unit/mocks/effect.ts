// eslint-disable-next-line no-unused-vars
export function mockBaseEffect () {
  const effect = jasmine.createSpyObj('effect', [
    'apply',
    'getDefaultOptions',
    'tryAttach',
    'tryDetach',
    'whenReady'
  ])
  effect.getDefaultOptions.and.returnValue({})
  effect.tryAttach.and.callFake(movie => {
    // Manually attach layer to movie, because `attach` is stubbed.
    // Otherwise, auto-refresh will cause errors.
    effect.movie = movie
  })
  effect.whenReady.and.resolveTo()

  effect.type = 'effect'
  effect.enabled = true
  effect.ready = true
  return effect
}
