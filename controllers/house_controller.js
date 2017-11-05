module.exports = {
    create: ( req, res, next ) => {
        console.log("Creating new property", req.body);
        const dbInstance = req.app.get('db');
        let {
            user_id,
            house_name,
            description,
            price,
            sq_ft,
            monthly_mortgage,
            address,
            city,
            state,
            zip,
            beds,
            bath,
            year_built,
            imgurl
        } = req.body;

        dbInstance.new_prop(req.body)
        .then((res) => res.status(200).send(res))
        .catch((e) => res.status(500).send(e))
    },

    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        console.log('rXXXXXXXXs', req.session)
    
        dbInstance.get_props([req.session.user.user_id])
          .then(properties => {
            console.log('properties', properties)
            res.status(200).send(properties)
          })
          .catch(err => {
            console.log(err);
            res.status(500).send(err);
          });
    },

    filter: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.filter_props([req.session.user.id, req.query.monthly_mortgage])
          .then(properties => { res.status(200).send(properties) })
          .catch( err => {
            console.log(err);
            res.status(500).send(err);
          });
      },

    delete: ( req, res, next ) => {
        console.log("Deleting property", req.body);
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_prop([ params.id ])
          .then( () => res.status(200).send("property deleted") )
          .catch( () => res.status(500).send() );
      }
};