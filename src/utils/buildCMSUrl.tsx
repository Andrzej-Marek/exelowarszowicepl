export const buildCMSUrl = (path: string) => {
  const host = process.env.NEXT_PUBLIC_CMS_BASE_URL;
  console.log("host", host);
  return `${host}/${path}`.replaceAll("//", "/");
};
