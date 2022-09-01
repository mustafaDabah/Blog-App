import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', async (req, res, ctx) => res(
    ctx.json([
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653',
          },
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications',
        },
      },
    ]),
  )),
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => res(
    ctx.json([
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      },
      {
        userId: 2,
        id: 13,
        title: 'dolorum ut in voluptas mollitia et saepe quo animi',
        body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
      },
      {
        userId: 2,
        id: 14,
        title: 'voluptatem eligendi optio',
        body: 'fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum',
      },
      {
        userId: 3,
        id: 29,
        title: 'iusto eius quod necessitatibus culpa ea',
        body: 'odit magnam ut saepe sed non qui tempora atque nihil accusamus illum doloribus illo dolor eligendi repudiandae odit magni similique sed cum maiores',
      },
      {
        userId: 3,
        id: 30,
        title: 'a quo magni similique perferendis',
        body: 'alias dolor cumque impedit blanditiis non eveniet odio maxime blanditiis amet eius quis tempora quia autem rem a provident perspiciatis quia',
      },
    ]),
  )),
  rest.get('https://jsonplaceholder.typicode.com/comments', async (req, res, ctx) => res(
    ctx.json([
      {
        postId: 1,
        id: 4,
        name: 'alias odio sit',
        email: 'Lew@alysha.tv',
        body: 'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati',
      },
      {
        postId: 1,
        id: 5,
        name: 'vero eaque aliquid doloribus et culpa',
        email: 'Hayden@althea.biz',
        body: 'harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et',
      },
    ]),
  )),
  rest.delete('https://jsonplaceholder.typicode.com/comments/5', (req, res, ctx) => res(
    ctx.json([
      {
        postId: 1,
        id: 4,
        name: 'alias odio sit',
        email: 'Lew@alysha.tv',
        body: 'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati',
      },
    ]),
  )),
  rest.put('https://jsonplaceholder.typicode.com/comments/4', async (req, res, ctx) => res(
    ctx.json({
      id: 4,
      name: 'mustafa dabah',
      body: 'I hope you like this project because i am really tired in it ...',
      postId: 1,
    }),
  )),
  rest.get('https://jsonplaceholder.typicode.com/albums', (req, res, ctx) => res(
    ctx.json([
      {
        userId: 1,
        id: 1,
        title: 'quidem molestiae enim',
      },
      {
        userId: 1,
        id: 2,
        title: 'sunt qui excepturi placeat culpa',
      },
      {
        userId: 1,
        id: 3,
        title: 'omnis laborum odio',
      },
      {
        userId: 1,
        id: 4,
        title: 'non esse culpa molestiae omnis sed optio',
      },

    ]),
  )),
  rest.get('https://jsonplaceholder.typicode.com/photos', (req, res, ctx) => res(
    ctx.json([
      {
        albumId: 1,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      },
      {
        albumId: 1,
        id: 2,
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'https://via.placeholder.com/600/771796',
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
      },
      {
        albumId: 1,
        id: 3,
        title: 'officia porro iure quia iusto qui ipsa ut modi',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
      },
      {
        albumId: 1,
        id: 4,
        title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
        url: 'https://via.placeholder.com/600/d32776',
        thumbnailUrl: 'https://via.placeholder.com/150/d32776',
      },
    ]),
  )),
];
