fetch('/auth/access', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        // 액세스 토큰 처리 예시
        const token = data.accessToken;
        console.log("Access Token:", token);
        // 로컬 스토리지에 저장
        localStorage.setItem('accessToken', token);
    })
    .catch(error => {
        console.error('Error:', error);
    });
