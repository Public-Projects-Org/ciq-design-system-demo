import React from 'react';
import { mount } from 'cypress/react18';
import { CreatorPrimarySocial } from './CreatorPrimarySocial';

describe('CreatorPrimarySocial', () => {
    const defaultProps = {
        avatarUrl: '/api/placeholder/40/40',
        name: 'Test Creator',
        platform: 'instagram',
        username: 'testcreator',
        isVerified: true,
        isBusinessAccount: true,
    } as const;

    it('renders correctly with basic props', () => {
        mount(<CreatorPrimarySocial {...defaultProps} />);
        cy.get('img[alt="Test Creator"]').should('be.visible');
        cy.contains('Test Creator').should('be.visible');
        cy.get('svg[data-testid="VerifiedIcon"]').should('exist');
        cy.get('svg[data-testid="BusinessCenterIcon"]').should('exist');
        cy.contains('testcreator').should('be.visible');
    });

    it('renders without verification and business icons', () => {
        const props = { ...defaultProps, isVerified: false, isBusinessAccount: false };
        mount(<CreatorPrimarySocial {...props} />);
        cy.get('svg[data-testid="VerifiedIcon"]').should('not.exist');
        cy.get('svg[data-testid="BusinessCenterIcon"]').should('not.exist');
    });

    it('renders with follower count', () => {
        const props = { ...defaultProps, followerCount: 1000000 };
        mount(<CreatorPrimarySocial {...props} />);
        cy.contains('1M').should('be.visible');
    });

    it('renders correctly for YouTube platform', () => {
        const props = { ...defaultProps, platform: 'youtube' };
        mount(<CreatorPrimarySocial {...props} />);
        cy.get('svg[data-testid="YouTubeIcon"]').should('exist');
    });

    it('renders correctly for TikTok platform', () => {
        const props = { ...defaultProps, platform: 'tiktok' };
        mount(<CreatorPrimarySocial {...props} />);
        cy.get('img[alt="TikTok"]').should('exist');
    });
});