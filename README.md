# codestates-fe-advanced-course

## 완성된 GIF 파일 및 배포 링크

http://studylog1234.s3-website.ap-northeast-2.amazonaws.com/

![Peek 2022-08-05 17-49](https://user-images.githubusercontent.com/48144688/183040617-8b210c65-7bcc-46cb-b65f-6b63d6981cd3.gif)


## 프로젝트 실행 방법

npm install 후 npm start하시면 됩니다.

## 사용한 스택 목록

HTML, CSS, React, Axios

## 구현한 기능 목록 (Software Requirement Specification)

- 게시물 리스트와 게시물 상세 페이지
- 각 게시물 상세 페이지에는 댓글 수가 표기되고 게시물 내용의 하단에 댓글이 나열됩니다.
- 게시물 리스트를 페이지네이션

## 구현 방법

- Axios를 이용하여 api에서 데이터를 받아와 상태값으로 저장한 뒤 map으로 데이터를 보여주었습니다.
- Posts 페이지에서는 게시물 목록을 보여주었습니다.
- Post 페이지에서는 게시글 상세페이지와 댓글을 보여주었습니다.

- 페이지네이션은 컴포넌트는 <Posts/> 컴포넌트로부터 총 게시물 수(total)와 페이지 당 게시물 수(limit) 그리고 현재 페이지 번호(page)를 prop으로 받습니다.
-  페이지의 개수(numPages)를 계산한 후 이 페이지의 개수만큼 루프를 돌면서 페이지 번호 버튼을 출력합니다.
-  페이지 번호 버튼에 클릭 이벤트가 발생하면 prop으로 넘어온 setPage() 함수를 호출하여 부모인 <Posts/> 컴포넌트의 page 상태가 변경되도록 합니다. 
-  그러면 <Posts/> 컴포넌트는 새로운 페이지 번호에 해당하는 게시물 범위를 계산하여 다시 화면을 렌터링할 것입니다.

## 구현하면서 어려웠던 점

- CSS가 많이 부족해서 찾아보면서 구현하느라 시간이 걸렸지만 CSS로 이리저리 변경해보면서 바로바로 확인할 수 있어서 개발하는데 재미있었다.