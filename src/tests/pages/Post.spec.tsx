import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import PostPage, { getServerSideProps, Post } from "../../pages/posts/[slug]";
import { getPrismicClient } from "../../services/prismic";

jest.mock("../../services/prismic");

const post: Post = {
  slug: "my-new-post",
  title: "My new post",
  content: "<p>Post excerpt</p>",
  updatedAt: "2020-01-01",
};

describe("Post page", () => {
  it("renders correctly", () => {
    render(<PostPage post={post} />);
    expect(screen.getByText("My new post")).toBeInTheDocument();
    expect(screen.getByText("Post excerpt")).toBeInTheDocument();
  });
});
