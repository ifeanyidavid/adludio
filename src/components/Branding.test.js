import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Branding from "./Branding";

configure({ adapter: new Adapter() });

test("Branding renders correctly", () => {
  const wrapper = shallow(<Branding />);
  expect(wrapper.find(".branding")).toHaveLength(1);
});
