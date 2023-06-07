# CNU Library Wi-Fi Analyzer (WIA)
> 충남대학교 중앙도서관 실시간 와이파이 혼잡도 분석기

[![NPM Version][npm-image]][npm-url]  

<br />

![manual1](https://github.com/99andrew99/WiA/assets/46346267/f78a4a69-e227-4cdc-8dd7-9867d0877724)
![manual2](https://github.com/99andrew99/WiA/assets/46346267/d8afa313-a68a-4d34-91ed-ad0b24dbc2ca)


## 설치

OS X & Linux:

```sh
npm install
npm start
```

Windows:  

![qr코드](https://github.com/99andrew99/WiA/assets/37804008/307b9831-0b7e-4322-8dc7-687f20b669e3)  
사이트 링크: https://dragonfri.github.io/WiA/


## 웹서비스 실사용

### ● 주 사용층
충남대학교 재학생 및 중앙도서관 통신 관리자

### ● 서비스 사용방법

<strong>pc 버전</strong> <br />
1. 본인이 사용하고 있는 도서관 섹션을 확인하기 위해서 본인이 몇 층을 이용하고 있는지 선택한다.  

![1](https://github.com/99andrew99/WiA/assets/37804008/7a019d18-81ab-4559-99f4-f585381ef416)
<br /><br />
2. 본인이 사용하고 있는 섹션을 도면을 통해 확인한 후 선택한다.  


![2](https://github.com/99andrew99/WiA/assets/37804008/66c23533-b80c-410a-a0cf-b593effdcce6)
<br /><br />
3. 섹션에 해당하는 ap들의 위치를 이미지 슬라이드를 통해 확인한 후 접속자 수와 혼잡도를 확인한다.  


![3](https://github.com/99andrew99/WiA/assets/37804008/3f620434-5bc2-41fc-a879-b99b506ca7b7)
<br /><br />

<strong>모바일 버전</strong> <br />
1. 본인이 사용하고 있는 도서관 섹션을 확인하기 위해서 본인이 몇 층을 이용하고 있는지 선택한다.  


![1-1](https://github.com/99andrew99/WiA/assets/37804008/2af5a976-004d-4294-af6a-71f7982bf898)
<br /><br />
2. 본인이 사용하고 있는 섹션을 도면을 통해 확인한 후 선택한다.  
 
 
![2-1](https://github.com/99andrew99/WiA/assets/37804008/fa744aea-2439-4a6c-bd7e-4dcfbb8f626d)
<br /><br />
3. 섹션에 해당하는 ap들의 위치를 이미지 슬라이드를 통해 확인한 후 접속자 수와 혼잡도를 확인한다.  

![3-1](https://github.com/99andrew99/WiA/assets/37804008/eb417f7b-4b16-47a0-9ac7-e200c5ae4fff)
<br />


## 통계

<strong>도서관 사용자 수에 따른 혼잡도 인원의 기준은 시험기간을 제외한 사용인원 수가 가장 많은 시간대인 16:00 ~ 20:00까지의 wifi 접속자 수를 일주일 동안 통계를 내어 계산 했습니다.</strong> <br /><br />

![통계자료-표](https://github.com/99andrew99/WiA/assets/37804008/17ecec63-27a0-44aa-93bc-84d2b48fcb33)


## 개발 history

*1.0.0 : Initialize project using Create React App

*1.1.0 : 홈페이지 기본 UI

*1.2.0 : 메인화면 수정

*1.2.1 :  라우터로 변경

*1.3.0 : 디자인 수정 

*1.3.1 : 평면도 업데이트, api 연동

*1.3.2 : api key hiding by gitignore

*1.3.3 : added responsive design 

*1.3.4 : mapping api information to client side

*1.3.5 : added image slide component to show ap location

*1.3.6 : added timer to show when the number will refresh

*1.3.7 : fill the text when data has not recieved

*1.3.8 : update README.md 


## 팀 정보

팀 이름 - ProBrain  
팀 구성원 - 김성수 (충남대학교 컴퓨터융합학부 3학년), 조민석 (충남대학교 컴퓨터융합학부 4학년), 김영근 (충남대학교 컴퓨터융합학부 4학년) 

팀 대표 github - [@github](https://github.com/ssKimholy) - https://github.com/ssKimholy

## 오픈소스 기여

1. 프로젝트 fork (<https://github.com/99andrew99/WiA>)
2. feature branch 생성 (`git branch feature/yourBranch`)
3. code 추가 및 수정
4. git commit (`git commit -m 'Add specific function'`)
5. git Push (`git push origin feature/yourBranch`)
6. 원 프로젝트에 Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/badge/npm-v16.13.2-red
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
