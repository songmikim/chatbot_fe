# 챗봇 프론트앤드
## 개요
React를 기반으로 한 챗봇 웹 클라이언트입니다.  
사용자는 이 UI를 통해 채팅 메시지를 주고받고, 봇의 응답을 실시간으로 확인할 수 있습니다.

## 주요 기능
- 실시간 채팅 인터페이스
- 메시지 입력 및 전송
- 로딩 스피너 표시
- 반응형 디자인 (PC/모바일 지원)

## 기술 스택
- React (v17+)
- React Router
- Axios (HTTP 클라이언트)
- SASS

## 설치 및 실행

```bash
## 프로젝트 클론
git clone <repository-url> chatbot_fe
cd chatbot_fe

## 의존성 설치
yarn install

## 개발 서버 실행
yarn start

## 빌드
yarn build
```

## 디렉터리 구조
```
chatbot_fe/
├── public/                # 정적 파일 (index.html 등)
├── src/
│   ├── assets/            # 이미지, 폰트 등
│   ├── components/        # 재사용 가능한 컴포넌트
│   ├── hooks/             # 커스텀 훅
│   ├── pages/             # 라우트별 페이지 컴포넌트
│   ├── services/          # API 호출 모듈 (Axios 설정)
│   ├── styles/            # 전역 스타일
│   ├── App.jsx
│   └── index.jsx
└── package.json


```

## 환경 변수
- 프로젝트 루트에 .env 파일을 생성하고 다음을 설정합니다:

```env
REACT_APP_API_BASE_URL=http://localhost:8000
```

## 배포
```
yarn add serve
yarn build
npx serve -s build -l 3000
```
