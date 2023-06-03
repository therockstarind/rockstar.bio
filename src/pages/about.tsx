import MDXContent from "@lib/MDXContent";
import pageMeta from "@content/meta";
import { PostType } from "@lib/types";
import StaticPage from "@components/StaticPage";

export default function About({ about }: { about: PostType }) {
  return (
    <>
      <StaticPage metadata={pageMeta.about} page={about} />
    </>
  );
}

export async function getStaticProps() {
  const mdxContent = new MDXContent("static_pages");
  const { post: about } = await mdxContent.getPostFromSlug("about");

  return {
    props: {
      about,
    },
  };
}
