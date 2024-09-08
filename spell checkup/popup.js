document.getElementById('checkButton').addEventListener('click', () => {
    const text = document.getElementById('textInput').value;
    checkSpelling(text);
});

function checkSpelling(text) {
    // 맞춤법 검사 API를 호출하는 부분입니다.
    // 여기서는 예시로 단순한 정규 표현식을 사용합니다.
    const errors = []; // 오류를 저장할 배열

    // 예시: '안녕하세요'가 아닌 '안녕하세여'와 같은 오류를 찾는 정규 표현식
    const regex = /안녕하세여/g; 
    let match;
    
    while ((match = regex.exec(text)) !== null) {
        errors.push(match[0]);
    }

    displayResults(errors);
}

function displayResults(errors) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (errors.length > 0) {
        resultDiv.innerHTML = `<p>찾은 오류: ${errors.join(', ')}</p>`;
    } else {
        resultDiv.innerHTML = '<p>오류가 없습니다!</p>';
    }
}
