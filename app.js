console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let watching = new Promise(userWatchingLiveStream)
{
    if(userWatchingLiveStream)
    {
        resolve("Thumbs up and Subscribe!");
    }
    else
    {
        PromiseRejectionEvent("User left.");
    }
}

watching.then();
watching.catch();