"use client";

export default function ErrorRoute({ error, reset }) {
  console.error(error);
  return (
    <div>
      Oh no, something went wrong. Perhpas you need to login?
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
