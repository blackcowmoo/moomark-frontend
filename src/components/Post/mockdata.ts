import { IPostDetail, ICommentContent } from 'types/post';

const mockDate = new Date(2020, 3, 1).toDateString();

const markdown: string = `
# 1. 마크다운에 관하여
## 1.1. 마크다운이란?
[**Markdown**](http://whatismarkdown.com/)은 텍스트 기반의 마크업언어로 2004년 존그루버에 의해 만들어졌으며 쉽게 쓰고 읽을 수 있으며 HTML로 변환이 가능하다.
특수기호와 문자를 이용한 매우 간단한 구조의 문법을 사용하여 웹에서도 보다 빠르게 컨텐츠를 작성하고 보다 직관적으로 인식할 수 있다.
마크다운이 최근 각광받기 시작한 이유는 깃헙([https://github.com](https://github.com)) 덕분이다. 깃헙의 저장소Repository에 관한 정보를 기록하는 README.md는 깃헙을 사용하는 사람이라면 누구나 가장 먼저 접하게 되는 마크다운 문서였다.
마크다운을 통해서 설치방법, 소스코드 설명, 이슈 등을 간단하게 기록하고 가독성을 높일 수 있다는 강점이 부각되면서 점점 여러 곳으로 퍼져가게 된다.

## 1.2. 마크다운의 장-단점
### 1.2.1. 장점
1. 간결하다.
2. 별도의 도구없이 작성가능하다.
3. 다양한 형태로 변환이 가능하다.
4. 텍스트(Text)로 저장되기 때문에 용량이 적어 보관이 용이하다.
5. 텍스트파일이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
6. 지원하는 프로그램과 플랫폼이 다양하다.

### 1.2.2. 단점
1. 표준이 없다.
2. 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
3. 모든 HTML 마크업을 대신하지 못한다.
`;

export const mockCommentContent: ICommentContent = {
  info: {
    user: {
      nickname: 'doge',
    },
    uploadTime: mockDate,
  },
  content: '안녕하세요. 일런 머스큽니다.',
  recommendCount: -1,
};

export const mockPost: IPostDetail = {
  id: 0,
  title: 'mockTitle ',
  uploadTime: mockDate,
  user: {
    nickname: 'mockWriter',
  },
  viewsCount: 2230,
  content: markdown,
  tags: ['test', 'hasdasdfasf', 'loooooooooooooooooooooongStirng', '무마크'],
  comment: [
    {
      ...mockCommentContent,
      reply: [mockCommentContent, mockCommentContent],
    },
    mockCommentContent,
    mockCommentContent,
  ],
  recommendCount: 0,
};
