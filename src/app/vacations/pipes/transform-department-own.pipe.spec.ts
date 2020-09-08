import { TransformDepartmentOwnPipe } from './transform-department-own.pipe';

describe('SummaryTablePipe', () => {
  it('create an instance', () => {
    const pipe = new TransformDepartmentOwnPipe();
    expect(pipe).toBeTruthy();
  });
});
