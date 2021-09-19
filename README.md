# &#127916; Movie Web (영화 아카이브)

## 배포 주소
http

### Test ID/PW  
- [Admin] xxx / xxx
- [Member] xxx / xxx

###
   &nbsp;
   &nbsp;

## 실행 방법
패키지 매니저 Yarn 사용

```
# install 
$ yarn

# serve with hot reload at localhost:3000
$ yarn start 
``` 
   &nbsp;
   &nbsp;
   
## 구현 사항
[YTS Movie API](https://yts.mx/api) 의 영화목록, 영화상세, 추천영화 정보 API 를 이용하였으며, 기능 구현 시 Custom Hook 을 만들어 활용했습니다


### SignUp, SignIn
- Firebase Firestore 를 이용해 회원가입, 로그인
- SessionStorage 에 로그인 여부, 로그인 ID 를 저장
- 로그인 후 Nav 변경 및 Redirect

### Home 
- Redux 를 이용한 영화목록 관리
- Redux state 에 따라 Loading 컴포넌트 적용
- Intersection Observer 를 이용한 영화목록 무한 스크롤
- 영화 클릭 시 Detail 페이지로 이동

### Movie Detail
- YTS API 를 이용해 영화 상세정보, 관련 추천영화 출력
- Firebase Firestore 로 좋아요, 관심없음 여부 저장 및 출력

### Member (Admin용)
- Firebase Firestore 를 이용해 전체 회원목록 호출, 출력
- Table, Pagination 구현

###
   &nbsp;
   &nbsp;
   
## 적용기술

- [Front] React, React Hooks, React Router, Typescript, Redux-toolkit, SessionStorage, Sass, react-loading, react-icons
- [Server] Firebase Firestore
