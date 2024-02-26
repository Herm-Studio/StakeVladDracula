import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default async function handler(req: NextRequest) {
  console.log('Original Request Headers:', JSON.stringify(Object.fromEntries(req.headers)));

  const url = new URL(req.url);
  
  url.protocol = 'https:';
  url.host = 'api.openai.com';
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
  
  const response = await fetch(
    url.toString(),
    {
      method: req.method,
      headers: headers,
      body: req.body,
      signal: req.signal,
    }
  )

  return response;
}
