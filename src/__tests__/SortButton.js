import "../setupTest";
import React from "react";
import SortButton from "../Components/SortButtons";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe.only("<SortButton />", () => {
  let wrapper;
  const sortFolders = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<SortButton sortFolders={sortFolders} />);
  });

  it("Component matches the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should call the onClick function with name", () => {
    const nameButton = wrapper.find("button");
    nameButton.first().simulate("click");
    expect(sortFolders).toBeCalledWith("name");
  });

  it("Should call the onClick function with added", () => {
    const nameButton = wrapper.find("button");
    nameButton.at(1).simulate("click");
    expect(sortFolders).toBeCalledWith("added");
  });

  it("Should call the onClick function with size", () => {
    const nameButton = wrapper.find("button");
    nameButton.last().simulate("click");
    expect(sortFolders).toBeCalledWith("size");
  });
});
