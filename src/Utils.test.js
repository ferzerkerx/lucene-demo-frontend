import { checkStatus } from './Utils';

it('should throw error when response is not successful', () => {
  function check() {
    checkStatus({ status: 400 });
  }
  expect(check).toThrowErrorMatchingSnapshot();
});

it('should return successful response', () => {
  let response = { status: 200 };
  expect(checkStatus(response)).toBe(response);
});
