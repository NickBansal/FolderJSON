import "../setupTest";
import React from "react";
import FilterForm from "../Components/FilterForm";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe.only("<FilterForm />", () => {
  let wrapper;
  const handleChange = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<FilterForm handleChange={handleChange} />);
  });

  it("Should create a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should call handleChange with value of the target value", () => {
    const inputField = wrapper.find("input");

    inputField.simulate("change", { target: { value: "A" } });
    expect(handleChange).toBeCalledWith("A");

    inputField.simulate("change", { target: { value: "ABC" } });
    expect(handleChange).toBeCalledWith("ABC");
  });
});
