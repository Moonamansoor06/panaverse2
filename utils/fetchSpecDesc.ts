
export default async function fetchSpecDesc(specialId: string) {
  console.log("special id from fetch is",specialId)
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=specialDesc&fields.specialId=${specialId}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
{console.log("data for desc is",data)}
  if (data?.items.length === 0) {
    throw new Error(`No data found for specialId ${specialId}`);
  }

  return data
}