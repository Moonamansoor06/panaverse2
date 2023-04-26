
export default async function fetchCoreDesc(coreId: string) {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=coreDesc&fields.coreId=${coreId}`
    );
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await res.json();
  {console.log("data for desc is",data)}
    // if (data?.items.length === 0) {
    //   throw new Error(`No data found for coreId ${coreId}`);
    // }
  
    return data
  }