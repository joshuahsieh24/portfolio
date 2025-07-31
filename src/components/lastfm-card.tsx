'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Music, Play, ExternalLink, Clock } from 'lucide-react';

interface LastFmTrack {
  name: string;
  artist: {
    mbid: string;
    '#text': string;
  };
  album?: {
    mbid: string;
    '#text': string;
  };
  image?: Array<{
    size: string;
    '#text': string;
  }>;
  url: string;
  '@attr'?: {
    nowplaying?: string;
  };
  date?: {
    uts: string;
    '#text': string;
  };
}

interface LastFmResponse {
  recenttracks: {
    track: LastFmTrack[];
  };
}

export default function LastFmCard() {
  const [currentTrack, setCurrentTrack] = useState<LastFmTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const fetchLastFmData = async () => {
      try {
        const username = process.env.NEXT_PUBLIC_LASTFM_USERNAME;
        const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
        
        console.log('Last.fm Debug - Username:', username);
        console.log('Last.fm Debug - API Key:', apiKey ? 'Present' : 'Missing');
        
        if (!username || !apiKey) {
          console.log('Last.fm Debug - Missing credentials');
          setError('Last.fm credentials not configured');
          setIsLoading(false);
          return;
        }

        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;
        console.log('Last.fm Debug - Fetching from:', url);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch Last.fm data');
        }

        const data: LastFmResponse = await response.json();
        console.log('Last.fm Debug - API Response:', data);
        
        const track = data.recenttracks.track[0];
        console.log('Last.fm Debug - Track:', track);
        console.log('Last.fm Debug - Track @attr:', track['@attr']);
        
        // Check if currently playing
        const isNowPlaying = track['@attr']?.nowplaying === 'true';
        console.log('Last.fm Debug - Is now playing:', isNowPlaying);
        
        setCurrentTrack(isNowPlaying ? track : null);

        // Calculate time ago for non-playing tracks
        if (!isNowPlaying && track.date?.uts) {
          const trackTime = new Date(parseInt(track.date.uts) * 1000);
          const now = new Date();
          const diffMs = now.getTime() - trackTime.getTime();
          const diffMins = Math.floor(diffMs / (1000 * 60));
          
          if (diffMins < 1) {
            setTimeAgo('Just now');
          } else if (diffMins < 60) {
            setTimeAgo(`${diffMins}m ago`);
          } else {
            const diffHours = Math.floor(diffMins / 60);
            setTimeAgo(`${diffHours}h ago`);
          }
        } else {
          setTimeAgo('');
        }
      } catch (err) {
        console.error('Last.fm Debug - Error:', err);
        setError('Failed to load music data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLastFmData();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchLastFmData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <Card className="bg-canopy/40 backdrop-blur-sm border border-leaf/10 hover:shadow-[0_0_8px_theme('colors.leaf')/20] transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-moss/20 rounded-lg animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-moss/20 rounded animate-pulse" />
              <div className="h-2 bg-moss/20 rounded w-2/3 animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    console.log('Last.fm Debug - Showing error:', error);
    return (
      <Card className="bg-canopy/40 backdrop-blur-sm border border-leaf/10">
        <CardContent className="p-4">
          <div className="text-xs text-cloud/70">Last.fm: {error}</div>
        </CardContent>
      </Card>
    );
  }

  if (!currentTrack) {
    console.log('Last.fm Debug - No current track, not showing card');
    return null; // Don't show anything if there's no current track
  }

  console.log('Last.fm Debug - Rendering track card for:', currentTrack.name);
  return (
    <Card className="bg-mist/80 backdrop-blur-sm border border-sky/20 hover:shadow-soft transition-all duration-300 group">
      <CardContent className="p-1">
        <div className="flex items-center space-x-1">
          <div className="relative">
            <Avatar className="w-6 h-6 border border-sky/20">
              <AvatarImage 
                src={currentTrack.image?.[2]?.['#text'] || '/music-placeholder.png'} 
                alt={currentTrack.album?.['#text'] || currentTrack.name}
              />
              <AvatarFallback className="bg-mist text-denim">
                <Music className="w-3 h-3" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-denim rounded-full flex items-center justify-center">
              <Play className="w-1 h-1 text-foam fill-current" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0">
              <Badge className="bg-denim/20 text-denim text-xs px-1 py-0 border border-denim/30">
                Now Playing
              </Badge>
            </div>
            
            <div className="space-y-0">
              <p className="text-xs font-medium text-ink truncate group-hover:text-denim transition-colors">
                {currentTrack.name}
              </p>
            </div>
          </div>
          
          <a 
            href={currentTrack.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 p-0.5 text-denim/60 hover:text-denim transition-colors"
            title="View on Last.fm"
          >
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
} 