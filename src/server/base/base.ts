export default `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Boilerplate</title>
      <link href="/styles/bundle.css" rel="stylesheet" />
    </head>
    <body>
      <div id="root">{{HTML}}</div>
      <script>
        window.__PRELOADED_STATE__ = {{STATE}}
      </script>
      <script defer src="/scripts/bundle.js"></script>
    </body>
  </html>
`;
