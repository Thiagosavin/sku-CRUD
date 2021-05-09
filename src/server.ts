import { app } from './app'

const port = 5000

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server start at port ${port}...`);
});
