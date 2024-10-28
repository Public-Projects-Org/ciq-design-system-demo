import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CreatorPrimarySocial } from './CreatorPrimarySocial';
import { Box } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0066FF'
        }
    }
});

const meta: Meta<typeof CreatorPrimarySocial> = {
    title: 'Components/CreatorPrimarySocial',
    component: CreatorPrimarySocial,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ]
};

export default meta;
type Story = StoryObj<typeof CreatorPrimarySocial>;

// YouTube Creator with Verified Badge
export const YouTubeCreatorVerified: Story = {
    args: {
        avatarUrl: '/api/placeholder/40/40',
        name: 'Ali Abdaal',
        platform: 'youtube',
        username: '@aliabdaal',
        isVerified: true
    }
};

// TikTok Creator with Follower Count
export const RecommendedCreator: Story = {
    args: {
        avatarUrl: '/api/placeholder/40/40',
        name: 'heybriajones',
        platform: 'tiktok',
        username: 'heybriajones',
        followerCount: 948100
    }
};

// Instagram Business Account with Verification
export const InstagramBusinessVerified: Story = {
    args: {
        avatarUrl: '/api/placeholder/40/40',
        name: 'Matthew Merril',
        platform: 'instagram',
        username: 'mmerril',
        isVerified: true,
        isBusinessAccount: true
    }
};

// All Variations Example
export const AllVariations: Story = {
    render: () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <CreatorPrimarySocial
                avatarUrl="/api/placeholder/40/40"
                name="Ali Abdaal"
                platform="youtube"
                username="@aliabdaal"
                isVerified={true}
            />

            <CreatorPrimarySocial
                avatarUrl="/api/placeholder/40/40"
                name="heybriajones"
                platform="tiktok"
                username="heybriajones"
                followerCount={948100}
            />

            <CreatorPrimarySocial
                avatarUrl="/api/placeholder/40/40"
                name="Matthew Merril"
                platform="instagram"
                username="mmerril"
                isVerified={true}
                isBusinessAccount={true}
            />
        </Box>
    )
};