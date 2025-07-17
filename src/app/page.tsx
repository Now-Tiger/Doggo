"use client";

import DoggoLanding from "@/components/LandingPage";
// import { Button } from "@/components/ui/button";

export default function Home() {
  // const handleClick = async () => {
  //   const data = await fetch("/api/users", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const res = await data.json();
  //   console.log(res);
  // };

  // const handleClick = async () => {
  //   const body = { password: "StrongPassword" };
  //   const resp = await fetch("/api/user/update-password", {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     headers: { "Content-Type": "application/json"},
  //   });
  //   const res = await resp.json();
  //   console.log(res);
  // }

  return (
    <div>
      {/*<div><Button onClick={handleClick}>Click Me</Button></div>*/}
      {/*<div><Button onClick={handleClick}>Click Me</Button></div>*/}
      <DoggoLanding />
    </div>
  );
}
