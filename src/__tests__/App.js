import "../setupTest";
import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe.only("<FilterForm />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Should create a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
