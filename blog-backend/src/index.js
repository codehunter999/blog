//server generate
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//use router 
router.get('/', ctx => {
    ctx.body='home';
});

router.get('/about', ctx => {
    ctx.body='Introduce';
});


//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

//use middleware
// app.use((ctx, next) => {
//   console.log(ctx.url);
//   console.log(1);
//   if (ctx.query.authorized !== '1') {
//     ctx.status = 401;
//     return;
//   }
//   next().then(() => {
//     console.log('END');
//   });
// });

// app.use((ctx, next) => {
//   console.log(2);
//   next();
// });

// app.use(ctx => {
//   ctx.body = 'hello world';
// });

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
