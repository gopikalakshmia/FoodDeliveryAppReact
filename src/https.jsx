export async function fetchMealfromDb(){

    let response=await fetch("http://localhost:3000/meals");
        let result=await response.json();
        if(!response.ok){
            throw new error("Meals data is not fetched");
            return;
        }
        return result;

}