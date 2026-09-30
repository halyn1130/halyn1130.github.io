export const caseStudies = {
  "hansol": {
    "headline": "영업 준비 자동화에서 정보 탐색 지원으로.\n인터뷰를 통해 풀어야 할 문제부터 바꿨습니다.",
    "summary": "제품 정보, 소비자 반응, 업계 뉴스를 오가던 탐색 과정을 하나의 서비스로 연결했습니다. 현업 인터뷰부터 데이터 수집·DB 구축·Agentic RAG와 배포까지, 5인 팀장으로 개발을 조율했습니다.",
    "outcome": "현업 요구 구체화 · 서비스 방향 전환",
    "chapters": [
      {
        "title": "4개 출처 크롤링 및 ERD·DB 구축",
        "images": [
          "hansol/system-architecture.png"
        ],
        "imageCaptions": [
          "최종 발표자료 p.8 · 팀 전체 시스템 아키텍처"
        ],
        "blocks": [
          {
            "label": "수집 출처",
            "items": [
              "네이버 카페 · 소비자 반응",
              "오늘의집 · 소비자 반응",
              "뉴스 · 시장 정보",
              "한솔 제품 · 제품 정보"
            ]
          },
          {
            "label": "담당 구현",
            "items": [
              "4개 출처 크롤러",
              "ERD 설계",
              "Database 구축"
            ]
          },
          {
            "label": "활용",
            "items": [
              "수집 데이터 저장",
              "Agentic RAG 검색 기반"
            ]
          }
        ],
        "note": "팀 서비스 추가 데이터: Gmail API 기반 세일즈 메모 · 공동 구현 범위",
        "overview": [
          "네이버 카페 · 오늘의집 · 뉴스 · 한솔 제품 데이터",
          "4개 출처 크롤러 → ERD 설계 → DB 구축",
          "Agentic RAG 검색용 데이터 기반"
        ]
      },
      {
        "title": "LangGraph 기반 검색·검증·재시도 흐름",
        "images": [
          "hansol/agent-architecture.png"
        ],
        "imageCaptions": [
          "최종 발표자료 p.9 · AI 챗봇 아키텍처"
        ],
        "blocks": [
          {
            "label": "질문 분석",
            "items": [
              "모호성 검사 · 질문 재작성",
              "기간 추출 · 기본 7일",
              "제품 카테고리 판별"
            ]
          },
          {
            "label": "검색·생성",
            "items": [
              "데이터 소스 선택",
              "데이터 검색 · 답변 생성",
              "답변 후처리 · 질문 부합 확인"
            ]
          },
          {
            "label": "실패 시 재시도",
            "items": [
              "질문 재작성",
              "출처 재선택",
              "답변 재생성"
            ]
          }
        ],
        "overview": [
          "질문 분석 · 기간 추출(기본 7일) · 카테고리 판별",
          "출처 선택 → 검색 → 생성 → 후처리·답변 검증",
          "실패 시 질문 재작성 / 출처 재선택 / 답변 재생성"
        ]
      },
      {
        "title": "현업 요구 분석 및 검색 기능 설계",
        "blocks": [
          {
            "label": "현업 요구",
            "items": [
              "영업사원 5명 · 쇼룸 매니저 인터뷰",
              "소비자 반응·뉴스·제품 정보 분산"
            ]
          },
          {
            "label": "서비스 방향",
            "items": [
              "초기: 영업 준비 자동화",
              "변경: 정보 탐색 지원",
              "데이터 수집 · 검색 기능 집중"
            ]
          },
          {
            "label": "팀 리딩",
            "items": [
              "5인 팀 개발 조율",
              "UI/UX · FE/BE · 크롤링/AI 협업",
              "대표·개발팀 미팅 · 배포"
            ]
          }
        ],
        "overview": [
          "영업사원 5명 · 쇼룸 매니저 인터뷰",
          "영업 준비 자동화 → 정보 탐색 지원으로 방향 전환",
          "5인 팀 개발 조율 · 대표/개발팀 미팅 · 배포"
        ]
      }
    ],
    "outcomeItems": [
      {
        "title": "영업사원 5명 · 쇼룸 매니저 인터뷰",
        "result": "소비자 반응·뉴스·제품 정보의 분산 확인"
      },
      {
        "title": "인터뷰 기반 서비스 방향 재정의",
        "result": "영업 준비 자동화 → 정보 탐색 지원"
      },
      {
        "title": "대표·개발팀 전체 미팅 단독 진행",
        "result": "요구사항 공유 · 5인 팀 개발 조율"
      }
    ]
  },
  "alk": {
    "headline": "거대한 병리 이미지에서 종양 patch를 선별하고,\nALK 양성 여부를 분류했습니다.",
    "summary": "Gigapixel 단위 WSI와 제한된 의료 데이터를 다루기 위해 종양 영역 선별과 ALK 분류를 단계로 나눴습니다. CLAM으로 patch를 선택하고, 특징 추출기를 비교해 PLIP embedding 기반 분류기를 구성했습니다.",
    "outcome": "42,909개 patch 중 42,241개 정분류",
    "evidence": "98.44%는 patch 단위 분류 정확도입니다. 환자 단위 진단 정확도와는 구분됩니다.",
    "chapters": [
      {
        "title": "WSI 전체에서 출발해, 분류에 사용할 종양 patch를 먼저 골랐습니다.",
        "text": "WSI를 256×256 patch로 나누고 CLAM 종양 확률이 0.8 이상인 patch만 후속 분류 대상으로 선별했습니다. 큰 슬라이드 전체를 동일하게 처리하는 대신 병리학적으로 의미 있는 영역을 먼저 구성했습니다.",
        "decision": "종양 영역을 선택하는 단계와 ALK 양성 여부를 판단하는 단계를 분리했습니다.",
        "details": [
          "Patch 크기: 256 × 256",
          "CLAM 선택 기준: tumor probability ≥ 0.8"
        ],
        "images": [
          "research/clam-heatmap.png"
        ],
        "imageCaptions": [
          "halyn.pdf p.11 · WSI → CLAM → patch 추출"
        ]
      },
      {
        "title": "5종의 특징 추출기를 비교하고 PLIP embedding 기반 이진 분류기를 구성했습니다.",
        "text": "ResNet, MobileNet, CLIP, ViT, PLIP을 비교한 뒤 PLIP 특징을 사용했습니다. 512차원 embedding을 입력받는 약 3-layer 신경망으로 ALK 양성/음성을 분류하고, Sigmoid 출력으로 양성 확률을 계산했습니다.",
        "decision": "PLIP embedding → Fully Connected Layers → Sigmoid 출력으로 ALK 양성 확률을 계산했습니다.",
        "details": [
          "비교 대상: ResNet · MobileNet · CLIP · ViT · PLIP",
          "분류기 입력: 512-dimensional embedding",
          "분류기 출력: ALK-positive probability"
        ],
        "pipeline": true,
        "images": [
          "research/patch-result.png"
        ],
        "imageCaptions": [
          "halyn.pdf p.11 · PLIP → 분류기 → patch별 확률"
        ]
      },
      {
        "title": "분류 결과를 확률로 시각화해 이미지 위에서 확인했습니다.",
        "text": "42,909개 patch 중 42,241개를 올바르게 분류해 98.44%의 patch classification accuracy를 얻었습니다. ALK-positive에 가까울수록 red, ALK-negative에 가까울수록 blue로 표시하는 확률 시각화를 수행했습니다.",
        "decision": "정분류 개수와 정확도에 더해, patch별 예측 확률을 시각화했습니다.",
        "details": [
          "전체 42,909개 / 정분류 42,241개 / 정확도 98.44%",
          "Negative: 11,949 / 12,007 · 99.52%",
          "Positive: 30,292 / 30,902 · 98.03%",
          "Patch 단위 결과이며 환자 단위 진단 성능은 아님"
        ],
        "images": [
          "research/accuracy-table.png",
          "research/alk-visualization.png"
        ],
        "imageCaptions": [
          "halyn.pdf p.12 · PLIP 특징 기반 분류 결과 표",
          "halyn.pdf p.12 · 원본 WSI 위 결과 오버레이"
        ]
      }
    ]
  },
  "adam": {
    "headline": "손동작을 바로 실행하지 않고,\n유지 시간·모드·쿨다운을 거쳐 발표 명령으로 변환했습니다.",
    "summary": "팀 README에 명시된 담당은 서비스 기획 및 핵심 기능 개발입니다. 제공 소스에서 손 landmark 평활화, 제스처 유지 판정, 포인터/슬라이드 모드 분리, PDF 발표와 데스크톱 제어 구조를 확인했습니다. 아래 코드는 제출 저장소의 구현이며 파일별 단독 저작을 의미하지 않습니다.",
    "outcome": "데모·로컬 PDF 발표와 제스처 설정 구현",
    "evidence": "제공 소스 기준 기능 및 회귀 테스트 파일 확인. 데스크톱 외부 앱 제어는 대상 앱·권한별 실기기 검증이 별도로 필요합니다.",
    "chapters": [
      {
        "title": "프레임마다 바뀌는 손 좌표를 평활화하고, 유지된 동작만 명령으로 해석했습니다.",
        "text": "useHandTracking.ts에서 이전 좌표 0.62와 현재 좌표 0.38을 합성합니다. 모드 변경은 700ms 유지, 인식 소실은 240ms 유예, 일반 제스처에는 850ms 쿨다운을 둡니다. 손동작에 따라 별도의 유지 시간을 적용해 순간적인 움직임과 반복 입력을 제어합니다.",
        "decision": "좌표 안정화와 명령 실행 조건을 분리했습니다. 이 값들은 코드 설정값이며 측정된 성능 수치가 아닙니다.",
        "details": [
          "모드 변경: 700ms 유지",
          "인식 소실 유예: 240ms",
          "일반 제스처 쿨다운: 850ms · 스와이프 별도 900ms"
        ],
        "code": {
          "file": "src/features/camera/useHandTracking.ts",
          "text": "const MODE_GESTURE_HOLD_MS = 700;\nconst GESTURE_LOSS_GRACE_MS = 240;\nconst GESTURE_COOLDOWN_MS = 850;\n\nx: previous.x * 0.62 + landmark.x * 0.38,\ny: previous.y * 0.62 + landmark.y * 0.38,"
        }
      },
      {
        "title": "포인터 조작 중 슬라이드가 넘어가지 않도록 명령을 모드별로 나눴습니다.",
        "text": "슬라이드 모드와 포인터 모드를 분리하고, 양손 주먹은 긴급 정지로 처리합니다. 감도 설정에서는 테스트 영역의 포인터만 움직이도록 구성합니다. 모션·키 설정과 발표 프로필은 localStorage에 저장됩니다.",
        "decision": "설정 화면의 테스트 동작과 실제 발표 명령을 구분하고, 중복 제스처 할당을 제한했습니다.",
        "details": [
          "사용자별 제스처·키보드 매핑",
          "감도 조절 테스트 · 설정 초기화",
          "관련 검증 파일: useHandTracking.test.ts · ShortcutSettings.test.tsx · runtime.test.tsx"
        ]
      },
      {
        "title": "PDF.js로 로컬 문서를 렌더링하고 웹과 데스크톱의 제어 범위를 구분했습니다.",
        "text": "웹은 PDF.js와 Canvas로 선택한 PDF를 로컬 렌더링하며, 페이지 수에 맞춰 이동 범위를 제한합니다. Electron에는 IPC를 통한 외부 앱 키 입력과 macOS C helper의 CGEvent 기반 시스템 포인터 제어 코드가 포함되어 있습니다.",
        "decision": "웹 버전은 앱 내부 데모·PDF 발표를 지원합니다. 외부 PowerPoint·Keynote 제어를 웹 기능으로 소개하지 않습니다.",
        "details": [
          "카메라·PDF 서버 업로드 기능 없음",
          "웹: 데모/PDF 발표 · 앱 내부 포인터",
          "데스크톱: Electron IPC · macOS CGEvent · 앱/권한별 검증 필요"
        ]
      }
    ]
  },
  "msa": {
    "headline": "수강신청부터 결제·추천까지,\n서비스 경계와 상태 전이를 연결하는 MSA.",
    "summary": "LearnNexus는 User·Course·Enrollment·Payment·Recommend로 구성된 온라인 교육 플랫폼 실습입니다. 핵심은 기능을 나누는 데서 끝나지 않고, 인증 정보와 결제·수강 상태를 서비스 사이에 전달하는 구조입니다. 아래는 제공된 실습 문서의 설계 범위입니다.",
    "chapters": [
      {
        "title": "즉시 확인할 요청과 완료 후 전달할 이벤트를 분리합니다.",
        "text": "Enrollment는 REST로 강의 존재를 확인한 뒤 PENDING 상태의 수강신청을 만들고 Payment에 결제를 요청합니다. 결제가 완료되면 Payment가 Kafka의 payment.completed를 발행하고, Enrollment가 이를 수신해 ACTIVE로 전환하는 흐름입니다.",
        "decision": "결제 요청 자체를 수강 완료로 취급하지 않고, 결제 완료 이벤트를 상태 전이의 기준으로 둡니다.",
        "details": [
          "Enrollment → Course: 강의 존재 확인",
          "Enrollment → Payment: 결제 요청",
          "payment.completed 수신 → ACTIVE 전환 → 수강생 수 증가",
          "enrollment.completed 발행 → Recommend 갱신"
        ],
        "pipeline": true
      },
      {
        "title": "사용자 요청과 서비스 간 호출의 인증 방식을 구분합니다.",
        "text": "Auth Server가 발급한 JWT를 Gateway에서 JWK로 검증하고 X-User-Id·Email·Role 헤더를 하위 서비스로 전달하는 구조입니다. 서비스 간 호출은 Client Credentials와 service.read scope를 사용하도록 정의되어 있습니다.",
        "decision": "issuer·JWK 주소·scope를 서비스 전반에서 일치시키는 것이 인증 통합의 핵심입니다.",
        "details": [
          "Spring Authorization Server: 토큰 발급 · JWK Set 제공",
          "Spring Cloud Gateway: 라우팅 · JWT 검증 · 헤더 전파",
          "Resource Server: 서비스 접근 권한 검증",
          "컨테이너에서는 localhost 대신 서비스명으로 통신"
        ]
      },
      {
        "title": "추천은 별도 Python 서비스로, 데이터는 도메인 단위로 나눕니다.",
        "text": "FastAPI Recommend는 수강 이력과 강의 목록에 기반한 규칙 추천을 담당합니다. 데이터베이스는 MariaDB 단일 인스턴스 안에서 users·courses·enrollments·payments 테이블로 경계를 나눕니다. Eureka는 서비스 등록·탐색, Docker Compose는 전체 컨테이너 통합을 담당합니다.",
        "decision": "추천 모델 학습 성과가 아니라, Spring Boot 서비스와 FastAPI의 통신·인증·기동 의존성을 다루는 실습으로 설명합니다.",
        "details": [
          "Vue 3: 로그인 · 강의 목록 · 수강 화면",
          "FastAPI: 규칙 기반 추천",
          "Kafka KRaft: 결제·수강 완료 이벤트",
          "통합 점검 대상: 인증 값 일치 · 토픽 수신 · 서비스 등록 · 기동 순서"
        ]
      }
    ],
    "outcome": "서비스 분리에서 인증·이벤트 통합까지 이어지는 실습 구조",
    "evidence": "첨부 문서는 프로젝트 요약과 역할 분담안입니다. 완료된 트러블슈팅 결과나 개인별 담당 서비스는 명시되어 있지 않습니다."
  },
  "boachat": {
    "headline": "카카오톡 대화와 공지 PDF를\n질문으로 검색하는 RAG 챗봇으로 연결했습니다.",
    "summary": "BOAZ의 대화 기록과 공지 문서를 기반으로 동아리 정보를 검색하는 BOAchat 프로젝트에서 Team Leader를 맡았습니다.",
    "chapters": [
      {
        "title": "대화 기록과 공지 문서를 검색 가능한 단위로 나눴습니다.",
        "text": "카카오톡 대화와 공지 PDF를 LangChain Document Loader와 Text Splitter로 로딩·분할하고, OpenAI Embedding과 Pinecone으로 의미 검색 기반을 구성한 팀 프로젝트입니다. 개인 담당은 질문–문서 유사도 검색과 LLM QA 체인의 설계·코드 구현입니다.",
        "decision": "Documents → Chunking → Embedding → Pinecone으로 문서 검색 기반을 구성했습니다.",
        "details": [
          "대상 데이터: BOAZ 카카오톡 대화 · 공지 PDF",
          "Embedding: OpenAI Embedding",
          "Vector store: Pinecone"
        ]
      },
      {
        "title": "검색한 문맥을 답변 생성 단계로 전달했습니다.",
        "text": "LangChain 기반 RAG 흐름에서 관련 내용을 검색하고, 검색된 문맥을 LLM 답변 생성에 연결했습니다.",
        "decision": "동아리 정보를 찾는 검색 단계와 자연어 답변을 생성하는 단계를 연결했습니다.",
        "pipeline": true,
        "details": [
          "개인 구현: 질문–문서 유사도 검색",
          "개인 구현: 가장 유사한 문서를 사용하는 QA 체인",
          "LangChain 파이프라인 코드 구현 · 팀 기술 가이드"
        ]
      }
    ]
  },
  "gemma": {
    "headline": "논문 검색과 Gemma2 튜닝을 결합하고,\n제한된 자원에서 모델 크기를 비교했습니다.",
    "summary": "논문 PDF를 검색하는 RAG와 Gemma2-2B LoRA fine-tuning을 적용했습니다. 2B와 9B 모델을 비교해 최적화 방향을 검토하고 튜닝 모델을 HuggingFace에 배포했습니다.",
    "outcome": "Fine-tuned model HuggingFace 배포",
    "chapters": [
      {
        "title": "논문 PDF에서 답변에 사용할 문맥을 검색했습니다.",
        "text": "PyPDF2로 논문 텍스트를 추출하고 TextSplitter로 분할했습니다. HuggingFace embedding을 FAISS에 저장한 뒤, 질문과 유사한 문맥을 검색해 Gemma2 답변 생성으로 연결했습니다. FastAPI 백엔드와 Streamlit 데모로 PDF 업로드·질의응답을 구현했습니다.",
        "decision": "PDF 검색과 언어 모델의 답변 생성을 하나의 질의응답 파이프라인으로 연결했습니다.",
        "pipeline": true
      },
      {
        "title": "2B 모델에 LoRA를 적용하고 9B 모델과 비교했습니다.",
        "text": "WikiText 데이터셋으로 Gemma2-2b-it에 PEFT 기반 LoRA fine-tuning을 수행하고 Gemma2-9b-it과 비교했습니다. Fine-tuned model은 HuggingFace에 배포했습니다. 논문 PDF는 검색 문맥으로 사용하며, 학습 데이터와 구분됩니다.",
        "decision": "모델 크기 비교와 2B 모델 튜닝을 함께 진행하고, fine-tuned model을 HuggingFace에 배포했습니다.",
        "details": [
          "튜닝 데이터: WikiText",
          "기법: PEFT / LoRA",
          "모델: Gemma2-2b-it / Gemma2-9b-it",
          "정량 비교 결과는 제공 자료에 미기재"
        ]
      }
    ]
  },
  "deepchest": {
    "headline": "흉부 X-ray의 이미지 특징을\n진단·소견을 생성하는 언어 모델에 연결했습니다.",
    "summary": "DenseNet 기반 image feature extraction과 language model을 결합한 멀티모달 AI 프로젝트입니다. Streamlit으로 입력과 출력을 확인하는 인터페이스를 구현했습니다.",
    "chapters": [
      {
        "title": "이미지에서 추출한 특징을 텍스트 생성으로 연결했습니다.",
        "text": "이미지–텍스트 pair를 JSON 형태로 관리하고, 사전학습 DenseNet으로 이미지 특징을 추출한 뒤 mean pooling과 선형 변환으로 embedding을 구성했습니다. 이미지 특징과 언어 모델을 결합하고 LoRA를 적용해 진단·소견 생성 파이프라인으로 통합했습니다.",
        "decision": "이미지 특징 추출과 진단·소견 생성을 연결한 멀티모달 흐름을 구현했습니다.",
        "pipeline": true,
        "details": [
          "개인 담당: DenseNet embedding 추출 파이프라인",
          "개인 담당: LoRA 적용 및 멀티모달 구조 구현",
          "개인 담당: end-to-end 시스템 통합"
        ]
      },
      {
        "title": "Streamlit에서 모델의 입력과 출력을 확인하도록 구현했습니다.",
        "text": "팀 프로젝트는 Streamlit 기반 인터페이스를 제공했습니다. 개인 역할은 모델 개발과 시스템 통합으로 명시되어 있으므로 UI 전체를 단독 개발한 것으로 표시하지 않습니다.",
        "decision": "모델 파이프라인을 사용자가 확인할 수 있는 웹 인터페이스로 연결했습니다."
      }
    ],
    "evidence": "의료 AI 프로토타입 구현. 임상 유효성이나 진단 정확도에 대한 정량 검증은 제공 자료에 없습니다.",
    "outcome": "흉부 X-ray → 진단·소견 생성 프로토타입"
  },
  "koh": {
    "headline": "공정 데이터를 분석하고 시뮬레이션으로\n식각 조건과 허용 범위를 탐색했습니다.",
    "summary": "Python과 Monte Carlo simulation을 활용한 KOH 식각 공정 분석 프로젝트입니다. 공정 조건 분석과 Spec Margin 예측을 다뤘습니다.",
    "chapters": [
      {
        "title": "공정 조건과 허용 범위를 분석 대상으로 삼았습니다.",
        "text": "반도체 공정 데이터를 분석하고 식각 공정 조건 및 허용 범위를 탐색했습니다.",
        "decision": "공정 데이터 분석을 Spec Margin 예측으로 연결했습니다.",
        "details": [
          "대상: KOH 식각 공정",
          "분석: 공정 조건 · 허용 범위",
          "도구: Python · Data Analysis"
        ]
      },
      {
        "title": "Monte Carlo simulation을 공정 조건 분석에 활용했습니다.",
        "text": "Monte Carlo simulation을 통해 공정 조건과 Spec Margin을 분석했습니다.",
        "decision": "데이터 분석과 시뮬레이션을 결합해 공정의 허용 범위를 탐색했습니다.",
        "pipeline": true
      }
    ]
  }
};
