import type { Meta, StoryObj } from '@storybook/react';
import { SocialCard } from './SocialCard';

const meta = {
    title: 'Components/SocialCard',
    component: SocialCard,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        socialNetwork: {
            control: 'select',
            options: ['instagram', 'facebook', 'youtube', 'tiktok'],
            description: 'Social network platform',
        },
        postType: {
            control: 'select',
            options: ['image', 'video', 'reel'],
            description: 'Type of post',
        },
        imageUrl: {
            control: 'text',
            description: 'URL of the post image',
        },
        accountName: {
            control: 'text',
            description: 'Name of the account',
        },
        likes: {
            control: 'number',
            description: 'Number of likes',
        },
        comments: {
            control: 'number',
            description: 'Number of comments',
        },
        views: {
            control: 'number',
            description: 'Number of views (for video/reel)',
        },
        width: {
            control: 'number',
            description: 'Width of the card in pixels',
        },
    },
} satisfies Meta<typeof SocialCard>;

export default meta;
type Story = StoryObj<typeof SocialCard>;

export const InstagramImage: Story = {
    args: {
        imageUrl: '/images/racing-cars2.png',
        accountName: 'Account Name',
        socialNetwork: 'instagram',
        postType: 'image',
        likes: 3900,
        comments: 17,
        width: 360,
    },
};

export const InstagramReel: Story = {
    args: {
        imageUrl: '/images/racing-cars2.png',
        accountName: 'Reels Account',
        socialNetwork: 'instagram',
        postType: 'reel',
        likes: 12500,
        comments: 342,
        views: 45000,
        width: 360,
    },
};

export const FacebookVideo: Story = {
    args: {
        imageUrl: '/images/racing-cars2.png',
        accountName: 'Facebook Page',
        socialNetwork: 'facebook',
        postType: 'video',
        likes: 8700,
        comments: 234,
        views: 25000,
        width: 360,
    },
};

export const YouTubeVideo: Story = {
    args: {
        imageUrl: '/images/racing-cars2.png',
        accountName: 'YouTube Channel',
        socialNetwork: 'youtube',
        postType: 'video',
        likes: 15000,
        comments: 890,
        views: 150000,
        width: 360,
    },
};

export const TikTokVideo: Story = {
    args: {
        imageUrl: '/images/racing-cars2.png',
        accountName: 'TikTok Creator',
        socialNetwork: 'tiktok',
        postType: 'video',
        likes: 45000,
        comments: 1200,
        views: 250000,
        width: 360,
    },
};

export const HighEngagement: Story = {
    args: {
        imageUrl: '/images/racing-cars2.png',
        accountName: 'Viral Account',
        socialNetwork: 'instagram',
        postType: 'reel',
        likes: 1250000,
        comments: 14200,
        views: 5000000,
        width: 360,
    },
};

export const Wide: Story = {
    args: {
        imageUrl: '/images/racing-cars2.png',
        accountName: 'Wide Layout',
        socialNetwork: 'instagram',
        postType: 'image',
        likes: 3900,
        comments: 17,
        width: 480,
    },
};