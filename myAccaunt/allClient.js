class AllClient{
    constructor(){

    };

    getClient(){
        let clients = [];
        let clientsLcStorage = localStorage.getItem('AllClient');

        if(clientsLcStorage !== null){
            clients = JSON.parse(clientsLcStorage);
        };
        return clients;
    };

    putClient(){
        let clients = this.getClient();
        let index = clients.indexOf();
        let statusClients = [
            {   
                users:'Client',
                name: '',
                login: '',
                password: '',
                email_users: ''
        
            }
        ];

        if(index === -1){
            clients.push();
            statusClients = true;
        } else {
            clients.splice(index, 1);
            statusClients = false;
        }

        localStorage.setItem('AllClient', JSON.stringify(clients));
        return {
            clients: clients,
            statusClients: statusClients
        }
    }
}
/* 
let clients = new AllClient();
let result = clients.putProduct(); */