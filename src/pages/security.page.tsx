import { PageHeader } from "@components/commons/PageHeader";
import { Container } from "@components/commons/Container";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import React from "react";
import { remark } from "remark";
import { Head } from "@components/commons/Head";
import { Post } from "./learn/utils/api";
import { getMDPageBySlug } from "../../utils/api";

interface SecurityPageProps {
  props: {
    post: Post;
  };
}

export default function SecurityPage({ post }): JSX.Element {
  return (
    <>
      <Head title={post.title} description={post.description} />
      <PageHeader title={post.title}>
        <div className="mt-10 flex flex-wrap">
          <div
            className="w-full text-2xl text-gray-900"
            data-testid="Header.desc.main"
          >
            {post.description}
          </div>
        </div>
      </PageHeader>
      <Container>
        <article className="prose lg:prose-xl mx-auto py-20">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSanitize,
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: {
                    className: ["no-underline hover:underline"],
                  },
                },
              ],
            ]}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </Container>
    </>
  );
}

export async function getStaticProps(): Promise<SecurityPageProps> {
  const post = getMDPageBySlug("security", "en-US");

  const result = await remark().process(post.content);

  return {
    props: {
      post: {
        ...post,
        content: result.toString(),
      },
    } as any,
  };
}
