import React from 'react';
import { Card, CardMedia, Box, Typography, styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // TikTok
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


export type SocialNetwork = 'instagram' | 'facebook' | 'youtube' | 'tiktok';
export type PostType = 'image' | 'video' | 'reel';

export interface SocialCardProps {
    imageUrl: string;
    accountName: string;
    socialNetwork: SocialNetwork;
    postType: PostType;
    likes?: number;
    comments?: number;
    views?: number;
    imageAlt?: string;
    width?: number | string;
    onClick?: () => void;
    isVerified?: boolean;
    isBusinessAccount?: boolean;
}

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

const CardOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.4) 100%)',
});

const TopBar = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    color: 'white',
    zIndex: 1,
}));

const BottomBar = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(2),
    color: 'white',
    zIndex: 1,
}));

const MetricItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
}));

const PostTypeIcon = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: 'white',
    zIndex: 1,
}));

const getSocialIcon = (network: SocialNetwork) => {
    switch (network) {
        case 'facebook':
            return <FacebookIcon />;
        case 'youtube':
            return <YouTubeIcon />;
        case 'tiktok':
            return <MusicNoteIcon />;
        default:
            return <InstagramIcon />;
    }
};

const getPostTypeIcon = (type: PostType) => {
    switch (type) {
        case 'video':
            return <VideoFileIcon />;
        case 'reel':
            return <SlowMotionVideoIcon />;
        default:
            return <ImageIcon />;
    }
};

const formatNumber = (num: number): string => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
};

export const SocialCard: React.FC<SocialCardProps> = ({
                                                          imageUrl,
                                                          accountName,
                                                          socialNetwork,
                                                          postType,
                                                          likes = 0,
                                                          comments = 0,
                                                          views = 0,
                                                          imageAlt = "Social media post",
                                                          width = 360,
                                                          isVerified = false,
                                                          isBusinessAccount = false,
                                                          onClick,

                                                      }) => {
    return (
        <StyledCard sx={{ width, position: 'relative' }} onClick={onClick}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt={imageAlt}
                sx={{
                    aspectRatio: '1',
                    objectFit: 'cover',
                }}
            />

            <CardOverlay />

            <TopBar>
                {getSocialIcon(socialNetwork)}
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    {accountName}
                </Typography>
                {socialNetwork === 'instagram' && isVerified && <VerifiedIcon data-testid="VerifiedIcon" />}
                {socialNetwork === 'instagram' && isBusinessAccount && <BusinessCenterIcon data-testid="BusinessIcon" />}
            </TopBar>

            <PostTypeIcon>
                {getPostTypeIcon(postType)}
            </PostTypeIcon>

            <BottomBar>
                <MetricItem>
                    <FavoriteIcon fontSize="small" />
                    <Typography variant="body2">
                        {formatNumber(likes)}
                    </Typography>
                </MetricItem>

                <MetricItem>
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <Typography variant="body2">
                        {formatNumber(comments)}
                    </Typography>
                </MetricItem>

                {(postType === 'video' || postType === 'reel') && (
                    <MetricItem>
                        <VisibilityIcon fontSize="small" />
                        <Typography variant="body2">
                            {formatNumber(views)}
                        </Typography>
                    </MetricItem>
                )}
            </BottomBar>
        </StyledCard>
    );
};