import { NextResponse } from 'next/server';
import https from '@/app/utils/axios';

export async function POST() {
    const response = await https.post('api/register').then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log('finally')
    });
    return NextResponse.json(response);
}