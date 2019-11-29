import fetcher from '../src/services';

it('call axios to retrun users', () => {
  fetcher('users', '', 'get')
    .then(result => {
      expect(result.data[0].id).toBe(1);
    })
    .catch(error => {});
});

it('call axios to retrun user1 albums', () => {
  fetcher('albums?userId=1', '', 'get')
    .then(result => {
      expect(result.data[0].id).toBe(1);
    })
    .catch(error => {});
});

it('call axios to retrun user1 album photos', () => {
  fetcher('albums/1/photos', '', 'get')
    .then(result => {
      expect(result.data[0].id).toBe(1);
    })
    .catch(error => {});
});
