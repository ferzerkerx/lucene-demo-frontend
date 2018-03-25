import { Service } from './Service';

beforeEach(function() {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status: 200,
        id: '123',
        json: () => {
          return { id: '123' };
        }
      });
    });
  });
});

it('searches the specified book', async function() {
  const response = await Service('bookName');
  expect(response).toMatchSnapshot();
});
