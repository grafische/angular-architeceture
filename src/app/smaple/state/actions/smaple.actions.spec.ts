import * as fromSmaple from './smaple.actions';

describe('loadSmaples', () => {
  it('should return an action', () => {
    expect(fromSmaple.loadSmaples().type).toBe('[Smaple] Load Smaples');
  });
});
