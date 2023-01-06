import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  it("should render title, description, and image", () => {
    const title = "Test Title";
    const description = "Test Description";
    const image = "http://test-image.com";

    render(<Card title={title} description={description} image={image} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByTestId("card-image")).toHaveStyle(
      `background-image: url(${image})`
    );
  });
});
