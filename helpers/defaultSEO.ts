import { NextSeoProps } from "next-seo";

const defaultSEO: NextSeoProps = {
  titleTemplate: "%s",
  defaultTitle: "longux.xyz",
  description: "URL Shortener app by Joël Kuijper",
  canonical: `${process.env.NEXT_PUBLIC_ORIGIN}/`,

  openGraph: {
    url: `${process.env.NEXT_PUBLIC_ORIGIN}/`,
    title: "URL Shortener",
    description: "URL Shortener app by Joël Kuijper",
    type: "website",
  },
};

export { defaultSEO };
