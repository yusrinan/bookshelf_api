const {
  addBookHandler,
  getAllBooksHandler,
  getDetailedBookByIdHandler,
  editBookDataByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  }, {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  }, {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailedBookByIdHandler,
  }, {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookDataByIdHandler,
  }, {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
