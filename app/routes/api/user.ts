import { Response } from "@remix-run/node";

export async function loader({ request }: any) {
  const data = { name: "owii" };
  console.log(request.method);
  switch (request.method) {
    case "GET":
      break;

    default:
      break;
  }
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
