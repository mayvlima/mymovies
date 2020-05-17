const { Movie } = require('../models')

const indexController = {
    index: async (req, res) =>{
      const listaDeFilmes = await Movie.findAll()

      console.log(listaDeFilmes)

        return res.render("index", {listaDeFilmes})
    }, 

    store: async (req, res) => {
        const [poster] = req.files;
        const { name, description, watched } = req.body;        
    
      const newMovie = await Movie.create({
          poster: `/posters/${poster.filename}`,
          name,
          description,
          watched: watched ? 1 : 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        if(!newMovie) {
          return res.render("index", { msg: "Ocorreu um erro ao cadastrar o filme" })
        }    
        return res.redirect("/");
      },
    createWatched: async (req,res) => {
      const { id } = req.params;

      const movie = await Movie.update(
        {
          watched: 1,
        },
        {
          where: {
            id,
          },
        }
      );
  
      if (!movie) {
        return res.render("index", { msg: "Falha ao alterar o filme" });
      }      
      return res.redirect("/");
     
    },
  };

module.exports = indexController;