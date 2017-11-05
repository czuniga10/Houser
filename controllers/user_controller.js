module.exports = {
  register: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // const { username, password } = req.body;

    dbInstance.register({username, password})
      .then(response => {
        req.session.user = response[0];
        res.status(200).send(response)
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send(e)
      })
  },

  login: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log("You have been logged in!")

    dbInstance.login([req.body.username, req.body.password])
      .then(response => {
        req.session.user = response[0];
        console.log('xxxxxx', req.session.user);
        res.status(200).send(response)
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send(e)
      })
    console.log(req.session.user)

  },

  logout: (req, res, next) => {
    console.log("Logged out, yo!")
    req.session.destroy(function (e) {
      console.log(req.session);
      console.log(e);
      res.status(200).send("It is done.");
    })
  }
}