export const GET = async (req: Request) => {
  const users = [
    { id: "1", star: "AMP" },
    { id: 2, star: "BVP" },
    { id: 3, star: "BOX" },
  ];

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
