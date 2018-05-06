//import axios from 'axios';

//const BASE_URL = 'https://todoappe.azurewebsites.net';

export function getNoteByUser(){
    // const url = `${BASE_URL}/api/v1/note`;
    // return axios.get(url).then(res=>res.data);
    return mockData;
    // eslint-disable-next-line
    console.log(mockData);
}

const mockData = [
    {
        "_id": "5ae6ac0ea508b02bf4349527",
        "body": "TestNote2",
        "test": "",
        "updatedOn": "2018-04-30T05:39:21.012Z",
        "createdOn": "2018-04-30T05:39:21.012Z",
        "userId": "57427a70-eea5-425c-b594-55f65825cb8a"
    },
    {
        "_id": "5ae6ac0ea508b02bf4349526",
        "body": "TestNote1",
        "test": "",
        "updatedOn": "2018-04-30T05:39:21.004Z",
        "createdOn": "2018-04-30T05:39:21.004Z",
        "userId": "57427a70-eea5-425c-b594-55f65825cb8a"
    },
    {
        "_id": "5ae6ac0ea508b02bf4349528",
        "body": "TestNote3",
        "test": "",
        "updatedOn": "2018-04-30T05:39:21.012Z",
        "createdOn": "2018-04-30T05:39:21.012Z",
        "userId": null
    }
]