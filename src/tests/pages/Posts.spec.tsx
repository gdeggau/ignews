import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Posts, { getStaticProps, Post } from "../../pages/posts";

const posts: Array<Post> = [
  {
    slug: "my-new-post",
    title: "My new post",
    excerpt: "Post excerpt",
    updatedAt: "2020-01-01",
  },
];

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);
    expect(screen.getByText("My new post")).toBeInTheDocument();
  });
});
