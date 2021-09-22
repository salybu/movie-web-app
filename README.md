# &#127916; Movie Web (영화 아카이브)

## 배포 주소
https://jaranda-pentagon-v2.web.app

### Test ID/PW  
- member / member

###
   &nbsp;
   &nbsp;

## 실행 방법
패키지 매니저 npm 사용

```
# install 
$ npm install

# serve with hot reload at localhost:3000
$ npm run start 
``` 
   &nbsp;
   &nbsp;
   
## 구현 사항
[YTS Movie API](https://yts.mx/api) 의 영화목록, 영화상세, 추천영화 정보 API 를 이용하였으며, 기능 구현 시 Custom Hook 을 만들어 활용했습니다


### SignIn
- Firebase Firestore 를 이용해 로그인
- SessionStorage 에 로그인 여부, 로그인 ID 를 저장
- 로그인 후 Nav 변경 및 Redirect

### SignUp
- Firebase Firestore 를 이용해 회원가입
- react-daum-postcode 모듈을 이용해 주소입력, Modal 사용
- 유효성 검사 여부에 따라 Toast 를 사용해 알림

### Home 
- Redux 를 이용한 영화목록 관리
- Redux state 에 따라 Loading 컴포넌트 적용
- Intersection Observer 를 이용한 영화목록 무한 스크롤
- 영화 클릭 시 Detail 페이지로 이동

### Movie Detail
- YTS API 를 이용해 영화 상세정보, 관련 추천영화 출력
- Firebase Firestore 로 좋아요, 관심없음 여부 저장 및 출력

### Member
- Firebase Firestore 를 이용해 전체 회원목록 호출, 출력
- Pagination 구현

###
   &nbsp;
   &nbsp;
   
## 적용기술

- [Front] React, React Hooks, React Router, Typescript, Redux-toolkit, SessionStorage, Sass, react-loading, react-icons, react-daum-postcode
- [Server] Firebase Firestore
