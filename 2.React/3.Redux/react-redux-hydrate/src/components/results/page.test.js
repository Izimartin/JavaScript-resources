import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Page from './page';

describe('src/components/results/page.js', () => {
    it('should render empty list', () => {
        const wrapper = shallow(
            <Page
                results={[]}
                goTo={() => {}}
            />
        );

        expect(wrapper.find('.page-message').length).to.equals(1);
    });

    describe('page with results', () => {
        let wrapper;
        let results;
        let spy;

        beforeEach(() => {
            spy = sinon.spy();
            results = [
                {
                    id: '123',
                    image: '',
                    title: 'Hola mundo',
                    content: 'Que tal',
                },
                {
                    id: '124',
                    image: '',
                    title: 'Hola mundo',
                    content: 'Que tal',
                },
            ];
            wrapper = shallow(
                <Page
                    results={results}
                    goTo={spy}
                />
            );
        });

        it('should render list of results', () => {
            wrapper.find('.card-container').forEach((container, index) => {
                const result = results[index];
                const CardComp = container.find(Card);
                expect(CardComp).to.be.present();

                const CardActionAreaComp = CardComp.find(CardActionArea);
                expect(CardActionAreaComp).to.be.present();

                const CardMediaComp = CardActionAreaComp.find(CardMedia);
                expect(CardMediaComp).to.be.present();
                expect(CardMediaComp.props().title).to.equals(result.title);
                expect(CardMediaComp.props().image).to.equals(result.image);

                const CardContentComp = CardActionAreaComp.find(CardContent);
                expect(CardContentComp).to.be.present();

                const TypographyComp = CardContentComp.find(Typography);
                expect(TypographyComp).to.have.lengthOf(2);
                expect(TypographyComp.at(0).props().children).to.equals(result.title);
                expect(TypographyComp.at(1).props().children).to.equals(result.content);
            });
        });

        it('should call goTo when Card is clicked', () => {
            const CardComponent = wrapper.find(Card).at(0);

            CardComponent.simulate('click');

            expect(spy.calledWith('/details/123')).to.equals(true);
        });
    });
});