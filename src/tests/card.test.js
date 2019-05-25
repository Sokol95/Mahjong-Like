import React from 'react'
import Card from '../components/card';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const hadleClickStub = jest.fn();
const mockProps =  {
    handleClick: hadleClickStub, 
    flipped: false,
    solved: false,
    id: 1,
    item: 1,
    disabled: false,
};

describe ("card test", ()=>{
    it("to be defined", ()=>{
        expect(Card).toBeDefined()
    });
    it("onClick shoud be call handleClick test", ()=>{
        const wrapper = shallow(<Card {...mockProps} />)
        wrapper.find('.flip-container').simulate('click')
        expect(hadleClickStub).toBeCalled()
    });

})