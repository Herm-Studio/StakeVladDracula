import { NextRequest, NextResponse } from 'next/server';

const DEBUG = process.env.NODE_ENV === 'development' || process.env.DEBUG === 'true';

const ROUTES = [
  { pattern: /^headers$/, host: 'httpbin.org', name: 'HTTPBin' },
  { pattern: /^v1\/responses/, host: 'api.openai.com', name: 'OpenAI-Responses' },
  { pattern: /^v1\/messages/, host: 'api.anthropic.com', name: 'Claude' },
  { pattern: /^v1\/complete/, host: 'api.anthropic.com', name: 'Claude' },
  { pattern: /^v1beta/, host: 'generativelanguage.googleapis.com', name: 'Gemini' },
  { pattern: /^openai\/v1/, host: 'api.groq.com', name: 'Groq' },
  { pattern: /^v1/, host: 'api.openai.com', name: 'OpenAI' },
];

const EXCLUDED_REQ_HEADERS = ['host', 'connection', 'x-forwarded-for', 'x-forwarded-proto', 'x-forwarded-host', 'cf-ray', 'cf-visitor', 'cf-connecting-ip', 'x-real-ip'];
const EXCLUDED_RES_HEADERS = ['connection', 'transfer-encoding', 'content-encoding', 'set-cookie'];

const findRoute = (path: string) => ROUTES.find(route => route.pattern.test(path));

const buildHeaders = (originalHeaders: Headers, targetHost?: string) => {
  const headers = new Headers();
  
  originalHeaders.forEach((value, key) => {
    const lowerKey = key.toLowerCase();
    if (!EXCLUDED_REQ_HEADERS.includes(lowerKey) && 
        !(lowerKey.startsWith('x-') && lowerKey !== 'x-api-key')) {
      headers.set(key, value);
    }
  });

  if (targetHost) headers.set('host', targetHost);
  headers.set('StakeVladDracula-Router', 'v2.0');
  return headers;
};

const buildResponseHeaders = (originalHeaders: Headers) => {
  const headers = new Headers();
  
  originalHeaders.forEach((value, key) => {
    if (!EXCLUDED_RES_HEADERS.includes(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-Key');
  headers.set('StakeVladDracula-Router', 'v2.0');
  
  return headers;
};

const handleRequest = async (req: NextRequest, pathSegments: string[]): Promise<NextResponse> => {
  const url = new URL(req.url);
  const fullPath = pathSegments.join('/');

  const route = findRoute(fullPath);
  if (!route) {
    return NextResponse.json({ 
      error: 'Invalid API path', 
      path: fullPath,
      available: ROUTES.map(r => r.pattern.source)
    }, { status: 400 });
  }

  const targetUrl = new URL(`https://${route.host}/${fullPath}`);
  url.searchParams.forEach((value, key) => targetUrl.searchParams.set(key, value));

  try {
    const body = ['GET', 'HEAD'].includes(req.method) ? undefined : await req.text();
    const requestHeaders = buildHeaders(req.headers, route.host);

    const response = await fetch(targetUrl.toString(), {
      method: req.method,
      headers: requestHeaders,
      body,
    });

    const responseBody = await response.text();

    return new NextResponse(responseBody, {
      status: response.status,
      statusText: response.statusText,
      headers: buildResponseHeaders(response.headers),
    });

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({
      error: 'Proxy Service Error',
      message: 'Failed to connect to upstream service',
      service: route.name,
      details: DEBUG ? message : undefined,
      timestamp: new Date().toISOString()
    }, { 
      status: 502,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'StakeVladDracula-Router': 'v2.0'
      }
    });
  }
};

export const GET = (req: NextRequest, { params }: { params: { proxy: string[] } }) => 
  handleRequest(req, params.proxy);

export const POST = (req: NextRequest, { params }: { params: { proxy: string[] } }) => 
  handleRequest(req, params.proxy);

export const PUT = (req: NextRequest, { params }: { params: { proxy: string[] } }) => 
  handleRequest(req, params.proxy);

export const DELETE = (req: NextRequest, { params }: { params: { proxy: string[] } }) => 
  handleRequest(req, params.proxy);

export const PATCH = (req: NextRequest, { params }: { params: { proxy: string[] } }) => 
  handleRequest(req, params.proxy);

export const OPTIONS = () => new NextResponse(null, {
  status: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key',
    'Access-Control-Max-Age': '86400',
    'StakeVladDracula-Router': 'v2.0',
  },
});