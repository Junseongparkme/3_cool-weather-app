# React Native Weather

현재 위치의 날씨와 기온을 나타냅니다.

## 시작하기

```shell
yarn install
yarn start
```

## API 키 받아오기

1. `https://home.openweathermap.org` 회원가입
2. `https://home.openweathermap.org/api_keys`에서 `Key` 생성 후 복사하기

## API 키 사용하기

### 바로 입력하기

```javascript
// App.js

const API_KEY = '받아온 API 키 입력';
```

### API 키 숨기기

```javascript
//config.js

var config = {
    API_KEY = ''
}
```

```javascript
// App.js

import API_KEY from './config';

const API_KEY = config.API_KEY;
```

`.gitignore`에 `config.js` 추가
