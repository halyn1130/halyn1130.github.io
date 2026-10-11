export const projects = [
  {
    "id": "hansol",
    "order": "01",
    "category": "AI / AX",
    "filters": [
      "AI/AX",
      "LLM",
      "Backend",
      "Data"
    ],
    "title": "Sales Resource Hub",
    "subtitle": "영업 현장의 정보 탐색을 위한\nAgentic RAG 기반 사내 서비스",
    "tech": [
      "LangGraph",
      "RAG",
      "Crawling",
      "Database",
      "Vue.js"
    ],
    "featured": true,
    "image": "hansol/sales-resource-home.png",
    "metrics": [
      [
        "7 → 2",
        "클릭 수 감소"
      ],
      [
        "5분 → 1분",
        "정보 탐색 시간 단축"
      ]
    ],
    "period": "2026.05.26 — 2026.06.23",
    "organization": "한솔홈데코 · HRBP(AX) 인턴",
    "role": "팀장 · 크롤링/AI 공동 개발 · ERD/DB 구축",
    "team": "5명",
    "problem": "영업사원 5명과 쇼룸 매니저 인터뷰를 통해 문제를 다시 정의했습니다. 여러 채널에 흩어진 소비자 반응, 업계 뉴스, 제품 정보를 찾고 비교하는 데 시간이 소요됐습니다.",
    "approach": "영업 준비 자동화에서 정보 탐색 지원으로. 질문에 맞는 출처를 선택하고, 근거가 부족하면 다시 검색하는 Agentic RAG를 구성했습니다.",
    "pipeline": [
      "Question Analysis",
      "Source Selection",
      "Retrieval",
      "Evaluation",
      "Generation",
      "Validation"
    ],
    "contributions": [
      "현업 인터뷰 기반 문제 재정의 및 서비스 기획",
      "Naver Cafe · 오늘의집 · News · 제품 데이터 크롤링",
      "ERD 설계 및 Database 구축",
      "LangGraph Agentic RAG · 복합 질문의 다중 출처 순차 검색",
      "5인 팀 개발 조율 및 대표·개발팀 대상 전체 미팅 단독 진행",
      "서비스 배포"
    ],
    "reflection": "현업 인터뷰를 통해 초기 가설을 점검하고 서비스 목표를 정보 탐색 지원으로 구체화했습니다.",
    "imageCaption": "Sales Resource Hub 실제 구현 홈 화면",
    "metricsNote": "측정 대상: 네이버 카페·오늘의집 원문 1건 | 클릭: 원문 도달 횟수 | 시간: 도달 시간 + 평균 읽기 시간",
    "sources": [
      "한솔홈데코 HRBP(AX) 최종발표자료 · pp.1, 8–10, 14–20",
      "시간·클릭 수: 실제 측정 데이터"
    ]
  },
  {
    "id": "alk",
    "order": "02",
    "category": "RESEARCH",
    "filters": [
      "Research",
      "Computer Vision"
    ],
    "title": "ALK-positive\nTumor Detection",
    "subtitle": "디지털 병리 이미지에서\nALK 양성 종양을 탐지하는 AI 연구",
    "tech": [
      "WSI",
      "CLAM",
      "PLIP",
      "PyTorch"
    ],
    "featured": true,
    "image": "research/alk-visualization.png",
    "metrics": [
      [
        "98.44%",
        "Patch Classification Accuracy"
      ]
    ],
    "period": "2023.01 — 2024.11",
    "fullTitle": "Deep Learning Approaches for Identifying ALK-positive Tumors in Pathology Images",
    "organization": "Hongik University · M.S. Research",
    "role": "교수 지도하 독립 연구 · 전처리/모델 비교/분류/시각화",
    "problem": "Gigapixel 단위의 Whole Slide Image와 제한된 의료 데이터. 거대한 병리 이미지에서 종양 영역을 선별하고 ALK 양성 여부를 분류하는 접근이 필요했습니다.",
    "approach": "CLAM tumor probability ≥ 0.8인 patch를 선별했습니다. ResNet, MobileNet, CLIP, ViT, PLIP을 비교하고 병리 이미지에 특화된 PLIP을 최종 선택했습니다.",
    "pipeline": [
      "WSI",
      "CLAM",
      "Tumor Patch Selection",
      "PLIP Embedding",
      "Binary Classifier",
      "Probability Visualization"
    ],
    "contributions": [
      "WSI patch extraction 및 CLAM 기반 종양 영역 선별",
      "Feature extractor 비교 및 PLIP embedding",
      "512차원 입력 · Fully Connected Layers · Sigmoid 출력",
      "ALK 양성 확률 시각화: positive는 red, negative는 blue"
    ],
    "result": "42,909개 patch 중 42,241개 정분류",
    "gallery": [
      "research/clam-heatmap.png",
      "research/patch-result.png",
      "research/accuracy-table.png"
    ],
    "reflection": "대규모 이미지에서 유효한 영역을 선별하고, 도메인에 맞는 표현을 선택하는 연구를 수행했습니다.",
    "imageCaption": "기존 포트폴리오 p.12 · 실제 연구 결과 시각화",
    "sources": [
      "halyn.pdf · pp.3, 10–12",
      "512차원 입력 및 정확도 수치: 사용자 설명과 결과 표"
    ]
  },
  {
    "id": "adam",
    "order": "03",
    "category": "COMPUTER VISION",
    "filters": [
      "Computer Vision"
    ],
    "title": "ADAM",
    "subtitle": "웹캠 손동작으로 PDF 발표와\n포인터를 제어하는 서비스",
    "tech": [
      "React",
      "TypeScript",
      "MediaPipe",
      "PDF.js",
      "Electron",
      "C",
      "Vitest"
    ],
    "image": "adam/adam-ui.png",
    "problem": "웹캠 하나로 손동작을 인식해 프레젠테이션을 제어하는 웹 서비스를 만들었습니다.",
    "approach": "손 landmark를 기반으로 제스처를 인식하고 발표 화면의 동작으로 연결합니다.",
    "pipeline": [
      "Webcam",
      "Hand Landmarks",
      "Gesture Recognition",
      "Presentation Control"
    ],
    "features": [
      "손바닥 좌우 이동 → 슬라이드 이동",
      "손가락 → 포인터 제어",
      "손바닥 펼치기 → 화면 가리기",
      "Gesture setting · Pointer sensitivity"
    ],
    "period": "2026",
    "organization": "원티드 해커톤 · Team 곰팡이",
    "role": "서비스 기획 및 핵심 기능 개발",
    "team": "3명",
    "externalLinks": [
      {
        "label": "GitHub 소스",
        "url": "https://github.com/insidesight0921-stack/motion-shortcut"
      },
      {
        "label": "서비스 열기",
        "url": "https://adamsmith.ai.kr"
      }
    ],
    "sources": [
      "motion-shortcut 2.zip · README 팀 역할",
      "useHandTracking.ts · usePresentationController.ts · PdfPage.tsx",
      "electron/main.cjs · cursor-helper.c · 회귀 테스트 파일"
    ],
    "imageCaption": "사용자 제공 ADAM 실제 화면 · 손 랜드마크 인식과 발표 제어"
  },
  {
    "id": "skalapse",
    "order": "04",
    "category": "AI / EDUCATION",
    "filters": [
      "AI/AX",
      "LLM",
      "Backend"
    ],
    "title": "SKALAPSE",
    "subtitle": "교안과 실시간 강의 맥락을 연결하는\nAI 학습 서비스",
    "tech": [
      "LangGraph",
      "Qwen3.5",
      "Whisper",
      "React",
      "TypeScript",
      "Python",
      "SQLite",
      "vLLM Metal"
    ],
    "image": "skalapse/reader-chat.png",
    "galleryLabel": "학습 화면",
    "imageCaption": "SKALAPSE 학습 화면 · 포트폴리오용 질문 예시로 편집",
    "organization": "SKALA · AI 학습 서비스",
    "problem": "같은 강의를 들어도 배경지식과 막히는 지점은 다릅니다. 수업을 멈추지 않고 필요한 설명을 얻고, 질문 당시의 맥락으로 돌아가 복습할 수 있는 학습 공간을 구성했습니다.",
    "approach": "학생이 보고 있는 교안·실습 자료와 강사의 음성 전사, 최근 대화를 함께 구성해 로컬 AI가 답변합니다. 수업 중 생성되는 마인드맵과 저장한 질문을 복습으로 연결합니다.",
    "pipeline": [
      "교안 · 강의 음성",
      "본문 추출 · Whisper 전사",
      "LangGraph 문맥 구성",
      "Qwen3.5 답변",
      "질문 저장 · 복습"
    ],
    "sources": [
      "SKALAPSE README · 사용 화면 안내",
      "docs/LOCAL-AI.ko.md · docs/DATA.ko.md · docs/INSTRUCTOR-INSIGHTS.ko.md"
    ]
  },
  {
    "id": "boachat",
    "order": "05",
    "category": "LLM",
    "filters": [
      "LLM",
      "AI/AX"
    ],
    "title": "BOAchat",
    "subtitle": "동아리 정보를 검색하는\nRAG 챗봇",
    "tech": [
      "LangChain",
      "OpenAI Embedding",
      "Pinecone",
      "RAG",
      "Python"
    ],
    "image": "boachat/boachat.png",
    "role": "팀장 · LangChain 검색/QA 체인 개발",
    "problem": "빅데이터 연합동아리 BOAZ의 카카오톡 대화와 공지 PDF에서 필요한 정보를 검색합니다.",
    "approach": "대화와 문서를 chunk로 나누고 embedding을 생성해, 검색된 문맥을 기반으로 답변합니다.",
    "pipeline": [
      "Documents",
      "Chunking",
      "Embedding",
      "Pinecone",
      "Retrieval",
      "LLM"
    ],
    "period": "2024.01 — 2024.02",
    "organization": "BOAZ 미니 프로젝트 #1",
    "imageCaption": "halyn.pdf p.5 · 프로젝트 설명에 사용된 RAG 구조도",
    "sources": [
      "halyn.pdf · pp.4–5"
    ]
  },
  {
    "id": "gemma",
    "order": "06",
    "category": "LLM",
    "filters": [
      "LLM",
      "Research"
    ],
    "title": "GemmaPaperQA",
    "subtitle": "논문 기반 질의응답 서비스",
    "tech": [
      "Gemma2",
      "LoRA",
      "FAISS",
      "LangChain",
      "FastAPI",
      "Streamlit",
      "HuggingFace"
    ],
    "image": "gemma/gemma-paper-qa.png",
    "problem": "논문 PDF를 기반으로 질문에 답변하는 서비스를 개발했습니다.",
    "approach": "Gemma2-2B LoRA fine-tuning. 2B와 9B 모델을 비교해 제한된 자원에서의 최적화 방향을 검토했습니다.",
    "pipeline": [
      "PDF",
      "Chunk",
      "Embedding",
      "FAISS",
      "Gemma2",
      "Answer"
    ],
    "result": "Fine-tuned model HuggingFace 배포",
    "period": "2024.09 — 2024.10",
    "organization": "Google ML Bootcamp · Gemma Sprint",
    "role": "모델 fine-tuning · RAG 파이프라인 · 데모/배포",
    "sources": [
      "halyn.pdf · pp.8–9",
      "FriedBulgogi/GemmaPaperQA · README 및 image/gemma2.png"
    ],
    "imageCaption": "GemmaPaperQA GitHub README · Gemma 2 소개 배너",
    "galleryLabel": "프로젝트 소개",
    "externalLinks": [
      {
        "label": "GitHub 소스",
        "url": "https://github.com/FriedBulgogi/GemmaPaperQA"
      },
      {
        "label": "튜닝 모델",
        "url": "https://huggingface.co/halyn/gemma2-2b-it-finetuned-paperqa"
      }
    ]
  },
  {
    "id": "deepchest",
    "order": "07",
    "category": "MULTIMODAL AI",
    "filters": [
      "Computer Vision",
      "LLM"
    ],
    "title": "Dr.DeepChest",
    "subtitle": "흉부 X-ray 기반\n진단·소견 생성 AI",
    "tech": [
      "DenseNet",
      "Multimodal",
      "LoRA",
      "PyTorch",
      "Streamlit"
    ],
    "image": "deepchest/deepchest.png",
    "problem": "흉부 X-ray를 입력받아 진단과 의료 소견을 생성하는 AI 프로젝트입니다.",
    "approach": "DenseNet 기반 image feature extraction과 language model을 결합하고 Streamlit interface를 구현했습니다.",
    "pipeline": [
      "Chest X-ray",
      "DenseNet",
      "Image Features",
      "Language Model",
      "Diagnosis / Medical Findings"
    ],
    "period": "2024.05",
    "organization": "BOAZ 미니 프로젝트 #2",
    "role": "DenseNet 특징 추출 · LoRA · 멀티모달 통합",
    "imageCaption": "halyn.pdf p.7 · 멀티모달 학습·추론 아키텍처",
    "sources": [
      "halyn.pdf · pp.6–7"
    ]
  },
  {
    "id": "koh",
    "order": "08",
    "category": "DATA / SIMULATION",
    "filters": [
      "Data"
    ],
    "title": "KOH Process\nAnalysis",
    "subtitle": "식각 공정 조건 분석 및\nSpec Margin 예측",
    "tech": [
      "Python",
      "Monte Carlo",
      "Simulation",
      "Data Analysis"
    ],
    "problem": "반도체 공정 데이터를 분석하고 공정 조건 및 허용 범위를 탐색한 프로젝트입니다.",
    "approach": "Monte Carlo simulation을 통해 공정 조건과 Spec Margin을 분석했습니다.",
    "pipeline": [
      "Process Data",
      "Data Analysis",
      "Monte Carlo Simulation",
      "Spec Margin Prediction"
    ],
    "image": "koh/process-window.svg",
    "imageCaption": "KOH 공정 분석 · 잔여 SiN 두께 및 공정 조건 분포",
    "galleryLabel": "공정 분석 결과",
    "sources": [
      "KOH 프로젝트 outputs/process_window.svg · 제공 분석 그래프"
    ]
  }
];

export const filters = ["All","AI/AX","Research","Computer Vision","LLM","Backend","Data"];
