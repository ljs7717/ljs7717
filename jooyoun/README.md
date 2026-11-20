# 주연시스템즈 웹사이트 (Moderna 디자인 적용)

## 실행
- 압축을 풀고 index.html을 브라우저에서 열면 됩니다.
- 별도 설치나 빌드가 필요하지 않습니다.
- 배포 시 index.html과 assets 폴더를 함께 업로드하세요.
- 별도로 제공되는 jooyoun-moderna.html은 CSS·JS·이미지가 모두 포함된 단일 파일입니다.

## 파일 구조
- index.html: 페이지 내용과 구조
- assets/css/bootstrap.min.css: Bootstrap 기본 레이아웃
- assets/css/moderna.css: 첫 번째 페이지의 Moderna 원본 스타일 (배경 이미지 경로 교체)
- assets/css/custom.css: 주연시스템즈 콘텐츠·반응형 스타일
- assets/js/main.js: 모바일 메뉴, 3장 슬라이드, 스크롤 상태, 영상 팝업
- assets/img/: 두 번째 페이지에서 확보한 로고·사진·소셜 아이콘 13개
- sources.json: 출처 목록과 연결 링크

## 적용 범위
첫 번째 페이지의 네이비·블루 색상, 고정 헤더, 곡선형 Hero, 4개 사업 카드, 영상/비전 배치, 이미지·텍스트 교차 배치, 푸터 디자인을 유지했습니다.
두 번째 홈페이지의 메인 문구, 사업 분야 4개, Vision, 프로젝트 2건(2022·2024), 채용 안내, 대표·주소·연락처·사업자 정보를 적용했습니다.
카드용 아이콘 등 UI 장식은 새로 작성한 SVG입니다. 원본 홈페이지의 소셜 이미지에는 유효한 SNS 주소가 없어 장식 이미지로만 유지했습니다.
로그인·회원가입·게시판 백엔드는 구현하지 않았습니다. NEWS와 상세보기는 원본 회사 사이트로 연결됩니다.
원본 YouTube 배경 영상은 자동 재생 배경 대신 Vision 영역의 재생 버튼 팝업으로 제공됩니다. 영상 재생 및 외부 상세 페이지에는 인터넷 연결이 필요합니다.

## 수정
회사 문구와 링크: index.html
색상·간격·폰트·모바일: assets/css/custom.css
자동 슬라이드 간격: assets/js/main.js의 6500 (밀리초)
이미지 교체: assets/img/ 안의 동일한 파일명으로 교체

## 출처 및 라이선스
디자인: https://ljs7717.github.io/cnu/
내용·이미지: https://jslim7717.dothome.co.kr/
Moderna v4.8.0 by BootstrapMade: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
Moderna 라이선스: https://bootstrapmade.com/license/
원본 디자인 저작자 표시를 푸터에 유지했습니다. 상업적 사용 및 표시 제거 시 원본 라이선스를 확인하세요. 회사 콘텐츠·이미지 사용 권한은 배포 전에 확인하세요.
