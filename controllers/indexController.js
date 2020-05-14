const { Movie } = require('../models')

const indexController = {
    create: (_req, res) =>{
        return res.render("index")
    }, 

    store: async (req, res) => {
        const [poster] = req.files;
        const { name, description, watched } = req.body;        
    
        await Movie.create({
          poster: `/posters/${poster.filename}`,
          name,
          description,
          watched: watched ? 1 : 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
    
        return res.redirect("/");
      },
}

module.exports = indexController;