import { Service } from './Service';

beforeEach(function() {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status: 200,
        Id: '123',
        json: function() {
          return { Id: '123' };
        }
      });
    });
  });
});

it('searches the specified book', async function() {
  const response = await Service('bookName');
  expect(response).toMatchSnapshot();
});
