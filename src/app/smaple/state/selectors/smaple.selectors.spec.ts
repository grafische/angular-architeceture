import * as fromSmaple from '../reducers/smaple.reducer';
import { selectSmapleState } from './smaple.selectors';

describe('Smaple Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSmapleState({
      [fromSmaple.smapleFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
