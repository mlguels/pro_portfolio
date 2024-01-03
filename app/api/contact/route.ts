export default async function handler(req: { method: string; body: any }) {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://formspree.io/f/xjvqjvqd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      return new Response(JSON.stringify(data));
    } catch (error) {
      console.error(error);
      return new Response("Internal server error", { status: 500 });
    }
  } else {
    return new Response("Error sending message", { status: 400 });
  }
}
