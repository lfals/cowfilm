import Script from "next/script"

function VideoPlayer({ hash, name }: { hash: string; name: string }) {
  return (
    <>
      <div id="player" className="w-full" />
      <Script id="torrent-videos">
        {`
          window.webtor = window.webtor || [];
          window.webtor.push({
              id: 'player',
              magnet: 'magnet:?xt=urn:btih:${hash}&dn=${encodeURI(
          name
        )}&tr=udp://open.demonii.com:1337/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://p4p.arenabg.com:1337&tr=udp://tracker.leechers-paradise.org:6969',
              on: function(e) {
                  if (e.name == window.webtor.TORRENT_FETCHED) {
                      console.log('Torrent fetched!', e.data);
                  }
                  if (e.name == window.webtor.TORRENT_ERROR) {
                      console.log('Torrent error!');
                  }
              },

              lang: 'en',
              i18n: {
                  en: {
                      common: {
                          "prepare to play": "Preparing Video Stream... Please Wait...",
                      },
                      stat: {
                          "seeding": "Seeding",
                          "waiting": "Client initialization",
                          "waiting for peers": "Waiting for peers",
                          "from": "from",
                      },
                  },
              },
          });

        `}
      </Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js"
        async
      ></Script>
    </>
  )
}

export default VideoPlayer
