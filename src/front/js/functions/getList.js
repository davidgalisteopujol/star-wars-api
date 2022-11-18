export const getList = async (resource) => {
    
    try {
            
        const response = await fetch(`https://www.swapi.tech/api/${resource}`); 
        const responseJSON = await response.json();
        return responseJSON;
        
    } catch (error) {
        console.error("GET error: ", error);
    }
}