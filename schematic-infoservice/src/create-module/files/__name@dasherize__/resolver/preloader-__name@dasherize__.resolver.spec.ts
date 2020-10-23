import { Preloader<%= classify(name) %>Resolver } from './preloader-<%= dasherize(name) %>.resolver';

describe('Preloader <%= classify(name) %>', () => {
  it('should create an instance', () => {
    expect(new Preloader<%= classify(name) %>Resolver()).toBeTruthy();
  });
});
