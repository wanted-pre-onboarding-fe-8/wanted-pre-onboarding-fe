# 원티드 프리온보딩 프론트엔드 1주차 과제 - 사전 과제 리팩토링

## 동작

|     EMAIL     | PASSWORD  |
| :-----------: | :-------: |
| test@test.com | 123456aA! |

https://user-images.githubusercontent.com/83255812/177484084-83c71768-44f7-4a53-8f9f-87c3f30823ec.mp4

## 역할

|  이름  |          역할           |
| :----: | :---------------------: |
| 엄일경 | GNB, 피드 컴포넌트 구현 |
| 임은지 |    코드 리뷰 및 리딩    |
| 이진희 | 로그인 밸리데이션 구현  |
| 오태권 |  로그인 컴포넌트 구현   |
| 문성운 |  라우터 컴포넌트 구현   |

## 폴더 구조

```bash
├── src
│   ├── components
│   │     ├── Button.jsx
│   │     ├── GNB.jsx
│   │     ├── Input.jsx
│   │     ├── Logo.jsx
│   │     └── Spector.jsx
│   ├── context
│   │     └── AuthContext.js
│   ├── hooks
│   │     └── useValidation.js
│   ├── pages
│   │     ├── Feeds
│   │     │    ├── Comments.jsx
│   │     │    ├── Feed.jsx
│   │     │    ├── FeedBody.jsx
│   │     │    ├── FeedContainer.jsx
│   │     │    ├── FeedHeader.jsx
│   │     │    └── index.jsx
│   │     └── Feeds
│   │          └── index.jsx
│   │
│   ├── utils
│   │    ├── constants
│   │    │    └── index.js
│   │    └── helpers
│   │         ├── api.js
│   │         ├── stroage.js
│   │         └── validation.js
│   ├── styles
│   │    └── globalStyles.js
│   └── services
│        └── getFeed.js
│
├── public
│   ├── data
│   │    └── feeds.json
│   └── images
```

## 구현

### Assignment 1 - `Login`

- [x] 로그인 컴포넌트 개발

- [x] Ref를 사용한 랜더링 최적화

- [x] 로그인 시 Local Storage에 정보 저장 후 메인 페이지로 이동

### Assignment 2 - `GNB`

- [x] 스크롤에 관계 없이 화면 상단에 고정되는 GNB 구현

- [x] 가운데 input은 모바일 사이즈에서 사라지고 space-between 정렬

- [x] 가장 오른쪽 아이콘에 Logout 버튼 구현

### Assignment 3 - `Validation`

- [x] 정규 표현식을 사용하여 Validation 함수를 만들고 분리

- [x] 이메일과 비밀번호의 유효성 확인

  - 이메일 조건 : `@`, `.` 포함

  - 비밀번호 조건 : 대문자, 숫자, 특수문자 포함 8자리 이상

- [x] Validation 상태를 CSS로 표현

  - 이메일과 비밀번호 조건을 만족하지 못하면 input의 border를 red 색상으로 변경

  - Validation을 모두 통과한 경우 Button 색상을 진하게 변경

### Assignment 4 - `Routing`

- [x] 로그인, 로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현

- [x] 로그인이 완료되면 메인 페이지로 이동 되도록 구현

- [x] 메인 페이지에서 로그아웃되면 로그인 페이지로 이동 되도록 구현

- [x] History Push 사용 금지

  - [x] 전역 상태를 통한 라우팅 분기 구현

### Assignment 5 - `Feeds`

- [x] 피드 컴포넌트 개발

- [x] 레이아웃을 인스타그램과 동일하게 구현

- [x] 각 피드의 정보는 public/data 디렉토리에 json 형식으로 구성 후

- [x] 각각의 피드에 댓글을 추가 및 게시 후 Input 초기화 기능 구현

- [x] 피드는 화면 중앙에 위치하며 모바일 대응이 가능하게 구현

- [x] 피드의 이미지는 각각 다른 사이즈를 사용

- [x] image.onload를 사용하여 이미지가 로딩이 완료된 후 컴포넌트가 로딩 되도록 구현

## 회의록

- [1일차 💬](https://brick-cardigan-b9a.notion.site/1-2282159aadda46e0875a710832f3c36c)
- [2일차 💬](https://brick-cardigan-b9a.notion.site/2-56751d2fcda04b26b5af33e0a81a92cb)
- [3일차 💬](https://brick-cardigan-b9a.notion.site/3-f2aa1d6a3b3142f4b7c9c3d0ed0bbe70)
