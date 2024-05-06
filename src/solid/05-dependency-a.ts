import { HttpClient } from './02-open-close-c';
import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebAPIService } from './05-dependency-c';


// Main
(async () => {
    const localDataBaseService: LocalDataBaseService = new LocalDataBaseService();
    const localPost: JsonDataBaseService = new JsonDataBaseService();
    const webAPIService: WebAPIService = new WebAPIService();

    const postService = new PostService(webAPIService);

    const posts = await postService.getPosts();

    console.log({ posts })


})();