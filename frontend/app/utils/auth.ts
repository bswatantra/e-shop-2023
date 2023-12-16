'use server';

import { TLoginGrantType } from '../lib/auth';
import { TLoginSchema } from '../lib/types';
import https from './axios';

const apiClientId = process.env.API_CLIENT_ID;
const apiClientSecret = process.env.API_CLIENT_SECRET;

console.debug(apiClientId, apiClientSecret);

if (!apiClientId || !apiClientSecret) {
    throw new Error('API client ID or secret is not defined in the environment variables.');
}

const loginGrant: TLoginGrantType = {
    grant_type: 'password',
    client_id: apiClientId,
    client_secret: apiClientSecret,
    scope: '*',
};

console.debug(loginGrant);

const login = async (data: TLoginSchema) => {
   await https
        .post('oauth/token', { ...data, ...loginGrant })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export { login };
