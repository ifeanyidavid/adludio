import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GoogleButton from "./GoogleButton";

configure({ adapter: new Adapter() });

test("Google button renders correctly", () => {
  const wrapper = shallow(<GoogleButton />);
  expect(wrapper.find(".google-btn")).toHaveLength(1);
});
