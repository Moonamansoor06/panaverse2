

export async function generateCoreLinks() {

    const response = await fetch( `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=coreCourses`);
    const data = await response.json();
  

    const links = data.items.map((item:any) => ({
      id: item.fields.coreId,
      name:item.fields.name,
      href: `/core/${item.fields.coreId}`,
      label: `Core ${item.fields.coreId}`,
    }));
  console.log(links)
    return links;
  }
  
  export async function generateSpecialLinks() {
    
    const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=specialCourse`);
    const data = await response.json();
  
    
    const links = data.items.map((item:any) => ({
      id: item.fields.specialId,
      name:item.fields.name,
      href: `/special/${item.fields.specialId}`,
      label: `Special ${item.fields.specialId}`,
    }));
  
    return links;
  }
  