//server generate
const koa = require('koa');

const app = new koa();

app.use((ctx,next) => {
    console.log(ctx.url);
    console.log(1);
    if(ctx.query.authorized !== '1'){
        ctx.status = 401;
        return;
    }
    next();
})

app.use((ctx,next) => {    
    console.log(2);
    next();
})

app.use(ctx => {
    ctx.body = 'hello world';
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
})
