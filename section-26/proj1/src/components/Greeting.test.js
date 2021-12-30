import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

//Describe is used to label test suites
describe("Greeting Component", () => {
  test("renders hello world as text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if button is NOT clicked", () => {
    render(<Greeting />);
    const paraElemet = screen.getByText("good to see you", { exact: false });
    expect(paraElemet).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElemt = screen.getByText("Changed!");
    expect(outputElemt).toBeInTheDocument();
  });

  test("does not renders good to see you if button was clicked", () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElemt = screen.queryByText("good to see you", { exact: false });
    expect(outputElemt).toBeNull();
  });
});

/* describe("Greeting Para", () => {
  test("render Greeting para as text", () => {
    render(<Greeting />);
    const paraElemet = screen.getByTitle("para");
    expect(paraElemet).toBeInTheDocument();
  });
}); */
