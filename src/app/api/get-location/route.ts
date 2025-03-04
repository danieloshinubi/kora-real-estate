export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return new Response(JSON.stringify({ error: "Missing latitude or longitude" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 100000);

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
      {
        headers: {
          "User-Agent": "KORA-REAL-ESTATE/1.0 (olusanyajolaoluwa@gmail.com)",
        },
        signal: controller.signal,
      }
    );

    clearTimeout(timeout); // Ensure timeout is cleared

    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }

    const data = await response.json(); // Store in a variable first
    // console.log(data); // Log the data without calling .json() again

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching geocode data:", error);

    if (error instanceof Error && error.name === "AbortError") {
      return new Response(JSON.stringify({ error: "Request timed out" }), {
        status: 504,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Failed to fetch location data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
