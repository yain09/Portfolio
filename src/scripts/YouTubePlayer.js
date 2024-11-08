import React from 'react';

const YouTubePlayer = ({ videoId, thumbnail, className, style, volume = 100 }) => {
  const [currentQuality, setCurrentQuality] = React.useState(null);
  const playerRef = React.useRef(null);
  const qualityCheckInterval = React.useRef(null);

  const enforceMinQuality = (player) => {
    if (!player) return null;
    
    const availableQualities = player.getAvailableQualityLevels();
    console.log('Available qualities:', availableQualities);
    
    // Intentar primero con 1080p, luego 720p
    let targetQuality = null;
    if (availableQualities.includes('hd1080')) {
      targetQuality = 'hd1080';
    } else if (availableQualities.includes('hd720')) {
      targetQuality = 'hd720';
    } else {
      const qualityPriority = ['large', 'medium'];
      targetQuality = availableQualities.find(q => qualityPriority.includes(q)) || availableQualities[0];
    }

    const currentQuality = player.getPlaybackQuality();
    console.log('Current quality:', currentQuality, 'Target quality:', targetQuality);
    
    if (currentQuality !== targetQuality) {
      player.setPlaybackQuality(targetQuality);
    }
    
    return targetQuality;
  };

  const startQualityCheck = (player) => {
    // Limpiar intervalo existente si hay uno
    if (qualityCheckInterval.current) {
      clearInterval(qualityCheckInterval.current);
    }

    // Verificar y ajustar calidad inmediatamente
    enforceMinQuality(player);

    // Crear nuevo intervalo para verificar y ajustar la calidad
    qualityCheckInterval.current = setInterval(() => {
      const currentQuality = player.getPlaybackQuality();
      if (!['hd1080', 'hd720'].includes(currentQuality)) {
        console.log('Quality check: Current quality is', currentQuality, '. Attempting to enforce higher quality.');
        enforceMinQuality(player);
      } else {
        console.log('Quality check: Current quality is good:', currentQuality);
      }
    }, 2000); // Verificar cada 2 segundos

    // Limpiar el intervalo después de 20 segundos
    setTimeout(() => {
      if (qualityCheckInterval.current) {
        clearInterval(qualityCheckInterval.current);
        qualityCheckInterval.current = null;
      }
    }, 20000);
  };

  React.useEffect(() => {
    const loadYouTubeScript = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    };

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        try {
          playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
              autoplay: 0,
              controls: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              loop: 1,
              playlist: videoId,
              origin: window.location.origin,
              enablejsapi: 1,
              widget_referrer: window.location.href,
              vq: 'hd1080', // Intentar con 1080p primero
              hd: 1, // Forzar modo HD
              host: 'https://www.youtube.com'
            },
            events: {
              onReady: (event) => {
                const player = event.target;
                player.setVolume(volume);
                
                // Forzar calidad al inicio y comenzar verificaciones periódicas
                startQualityCheck(player);
              },
              onStateChange: (event) => {
                const player = event.target;
                
                // Cuando el video comienza a reproducirse
                if (event.data === window.YT.PlayerState.PLAYING) {
                  startQualityCheck(player); // Reiniciar verificación de calidad
                }
                
                // Manejar el loop
                if (event.data === window.YT.PlayerState.ENDED) {
                  player.playVideo();
                }
              },
              onPlaybackQualityChange: (event) => {
                const player = event.target;
                const newQuality = player.getPlaybackQuality();
                console.log('Quality changed to:', newQuality);
                
                if (!['hd1080', 'hd720'].includes(newQuality)) {
                  console.log('Quality too low, enforcing higher quality...');
                  const quality = enforceMinQuality(player);
                  setCurrentQuality(quality);
                } else {
                  setCurrentQuality(newQuality);
                }
              },
              onError: (event) => {
                console.error('YouTube Player Error:', event.data);
              }
            }
          });
        } catch (error) {
          console.error('Error initializing YouTube player:', error);
        }
      }
    };

    if (!window.YT) {
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
      loadYouTubeScript();
    } else {
      initPlayer();
    }

    return () => {
      if (qualityCheckInterval.current) {
        clearInterval(qualityCheckInterval.current);
      }
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (error) {
          console.error('Error destroying YouTube player:', error);
        }
      }
    };
  }, [videoId, volume]);

  return (
    <div 
      className={className} 
      style={{ 
        position: 'relative', 
        paddingTop: '56.25%',
        ...style 
      }}
    >
      <iframe
        id={`youtube-player-${videoId}`}
        title={`YouTube video player ${videoId}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: style?.borderRadius
        }}
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&vq=hd1080&hd=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;