import { render, fireEvent } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  test("renders the correct content", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Join the solar energy revolution")).toBeInTheDocument();
    expect(
      getByText(
        "We're transforming access to renewable energy with simple, powerful solar solutions for homes, businesses, and communities."
      )
    ).toBeInTheDocument();
    expect(getByText("SOLUTIONS")).toBeInTheDocument();
    expect(getByText("ALL BLUE")).toBeInTheDocument();
    expect(getByText("GO SOLAR")).toBeInTheDocument();
    expect(getByText("ABOUT")).toBeInTheDocument();
    expect(getByText("FEATURES")).toBeInTheDocument();
    expect(getByText("CONTACTS")).toBeInTheDocument();
  });
});
