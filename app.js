const inputNumber = document.querySelector('#inputNo'),
    generateBtn = document.querySelector("#generate"),
    copyIcon = document.querySelector(".fa"),
    sequenceOutput = document.querySelector("#sequence");

// Function to copy the generated Sequence
const copySequence = () => {
    navigator.clipboard.writeText(sequenceOutput.value);
    copyIcon.style.color = "#4285f4";
    setTimeout(() => {
        copyIcon.style.color = "#707070";
    }, 1500);
}
const generateSequence = () => {
    let n1 = 0, n2 = 1, nextTerm;
    const sequence = []
    for (let i = 1; i <= parseInt(inputNumber.value); i++) {
        sequence.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    sequenceOutput.value = sequence;
}

copyIcon.addEventListener("click", copySequence);
generateBtn.addEventListener("click", generateSequence);