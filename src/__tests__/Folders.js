import "../setupTest";
import React from "react";
import FoldersOrFiles from "../Components/Folders";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<FoldersOrFiles />", () => {
  let wrapper;
  const handleClick = jest.fn();
  const props = {
    filter: "",
    columnReverse: "",
    sortValue: "",
    folderItemElement: "",
    toggleInformation: "",
    handleClick
  };
  beforeEach(() => {
    wrapper = shallow(<FoldersOrFiles {...props} />);
  });

  it("Should create a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should sort the data according to name", () => {
    wrapper.setProps({ sortValue: "name" });
    const foldersTitle = wrapper.find(".Folders__name");
    expect(foldersTitle.first().text()).toBe("Cost centres");
    expect(foldersTitle.last().text()).toBe("Public Holiday policy");
  });

  it("Should sort the data according to date added", () => {
    wrapper.setProps({ sortValue: "added" });
    const foldersTitle = wrapper.find(".Folders__name");
    expect(foldersTitle.first().text()).toBe("Expenses");
    expect(foldersTitle.last().text()).toBe("Misc");
  });

  it("Should sort the data according to folder size", () => {
    wrapper.setProps({ sortValue: "size" });
    const foldersTitle = wrapper.find(".Folders__name");
    expect(foldersTitle.first().text()).toBe("Public Holiday policy");
    expect(foldersTitle.last().text()).toBe("Expenses");
  });

  it("Should filter items using the input value", () => {
    wrapper.setProps({ filter: "e" });
    expect(wrapper.find(".Folders__files").length).toBe(3);

    wrapper.setProps({ filter: "em" });
    expect(wrapper.find(".Folders__files").length).toBe(1);

    wrapper.setProps({ filter: "emx" });
    expect(wrapper.find(".Folders__files").length).toBe(0);
  });

  it("Should set the flex-direction style according to the columReverse value", () => {
    wrapper.setProps({ columnReverse: true });
    expect(wrapper.find(".Folders").prop("style")).toHaveProperty(
      "flexDirection",
      "column-reverse"
    );

    wrapper.setProps({ columnReverse: false });
    expect(wrapper.find(".Folders").prop("style")).toHaveProperty(
      "flexDirection",
      "column"
    );
  });

  it("should handle onclick events", () => {
    wrapper
      .find("i")
      .first()
      .simulate("click");
    expect(handleClick).toBeCalledWith(3);

    wrapper
      .find("i")
      .last()
      .simulate("click");
    expect(handleClick).toBeCalledWith(4);
  });

  it("Should change the name of the arrow icon", () => {
    wrapper.setProps({ toggleInformation: true, folderItemElement: 3 });
    expect(
      wrapper
        .find("i")
        .first()
        .prop("className")
    ).toBe("fas fa-chevron-down fa-2x");
    expect(
      wrapper
        .find("i")
        .last()
        .prop("className")
    ).toBe("fas fa-chevron-right fa-2x");

    wrapper.setProps({ toggleInformation: true, folderItemElement: 4 });
    expect(
      wrapper
        .find("i")
        .first()
        .prop("className")
    ).toBe("fas fa-chevron-right fa-2x");
    expect(
      wrapper
        .find("i")
        .last()
        .prop("className")
    ).toBe("fas fa-chevron-down fa-2x");

    wrapper.setProps({ toggleInformation: false, folderItemElement: 4 });
    expect(
      wrapper
        .find("i")
        .first()
        .prop("className")
    ).toBe("fas fa-chevron-right fa-2x");
    expect(
      wrapper
        .find("i")
        .last()
        .prop("className")
    ).toBe("fas fa-chevron-right fa-2x");
  });
});
