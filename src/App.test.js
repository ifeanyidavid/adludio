import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

test("Login page renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".page")).toHaveLength(1);
});
