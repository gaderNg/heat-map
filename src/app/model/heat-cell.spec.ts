import { HeatCell } from './heat-cell';

describe('HeatCell', () => {
  it('should create an instance', () => {
    expect(new HeatCell(1, "test", "Tooltip Text")).toBeTruthy();
  });
});
