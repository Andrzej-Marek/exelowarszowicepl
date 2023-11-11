const host =
  process.env.NEXT_PUBLIC_CMS_BASE_URL ?? "https://cms.exelo-warszowice.pl";

export const buildUrl = (path: string) => {
  return `${host}/${path}`.replaceAll("//", "/");
};
