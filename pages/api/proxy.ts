import type { NextRequest, NextFetchEvent } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default async function handler(req: NextRequest) {

  const url = new URL(req.url);

  if (url.pathname.startsWith('/v1beta')) {
    url.host = 'generativelanguage.googleapis.com';
  } else {
    url.host = 'api.openai.com';
  }

  url.protocol = 'https:';
  url.port = '';

  const headers = new Headers(req.headers)
  headers.delete('x-vercel-proxied-for')
  headers.delete('x-forwarded-for');
  headers.delete('x-forwarded-host');
  headers.delete('x-real-ip');
  headers.delete('x-vercel-forwarded-for');
  headers.delete('x-vercel-deployment-url');
  headers.delete('X-Vercel-Deployment-Url');
  headers.delete('X-Vercel-Edge-Region');
  headers.delete('X-Vercel-Id');
  headers.delete('X-Vercel-Ip-City');
  headers.delete('X-Vercel-Ip-Country');
  headers.delete('X-Vercel-Ip-Country-Region');
  headers.delete('X-Vercel-Ip-Latitude');
  headers.delete('X-Vercel-Ip-Longitude');
  headers.delete('X-Vercel-Ip-Timezone');
  headers.delete('X-Vercel-Sc-Basepath');
  headers.delete('X-Vercel-Sc-Host');
  headers.delete('X-Amzn-Trace-Id');
  headers.delete('X-Invoke-Output');
  headers.delete('X-Invoke-Path');
  headers.delete('X-Invoke-Query');
  headers.delete('X-Middleware-Invoke');
  headers.delete('X-Middleware-Subrequest');

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