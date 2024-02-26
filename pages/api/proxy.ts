import type { NextRequest, NextFetchEvent } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default async function handler(req: NextRequest) {
  console.log('Original Request Headers:', JSON.stringify(Object.fromEntries(req.headers)));

  const url = new URL(req.url);
  url.protocol = 'https:';
  url.host = 'api.openai.com';
  url.port = '';

  const headers = new Headers(req.headers);

  headers.forEach((_, key) => {
    if (key.startsWith('x-') || key.startsWith('X-')) {
      headers.delete(key);
    }
  });

  console.log("url.toString()", url.toString());

  try {
    const { method, body, signal } = req;
    const response = await fetch(
      url.toString(),
      {
        method,
        headers,
        body,
        signal,
      }
    );

    return response;
  } catch (error) {
    console.error('Error fetching the proxied request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
