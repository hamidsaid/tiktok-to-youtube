import { Client, Account, Databases} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65bed6678c55e48aa1b8'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export { ID } from 'appwrite';
