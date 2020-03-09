module.exports = {
    default: 'color',
    context: {
        message: 'I can be your Hero baby!',
        submessage: '...I can kiss away your pain',
        link: {
            url: '/',
            text: 'Go'
        }
    },
    variants: [
        {
            name: 'color',
            context: {
                bgcolor: 'hotpink',
                textcolor: 'white'
            }
        },
        {
            name: 'image',
            context: {
                bgimage: '/assets/images/aurora-dogs.jpg',
                textcolor: 'white'
            }
        },
        {
            name: 'video',
            context: {
                bgvideo: '/assets/video/aurora.mp4',
                placeholderImage: '/assets/images/aurora.jpg',
                bgvideoOverlay: 'darkblue',
                bgvideoOverlayOpacity: '0.3'
            }
        },
        {
            name: "youtube video",
            context: {
                srcYoutubeId: "x--RRzgmfh0",
                provider: "youtube",
                textcolor: "white"
            }
        },
        {
            name: "vimeo video",
            context: {
                srcVimeoId: "76979871",
                provider: "vimeo",
                textcolor: "white"
            }
        },
        {
            name: 'No link',
            context: {
                bgimage: '/assets/images/aurora-dogs.jpg',
                textcolor: 'white',
                link: null
            }
        }
    ]
};
