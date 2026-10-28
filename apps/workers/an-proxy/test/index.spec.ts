import { env, createExecutionContext, waitOnExecutionContext } from 'cloudflare:test';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import worker from '../src/index';

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('AN Proxy Worker', () => {
	describe('CORS preflight', () => {
		it('responds to OPTIONS with CORS headers', async () => {
			const request = new IncomingRequest('http://example.com/api/events', { method: 'OPTIONS' });
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);

			expect(response.headers.get('Access-Control-Allow-Origin')).toBe('*');
			expect(response.headers.get('Access-Control-Allow-Methods')).toContain('GET');
		});
	});

	describe('proxy requests', () => {
		beforeEach(() => {
			vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ test: true }), { status: 200 }));
		});

		afterEach(() => {
			vi.restoreAllMocks();
		});

		it('forwards GET to the Action Network API', async () => {
			const request = new IncomingRequest('http://example.com/api/events');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);

			expect(globalThis.fetch).toHaveBeenCalledWith('https://actionnetwork.org/api/v2/events', expect.objectContaining({ method: 'GET' }));
			expect(response.status).toBe(200);
			expect(response.headers.get('Access-Control-Allow-Origin')).toBe('*');
		});

		it('includes OSDI-API-Token in the forwarded request', async () => {
			const request = new IncomingRequest('http://example.com/api/events');
			const ctx = createExecutionContext();
			await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);

			expect(globalThis.fetch).toHaveBeenCalledWith(
				expect.any(String),
				expect.objectContaining({
					headers: expect.objectContaining({
						'OSDI-API-Token': env.AN_API_KEY,
					}),
				}),
			);
		});

		it('preserves query parameters when forwarding', async () => {
			const request = new IncomingRequest('http://example.com/api/events?page=2');
			const ctx = createExecutionContext();
			await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);

			expect(globalThis.fetch).toHaveBeenCalledWith('https://actionnetwork.org/api/v2/events?page=2', expect.anything());
		});
	});
});
