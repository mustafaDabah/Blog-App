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
      {
        postId: 2,
        id: 6,
        name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        email: 'Presley.Mueller@myrl.com',
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in',
      },
      {
        postId: 2,
        id: 7,
        name: 'repellat consequatur praesentium vel minus molestias voluptatum',
        email: 'Dallas@ole.me',
        body: 'maiores sed dolores similique labore et inventore et quasi temporibus esse sunt id et eos voluptatem aliquam aliquid ratione corporis molestiae mollitia quia et magnam dolor',
      },
      {
        postId: 2,
        id: 8,
        name: 'et omnis dolorem',
        email: 'Mallory_Kunze@marie.org',
        body: 'ut voluptatem corrupti velit ad voluptatem maiores et nisi velit vero accusamus maiores voluptates quia aliquid ullam eaque',
      },
      {
        postId: 2,
        id: 9,
        name: 'provident id voluptas',
        email: 'Meghan_Littel@rene.us',
        body: 'sapiente assumenda molestiae atque adipisci laborum distinctio aperiam et ab ut omnis et occaecati aspernatur odit sit rem expedita quas enim ipsam minus',
      },
      {
        postId: 2,
        id: 10,
        name: 'eaque et deleniti atque tenetur ut quo ut',
        email: 'Carmen_Keeling@caroline.name',
        body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla quia quas dolores velit et non aut quia necessitatibus nostrum quaerat nulla et accusamus nisi facilis',
      },
      {
        postId: 3,
        id: 11,
        name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
        email: 'Veronica_Goodwin@timmothy.net',
        body: 'ut dolorum nostrum id quia aut est fuga est inventore vel eligendi explicabo quis consectetur aut occaecati repellat id natus quo est ut blanditiis quia ut vel ut maiores ea',
      },
      {
        postId: 3,
        id: 12,
        name: 'modi ut eos dolores illum nam dolor',
        email: 'Oswald.Vandervort@leanne.org',
        body: 'expedita maiores dignissimos facilis ipsum est rem est fugit velit sequi eum odio dolores dolor totam occaecati ratione eius rem velit',
      },
      {
        postId: 3,
        id: 13,
        name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
        email: 'Kariane@jadyn.tv',
        body: 'fuga eos qui dolor rerum inventore corporis exercitationem corporis cupiditate et deserunt recusandae est sed quis culpa eum maiores corporis et',
      },
      {
        postId: 3,
        id: 14,
        name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
        email: 'Nathan@solon.io',
        body: 'vel quae voluptas qui exercitationem voluptatibus unde sed minima et qui ipsam aspernatur expedita magnam laudantium et et quaerat ut qui dolorum',
      },
      {
        postId: 3,
        id: 15,
        name: 'debitis magnam hic odit aut ullam nostrum tenetur',
        email: 'Maynard.Hodkiewicz@roberta.com',
        body: 'nihil ut voluptates blanditiis autem odio dicta rerum quisquam saepe et est sunt quasi nemo laudantium deserunt molestias tempora quo quia',
      },
      {
        postId: 4,
        id: 16,
        name: 'perferendis temporibus delectus optio ea eum ratione dolorum',
        email: 'Christine@ayana.info',
        body: 'iste ut laborum aliquid velit facere itaque quo ut soluta dicta voluptate error tempore aut et sequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis',
      },
      {
        postId: 4,
        id: 17,
        name: 'eos est animi quis',
        email: 'Preston_Hudson@blaise.tv',
        body: 'consequatur necessitatibus totam sed sit dolorum recusandae quae odio excepturi voluptatum harum voluptas quisquam sit ad eveniet delectus doloribus odio qui non labore',
      },
      {
        postId: 4,
        id: 18,
        name: 'aut et tenetur ducimus illum aut nulla ab',
        email: 'Vincenza_Klocko@albertha.name',
        body: 'veritatis voluptates necessitatibus maiores corrupti neque et exercitationem amet sit et ullam velit sit magnam laborum magni ut molestias',
      },
    ]),
  )),
  rest.put('https://jsonplaceholder.typicode.com/comments/1', (req, res, ctx) => res(
    ctx.json({
      id: 1,
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
      {
        userId: 1,
        id: 5,
        title: 'eaque aut omnis a',
      },
      {
        userId: 1,
        id: 6,
        title: 'natus impedit quibusdam illo est',
      },
      {
        userId: 1,
        id: 7,
        title: 'quibusdam autem aliquid et et quia',
      },
      {
        userId: 1,
        id: 8,
        title: 'qui fuga est a eum',
      },
      {
        userId: 1,
        id: 9,
        title: 'saepe unde necessitatibus rem',
      },
      {
        userId: 1,
        id: 10,
        title: 'distinctio laborum qui',
      },
      {
        userId: 2,
        id: 11,
        title: 'quam nostrum impedit mollitia quod et dolor',
      },
      {
        userId: 2,
        id: 12,
        title: 'consequatur autem doloribus natus consectetur',
      },
      {
        userId: 2,
        id: 13,
        title: 'ab rerum non rerum consequatur ut ea unde',
      },
      {
        userId: 2,
        id: 14,
        title: 'ducimus molestias eos animi atque nihil',
      },
      {
        userId: 2,
        id: 15,
        title: 'ut pariatur rerum ipsum natus repellendus praesentium',
      },
      {
        userId: 2,
        id: 16,
        title: 'voluptatem aut maxime inventore autem magnam atque repellat',
      },
      {
        userId: 2,
        id: 17,
        title: 'aut minima voluptatem ut velit',
      },
      {
        userId: 2,
        id: 18,
        title: 'nesciunt quia et doloremque',
      },
      {
        userId: 2,
        id: 19,
        title: 'velit pariatur quaerat similique libero omnis quia',
      },
      {
        userId: 2,
        id: 20,
        title: 'voluptas rerum iure ut enim',
      },
      {
        userId: 3,
        id: 21,
        title: 'repudiandae voluptatem optio est consequatur rem in temporibus et',
      },
      {
        userId: 3,
        id: 22,
        title: 'et rem non provident vel ut',
      },
      {
        userId: 3,
        id: 23,
        title: 'incidunt quisquam hic adipisci sequi',
      },
      {
        userId: 3,
        id: 24,
        title: 'dolores ut et facere placeat',
      },
      {
        userId: 3,
        id: 25,
        title: 'vero maxime id possimus sunt neque et consequatur',
      },
      {
        userId: 3,
        id: 26,
        title: 'quibusdam saepe ipsa vel harum',
      },
      {
        userId: 3,
        id: 27,
        title: 'id non nostrum expedita',
      },
      {
        userId: 3,
        id: 28,
        title: 'omnis neque exercitationem sed dolor atque maxime aut cum',
      },
      {
        userId: 3,
        id: 29,
        title: 'inventore ut quasi magnam itaque est fugit',
      },
      {
        userId: 3,
        id: 30,
        title: 'tempora assumenda et similique odit distinctio error',
      },
      {
        userId: 4,
        id: 31,
        title: 'adipisci laborum fuga laboriosam',
      },
      {
        userId: 4,
        id: 32,
        title: 'reiciendis dolores a ut qui debitis non quo labore',
      },
      {
        userId: 4,
        id: 33,
        title: 'iste eos nostrum',
      },
      {
        userId: 4,
        id: 34,
        title: 'cumque voluptatibus rerum architecto blanditiis',
      },
      {
        userId: 4,
        id: 35,
        title: 'et impedit nisi quae magni necessitatibus sed aut pariatur',
      },
      {
        userId: 4,
        id: 36,
        title: 'nihil cupiditate voluptate neque',
      },
      {
        userId: 4,
        id: 37,
        title: 'est placeat dicta ut nisi rerum iste',
      },
      {
        userId: 4,
        id: 38,
        title: 'unde a sequi id',
      },
      {
        userId: 4,
        id: 39,
        title: 'ratione porro illum labore eum aperiam sed',
      },
      {
        userId: 4,
        id: 40,
        title: 'voluptas neque et sint aut quo odit',
      },
      {
        userId: 5,
        id: 41,
        title: 'ea voluptates maiores eos accusantium officiis tempore mollitia consequatur',
      },
      {
        userId: 5,
        id: 42,
        title: 'tenetur explicabo ea',
      },
      {
        userId: 5,
        id: 43,
        title: 'aperiam doloremque nihil',
      },
      {
        userId: 5,
        id: 44,
        title: 'sapiente cum numquam officia consequatur vel natus quos suscipit',
      },
      {
        userId: 5,
        id: 45,
        title: 'tenetur quos ea unde est enim corrupti qui',
      },
      {
        userId: 5,
        id: 46,
        title: 'molestiae voluptate non',
      },
      {
        userId: 5,
        id: 47,
        title: 'temporibus molestiae aut',
      },
      {
        userId: 5,
        id: 48,
        title: 'modi consequatur culpa aut quam soluta alias perspiciatis laudantium',
      },
      {
        userId: 5,
        id: 49,
        title: 'ut aut vero repudiandae voluptas ullam voluptas at consequatur',
      },
      {
        userId: 5,
        id: 50,
        title: 'sed qui sed quas sit ducimus dolor',
      },
      {
        userId: 6,
        id: 51,
        title: 'odit laboriosam sint quia cupiditate animi quis',
      },
      {
        userId: 6,
        id: 52,
        title: 'necessitatibus quas et sunt at voluptatem',
      },
      {
        userId: 6,
        id: 53,
        title: 'est vel sequi voluptatem nemo quam molestiae modi enim',
      },
      {
        userId: 6,
        id: 54,
        title: 'aut non illo amet perferendis',
      },
      {
        userId: 6,
        id: 55,
        title: 'qui culpa itaque omnis in nesciunt architecto error',
      },
      {
        userId: 6,
        id: 56,
        title: 'omnis qui maiores tempora officiis omnis rerum sed repellat',
      },
      {
        userId: 6,
        id: 57,
        title: 'libero excepturi voluptatem est architecto quae voluptatum officia tempora',
      },
      {
        userId: 6,
        id: 58,
        title: 'nulla illo consequatur aspernatur veritatis aut error delectus et',
      },
      {
        userId: 6,
        id: 59,
        title: 'eligendi similique provident nihil',
      },
      {
        userId: 6,
        id: 60,
        title: 'omnis mollitia sunt aliquid eum consequatur fugit minus laudantium',
      },
      {
        userId: 7,
        id: 61,
        title: 'delectus iusto et',
      },
      {
        userId: 7,
        id: 62,
        title: 'eos ea non recusandae iste ut quasi',
      },
      {
        userId: 7,
        id: 63,
        title: 'velit est quam',
      },
      {
        userId: 7,
        id: 64,
        title: 'autem voluptatem amet iure quae',
      },
      {
        userId: 7,
        id: 65,
        title: 'voluptates delectus iure iste qui',
      },
      {
        userId: 7,
        id: 66,
        title: 'velit sed quia dolor dolores delectus',
      },
      {
        userId: 7,
        id: 67,
        title: 'ad voluptas nostrum et nihil',
      },
      {
        userId: 7,
        id: 68,
        title: 'qui quasi nihil aut voluptatum sit dolore minima',
      },
      {
        userId: 7,
        id: 69,
        title: 'qui aut est',
      },
      {
        userId: 7,
        id: 70,
        title: 'et deleniti unde',
      },
      {
        userId: 8,
        id: 71,
        title: 'et vel corporis',
      },
      {
        userId: 8,
        id: 72,
        title: 'unde exercitationem ut',
      },
      {
        userId: 8,
        id: 73,
        title: 'quos omnis officia',
      },
      {
        userId: 8,
        id: 74,
        title: 'quia est eius vitae dolor',
      },
      {
        userId: 8,
        id: 75,
        title: 'aut quia expedita non',
      },
      {
        userId: 8,
        id: 76,
        title: 'dolorem magnam facere itaque ut reprehenderit tenetur corrupti',
      },
      {
        userId: 8,
        id: 77,
        title: 'cupiditate sapiente maiores iusto ducimus cum excepturi veritatis quia',
      },
      {
        userId: 8,
        id: 78,
        title: 'est minima eius possimus ea ratione velit et',
      },
      {
        userId: 8,
        id: 79,
        title: 'ipsa quae voluptas natus ut suscipit soluta quia quidem',
      },
      {
        userId: 8,
        id: 80,
        title: 'id nihil reprehenderit',
      },
      {
        userId: 9,
        id: 81,
        title: 'quibusdam sapiente et',
      },
      {
        userId: 9,
        id: 82,
        title: 'recusandae consequatur vel amet unde',
      },
      {
        userId: 9,
        id: 83,
        title: 'aperiam odio fugiat',
      },
      {
        userId: 9,
        id: 84,
        title: 'est et at eos expedita',
      },
      {
        userId: 9,
        id: 85,
        title: 'qui voluptatem consequatur aut ab quis temporibus praesentium',
      },
      {
        userId: 9,
        id: 86,
        title: 'eligendi mollitia alias aspernatur vel ut iusto',
      },
      {
        userId: 9,
        id: 87,
        title: 'aut aut architecto',
      },
      {
        userId: 9,
        id: 88,
        title: 'quas perspiciatis optio',
      },
      {
        userId: 9,
        id: 89,
        title: 'sit optio id voluptatem est eum et',
      },
      {
        userId: 9,
        id: 90,
        title: 'est vel dignissimos',
      },
      {
        userId: 10,
        id: 91,
        title: 'repellendus praesentium debitis officiis',
      },
      {
        userId: 10,
        id: 92,
        title: 'incidunt et et eligendi assumenda soluta quia recusandae',
      },
      {
        userId: 10,
        id: 93,
        title: 'nisi qui dolores perspiciatis',
      },
      {
        userId: 10,
        id: 94,
        title: 'quisquam a dolores et earum vitae',
      },
      {
        userId: 10,
        id: 95,
        title: 'consectetur vel rerum qui aperiam modi eos aspernatur ipsa',
      },
      {
        userId: 10,
        id: 96,
        title: 'unde et ut molestiae est molestias voluptatem sint',
      },
      {
        userId: 10,
        id: 97,
        title: 'est quod aut',
      },
      {
        userId: 10,
        id: 98,
        title: 'omnis quia possimus nesciunt deleniti assumenda sed autem',
      },
      {
        userId: 10,
        id: 99,
        title: 'consectetur ut id impedit dolores sit ad ex aut',
      },
      {
        userId: 10,
        id: 100,
        title: 'enim repellat iste',
      },
    ]),
  )),
  rest.delete('https://jsonplaceholder.typicode.com/comments/1', (req, res, ctx) => res(
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
      {
        postId: 2,
        id: 6,
        name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        email: 'Presley.Mueller@myrl.com',
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in',
      },
    ]),
  )),

];
