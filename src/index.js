addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);

  // Example: Mock API Response
  const mockResponse = {
    title: "Example Movie",
    year: 2024,
    available_on: ["Netflix", "Amazon Prime"],
  };

  return new Response(JSON.stringify(mockResponse), {
    headers: { 'Content-Type': 'application/json' },
  });
}
