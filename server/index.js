const Koa = require('koa')
const app = new Koa()

const history = require('./middleware/koa2-connect-history-api-fallback');
const serve = require('koa-static')

app.use(history({
  verbose: true
}));

app.use(serve(__dirname + '/dist', {extensions: ['html']}))
app.listen(8088)