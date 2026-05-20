import { useEffect, useState } from 'react';

const HEALTH_URL = '/api/health';

export default function HealthPage() {
  const [data, setData] = useState(null);
  const [fetchedAt, setFetchedAt] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadHealth() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(HEALTH_URL);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      setData(payload);
      setFetchedAt(new Date().toISOString());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to call API');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadHealth();
  }, []);

  return (
    <main className="page">
      <section className="card">
        <h1>Socx API Health</h1>
        <p className="subtitle">Socx Platform</p>

        {loading ? <p>Loading health check...</p> : null}
        {error ? <p className="error">API error: {error}</p> : null}

        {data ? (
          <div className="details">
            <p>
              <strong>Status:</strong> {data.status}
            </p>
            <p>
              <strong>Service:</strong> {data.service}
            </p>
            <p>
              <strong>API timestamp:</strong> {new Date(data.timestamp).toLocaleString()}
            </p>
            <p>
              <strong>Fetched at:</strong> {new Date(fetchedAt).toLocaleString()}
            </p>
          </div>
        ) : null}

        <button type="button" onClick={loadHealth} disabled={loading}>
          Refresh
        </button>
      </section>
    </main>
  );
}
