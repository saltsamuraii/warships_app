import { renderHook } from '@testing-library/react-hooks';
import { getShips } from '../../helpers/getShips';
import useShips from './useShips';

jest.mock('../../helpers/getShips', () => ({
  getShips: jest.fn(),
}));

describe('useShips', () => {
  const mockedDataShips = jest.mocked(getShips);
  mockedDataShips.mockImplementation(() =>
    Promise.resolve([
      { id: '1', name: 'ship1' },
      { id: '2', name: 'ship2' },
    ])
  );

  it('should fetch ships', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useShips());

    await waitForNextUpdate()
      expect(result.current.isLoading).toBe(false);
      expect(result.current.ships).toHaveLength(2);
      expect(result.current.ships).toEqual([
        { id: '1', name: 'ship1' },
        { id: '2', name: 'ship2' },
      ]);
  });

  it('should show loading is true when ships equal empty array', () => {
    const { result } = renderHook(() => useShips());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.ships).toEqual([]);
  });
});
