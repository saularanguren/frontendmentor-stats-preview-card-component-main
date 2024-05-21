export const functionRenderImageToHtml = (urlImageDesktop, urlImageMobile) => {
    const card = document.querySelector('main'),
          cardWidth = card.getBoundingClientRect().width,
          img = document.querySelector('img')

    if(cardWidth > 500) {
        img.src = urlImageDesktop
    } else {
        img.src = urlImageMobile
    }
}