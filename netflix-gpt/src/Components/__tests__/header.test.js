import {render , screen} from "@testing-library/react"
import Header from "../Header";

test("Should header loaded",()=>{
    render(<Header/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});