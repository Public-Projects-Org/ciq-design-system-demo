import { mount } from 'cypress/react18';
import { SocialCard } from './SocialCard';

describe('SocialCard', () => {
    const defaultProps = {
        imageUrl: '/racing-cars2.png',
        accountName: 'Test Account',
        socialNetwork: 'instagram',
        postType: 'image',
        likes: 1000,
        comments: 50,
        width: 360,
        isVerified: true,
        isBusinessAccount: true,
    } as const;

    beforeEach(() => {
        // Mount component with default props
        mount(<SocialCard {...defaultProps} />);
    });

    it('renders correctly with basic props', () => {
        // Check if main elements are present
        cy.get('[alt="Social media post"]').should('be.visible');
        cy.contains('Test Account').should('be.visible');
        cy.get('svg[data-testid="InstagramIcon"]').should('exist');
        cy.get('svg[data-testid="ImageIcon"]').should('exist');
        cy.get('svg[data-testid="VerifiedIcon"]').should('exist');
        cy.get('svg[data-testid="BusinessIcon"]').should('exist');
    });

    it('formats numbers correctly', () => {
        // Test different number formatting scenarios
        const testCases = [
            { props: { likes: 999 }, expected: '999' },
            { props: { likes: 1000 }, expected: '1.0K' },
            { props: { likes: 1500 }, expected: '1.5K' },
            { props: { likes: 1000000 }, expected: '1.0M' },
        ];

        testCases.forEach(({ props, expected }) => {
            mount(<SocialCard {...defaultProps} {...props} />);
            cy.get('svg[data-testid="FavoriteIcon"]')
                .parent()
                .contains(expected)
                .should('exist');
        });
    });

    it('displays views for video content', () => {
        // Test video type posts show view count
        mount(
            <SocialCard
                {...defaultProps}
                postType="video"
                socialNetwork="youtube"
                views={50000}
            />
        );

        cy.get('svg[data-testid="VisibilityIcon"]')
            .parent()
            .contains('50.0K')
            .should('be.visible');
    });

    it('handles different social networks correctly', () => {
        const networks = [
            { network: 'instagram', icon: 'InstagramIcon' },
            { network: 'facebook', icon: 'FacebookIcon' },
            { network: 'youtube', icon: 'YouTubeIcon' },
            { network: 'tiktok', icon: 'MusicNoteIcon' },
        ];

        networks.forEach(({ network, icon }) => {
            mount(
                <SocialCard
                    {...defaultProps}
                    socialNetwork={network as any}
                />
            );
            cy.get(`svg[data-testid="${icon}"]`).should('exist');
        });
    });

    it('handles different post types correctly', () => {
        const postTypes = [
            { type: 'image', icon: 'ImageIcon' },
            { type: 'video', icon: 'VideoFileIcon' },
            { type: 'reel', icon: 'SlowMotionVideoIcon' },
        ];

        postTypes.forEach(({ type, icon }) => {
            mount(
                <SocialCard
                    {...defaultProps}
                    postType={type as any}
                />
            );
            cy.get(`svg[data-testid="${icon}"]`).should('exist');
        });
    });

    it('applies correct width', () => {
        const testWidth = 480;
        mount(
            <SocialCard
                {...defaultProps}
                width={testWidth}
            />
        );

        cy.get('.MuiCard-root').should('have.css', 'width', `${testWidth}px`);
    });

    it('handles click events', () => {
        const onClick = cy.stub().as('clickHandler');
        mount(
            <SocialCard
                {...defaultProps}
                onClick={onClick}
            />
        );

        cy.get('.MuiCard-root').click();
        cy.get('@clickHandler').should('have.been.calledOnce');
    });

    it('handles missing optional props gracefully', () => {
        const minimalProps = {
            imageUrl: '/racing-cars2.png',
            accountName: 'Minimal Account',
            socialNetwork: 'instagram',
            postType: 'image',
        };

        mount(<SocialCard {...minimalProps} />);

        // Should show 0 for metrics when not provided
        cy.get('svg[data-testid="FavoriteIcon"]')
            .parent()
            .contains('0')
            .should('exist');
        cy.get('svg[data-testid="ChatBubbleOutlineIcon"]')
            .parent()
            .contains('0')
            .should('exist');
    });
});