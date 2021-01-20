const reversePhrase = (phrase) => {
    const phrase_split = phrase.split(" ")
    const phrase_reverse = phrase_split.reverse()

    const result = phrase_reverse.join(" ")

    return result
}

const result = reversePhrase("Que la fuerza te acompañe")
console.log(result)