# Yu Halyn — AI / AX Portfolio

React + Vite + Framer Motion + Lucide + React Router 정적 포트폴리오.

## 실행

```sh
npm install
npm run dev
```

`npm run build`로 `dist/`를 생성하고 `npm run preview`로 확인합니다.

## 콘텐츠 수정

- `src/data/projects.js`: 8개 프로젝트, 필터, 상세 내용
- `src/data/experiences.js`: 경력 및 교육
- `src/data/site.js`: Email, GitHub, LinkedIn, Resume 연결

제공되지 않은 기간·역할·성과·회고는 추가 예정으로 표시했습니다. 실제 내용 확인 후 보완하세요. 연락처가 비어 있으면 비활성 상태로 표시됩니다. 이력서는 `public/resume.pdf`에 넣고 `site.js`의 resume을 `resume.pdf`로 설정하세요.

## 실제 이미지 추가

placeholder에 표시된 `/assets/...` 경로에 대응하는 `src/assets/...` 파일을 넣고 다시 빌드하면 자동으로 실제 이미지로 바뀝니다. 임의 생성 사진, 로고, 연구 결과는 사용하지 않습니다.

```
src/assets/profile/halyn-profile.jpg
src/assets/hansol/hansol-office.jpg
src/assets/hansol/sales-resource-hub.png
src/assets/hansol/hansol-logo.png
src/assets/research/wsi.png
src/assets/research/clam-heatmap.png
src/assets/research/patch-result.png
src/assets/research/alk-visualization.png
src/assets/skala/skala.png
src/assets/skala/skax-logo.png
src/assets/adam/adam-ui.png
src/assets/adam/hand-landmark.png
src/assets/boachat/boachat.png
src/assets/gemma/gemma-paper-qa.png
src/assets/deepchest/deepchest.png
src/assets/msa/msa-architecture.png
```

## GitHub Pages

1. GitHub 저장소에 push합니다.
2. Settings → Pages → Source에서 GitHub Actions를 선택합니다.
3. `main` push 또는 Actions 수동 실행으로 배포합니다. 다른 기본 브랜치를 사용하면 workflow의 branches를 수정하세요.

상대 base 경로와 HashRouter를 사용하므로 저장소 하위 경로 배포 및 상세 페이지 새로고침을 지원합니다. Pretendard Variable을 로컬 자산으로 제공하므로 외부 폰트 서비스 연결 없이 표시됩니다. 제목은 700, 본문은 500, 메뉴·태그·Hero 본문은 600을 사용합니다.
