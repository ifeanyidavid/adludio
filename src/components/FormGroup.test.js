import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FormGroup from "./FormGroup";

configure({ adapter: new Adapter() });

test("Form Group renders correctly", () => {
  const props = { type: "text", id: "email", label: "Email" };
  const wrapper = shallow(<FormGroup {...props} />);
  expect(wrapper.find(".form-group")).toHaveLength(1);
});
