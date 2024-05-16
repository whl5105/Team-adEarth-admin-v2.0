# 키워드 클릭 광고를 적용한 이커머스 플랫폼

## 배포 링크

> AWS S3, CloudFront, Route53 배포 / Github Actions CICD 구축

- [🌐 구매자 페이지 (id: testuser / password: aaa1111!)](https://adearth.shop)
- [🌐 어드민 페이지 (id: jigushop / password: aaa1111!)](https://adearth-admin.shop)

## 실행 방법

```
git clone https://github.com/ad-earth/admin-v2.0.git

npm install
npm start
```

## 서비스 개요

> 2023/02/28 ~ **v2.0 리팩토링 시작**

#### 프로젝트 주제

- 키워드 클릭 광고를 적용한 이커머스 플랫폼

#### 개발 목적

- 기존 키워드 클릭 광고주 페이지의 문제점들을 개선해 광고 입찰에 꼭 필요한 기능들만 선별하여 제공함으로써 사용자의 경험을 개선
- 편리하고 간편한 서비스를 광고주들에게 제공함으로써 신규 광고주 유입 효과 기대

<br/>

## 페이지 주요 기능
#### 기능적 개선
- 에러 및 알림 메시지 toast UI 공통 처리하여 일관성 유지
- 현재 선택된 필터를 UI에 표시하여 유저 편의성 향상
- 테이블 헤더에 info tooltip, 원화 및 숫자 단위 표시를 제공해 사용성 개선
- 클릭 동작이 경고 및 주의가 필요한 액션일 경우 모달을 사용하여 이중 확인

#### 기술적 개선
- 동일한 QueryKey로 받아오는 데이터를 custom hook으로 모아 이전보다 쉽게 데이터를 관리하고, 변경사항이 발생했을 때 쉽게 유지보수할 수 있도록 개선
- 폴더 구조를 개선해 공통 컴포넌트를 모듈화하여 컴포넌트 재사용성을 높임
- Axios Response Type을 지정해 서버로부터 fetching 해온 데이터의 타입을 사전에 체크
- protectedRoute를 통해 대시보드 페이지 진입시 페이지 보안 강화 및 공통 리다이렉트 처리
- 단일 페이지에서 여러 쿼리를 사용할 때, useQueries를 사용하여 쿼리 처리의 동시성을 극대화
- queryString을 사용하여 동적인 필터링 데이터의 상태 관리 유지

## 페이지 주요 기능
| 회원가입 및 로그인 페이지 | 계정 찾기 페이지 |
|---|---|
|<img src='https://user-images.githubusercontent.com/101298873/232402764-698eb380-0976-41f9-8cd4-b195c8821721.gif' width="450">|<img src='https://user-images.githubusercontent.com/101298873/232403095-642a2ad1-77e7-46fe-b36d-33c66d8fba7c.gif' width="450">|
|▪︎ 슬라이드 광고배너 제공 <br/> ▪︎ 회원가입 시, 아이디 & 사업자번호 & 연락처 중복검사 <br/> ▪︎ 회원가입과 로그인 시, 실시간 유효성 검사|▪︎ 상호명과 사업자번호 입력 시, 기존 아이디 확인 <br/> ▪︎ 아이디와 사업자번호 입력 시, 새로운 비밀번호로 재설정| 

| 메인 페이지 | 배송 관리 페이지 |
|---|---|
|<img src='https://user-images.githubusercontent.com/101298873/232552094-bfad887b-a5e4-4b51-ad03-aa5e382e8249.gif' width="450">|<img src='https://user-images.githubusercontent.com/101298873/232455581-c8a4f30b-e5fc-4413-8506-9b23e624c55c.gif' width="450">|
|▪︎ 아코디언 광고배너 제공 <br/> ▪︎ 신규주문 & 전원매출액 & 노출상품 수 & 광고 키워드 순위 실시간 확인 <br/> ▪︎ 3개월 광고 요약 보고서 차트데이터 제공 <br/> ▪︎ 비즈머니 금액 확인 및 충전|▪︎ 페이지당 최대 10개의 배송상품 데이터 제공 <br/> ▪︎ 기간 & 상품 & 배송상태 다중 필터링 <br/> ▪︎ 단일 & 전체 배송상품 주문확정 <br/> ▪︎ 배송 리스트 현황 csv 파일 다운로드|

| 상품 등록 & 수정 페이지 | 상품 관리 페이지 |
|---|---|
|<img src='https://user-images.githubusercontent.com/101298873/232450948-c739bbc8-7469-47ad-b705-d44b3aae515a.gif' width="450">|<img src='https://user-images.githubusercontent.com/101298873/232455544-0561734e-eaf7-4df1-a9c6-e0115676f54c.gif' width="450">|
| ▪︎ 상품 등록 & 수정 & 삭제 기능 제공 <br/> ▪︎ 상품 등록 & 수정 시 필수 입력사항에 대한 유효성 검사 |▪︎ 페이지당 최대 10개의 카테고리 별 상품 데이터 제공 <br/> ▪︎ 상품 노출 여부 선택 수정 <br/> ▪︎ 상품 단일 & 전체 삭제| 

| 광고 관리 페이지 | 광고 보고서 페이지 |
|---|---|
|<img src='https://user-images.githubusercontent.com/101298873/232457224-4e8357ee-4ad0-472e-a035-53cce45d60e3.gif' width="450">|<img src='https://user-images.githubusercontent.com/101298873/232448560-90c37c67-a83d-461c-850d-ac668202bf1c.gif' width="450">|
|▪︎ 상품별  최대 20개 키워드 데이터 제공 <br/> ▪︎ 키워드 단일 & 전체 삭제 <br/> ▪︎ 키워드 광고등록, 키워드 광고수정 |▪︎ 기간, 상품 다중 필터링 <br/> ▪︎ 최대 3개월의 키워드별 클릭 수 & 매출 전환 수 area chart 제공 <br/> ▪︎ 단일 상품에 대한 키워드별 매출 데이터 테이블 제공| 

<br/>
  
## 기술 스택
<table>
    <thead>
        <tr>
          <td align="center"><b>분류</b></td>
          <td align="center"><b>스택</br></td>
        </tr>
    </thead>
    <tbody>
        <tr>
             <td align="center"><b>FrontEnd</b></td>
            <td>
                <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&color=5C5C5C&labelColor=61DAFB"/>
                <img src="https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript&logoColor=white&color=5C5C5C&labelColor=3178C6"/>	
                <img src="https://img.shields.io/badge/React Query-3.39.3-FF4154?logo=ReactQuery&logoColor=white&color=5C5C5C&labelColor=FF4154"/>	
                <img src="https://img.shields.io/badge/recoil-0.7.7-3578E5?logo=recoil&logoColor=white&color=5C5C5C&labelColor=3578E5"/>	
                <img src="https://img.shields.io/badge/sass-1.60.0-CC6699?logo=sass&logoColor=white&color=5C5C5C&labelColor=CC6699"/>	
            </td>
        </tr>
        <tr>
            <td align="center"><b>BackEnd</b></td>
            <td>
                <img src="https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=white"/>
                <img src="https://img.shields.io/badge/nodedotjs-5FA04E?logo=nodedotjs&logoColor=white"/> 
                <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white"/>
                <img src="https://img.shields.io/badge/expressJs-000000?logo=express&logoColor=white"/>		
            </td>
         </tr>
         <tr>
             <td align="center"><b>Infra</b></td>
             <td>
                 <img src="https://img.shields.io/badge/Github_Action-2088FF?logo=githubactions&logoColor=white"/> 
                 <img src="https://img.shields.io/badge/amazonec2-FF9900?logo=amazonec2&logoColor=white"/> 
                 <img src="https://img.shields.io/badge/amazons3-569A31?logo=amazons3&logoColor=white"/> 
                 <img src="https://img.shields.io/badge/amazonroute53-8C4FFF?logo=amazonroute53&logoColor=white"/>
             </td>
        </tr>
        <tr>
            <td align="center"><b>Collaboration</b></td>
            <td>
              <img src="https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white"/>
              <img src="https://img.shields.io/badge/Notion-000000?logo=Notion"> 
              <img src="https://img.shields.io/badge/Figma-F24E1E?logo=Figma&logoColor=ffffff"> 
              <img src="https://img.shields.io/badge/Discord-5865F2?logo=Discord&logoColor=ffffff">
            </td>
        </tr>
    </tbody>
</table>

<br/>

## 아키텍쳐

![광고지구아키텍쳐](https://user-images.githubusercontent.com/105091138/195766564-08299428-e979-49f0-97c8-7a130a7b106c.jpeg)

<br/>

## Git Flow 
![gitFlow](https://github.com/whl5105/Team-adEarth-admin-v2.0/assets/73993670/5c73de93-3f75-4bae-b5ea-1e467580b15a)

- master : 제품으로 출시될 수 있는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- refactoring develop  : 코드 리팩토링 작업을 수행하는 브랜치
- refactoring feature  : 리팩토링 과정에서 해당 기능에 수행하는 브랜치  

<br/>

## Development Setup

```bash

# Move to your workspace
cd your-workspace

# Clone this repository:
$ https://github.com/whl5105/Team-adEarth-admin-v2.0.git

# Enter in directory:
$ Team-adEarth-admin-v2.0

# Install dependencies:
$ yarn install

# Run the development server:
$ yarn start

# Open the project in your browser
$ http://localhost:3000
```

<br/>

## Team Members
  <table>
  <tr>
      <td align="center">FrontEnd</td>
      <td align="center">FrontEnd</td>
      <td align="center">FrontEnd</td>
      <td align="center">BackEnd</td>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/whl5105.png" width="160"></td>
      <td align="center"><img src="https://github.com/damiiya.png" width="160"></td>
      <td align="center"><img src="https://github.com/sol-pine.png" width="160"></td>
      <td align="center"><img src="https://github.com/huitopia.png" width="160"></td>
    </tr>
    <tr>
      <td align="center">최수인</td>
      <td align="center">이담</td>
      <td align="center">해솔</td>
      <td align="center">김다희</td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/whl5105" target="_blank">@whl5105</a></td>
      <td align="center"><a href="https://github.com/damiiya" target="_blank" width="160">@damiiya</a></td>
      <td align="center"><a href="https://github.com/sol-pine" target="_blank">@sol-pine</a></td>
      <td align="center"><a href="https://github.com/huitopia" target="_blank">@huitopia</a></td>
    </tr>
  </table>
