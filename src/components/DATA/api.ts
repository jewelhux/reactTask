async function getProductList() {
  const res: Response = await fetch('https://mock-server-api-hcqxe00fv-jik789.vercel.app/catalog');
  return await res.json();
}

async function getSearchProduct(name: string) {
  const res: Response = await fetch(
    `https://mock-server-api-hcqxe00fv-jik789.vercel.app/catalog?title_like=${name}`
  );
  return await res.json();
}

export { getProductList, getSearchProduct };
