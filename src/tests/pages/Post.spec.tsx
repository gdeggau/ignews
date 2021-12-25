import { render, screen } from "@testing-library/react";
import { getSession } from "next-auth/client";
import { mocked } from "ts-jest/utils";
import PostPage, { getServerSideProps, Post } from "../../pages/posts/[slug]";
import { getPrismicClient } from "../../services/prismic";

jest.mock("../../services/prismic");
jest.mock("next-auth/client");

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

  it("redirects user if no subscription is found", async () => {
    const getSessionMocked = mocked(getSession);
    getSessionMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({
      params: {
        slug: "my-new-post",
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: "/posts/preview/my-new-post",
        }),
      })
    );
  });
});
