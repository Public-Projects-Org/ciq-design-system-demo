import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    styled
} from '@mui/material';
import {
    Instagram,
    YouTube,
    Verified
} from '@mui/icons-material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { SxProps, Theme } from '@mui/material/styles';

export interface CreatorPrimarySocialProps {
    /** Creator's avatar URL */
    avatarUrl: string;
    /** Creator's display name */
    name: string;
    /** Social platform */
    platform: 'youtube' | 'instagram' | 'tiktok';
    /** Username on the platform */
    username: string;
    /** Optional follower count */
    followerCount?: number;
    /** Whether the account is verified */
    isVerified?: boolean;
    /** Whether this is an Instagram business account */
    isBusinessAccount?: boolean;
    /** Optional style overrides */
    sx?: SxProps<Theme>;
}

const PlatformIconWrapper = styled(Box)(({ theme }) => ({
    width: 16,
    height: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    '& svg': {
        width: 12,
        height: 12,
        color: '#fff'
    }
}));

const IconMap = {
    youtube: <YouTube />,
    instagram: <Instagram />,
    tiktok: (
        <Box
            component="img"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTQ0OCwyMDkuOTF2MTI4aDBjMCwyNi41LTIxLjUsNDgtNDgsNDhIMzA1LjFWNDE3YzAsMjYuNS0yMS41LDQ4LTQ4LDQ4SDIwOS4xNGMtMjYuNSwwLTQ4LTIxLjUtNDgtNDhWMzg1Ljg4aC02NGMtMjYuNSwwLTQ4LTIxLjUtNDgtNDhWMjA5LjkxYzAtMjYuNSwyMS41LTQ4LDQ4LTQ4aDY0di0zMWMwLTI2LjUsMjEuNS00OCw0OC00OGg0Ny45N2MyNi41LDAsNDgsMjEuNSw0OCw0OHYzMWg2NEM0MjYuNSwxNjEuOTEsNDQ4LDE4My40MSw0NDgsMjA5LjkxeiIvPjwvc3ZnPg=="
            alt="TikTok"
            sx={{ width: 12, height: 12 }}
        />
    )
};

const platformStyles = {
    youtube: {
        backgroundColor: '#FF0000'
    },
    instagram: {
        backgroundColor: '#C13584'
    },
    tiktok: {
        backgroundColor: '#000000'
    }
};

export const CreatorPrimarySocial: React.FC<CreatorPrimarySocialProps> = ({
                                                                              avatarUrl,
                                                                              name,
                                                                              platform,
                                                                              username,
                                                                              followerCount,
                                                                              isVerified = false,
                                                                              isBusinessAccount = false,
                                                                              sx
                                                                          }) => {
    const showBusinessIcon = platform === 'instagram' && isBusinessAccount;

    return (
        <Box sx={{ display: 'flex', gap: 1.5, ...sx }}>
            <Avatar
                src={avatarUrl}
                alt={name}
                sx={{ width: 40, height: 40 }}
            />

            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '14px',
                            fontWeight: 500,
                            mr: 0.5
                        }}
                    >
                        {name}
                    </Typography>
                    {isVerified && (
                        <Verified
                            sx={{
                                fontSize: 16,
                                color: 'primary.main',
                                mr: 0.5
                            }}
                        />
                    )}
                    {showBusinessIcon && (
                        <BusinessCenterIcon
                            sx={{
                                fontSize: 16,
                                color: 'primary.main'
                            }}
                        />
                    )}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PlatformIconWrapper sx={{ ...platformStyles[platform], mr: 1 }}>
                        {IconMap[platform]}
                    </PlatformIconWrapper>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            fontSize: '14px'
                        }}
                    >
                        {username}
                    </Typography>
                </Box>

                {typeof followerCount === 'number' && (
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            fontSize: '14px',
                            mt: 0.5
                        }}
                    >
                        {new Intl.NumberFormat('en-US', {
                            notation: 'compact',
                            maximumFractionDigits: 1
                        }).format(followerCount)}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default CreatorPrimarySocial;