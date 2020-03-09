module.exports = {
    default: "self-hosted-video",
    context: {
        src:
            "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
        poster:
            "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
    },
    variants: [
        {
            name: "self-hosted-image",
            context: {
                srcImageMobile: "https://picsum.photos/id/471/450/450",
                srcImageTablet: "https://picsum.photos/id/471/768/450",
                srcImageLaptop: "https://picsum.photos/id/471/1024/768",
                srcImageDesktop: "https://picsum.photos/id/471/1440/1024",
                srcImage: "https://picsum.photos/id/471/1440/1024",
            }
        },
        {
            name: "self-hosted-video",
            context: {
                srcVideo:
                    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
                poster:
                    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
            }
        },
        {
            name: "youtube video",
            context: {
                srcYoutubeId: "bTqVqk7FSmY",
                provider: "youtube"
            }
        },
        {
            name: "vimeo video",
            context: {
                srcVimeoId: "76979871",
                provider: "vimeo"
            }
        },
        {
            name: "self-hosted-image-with-caption",
            context: {
                srcImageMobile: "https://picsum.photos/id/471/450/450",
                srcImageTablet: "https://picsum.photos/id/471/768/450",
                srcImageLaptop: "https://picsum.photos/id/471/1024/768",
                srcImageDesktop: "https://picsum.photos/id/471/1440/1024",
                srcImage: "https://picsum.photos/id/471/1440/1024",
                caption: true
            }
        },
        {
            name: "self-hosted-image-with-overlay",
            context: {
                srcImageMobile: "https://picsum.photos/id/471/450/450",
                srcImageTablet: "https://picsum.photos/id/471/768/450",
                srcImageLaptop: "https://picsum.photos/id/471/1024/768",
                srcImageDesktop: "https://picsum.photos/id/471/1440/1024",
                srcImage: "https://picsum.photos/id/471/1440/1024",
                overlay: true
            }
        },
        {
            name: "caption-only",
            context: {
                caption: true
            }
        }
    ]
};
