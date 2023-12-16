import { NextResponse } from 'next/server';
import https from '@/app/utils/axios';

export async function POST() {
    try {
        const response = await https.post('oauth/token');
        console.log(response);
        return NextResponse.json(response);
    } catch (error: any) {
        console.error(error);
        return error
    } finally {
        console.log('finally');
    }
}