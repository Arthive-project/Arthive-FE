# Arthive-Frontend

<img alt="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFDeKg%2FbtsAPXufKUu%2FUSRknuDPdlFkaWfpPgPS2k%2Fimg.png">


# 0. 프로젝트 소개
### 기획 의도 및 서비스 소개

- Arthive(아타이브)는 평소 전시, 공연 행사에 관심이 많은 사용자에게 서울 모든 문화 행사 정보를 소개합니다. 서울의 전시, 공연 행사를 관람하려는 사용자에게 편리함으로 제공하고자 기획하였습니다.🎨
- 전시, 공연, 축제로 나뉘어진 카테고리를 선택하여 다양한 행사 정보와 위치를 확인할 수 있습니다.
- 아타이브에 없는 공연 정보거나 새로 열릴 행사가 있다면, 공연 행사를 등록 신청할 수 있습니다.
- (어드민 대시보드) 관리자는 문화 공연행사를 등록, 수정, 삭제 할 수 있습니다. 

### 개발 기간

- 2023.11.17 ~ 진행 중
- 프론트엔드 1명, 백엔드 2명

  
# 1. 개발 환경
- FE: React, JavaScript, Emotion, Recoil, Axios
- 버전 및 이슈관리: Github
- 협업 툴: Notion, Slack, Discord
- 디자인: Figma

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

# 3. 구현 기능 동작 예시 🛠

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
  
![휴대폰번호변경](https://github.com/Arthive-project/Arthive-FE/assets/111138337/f327c3a7-0732-4ac3-853d-a222ea6228c0)

 1. 회원 정보
    - 로그인한 유저의 회원 정보를 요청하여 이름, 이메일, 생년월일 표시
    - 회원 정보 수정
        - 휴대폰 번호 변경: 유효성 검사 후 업데이트
        - 비밀번호 변경: 비밀번호 변경 페이지로 이동
</details>

<details>
 <summary>7. 공연/행사 등록 페이지</summary>
 
![공연행사등록신청폼](https://github.com/Arthive-project/Arthive-FE/assets/111138337/c3aa30bd-4ab8-484f-b23e-4184087a1ead)

1. 공연/행사 등록 폼
    - 유저는 신청 폼을 작성한 후 신청 완료
    - 필수항목 입력 확인
 
</details>

<details>
 <summary>8. 어드민 대시보드</summary>
  
![어드민로그인로그아웃](https://github.com/Arthive-project/Arthive-FE/assets/111138337/71cca7af-215e-44bd-973c-bdc7cd0845a1)

1. 어드민 대시보드
    - 어드민 Email-Password로 로그인 시 어드민 대시보드로 이동
        - 어드민 대시보드 레이아웃으로 변경 됨
        - 로그아웃 시 유저 레이아웃으로 변경 및 메인 페이지로 이동
     
      
![어드민_게시물등록](https://github.com/Arthive-project/Arthive-FE/assets/111138337/4a2c8363-f2f7-40d7-bb67-6bf91900a3a5)
  
2. 문화 정보 게시물 관리
    - 문화행사 정보 게시물 전체 렌더링
    - 문화행사 정보 키워드 검색
    - 게시물 등록
        - Kakao 지도 api 활용하여 상세 주소 입력시 위도, 경도 자동 변환
        - 이미지 미리보기
    - 등록된 게시물 수정, 삭제

<img width="1419" alt="스크린샷 2024-01-15 오후 2 52 49" src="https://github.com/Arthive-project/Arthive-FE/assets/111138337/94ca979e-7bd6-4595-a83c-30d94c8e1aab">

3. 유저 관리
    - 회원가입된 전체 유저 목록
    - 유저 상세 정보 확인
</details>

# 4. 프로젝트 회고 👍

- 아타이브는 첫 팀 프로젝트이자 기획, 디자인, 팀원 모집, 개발까지 한 가지의 서비스가 탄생하기까지의 과정을 모두 겪어보며 많은 걸 배우게 해준 프로젝트이다.
- 데이터, UX/UI, 기능 등 확장성을 고려하여 개발해야 한다는 것을 깨달았으며, 개발을 진행할수록 이론 공부와 기본기가 가장 중요하다는 것을 알게 되었다.
- 사용해보지 못한 여러 라이브러리들과 상태관리를 경험해볼 수 있어 좋았다.
- 프로젝트를 진행하면서 내가 어떤 것을 잘 구현할 수 있고, 어떤 것에 어려움을 느끼며 보완해야 하는지 알 수 있었다. 실제로 기술을 구현해보며 겪는 어려움을 바로 공부하는 방식이 실력이 빠르게 향상되는 방법이라는 것을 깨닫게 되어 만족스럽다.
- 백엔드 팀원과의 협업에서 일부 소통이 원활하지 못했다. 팀장으로서 구성원들이 프로젝트에 적극적으로 참여할 수 있도록 이끌었어야 하는데 이 부분이 익숙치 않아 어려움을 겪었던 부분이 아쉽다. 하지만 이번 경험을 통해 커뮤니케이션의 중요성을 깨달았고 더 성장했다고 생각한다.
- 초기 팀원을 모집하고 기획할 때에는 여러 기능을 추가하고, 계속 서비스를 반전시키고자 하는 목표를 가지고 있었다. 하지만 팀원들의 회사 업무와 구직활동에 대한 일정 변동으로 프로젝트를 더이상 진행할 수 없게 된 점이 매우 아쉽다. 프로젝트를 진행하는 과정 안에서 여러 변수가 발생할 수 있고 이를 유연하게 대처할 수 있는 것도 중요하다는 것을 느끼게 된 계기가 되었다.
- 서비스에 기본적으로 필요한 기능들을 모두 직접 구현해보고 싶어 프론트엔드 개발을 혼자 맡았는데, 돌아보니 프론트엔드 동료 개발자와 협업했다면 더욱 성장할 수 있는 기회였겠다는 생각도 든다. 다음 프로젝트부터는 더 많은 개발자와 협업해보고 싶다.
