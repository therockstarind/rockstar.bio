import BlogLayout from "@layout/BlogLayout";
import Metadata from "@components/MetaData";
import MDXComponents from "@components/MDXComponents";
import PageNotFound from "src/pages/404";
import MDXContent from "@lib/MDXContent";
import { MDXRemote } from "next-mdx-remote";
import { GetStaticPropsContext } from "next";
import { PostType } from "@lib/types";
import { UserName } from "@/utils/utils";

export default function Post({
  post,
  error,
}: {
  post: PostType;
  error: boolean;
}) {
  if (error) return <PageNotFound />;

  return (
    <>
      <Metadata
        title={post.meta.title}
        suffix={UserName}
        description={post.meta.excerpt}
        previewImage={post.meta.image}
        keywords={post.meta.keywords}
      />

      <BlogLayout post={post}>
        <MDXRemote
          {...post.source}
          frontmatter={{
            slug: post.meta.slug,
            excerpt: post.meta.excerpt,
            title: post.meta.title,
            date: post.meta.date,
            keywords: post.meta.keywords,
            image: post.meta.image,
          }}
          components={MDXComponents}
        />
      </BlogLayout>
    </>
  );
}

type StaticProps = GetStaticPropsContext & {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: StaticProps) {
  const { slug } = params;
  const { post } = await new MDXContent("posts").getPostFromSlug(slug);

  if (post != null) {
    return {
      props: {
        error: false,
        post,
      },
    };
  } else {
    return {
      props: {
        error: true,
        post: null,
      },
    };
  }
}

export async function getStaticPaths() {
  const paths = new MDXContent("posts")
    .getSlugs()
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
