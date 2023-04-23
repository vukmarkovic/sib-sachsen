function randomSelection() {
    const radioButtons = document.querySelectorAll('.sv-item')
    const textarea = document.querySelector('.sv-comment')
    if (radioButtons.length > 0) {
        radioButtons[
            parseInt(Math.random() * radioButtons.length)
        ].children[0].click()
    } else if (textarea) {
        textarea.focus()
        textarea.value =
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        textarea.blur()
    }
    setTimeout(() => {
        document.querySelector('body').click()
        const nextButton = document.querySelector('.sv-footer__next-btn')
        if (nextButton) {
            nextButton.click()
            setTimeout(randomSelection, 10)
        }
    }, 10)
}

randomSelection()
