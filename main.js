import imgHeaderMobile from "./src/assets/images/image-header-mobile.jpg"
import imgHeaderDesktop from "./src/assets/images/image-header-desktop.jpg"
import cardElementHtml from "./src/app/pages/card.html?raw"
import { functionRenderElementsHtml } from "./src/app/render-html/renderElementsHtml"
import { createObjectsFunction } from "./src/app/utils/objectCreation"
import { increaseStatisticsFunction } from "./src/app/use-cases/statisticsCounter"
import { functionRenderImageToHtml } from "./src/app/render-html/renderImage"

functionRenderElementsHtml('#app', cardElementHtml)
increaseStatisticsFunction(3, createObjectsFunction())

setInterval(() => functionRenderImageToHtml(imgHeaderDesktop, imgHeaderMobile), 100)