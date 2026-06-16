export default {
  async fetch(request, env) {
    const allowedOrigin = env.ALLOWED_ORIGIN;

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(allowedOrigin),
      });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, allowedOrigin);
    }

    try {
      const body = await request.json();
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim();
      const message = String(body.message || '').trim();

      if (name.length < 2 || !email.includes('@') || message.length < 10) {
        return json({ error: 'Invalid payload' }, 400, allowedOrigin);
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

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
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
