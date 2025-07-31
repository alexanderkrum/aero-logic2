import { useRetrieveRandomRiddle } from '../common/adapter/RiddleAdapter';
import { useFetchRiddleAdapter } from '../common/adapter/FetchRiddleAdapter';

describe('random riddle', () => {
    it('see random riddle', () => {
        cy.injectFakeAdapter(useRetrieveRandomRiddle, {
            body: {
                id: 'RIDDLE_ID',
                contents: "What has keys but can't open locks?",
                answers: [
                    {
                        id: 'y',
                        text: 'A piano',
                    },
                ],
            },
        });
        cy.injectFakeAdapter(useFetchRiddleAdapter, {
            body: {
                id: 'RIDDLE_ID',
                contents: 'Riddle contents',
                answers: [
                    {
                        id: 'y',
                        text: 'A piano',
                    },
                ],
            },
        });

        cy.visit('/');

        cy.get('[data-test="work-interval"]').should('be.visible');

        cy.get('[data-test="open-random-riddle-control"]').click();

        cy.contains('Riddle contents').should('be.visible');
        cy.url().should('contain', '/riddle/RIDDLE_ID');
    });
});
