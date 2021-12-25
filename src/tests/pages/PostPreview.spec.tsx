import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/client";
import { mocked } from "ts-jest/utils";
import PostPreview, { Post } from "../../pages/posts/preview/[slug]";

jest.mock("../../services/prismic");
jest.mock("next-auth/client");

const post: Post = {
  slug: "my-new-post",
  title: "My new post",
  content: "<p>Post excerpt</p>",
  updatedAt: "2020-01-01",
};

describe("Post preview page", () => {
  it("renders correctly", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false]);
    render(<PostPreview post={post} />);
    expect(screen.getByText("My new post")).toBeInTheDocument();
    expect(screen.getByText("Post excerpt")).toBeInTheDocument();
    expect(screen.getByText("Wanna continue reading?")).toBeInTheDocument();
  });
});
