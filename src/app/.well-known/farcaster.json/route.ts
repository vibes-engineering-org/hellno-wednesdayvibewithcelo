import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJoZWxsbm8td2VkbmVzZGF5dmliZXdpdGhjZWxvLnZlcmNlbC5hcHAifQ",
      signature:
        "MHg0NzIxOGM4OWZiYTcxMDFjYzk2MDA5NzM5Yzg0MzZhNzA5ZjViMWJlYjBlODc0YTdiZWFiOGFkNmRhYjE3ZDZjMDZhZjhiOWI1MGVhZmY2ZTVjZjViNjc0Mzk3NmMwMTBmMTdlMDk2MDNhZjE1ZjYyOWYyYzU2MTI4Yzc2NmJlMDFi",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
