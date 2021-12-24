import { render, screen } from "@testing-library/react";
import { SignInButton } from ".";
import { mocked } from "ts-jest/utils";

import { useSession } from "next-auth/client";

jest.mock("next-auth/client");

describe("SignInButton component", () => {
  it("renders correctly when user is not authenticated", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValue([null, false]);

    render(<SignInButton />);
    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });
});
