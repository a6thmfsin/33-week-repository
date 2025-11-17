//fetch GET reuqest using async/await
async function getData() {                                             //define async function getData 
    const url = "http://api.example_domain.com/data.json";             //define URL to fetch data from
    try {
        const response = await fetch(url);                             //waits for the server to respond, await the fetch() promise and store the response object
        if (!response.ok) {                                            //if HTTP status code != 2xx
            throw new Error(`Error: ${response.status}`);              //throws error with response code status, ${response.statusText}
        }
    
        const result = await response.json();                          //waits to parse the response as JSON
        console.log(result);                                           //logs result to console

    }   catch (err) {                                                  //catch error 
        console.error(err.message);                                    //logs error to console
    }
}