self.addEventListener('push', function(event) {
    var options={
        body:'This notification was generated from a push!',
        icon:'images/example.png',
        vibrate:[100,50,100],
        data:{
            dateOfArrival:Date.now(),
            primaryKey:'2'
        },
        actions:[
            {action:'explore',title:'Explore this option1', icon:'images/checkmark.png'},
            {action:'close',title:'Close', icon:'images/xmark.png'}
        ]
    };
    // const analyticsPromise = pushReceivedTracking();
    // const pushInfoPromise = fetch('/api/get-more-data')
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(response) {
    //     const title = response.data.userName + ' says...';
    //     const message = response.data.message;

    //     self.registration.showNotification(title, {
    //     body: message
    //     });
    // });

    // const promiseChain = Promise.all([
    // analyticsPromise,
    // pushInfoPromise
    // ]);

    event.waitUntil(
        self.registration.showNotification('Hello World',options)
    );
});