import { resolve } from "path";

export default async function getHospitals() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  const response = await fetch("http://localhost:5000/api/v1/hospitals", {
    next: { tags: ["Hospital"] },
  });

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }

  return await response.json();
}
