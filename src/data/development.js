export const development = {
  "hansol": {
    "personal": true,
    "summary": "크롤러 · ERD/DB · LangGraph Agentic RAG 직접 개발",
    "headline": "크롤링·DB와 LangGraph 검색 제어 로직으로,\n여러 출처의 정보를 찾는 서비스를 개발했습니다.",
    "description": "네이버 셀인카페·오늘의집·뉴스·제품 데이터 크롤링, ERD 설계와 DB 구축, LangGraph 검색 제어 로직을 담당했습니다. 최종 발표자료에는 팀장 및 크롤링·AI 공동 담당으로 명시되어 있으며, FE/BE 전체 구현과 UI/UX는 별도 담당자의 역할입니다.",
    "modules": [
      {
        "name": "데이터 수집 · 저장",
        "tech": "Crawling / Database",
        "work": "4개 출처 크롤링 → ERD 설계 → DB 구축"
      },
      {
        "name": "Agentic RAG",
        "tech": "LangGraph",
        "work": "질문 분석 → 출처 선택 → 검색·평가 → 생성·검증"
      },
      {
        "name": "검색 제어 로직",
        "tech": "Re-search / Multi-source",
        "work": "근거 부족 시 재검색 · 복합 질문의 다중 출처 순차 검색"
      }
    ]
  },
  "alk": {
    "personal": true,
    "summary": "WSI patch 처리 · PLIP 분류기 · 확률 시각화 구현",
    "headline": "WSI 전처리부터 512차원 embedding 분류기까지,\n병리 이미지 분석 파이프라인을 구현했습니다.",
    "description": "WSI patch 추출과 CLAM 기반 종양 영역 선별, 특징 추출기 5종 비교, PLIP embedding을 입력받는 이진 분류기와 확률 시각화를 수행했습니다. 구현한 파이프라인의 patch 분류 정확도는 98.44%입니다.",
    "modules": [
      {
        "name": "이미지 전처리",
        "tech": "WSI / CLAM",
        "work": "256×256 patch 추출 → CLAM 확률 ≥ 0.8 선별"
      },
      {
        "name": "분류 모델",
        "tech": "PLIP / PyTorch",
        "work": "512차원 PLIP 특징 → 약 3-layer 신경망 → Sigmoid"
      },
      {
        "name": "예측 결과 시각화",
        "tech": "Probability Visualization",
        "work": "Patch별 ALK 양성 확률을 red–blue로 표현"
      }
    ]
  },
  "adam": {
    "personal": false,
    "summary": "핵심 기능 개발 · 제스처 인식과 발표 제어 연결",
    "headline": "손동작을 바로 실행하지 않고,\n유지 시간·모드·쿨다운을 거쳐 발표 명령으로 변환했습니다.",
    "description": "3인 팀에서 서비스 기획과 핵심 기능 개발을 담당했습니다. 손 좌표 평활화와 제스처 유지 판정으로 명령을 제어하고, 포인터·슬라이드 모드와 로컬 PDF 발표 기능을 구성한 프로젝트입니다. 아래는 팀 저장소의 구현 구조입니다.",
    "modules": [
      {
        "name": "인식 · 오작동 방지",
        "tech": "MediaPipe / TypeScript",
        "work": "좌표 평활화 · 유지 시간 · 재실행 쿨다운 · 긴급 정지"
      },
      {
        "name": "발표 기능",
        "tech": "React / PDF.js",
        "work": "PDF 로컬 렌더링 · 페이지 이동 · 포인터 · 사용자 설정"
      },
      {
        "name": "환경별 제어",
        "tech": "Web / Electron / macOS C",
        "work": "웹 내 발표와 외부 앱 제어 경로를 분리"
      }
    ]
  },
  "msa": {
    "personal": false,
    "summary": "OAuth2 인증 전파 · REST / Kafka 상태 연동 · FastAPI 규칙 추천",
    "headline": "수강신청부터 결제·추천까지,\n서비스 경계와 상태 전이를 연결하는 MSA.",
    "description": "LearnNexus는 User·Course·Enrollment·Payment·Recommend로 구성된 온라인 교육 플랫폼 실습입니다. 핵심은 기능을 나누는 데서 끝나지 않고, 인증 정보와 결제·수강 상태를 서비스 사이에 전달하는 구조입니다. 아래는 제공된 실습 문서의 설계 범위입니다.",
    "modules": [
      {
        "name": "인증 경계",
        "tech": "OAuth2 / JWT / Gateway",
        "work": "JWK 검증 · 사용자 헤더 전파 · 서비스 간 Client Credentials"
      },
      {
        "name": "수강·결제 흐름",
        "tech": "REST / Kafka",
        "work": "PENDING → 결제 완료 이벤트 → ACTIVE → 추천 갱신"
      },
      {
        "name": "추천·통합 구성",
        "tech": "FastAPI / Eureka / Docker Compose",
        "work": "수강 이력 기반 규칙 추천 · 서비스 탐색 · 컨테이너 통합"
      }
    ]
  },
  "boachat": {
    "summary": "LangChain 유사도 검색 · QA 체인 직접 구현",
    "modules": [
      {
        "name": "검색 로직",
        "tech": "Pinecone / Embedding",
        "work": "사용자 질문과 저장 문서 간 유사도 검색"
      },
      {
        "name": "QA 체인",
        "tech": "LangChain / LLM",
        "work": "관련 문서를 검색해 답변 생성에 연결"
      },
      {
        "name": "개발 리딩",
        "tech": "RAG MVP",
        "work": "기술 의사결정 · 역할 분리 · 핵심 파이프라인 구현"
      }
    ],
    "personal": true,
    "description": "팀장으로 기술 방향과 협업을 조율하면서, 사용자 질문과 Pinecone 문서의 유사도 검색 및 LLM QA 체인을 직접 구현했습니다."
  },
  "gemma": {
    "summary": "WikiText LoRA 학습 · FAISS RAG · FastAPI/Streamlit",
    "modules": [
      {
        "name": "논문 검색",
        "tech": "LangChain / FAISS",
        "work": "PyPDF2 · TextSplitter · HuggingFace Embedding · FAISS"
      },
      {
        "name": "모델 학습",
        "tech": "Gemma2 / LoRA",
        "work": "WikiText / PEFT LoRA · Gemma2-2b-it 학습 · 9b-it 비교"
      },
      {
        "name": "서비스 · 모델 배포",
        "tech": "FastAPI / Streamlit / HuggingFace",
        "work": "질의응답 서비스 구현 · 튜닝 모델 공개"
      }
    ],
    "personal": true
  },
  "deepchest": {
    "summary": "DenseNet → mean pooling → 선형 변환 · LoRA 학습",
    "modules": [
      {
        "name": "이미지 embedding",
        "tech": "DenseNet / Mean Pooling",
        "work": "사전학습 특징 추출 → mean pooling → 선형 변환"
      },
      {
        "name": "모델 튜닝",
        "tech": "LoRA / Multimodal",
        "work": "이미지 특징과 언어 모델 결합 · 경량 fine-tuning"
      },
      {
        "name": "시스템 통합",
        "tech": "End-to-end Pipeline",
        "work": "X-ray 입력 → 진단·소견 텍스트 출력"
      }
    ],
    "personal": true
  },
  "koh": {
    "summary": "Python 공정 데이터 분석 · Monte Carlo 시뮬레이션",
    "modules": [
      {
        "name": "공정 데이터 분석",
        "tech": "Python",
        "work": "식각 공정 조건 및 허용 범위 분석"
      },
      {
        "name": "시뮬레이션",
        "tech": "Monte Carlo",
        "work": "공정 조건과 Spec Margin 탐색"
      }
    ]
  }
};
