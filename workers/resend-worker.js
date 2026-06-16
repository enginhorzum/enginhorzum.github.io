export default {
  async fetch(request, env) {
    const allowedOrigins = getAllowedOrigins(env);
    const requestOrigin = request.headers.get('Origin') || '';
    const allowedOrigin = resolveAllowedOrigin(requestOrigin, allowedOrigins);

    if (request.method === 'OPTIONS') {
      if (requestOrigin && !allowedOrigin) {
        return new Response(null, { status: 403 });
      }

      return new Response(null, {
        status: 204,
        headers: corsHeaders(allowedOrigin),
      });
    }

    if (requestOrigin && !allowedOrigin) {
      return json({ error: 'Origin not allowed' }, 403, '');
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, allowedOrigin);
    }

    try {
      const body = await request.json();
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim();
      const message = String(body.message || '').trim();

      const errors = [];

      if (name.length < 2) {
        errors.push('Name must be at least 2 characters.');
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.push('Email is not valid.');
      }

      if (message.length < 10) {
        errors.push('Message must be at least 10 characters.');
      }

      if (errors.length > 0) {
        return json({ error: 'Invalid payload', details: errors }, 400, allowedOrigin);
      }

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: env.RESEND_FROM,
          to: ['enginhorzum@gmail.com'],
          subject: `Website message from ${name}`,
          reply_to: email,
          text: message,
        }),
      });

      if (!resendResponse.ok) {
        const errText = await resendResponse.text();
        return json({ error: 'Mail send failed', details: errText }, 502, allowedOrigin);
      }

      return json({ ok: true }, 200, allowedOrigin);
    } catch {
      return json({ error: 'Unexpected error' }, 500, allowedOrigin);
    }
  },
};

function getAllowedOrigins(env) {
  const raw = String(env.ALLOWED_ORIGINS || env.ALLOWED_ORIGIN || '');
  return raw
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function resolveAllowedOrigin(requestOrigin, allowedOrigins) {
  if (!requestOrigin) {
    return allowedOrigins[0] || '*';
  }

  return allowedOrigins.includes(requestOrigin) ? requestOrigin : '';
}

function corsHeaders(origin) {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    Vary: 'Origin',
  };

  if (origin) {
    headers['Access-Control-Allow-Origin'] = origin;
  }

  return headers;
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(origin),
      'Content-Type': 'application/json',
    },
  });
}
