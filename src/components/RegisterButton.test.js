import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RegisterButton from "./RegisterButton";

configure({ adapter: new Adapter() });

test("RegisterButton renders correctly", () => {
  const wrapper = shallow(<RegisterButton />);
  expect(wrapper.find(".register-btn")).toHaveLength(1);
});
