# Arthive-Frontend

<img alt="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFDeKg%2FbtsAPXufKUu%2FUSRknuDPdlFkaWfpPgPS2k%2Fimg.png">

- 배포 URL: https://
- Test ID:
- Test PW:

# 0. 프로젝트 소개
### 기획 의도 및 서비스 소개

- Arthive(아타이브)는 평소 전시, 공연 행사에 관심이 많은 사용자에게 서울 모든 문화 행사 정보를 소개합니다. 서울의 전시, 공연 행사를 관람하려는 사용자에게 편리함으로 제공하고자 기획하였습니다.🎨
- 전시, 공연, 축제로 나뉘어진 카테고리를 선택하여 다양한 행사 정보를 만나보세요!
- 관심있는 문화 행사를 찜💚 하고 마이페이지에서 한 번에 확인 할 수 있어요.
- 통합 검색🔎 페이지에서 키워드를 입력하여 관련된 문화행사 정보를 찾아볼 수 있습니다.
- 공연 관람 후 리뷰게시판에서 리뷰를 남기 거나 다른 사용자의 리뷰를 확인해 볼 수 있습니다.
- 아타이브에 없는 공연 정보거나 새로 열릴 행사가 있다면, 공연 행사를 등록 신청할 수 있어요!

### 개발 기간

- 2023.11.17 ~ ing

  
# 1. 개발 환경
- FE: React, Emotion, Redux, Axios
- BE: <a href='https://github.com/Arthive-project/Arthive-BE'>Arthive-BE</a>
- 버전 및 이슈관리: Github
- 협업 툴: Notion, Slack
- 서비스 배포: AWS
- 디자인: <a href='https://www.figma.com/file/N9FV5Z6NBLMAvgKNSfFeWA/Arthive?type=design&node-id=52-410&mode=design&t=Soo179rteCDVXg5z-0'>Figma</a>

# 2. 프로젝트 구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📜exhibition-mock.json
 ┃ ┣ 📜home-mock.json
 ┃ ┣ 📜index.js
 ┃ ┣ 📜myRegister-mock.json
 ┃ ┗ 📜seoulData.json
 ┣ 📂components
 ┃ ┣ 📜AdBanner.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜BoardDetail.js
 ┃ ┣ 📜BoardHeader.js
 ┃ ┣ 📜BoardItem.js
 ┃ ┣ 📜BoardList.js
 ┃ ┣ 📜Button.js
 ┃ ┣ 📜ExhibitionFilter.js
 ┃ ┣ 📜ExhibitionItem.js
 ┃ ┣ 📜FileInput.js
 ┃ ┣ 📜Footer.js
 ┃ ┣ 📜Form.js
 ┃ ┣ 📜FormInput.js
 ┃ ┣ 📜GalleryItem.js
 ┃ ┣ 📜InfoList.js
 ┃ ┣ 📜KakaoMap.js
 ┃ ┣ 📜LikeBtn.js
 ┃ ┣ 📜Navbar.js
 ┃ ┣ 📜Pagination.js
 ┃ ┗ 📜SubBanner.js
 ┣ 📂data
 ┃ ┗ 📜locationLists.js
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂Admin
 ┃ ┃ ┣ 📜ExhibitionRegister.js
 ┃ ┃ ┗ 📜GalleryRegister.js
 ┃ ┣ 📂Boards
 ┃ ┃ ┣ 📜About.js
 ┃ ┃ ┣ 📜BoardsDetail.js
 ┃ ┃ ┣ 📜Citizen.js
 ┃ ┃ ┣ 📜Classical.js
 ┃ ┃ ┣ 📜Concert.js
 ┃ ┃ ┣ 📜Culture.js
 ┃ ┃ ┣ 📜Dance.js
 ┃ ┃ ┣ 📜DetailPage.js
 ┃ ┃ ┣ 📜Exhibition.js
 ┃ ┃ ┣ 📜ExhibitionRegisterUser.js
 ┃ ┃ ┣ 📜MapContainer.js
 ┃ ┃ ┣ 📜Musical.js
 ┃ ┃ ┣ 📜Nature.js
 ┃ ┃ ┣ 📜OtherFestival.js
 ┃ ┃ ┣ 📜Theater.js
 ┃ ┃ ┗ 📜Tradition.js
 ┃ ┣ 📜Home.js
 ┃ ┣ 📜Login.js
 ┃ ┣ 📜MyLikes.js
 ┃ ┣ 📜MyPage.js
 ┃ ┣ 📜MyRegisterDetail.js
 ┃ ┣ 📜MyRegisterList.js
 ┃ ┣ 📜NotFound.js
 ┃ ┣ 📜Search.js
 ┃ ┗ 📜SignUp.js
 ┣ 📂store
 ┣ 📜Main.js
 ┗ 📜index.js
```

# 3. 구현 기능 🛠

<details>
 <summary>1. 메인페이지 & 네비바</summary>
 
 ![메인페이지](https://github.com/Arthive-project/Arthive-FE/assets/111138337/0c3be09a-51f7-4222-98a0-0b481ec8f09c)

 1. 메인 페이지
    - AdBanner 슬라이드 자동으로 전환
      - 배너 클릭 시 해당 공연 상세 페이지로 이동
       - SubBanner 슬라이드 화살표 클릭시 다음 아이템으로 이동
           - 포스터 클릭 시 해당 공연 상세 페이지로 이동
           - 더보기 클릭 시 해당 카테고리 페이지로 이동
 
![네비바](https://github.com/Arthive-project/Arthive-FE/assets/111138337/245bbdde-fffb-4cbf-8fe5-65896d41880a)

2. 네비바
    - 로고
        - 클릭 시 메인 페이로 이동
    - 카테고리
        - 마우스 오버 시 상세 카테고리 메뉴 드롭 다운
        - 전시, 공연, 축제, 커뮤니티 게시판으로 이동
        - 로그인, 회원가입 페이지로 이동
        - 마이페이지, 찜 목록, 검색 페이지로 이동
     
![로그아웃](https://github.com/Arthive-project/Arthive-FE/assets/111138337/eaf0d811-3e6a-41cb-8ce3-1c4e73c91b83)
    
   - 로그인 상태 
       - 로그인 버튼 → 유저 이름으로 변경
       - 회원가입 버튼 → 로그아웃 버튼으로 변경
   - 로그아웃
       - 로그아웃 버튼 클릭 시 로그아웃 컨펌 안내창 표시
       - 로그아웃 컨펌 확인 시 localStorage의 accessToken과 refreshToken 삭제
</details>

<details>
 <summary>2. 문화행사 카테고리 페이지 & 상세페이지</summary>

![2 문화행사](https://github.com/Arthive-project/Arthive-FE/assets/111138337/8ad153f0-1ac4-4885-91ad-23db2ef7f46c)

1. 문화행사 카테고리 페이지
    - 대분류 카테고리 클릭 시 해당 카테고리 전체 데이터 렌더링
    - 세부 카테고리 클릭 시 세부 카테고리로 렌더링
    - (무한 스크롤 구현 진행중)
2. 상세 페이지
    - 공연 포스터 및 타이틀 클릭 시 상세 페이지로 이동
    - 공연 상세 정보 확인, 해당 공연의 홈페이지로 이동 가능
    - 위도 경도 데이터 주소로 전환
    - Kakao 지도 api로 공연 장소 확인
    - 프로그램 출연자, 추가 정보, 기타 내용이 기입되어 있는 경우만 항목 렌더링
</details>

<details>
 <summary>3. 로그인 페이지</summary>
 
![로그인](https://github.com/Arthive-project/Arthive-FE/assets/111138337/fa0b6496-942d-4168-9133-848828956435)

1. 유효성 검사
    - Email: email 형식이 맞는지, 입력 값이 있는지 검사
    - Password: 입력 값이 있는지 검사
2. 로그인
    - 성공: AccessToken과 RefreshToken을 localStorage에 저장
    - 실패: 유효성 검사를 통과하지 못했거나, Email-Password가 일치 하지 않을 때 안내창 출력
    - (자동 로그인, 자동 로그아웃 구현 예정)
 
</details>

<details>
 <summary>4. 회원가입 페이지</summary>

 ![회원가입](https://github.com/Arthive-project/Arthive-FE/assets/111138337/cd2321ab-a7c9-4cd6-a307-b5d5aa3cfd4a)


1. 유효성 검사
    - 이메일: 이메일 형식에 맞는지 확인
    - 비밀번호: 영문, 숫자, 특수문자 포함 8~20자 확인
    - 비밀번호 확인: 입력한 비밀번호와 일치하는지 확인
    - 성함: 두 글자 이상 입력했는지 확인
    - 생년월일: 입력했는지 확인
    - 휴대전화: 명시한 형식에 맞게 입력했는지 확인
2. 회원 가입 성공
    - 로그인 페이지로 이동
  
 ![회원가입불가](https://github.com/Arthive-project/Arthive-FE/assets/111138337/f9bcbc5e-d8ee-4f95-b793-6a5f61dadb5e)


3. 회원 가입 불가 안내
    - 이미 가입된 email인 경우
    - 유효성 검사를 통과하지 못한 경우

 
</details>

<details>
 <summary>5. 통합 검색 페이지</summary>
 (구현 진행중입니다!)
1. 키워드 검색
2. 일치하는 공연 정보 렌더링
</details>

<details>
 <summary>6. 마이 페이지</summary>

 1. 회원 정보
    - 로그인한 유저의 회원 정보를 요청하여 이름, 이메일, 생년월일 표시
    - 회원 정보 수정
        - 현재 비밀번호, 새 비밀번호, 새 비밀번호 유효성 검사
        - 비밀번호 업데이트
</details>

<details>
 <summary>7. 공연/행사 등록 페이지</summary>
 
![공연행사등록신청폼](https://github.com/Arthive-project/Arthive-FE/assets/111138337/c3aa30bd-4ab8-484f-b23e-4184087a1ead)

1. 공연/행사 등록 폼
    - 유저는 신청 폼을 작성한 후 신청 완료
    - 필수항목 입력 확인
 
</details>

<details>
 <summary>8. 관심 목록 페이지</summary>
 (구현 진행중입니다!)

<img width="1096" alt="관심 목록 페이지" src="https://github.com/Arthive-project/Arthive-FE/assets/111138337/9bedfcf1-1298-4057-8664-1c07762a7a11">

 
</details>

<details>
 <summary>9. 어드민 대시보드</summary>
 1. 유저 관리
 2. 게시물 관리
 3. 공연 행사 등록 신청 관리
</details>




# 4. 대표 기능 동작 예시 💻

# 5. 프로젝트 회고 👍
