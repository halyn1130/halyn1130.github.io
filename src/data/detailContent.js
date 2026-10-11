// Concise presentation copy; original source notes remain in projects/caseStudies.
export const detailContent = {
  alk: {
    heading:'핵심 구현 · 연구',
    chapters:[
      ['종양 영역 선별 및 WSI 전처리',['Gigapixel WSI → 256 × 256 patch','CLAM 종양 확률 ≥ 0.8 기준 선별','종양 영역 선택 / ALK 분류 단계 분리']],
      ['특징 추출기 비교 및 이진 분류',['ResNet · MobileNet · CLIP · ViT · PLIP 비교','PLIP 512차원 특징 → 신경망 → Sigmoid','ALK 양성 확률 산출']],
      ['Patch 단위 평가 및 확률 시각화',['42,909개 patch / 42,241개 정분류','Negative 99.52% · Positive 98.03%','원본 WSI 위 red–blue 확률 오버레이']],
    ],
    outcome:'98.44% · Patch 분류 정확도',
    evidence:'평가 단위: patch · 환자 단위 진단 성능 미검증',
    outcomeItems:[{title:'42,909개 평가 patch',result:'42,241개 정분류'},{title:'전처리부터 시각화까지',result:'종양 선별 → 특징 추출 → 분류 → 확률 오버레이'}],
  },
  adam:{
    heading:'핵심 구현 · 제어 흐름',
    chapters:[
      ['좌표 안정화 및 명령 중복 방지',['이전 좌표 0.62 + 현재 좌표 0.38 평활화','모드 유지 700ms · 인식 소실 유예 240ms','일반 쿨다운 850ms · 스와이프 900ms / 코드 설정값']],
      ['포인터·슬라이드 모드 분리',['모드별 명령 분리 · 양손 주먹 긴급 정지','제스처 중복 할당 제한 · 감도 테스트 분리','사용자 설정·발표 프로필 localStorage 저장']],
      ['로컬 PDF 및 환경별 제어',['웹: PDF.js / Canvas 렌더링 · 페이지 이동 범위 제한','Electron: IPC 키 입력 · macOS CGEvent 포인터','카메라·PDF 로컬 처리 · 서버 업로드 없음']],
    ],
    outcome:'손동작 기반 로컬 PDF 발표',
    evidence:'팀 저장소 구현 기준 · 외부 앱 제어: 대상 앱·권한별 실기기 검증 필요',
    outcomeItems:[{title:'웹 발표 기능',result:'PDF 렌더링 · 슬라이드 이동 · 포인터 제어'},{title:'사용자별 제어 설정',result:'제스처 매핑 · 감도 조절 · 발표 프로필'}],
  },
  skalapse:{
  "heading": "핵심 구현 · 학습 흐름",
  "scope": "프로젝트 핵심 구현",
  "chapters": [
    [
      "교안과 강의 맥락을 함께 사용하는 AI 답변",
      [
        "선택한 교안·실습 파일 + 강의 전사 + 최근 대화로 질문 문맥 구성",
        "LangGraph로 검색 방향·자료 검색·입력 정리와 생성 단계 연결",
        "입력 한도에 맞춰 참고 정보를 줄이면서 현재 질문과 개인 지시 유지"
      ]
    ],
    [
      "수업 중 이해를 복습으로 연결하는 학습 공간",
      [
        "Whisper 전사에서 수업 흐름과 개념 관계를 정리해 마인드맵 제공",
        "선택한 개념과 연결 관계를 질문 맥락에 반영",
        "질문·답변 저장 후 당시 자료를 다시 열고 후속 질문으로 복습"
      ]
    ],
    [
      "운영 Mac 한 대에서 실행하는 로컬 AI",
      [
        "React·Python API·Whisper·Qwen3.5를 운영 Mac에서 연결",
        "vLLM Metal 추론과 요청 대기열로 로컬 모델 자원 관리",
        "SQLite 실행 기록과 질문 집계를 교수자 인사이트로 연결"
      ]
    ]
  ],
  "outcome": "교안·강의·질문·복습을 하나의 학습 흐름으로",
  "evidence": "저장소 구현과 사용 안내 기준 · 학습 효과와 응답 성능의 정량 수치는 별도 측정 전입니다.",
  "outcomeItems": [
    {
      "title": "수업 중 질문에서 수업 후 복습까지",
      "result": "교안·강의 맥락 기반 답변 → 개념 탐색 → 질문 저장 → 후속 질문"
    },
    {
      "title": "로컬 AI와 학습 기록 연결",
      "result": "운영 Mac 추론 · 실행 기록 저장 · 교수자 인사이트"
    }
  ]
},
  boachat:{heading:'핵심 구현 · 협업',
    chapters:[
      ['대화·문서 검색 기반 구성',['팀 데이터: BOAZ 카카오톡 대화 · 공지 PDF','Document Loader → Text Splitter → OpenAI Embedding','Pinecone 벡터 저장소']],
      ['유사도 검색 및 QA 체인 개발',['담당: 질문–문서 유사도 검색 로직','관련 문서 검색 → 문맥 전달 → LLM 답변','LangChain 파이프라인 구현 · 팀 기술 가이드']],
    ],outcome:'동아리 문서 기반 RAG 질의응답',evidence:null,
    outcomeItems:[{title:'검색·답변 생성 연결',result:'Pinecone 유사도 검색 · LangChain QA 체인'},{title:'팀 개발 리딩',result:'기술 방향 조율 · 역할 분리 · 핵심 파이프라인 구현'}],
  },
  gemma:{heading:'핵심 구현 · 모델 배포',
    chapters:[
      ['논문 PDF 검색 및 질의응답',['PyPDF2 텍스트 추출 → TextSplitter 분할','HuggingFace Embedding → FAISS 유사도 검색','FastAPI API · Streamlit 업로드/질의응답 데모']],
      ['Gemma2 LoRA 학습 및 배포',['WikiText 학습 데이터 · PEFT LoRA','Gemma2-2b-it 튜닝 · 9b-it 비교','튜닝 모델 HuggingFace 배포']],
    ],outcome:'Fine-tuned Gemma2 모델 배포',evidence:'학습: WikiText / 검색 문맥: 논문 PDF · 정량 비교 수치 미기재',
    outcomeItems:[{title:'PDF 기반 RAG',result:'논문 검색 → 문맥 주입 → 답변 생성'},{title:'모델·서비스 연결',result:'LoRA 튜닝 · FastAPI · Streamlit · HuggingFace'}],
  },
  deepchest:{heading:'핵심 구현 · 모델 통합',
    chapters:[
      ['이미지 특징 추출 및 멀티모달 학습',['이미지–텍스트 pair JSON 관리','DenseNet → mean pooling → 선형 변환','이미지 특징·언어 모델 결합 · LoRA 학습']],
      ['End-to-end 추론 통합',['담당: X-ray 입력 → 진단·소견 텍스트 출력','모델 개발 및 전체 추론 파이프라인 연결','팀 구현: Streamlit 입력·출력 인터페이스']],
    ],outcome:'X-ray → 진단·소견 생성 프로토타입',evidence:'의료 AI 프로토타입 · 임상 유효성 및 진단 정확도 정량 검증 미제공',
    outcomeItems:[{title:'이미지–언어 모델 연결',result:'DenseNet embedding · LoRA · 멀티모달 통합'},{title:'입력부터 출력까지',result:'X-ray 특징 추출 → 소견 생성 → 인터페이스 연결'}],
  },
  koh:{heading:'핵심 분석 · 시뮬레이션',scope:'분석 범위',
    chapters:[
      ['KOH 식각 공정 데이터 분석',['대상: 반도체 KOH 식각 공정','분석 범위: 공정 조건 · 허용 범위','Python 기반 데이터 분석']],
      ['Monte Carlo 기반 Spec Margin 탐색',['공정 데이터 → Monte Carlo 시뮬레이션','식각 조건 및 Spec Margin 분석','공정 허용 범위 탐색']],
    ],outcome:'공정 조건 · Spec Margin 분석',evidence:null,
    outcomeItems:[{title:'데이터 분석',result:'KOH 식각 조건 · 공정 허용 범위'},{title:'시뮬레이션',result:'Monte Carlo 기반 Spec Margin 탐색'}],
  },
};
