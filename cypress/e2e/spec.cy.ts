/// <reference types="cypress" />

const feedbacks = {
    emptyFeedbacks: [],
    feedbacksList: [
        { message: 'test1', rating: 1, createdAt: '2024-01-31T06:57:32.243Z' },
        { message: 'test2', rating: 5, createdAt: '2024-01-30T06:57:32.243Z' },
        { message: 'test3', rating: 2, createdAt: '2024-01-28T06:57:32.243Z' },
        { message: 'test4', rating: 3, createdAt: '2024-01-29T06:57:32.243Z' },
        { message: 'test5', rating: 4, createdAt: '2024-01-27T06:57:32.243Z' },
    ],
    updateFeedbacksList: [
        { message: 'test1', rating: 1, createdAt: '2024-01-31T06:57:32.243Z' },
        { message: 'test2', rating: 5, createdAt: '2024-01-30T06:57:32.243Z' },
        { message: 'test3', rating: 2, createdAt: '2024-01-28T06:57:32.243Z' },
        { message: 'test4', rating: 3, createdAt: '2024-01-29T06:57:32.243Z' },
        { message: 'test5', rating: 4, createdAt: '2024-01-27T06:57:32.243Z' },
        { rating: 2, createdAt: '2024-02-01T06:57:32.243Z' },
    ],
};

describe('Sprint 3', () => {
    describe('Feedbacks', () => {
        const resolutions = [
            { width: 360, height: 740 },
            { width: 833, height: 900 },
            { width: 1440, height: 900 },
        ];
        const resolutionMobile = [{ width: 360, height: 740 }];
        const resolutionTablet = [{ width: 833, height: 900 }];
        const resolutionLaptop = [{ width: 1440, height: 900 }];

        function takeScreenshots(screenshotName: string, resolutionsView = resolutions) {
            cy.wait(1000);
            for (let i = 0; i < resolutionsView.length; i++) {
                cy.viewport(resolutionsView[i].width, resolutionsView[i].height);
                cy.screenshot(`${screenshotName}`, {
                    capture: 'viewport',
                });
            }
        }

        function checkRating(rating: number) {
            for (let i = 0; i < 5; i++) {
                const shouldHaveClass = i <= rating && rating !== 0;

                cy.get('.ant-modal ul li')
                    .eq(i)
                    .should(
                        shouldHaveClass ? 'have.class' : 'not.have.class',
                        'ant-rate-star-full',
                    );
            }
        }

        beforeEach(() => {
            cy.visit('/');
            cy.intercept('POST', 'auth/login', { accessToken: 'SUPERUSER' }).as('login');
            cy.viewport(1440, 900);
            cy.visit('/auth');
            cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
            cy.get('[data-test-id=login-password]').type('1234qqQQ');
            cy.get('[data-test-id=login-submit-button]').click();
            cy.url().should('include', '/main');
        });

        it('First review', () => {
            cy.intercept('GET', 'feedback', { body: feedbacks.emptyFeedbacks }).as('getFeedbacks');
            cy.intercept('POST', 'feedback', {
                body: { message: 'test321', rating: 3, createdAt: '2024-02-01T06:57:32.243Z' },
                statusCode: 200,
            }).as('postFeedback');

            cy.get('[data-test-id="see-reviews"]').click();
            cy.wait('@getFeedbacks').should(({ request }) => {
                expect(request.headers, 'request headers').to.include({
                    authorization: 'Bearer SUPERUSER',
                });
            });
            cy.url().should('include', '/feedbacks');
            takeScreenshots('empty-review-list', resolutionLaptop);

            cy.get('[data-test-id="write-review"]').click();
            takeScreenshots('review-modal', resolutionLaptop);
            cy.get('.ant-modal ul li').eq(4).click();
            checkRating(4);
            cy.get('.ant-modal ul li').eq(4).click();
            checkRating(0);
            cy.get('.ant-modal ul li').eq(2).click();
            checkRating(2);
            cy.get('.ant-modal textarea').type('test321');
            cy.intercept('GET', 'feedback', {
                body: [{ message: 'test321', rating: 3, createdAt: '2024-02-01T06:57:32.243Z' }],
            }).as('getFeedbacks');
            cy.get('[data-test-id="new-review-submit-button"]').click();
            cy.wait('@postFeedback');
            cy.wait('@getFeedbacks');
            cy.url().should('include', '/feedbacks');
            takeScreenshots('one-review', resolutionLaptop);
        });

        it('More than 4 reviews', () => {
            cy.intercept('GET', 'feedback', { body: feedbacks.feedbacksList }).as('getFeedbacks');
            cy.intercept('POST', 'feedback', {
                body: { rating: 2, createdAt: '2024-02-01T06:57:32.243Z' },
                statusCode: 200,
            }).as('postFeedback');

            cy.get('[data-test-id="see-reviews"]').click();
            cy.wait('@getFeedbacks');
            cy.url().should('include', '/feedbacks');
            takeScreenshots('more-than-4-reviews', resolutionTablet);

            cy.get('[data-test-id="all-reviews-button"]').click();
            takeScreenshots('expand-review-list', resolutionTablet);
            cy.get('[data-test-id="write-review"]').click();
            cy.get('.ant-modal ul li').eq(1).click();
            cy.intercept('GET', 'feedback', {
                body: feedbacks.updateFeedbacksList,
            }).as('getFeedbacks');
            cy.get('[data-test-id="new-review-submit-button"]').click();
            cy.wait('@postFeedback');
            cy.wait('@getFeedbacks');
            cy.contains('Отлично').click();
            cy.url().should('include', '/feedbacks');
            takeScreenshots('updated-review-list', resolutionTablet);
        });

        it('Feedback GET error', () => {
            cy.intercept('GET', 'feedback', { statusCode: 500 }).as('getFeedbacks');

            cy.get('[data-test-id="see-reviews"]').click();
            cy.wait('@getFeedbacks');
            cy.url().should('include', '/feedbacks');
            takeScreenshots('get-feedback-error', resolutionMobile);

            cy.contains('Назад').click();
            cy.url().should('include', '/main');
        });

        it('Feedback POST error', () => {
            cy.intercept('GET', 'feedback', { body: feedbacks.feedbacksList }).as('getFeedbacks');
            cy.intercept('POST', 'feedback', { statusCode: 500 }).as('postFeedback');

            cy.get('[data-test-id="see-reviews"]').click();
            cy.wait('@getFeedbacks');
            cy.url().should('include', '/feedbacks');

            cy.get('[data-test-id="write-review"]').click();
            cy.get('.ant-modal ul li').eq(2).click();
            cy.get('.ant-modal textarea').type('test321');
            cy.get('[data-test-id="new-review-submit-button"]').click();
            cy.wait('@postFeedback');
            cy.url().should('include', '/feedbacks');
            takeScreenshots('reviews-not-saved-modal', resolutionMobile);

            cy.contains('Закрыть').click();
            cy.url().should('include', '/feedbacks');

            cy.get('[data-test-id="write-review"]').click();
            cy.get('[data-test-id="new-review-submit-button"]').click();
            cy.wait('@postFeedback');
            cy.url().should('include', '/feedbacks');
            cy.get('[data-test-id="write-review-not-saved-modal"]').click();
        });

        it('Redirect login if no token', () => {
            cy.url().should('include', '/main');
            cy.reload();
            cy.url().should('include', '/auth');
            cy.visit('/main');
            cy.url().should('include', '/auth');
            cy.visit('/feedbacks');
            cy.url().should('include', '/auth');
        });
    });

    // describe('Google auth', () => {
    // TODO: реализовать тест google-auth
    // it('Auth with google', () => {
    //     cy.visit('/');
    //     cy.viewport(1440, 900);
    //     cy.visit('/auth');
    //     cy.get('[data-test-id="google-submit-button"]').click();
    // });
    // });
});
