// Identify Elements Html.
var elementsIdentity = {
    'textBox' :     'div._2_1wd[data-tab="6"]',
    'sendButton':   'button._1E0Oz',
    'boxMessages' : 'div._11liR[data-tab="7"]',
    'ballonMsgIdentUser' : [
        'div._26iqs > span.ZJv7X',
        'div._26iqs > span._1Lc2C'
    ],
}

// Send Message To Chat.
function sendMessageToChat (text) {
    let elTextBox = document.querySelector(elementsIdentity.textBox)

    elTextBox.textContent = text;
    elTextBox.dispatchEvent(new InputEvent('input', { bubbles: true }))

    let elSendButton = document.querySelector(elementsIdentity.sendButton)
    elSendButton.click()
}

// Get User Send Last Message.
function getUserNameSendLastMessage () {
    let elBoxMessages = document.querySelector(elementsIdentity.boxMessages)
    let elLastMessage = elBoxMessages.lastElementChild

    let elUserLastMessageType1 = elLastMessage.querySelector(elementsIdentity.ballonMsgIdentUser[0])
    let elUserLastMessageType2 = elLastMessage.querySelector(elementsIdentity.ballonMsgIdentUser[1])

    if (elUserLastMessageType1 != null) {
        return elUserLastMessageType1.textContent
    } else if (elUserLastMessageType2 != null) {
        return elUserLastMessageType2.textContent
    } else {
        return null
    }
}

// Get User ID Send Last Message.
function getUserIdSendLastMessage () {
    let elBoxMessages = document.querySelector(elementsIdentity.boxMessages)
    let elLastMessage = elBoxMessages.lastElementChild

    return elLastMessage.getAttribute('data-id')
}

// Send Message to User by Name.
function disturbUserGroup(userName, text) {
    clearInterval(interval)
    var histUserIdLastMessage = getUserIdSendLastMessage()

    function watchLastMessageSended () {
        let userIdLastMessage = getUserIdSendLastMessage()
        let userLastMessage = getUserNameSendLastMessage()
    
        if (
            (histUserIdLastMessage != null && userIdLastMessage != null) 
                && histUserIdLastMessage != userIdLastMessage
        ) {
            if (userLastMessage == userName) {
                sendMessageToChat(text)
            }
    
            histUserIdLastMessage = userIdLastMessage
        }
    }
    var interval = setInterval(watchLastMessageSended, 250);
}

/**
 * Examples: 
 * 
 * disturbUserGroup('+55 11 99999-9999', 'SOME TEXT')
 * disturbUserGroup('Lorem Ipsum', 'SOME TEXT')
 * disturbUserGroup('Leonard Albert', 'SOME TEXT')
 * disturbUserGroup('Leonard', 'SOME TEXT')
 */
