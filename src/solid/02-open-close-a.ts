import { PhotosService, PokemonService, PostService, TodoService } from './02-open-close-b';
import { HttpClient } from './02-open-close-c';

(async () => {

  const http = new HttpClient();

    const todoService = new TodoService(http);
    const postService = new PostService(http);
    const photosService = new PhotosService(http);
    const pokemonService = new PokemonService(http);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    const pokemons = await pokemonService.getPokemons();
    
    console.log({ todos, posts, photos, pokemons });
    

})();