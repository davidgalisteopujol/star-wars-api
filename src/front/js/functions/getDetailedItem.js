export const getDetailedItem = async (resource,id) => {
    
    try {
            
        const response = await fetch(`https://www.swapi.tech/api/${resource}/${id}`); 
        const responseJSON = await response.json();
        return responseJSON;
        
    } catch (error) {
        console.error("GET error: ", error);
    }
}