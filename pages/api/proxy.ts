import type { NextRequest, NextFetchEvent } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default async function handler(req: NextRequest) {

  const url = new URL(req.url);

  if (url.pathname.startsWith('/v1')) {
    url.host = 'api.openai.com';
  } else if (url.pathname.startsWith('/v1beta')) {
    url.host = 'generativelanguage.googleapis.com';
  }

  url.protocol = 'https:';
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
    return new Response('Internal Server Error', { status: 500 });
  }
}
