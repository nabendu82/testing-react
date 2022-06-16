import "jest-enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from 'enzyme';
import ClassCounter from "./ClassCounter";
const adapter = new Adapter();
configure({ adapter });

describe("ClassCounter", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ClassCounter />);
    });

    it("No alert on initial load", () => {
        const alert = wrapper.find(".max__range");
        expect(alert).toHaveLength(0);
    });

    describe("Incrementing is allowed", () => {
        it("Update the Count value", () => {
            const instance = wrapper.instance();
            instance.setState({ count: 5 });
            instance.increment();
            expect(wrapper.state().count).toEqual(5);
        });
    });
})