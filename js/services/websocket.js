app.factory('donateMsg', function($websocket) {

    var dataStream = $websocket('ws://custommaid3d2.net:8888/donatesocket')
    var collection = {
        totalmoney: null,
        donaters: [],
    }
    
    dataStream.onMessage(function(message){
        msg = JSON.parse(message.data);
        collection.totalmoney = msg.totalmoney;
        collection.donaters = msg.donaters;
        //console.log(collection);
    });

    return collection;
})