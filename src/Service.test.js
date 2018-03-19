import {Service} from './Service'

beforeEach(function() {

  global.fetch = jest.fn().mockImplementation(() => {
    var p = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status: 200,
        Id: '123',
        json: function() {
          return {Id: '123'}
        }
      });
    });

    return p;
  });

});


it("searches the specified test", async function() {
  const response = await Service('bookName');
  expect(response).toMatchSnapshot();
});