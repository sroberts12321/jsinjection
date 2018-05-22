let container = document.getElementById("container")

let link = document.createElement("LINK")
link.rel = "stylesheet"
link.type = "text/css"
link.href = "styles.css"
document.head.appendChild(link)

//------------------------------------------------------------------------
let header = document.createElement("UL")
let title = header.appendChild(document.createElement("LI"))
let home = header.appendChild(document.createElement("LI"))
let categories = header.appendChild(document.createElement("LI"))

title.innerHTML = "HighOnCoding"
home.innerHTML = "Home"
categories.innerHTML = "categories"

header.className = "heading"
title.className = "title"
home.className = "menu"
categories.className = "categories menu"


container.appendChild(header)

//------------------------------------------------------------------------

let curseDiv = document.createElement("DIV")
let curse = curseDiv.appendChild(document.createElement("H2"))
let curseContents = curseDiv.appendChild(document.createElement("P"))

curse.innerHTML = "Curse of the Current Reviews"
curseContents.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot, and reviews."

curseDiv.className = "curseDiv margin"

container.appendChild(curseDiv)

//------------------------------------------------------------------------

let watchKitDiv = document.createElement("DIV")
let watchKit = watchKitDiv.appendChild(document.createElement("H2"))
let watchKitParagraph = watchKitDiv.appendChild(document.createElement("P"))
let watchKitMetaDiv = watchKitDiv.appendChild(document.createElement("DIV"))
let watchKitMeta = watchKitMetaDiv.appendChild(document.createElement("UL"))
let watchKitMetaComments = watchKitMeta.appendChild(document.createElement("LI"))
let watchKitMetaLikes = watchKitMeta.appendChild(document.createElement("LI"))


watchKit.innerHTML = "Hello WatchKit"
watchKitParagraph.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and devloping apps for the Appe Watch"
watchKitMetaComments.innerHTML = "12 comments"
watchKitMetaLikes.innerHTML = "124 likes"

watchKit.className = "blueText margin"
watchKitParagraph.className = "margin helvetica"
watchKitMetaDiv.className = "orange margin helvetica"
watchKitMeta.className = "nopadding"

container.appendChild(watchKitDiv)

//------------------------------------------------------------------------

let swiftDiv = document.createElement("DIV")
let swift = swiftDiv.appendChild(document.createElement("H2"))
let swiftParagraph = swiftDiv.appendChild(document.createElement("P"))
let swiftMetaDiv = swiftDiv.appendChild(document.createElement("DIV"))
let swiftMeta = swiftMetaDiv.appendChild(document.createElement("UL"))
let swiftMetaComments = swiftMeta.appendChild(document.createElement("LI"))
let swiftMetaLikes = swiftMeta.appendChild(document.createElement("LI"))


swift.innerHTML = "Introduction to Swift"
swiftParagraph.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and is still in development, but it clearly reflects the intentions and the future direction of Apple. This article will revolve around the basic concepts in the Swift language and how you can get started"
swiftMetaComments.innerHTML = "15 comments"
swiftMetaLikes.innerHTML = "45 likes"


swift.className = "blueText margin"
swiftParagraph.className = "margin helvetica"
swiftMetaDiv.className = "orange margin helvetica"
swiftMeta.className = "nopadding"

container.appendChild(swiftDiv)



