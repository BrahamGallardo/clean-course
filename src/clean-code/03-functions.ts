(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: number ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( movieId: number ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: number ) {
        console.log({ actorId });
    }
    
    // Crear una película
    interface Movie {
        title:          string;
        description:    string;
        rating:         number;
        cast:           string[];
    }
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName: string) {
        let exist: Boolean = false;
        console.log({ fullName});
        return exist;
    }
    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }
    //Continue
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if (isDead) return 1500;
        
        if ( isSeparated ) return 2500;

        return isRetired ? 3000 : 4000;
    }

    
    


})();
