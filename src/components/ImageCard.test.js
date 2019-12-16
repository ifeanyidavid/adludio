import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ImageCard from "./ImageCard";

configure({ adapter: new Adapter() });

test("Image card renders correctly", () => {
  const wrapper = shallow(<ImageCard />);
  expect(wrapper.find(".image-card")).toHaveLength(1);
});
