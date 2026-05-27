import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    title: 'Retriva',
    slug: 'retriva',
    eyebrow: 'Multimodal RAG',
    description:
      'A production-style multimodal hybrid RAG system for real-world PDFs using dense and sparse retrieval, reranking, OCR, visual fallback, query correction, and RAG evaluation.',
    problem:
      'Real-world PDFs often contain scanned pages, tables, images, and complex layouts that break text-only RAG pipelines. Retriva improves document question answering by combining text extraction, table/image handling, hybrid retrieval, reranking, query correction, and grounded response generation.',
    role:
      'Designed and built the retrieval pipeline, multimodal fallback flow, FastAPI backend, Streamlit interface, evaluation dashboard, and grounded answer workflow.',
    filters: ['RAG', 'Multimodal', 'Backend'],
    metricBadges: [
      '96.27% RAG Eval',
      'Hybrid Retrieval',
      'OCR + Visual Fallback',
      'FastAPI + Streamlit',
    ],
    stack: [
      'Multimodal RAG',
      'Hybrid Retrieval',
      'Reranking',
      'OCR',
      'Qdrant',
      'FastAPI',
      'Streamlit',
      'RAG Eval',
      'Python',
      'BGE embeddings',
      'BM25',
      'RRF',
      'ColPali',
      'SQLite',
      'OpenRouter',
    ],
    metrics: [
      {
        label: 'Evaluation score',
        value: '96.27%',
        detail: 'Average internal RAG evaluation score across faithfulness, relevancy, precision, and recall.',
      },
      {
        label: 'Retrieval mode',
        value: 'Hybrid',
        detail: 'Dense BGE embeddings and sparse BM25 are merged with Reciprocal Rank Fusion.',
      },
      {
        label: 'PDF coverage',
        value: 'Multimodal',
        detail: 'Designed for scanned, image-heavy, table-heavy, and layout-heavy PDF documents.',
      },
    ],
    architecture: [
      'PDF upload accepts real-world documents through the Streamlit interface.',
      'Text, table, image, and OCR extraction preserve document content across layouts.',
      'Dense retrieval uses BGE embeddings for semantic document matching.',
      'Sparse retrieval uses BM25 for keyword-sensitive evidence lookup.',
      'Reciprocal Rank Fusion merges dense and sparse candidates into a stronger retrieval set.',
      'BGE reranking reorders retrieved chunks for answer-quality relevance.',
      'CRAG-style query correction rewrites weak or ambiguous questions before retrying retrieval.',
      'Multimodal fallback uses visual retrieval when text extraction is incomplete or unreliable.',
      'Grounded answer generation cites retrieved evidence instead of relying on model memory.',
      'RAG evaluation dashboard tracks faithfulness, answer relevancy, context precision, and context recall.',
    ],
    aiArchitecture: [
      'Hybrid retrieval pipeline combines BGE dense embeddings, BM25 sparse retrieval, RRF fusion, and BGE reranking.',
      'Self-correction layer detects weak retrieval signals and applies CRAG-style query correction before answer generation.',
      'Multimodal fallback uses OCR and visual retrieval for scanned, image-heavy, and layout-heavy pages.',
      'Grounded response workflow constrains generation to retrieved context and evaluation signals.',
    ],
    systemDesign: [
      'FastAPI backend separates upload, extraction, retrieval, reranking, correction, generation, and evaluation endpoints.',
      'Streamlit interface provides a practical product surface for PDF ingestion, question answering, and evaluation review.',
      'Qdrant stores vectorized document chunks while SQLite supports lightweight metadata and local persistence.',
      'Pipeline is modular so extraction, retrieval, reranking, and evaluation components can be tested independently.',
    ],
    challenges: [
      'Handling scanned pages and image-heavy PDFs where text extraction alone loses critical evidence.',
      'Balancing semantic retrieval with exact keyword matching for technical PDF questions.',
      'Reducing hallucination by forcing answer generation to stay grounded in retrieved context.',
      'Creating an evaluation loop that measures more than answer fluency.',
    ],
    results: [
      'Reached a 96.27% average internal RAG evaluation score.',
      'Evaluated faithfulness, answer relevancy, context precision, and context recall.',
      'Built a retrieval stack that handles scanned, image-heavy, and layout-heavy PDFs more reliably than text-only RAG.',
      'Delivered a full product-style workflow with FastAPI services, Streamlit UI, and an evaluation dashboard.',
    ],
    future: [
      'Add document-level citations with page previews and bounding-box evidence.',
      'Introduce batch evaluation suites for regression testing across PDF categories.',
      'Add authentication, persistent project workspaces, and deployment observability.',
      'Support additional multimodal models and configurable reranking strategies.',
    ],
    timeline: [
      {
        phase: 'Document ingestion',
        detail: 'Built PDF upload and extraction flow for text, tables, images, and OCR-derived content.',
      },
      {
        phase: 'Hybrid retrieval',
        detail: 'Combined BGE dense retrieval, BM25 sparse retrieval, RRF fusion, and BGE reranking.',
      },
      {
        phase: 'Self-correction',
        detail: 'Added CRAG-style query correction and multimodal fallback for weak retrieval cases.',
      },
      {
        phase: 'Evaluation',
        detail: 'Created a dashboard for faithfulness, answer relevancy, context precision, and context recall.',
      },
    ],
    implementationHighlights: [
      'Built dense + sparse retrieval instead of relying on a single vector search path.',
      'Added OCR and visual fallback so scanned and layout-heavy PDFs remain answerable.',
      'Designed a RAG evaluation dashboard to measure grounding quality, not just response style.',
    ],
    preview: {
      label: 'Self-correcting multimodal RAG',
      headline:
        'PDF upload -> multimodal extraction -> hybrid retrieval -> reranking -> correction -> grounded answer -> evaluation',
      flow: [
        'PDF Input',
        'Text / Table / Image / OCR Extraction',
        'Dense Retrieval + Sparse Retrieval',
        'RRF Fusion + BGE Reranking',
        'Query Correction',
        'Grounded Answer',
        'RAG Evaluation Dashboard',
      ],
      nodes: [
        'Upload',
        'Extract',
        'Dense',
        'BM25',
        'RRF',
        'Rerank',
        'Correct',
        'Visual',
        'Answer',
        'Evaluate',
      ],
    },
    featured: true,
    status: 'Featured',
  },
  {
    title: 'FurnaceMind',
    slug: 'furnacemind',
    eyebrow: 'Industrial AI intelligence platform',
    description:
      'A blast furnace intelligence platform for real-time monitoring, Anomaly Detection, retrieval-assisted operations, and agent-guided decision support.',
    problem:
      'Industrial operators need fast, explainable insight from sensor streams, process logs, and operating knowledge without forcing engineers to inspect every signal manually.',
    role:
      'Designed the AI workflow, Anomaly Detection loop, retrieval layer, agent orchestration, and decision-support interface for industrial users.',
    filters: ['RAG', 'Agents', 'ML', 'Backend', 'Private'],
    metricBadges: [
      'Private Industrial AI',
      'Anomaly Detection',
      'RAG + Agents',
      'Operator Support',
    ],
    stack: [
      'Python',
      'FastAPI',
      'LangGraph',
      'RAG',
      'Time Series ML',
      'Computer Vision',
      'Vector Databases',
      'Docker',
    ],
    metrics: [
      {
        label: 'Decision loop',
        value: 'Real time',
        detail: 'Sensor events are routed into scoring, retrieval, and recommendation stages.',
      },
      {
        label: 'AI surface',
        value: 'Multi-agent',
        detail: 'Specialized agents handle monitoring, context retrieval, and action suggestions.',
      },
      {
        label: 'Output',
        value: 'Explainable',
        detail: 'Recommendations include operating context instead of raw alerts only.',
      },
    ],
    architecture: [
      'Telemetry ingestion normalizes sensor streams and operating signals.',
      'Anomaly scoring flags deviations across furnace health indicators.',
      'RAG retrieves relevant operating history and domain references.',
      'Agent workflow converts anomaly context into recommended next actions.',
      'Operator-facing UI presents alerts, evidence, and action rationale.',
    ],
    aiArchitecture: [
      'Hybrid statistical ML and LLM reasoning layer.',
      'Retrieval pipeline for structured and unstructured operating context.',
      'Agent graph with monitoring, context, and recommendation responsibilities.',
      'Human-in-the-loop feedback path for reviewing suggested actions.',
    ],
    systemDesign: [
      'FastAPI service boundary for model and retrieval endpoints.',
      'Container-ready services designed for deployment isolation.',
      'Event-oriented flow so scoring and recommendation can evolve independently.',
      'Traceable outputs for debugging model behavior and operations decisions.',
    ],
    challenges: [
      'Keeping recommendations grounded in operational evidence rather than generic LLM output.',
      'Designing a workflow that can support streaming signals and slower retrieval calls.',
      'Making anomaly explanations readable for both engineering and operations audiences.',
    ],
    results: [
      'Created a clear operating intelligence loop from signals to explainable recommendations.',
      'Separated monitoring, retrieval, and action generation so each layer can be tested independently.',
      'Demonstrated production-oriented thinking around service boundaries, traceability, and deployment.',
    ],
    future: [
      'Add live dashboards for alert latency, false-positive rate, and operator acknowledgement time.',
      'Introduce model registry and evaluation reports for anomaly detector versions.',
      'Add role-based access and incident review workflows.',
    ],
    timeline: [
      {
        phase: 'Discovery',
        detail: 'Mapped industrial monitoring pain points and the decision flow operators need.',
      },
      {
        phase: 'Architecture',
        detail: 'Split the system into ingestion, anomaly scoring, retrieval, agents, and UI layers.',
      },
      {
        phase: 'Prototype',
        detail: 'Built a working AI workflow with recommendations grounded in retrieved context.',
      },
      {
        phase: 'Hardening',
        detail: 'Focused on explainability, service boundaries, and deployable API design.',
      },
    ],
    implementationHighlights: [
      'Designed retrieval-assisted recommendations instead of one-shot prompting.',
      'Used specialized workflow stages to keep monitoring and reasoning responsibilities separate.',
      'Structured outputs so recommendations can be audited and improved over time.',
    ],
    preview: {
      label: 'Agentic monitoring loop',
      headline: 'Signals -> anomaly score -> retrieved context -> operator recommendation',
      nodes: ['Telemetry', 'Scoring', 'RAG', 'Agents', 'Action'],
    },
    featured: true,
    status: 'Private',
  },
  {
    title: 'Multimodal Health Information Assistant',
    slug: 'symp-bot',
    eyebrow: 'Health information assistant',
    description:
      'A multimodal health information assistant that accepts text, voice, and image inputs, extracts structured symptom context, and produces cautious, easy-to-follow informational responses with voice feedback.',
    disclaimer:
      'Not a diagnostic tool. Built as a multimodal AI interface experiment for structured symptom intake, cautious explanation, and voice-enabled interaction.',
    problem:
      'Health information assistants need to combine voice, image, and text context while keeping structured intake, cautious explanation, and easy-to-follow informational responses clear for users.',
    role:
      'Built the multimodal flow, LLM reasoning prompts, voice integration, and user-facing interaction loop.',
    filters: ['Multimodal'],
    metricBadges: [
      'Text + Voice + Image',
      'Structured Intake',
      'Voice Feedback',
      'Safety Disclaimer',
    ],
    stack: [
      'Python',
      'Llama 4 Maverick',
      'Multimodal AI',
      'ElevenLabs',
      'Speech Input',
      'Image Analysis',
      'Prompt Engineering',
    ],
    metrics: [
      {
        label: 'Inputs',
        value: '3 modes',
        detail: 'Text, voice, and image context are combined into one reasoning flow.',
      },
      {
        label: 'Response',
        value: 'Structured',
        detail: 'Outputs separate symptoms, possible causes, and next-step guidance.',
      },
      {
        label: 'Interface',
        value: 'Voice-ready',
        detail: 'ElevenLabs integration supports spoken responses for smoother interaction.',
      },
    ],
    architecture: [
      'Capture user text, image, and voice inputs.',
      'Transcribe speech and normalize multimodal context.',
      'Route structured context to the LLM with safety-oriented prompt constraints.',
      'Generate cautious informational responses and explanation blocks.',
      'Return text and voice response to the user.',
    ],
    aiArchitecture: [
      'Multimodal context assembly before LLM reasoning.',
      'Prompt templates that separate user symptoms from model interpretation.',
      'Voice synthesis layer decoupled from the core reasoning layer.',
      'Response formatting for clear downstream UI rendering.',
    ],
    systemDesign: [
      'Input adapters isolate voice and image handling from the reasoning module.',
      'Structured response schema makes results easier to validate.',
      'External AI services are wrapped behind integration functions for replacement later.',
    ],
    challenges: [
      'Combining heterogeneous inputs without losing important user context.',
      'Keeping health-information output cautious, limited, and clearly informational.',
      'Designing prompts that return usable structure rather than conversational sprawl.',
    ],
    results: [
      'Delivered a working multimodal health information assistant with voice and image-aware symptom context flow.',
      'Created a cleaner interaction model than text-only chat for structured symptom intake and cautious explanation.',
      'Demonstrated applied LLM integration across multiple AI service boundaries.',
    ],
    future: [
      'Add stronger safety copy, escalation guidance, and source-grounded health information references.',
      'Introduce a retrieval layer for trusted health references.',
      'Add evaluation examples for prompt regression testing.',
    ],
    timeline: [
      {
        phase: 'Input design',
        detail: 'Defined how image, speech, and text signals become one structured context.',
      },
      {
        phase: 'LLM flow',
        detail: 'Built the prompt and response format around symptom analysis and suggestions.',
      },
      {
        phase: 'Voice loop',
        detail: 'Connected response generation to voice output for a natural assistant experience.',
      },
    ],
    implementationHighlights: [
      'Integrated multimodal inputs into a single reasoning workflow.',
      'Separated transcription, image context, LLM inference, and voice output layers.',
      'Designed response structure for readability and future validation.',
    ],
    preview: {
      label: 'Multimodal reasoning',
      headline: 'Voice + image + text context assembled before LLM response generation',
      nodes: ['Voice', 'Image', 'Context', 'LLM', 'Audio'],
    },
    github: 'https://github.com/charan-x16/symp_bot',
    demo: 'https://github.com/charan-x16/symp_bot',
    featured: true,
    status: 'Public',
  },
  {
    title: 'Journey Bot',
    slug: 'journey-bot',
    eyebrow: 'Multi-agent travel planning system',
    description:
      'A CrewAI and LangChain travel assistant that coordinates specialist agents to produce personalized itinerary plans through an interactive Streamlit app.',
    problem:
      'Travel planning requires search, preference reasoning, budget tradeoffs, itinerary sequencing, and explanation - too much for a single prompt to handle cleanly.',
    role:
      'Designed the agent responsibilities, planning flow, LLM prompts, and Streamlit product interface.',
    filters: ['Agents'],
    metricBadges: [
      'Multi-Agent Planning',
      'CrewAI',
      'Streamlit UI',
      'Itinerary Generation',
    ],
    stack: [
      'Python',
      'CrewAI',
      'LangChain',
      'Llama 4 Scout',
      'Streamlit',
      'Agent Workflows',
      'Prompt Engineering',
    ],
    metrics: [
      {
        label: 'Workflow',
        value: 'Agent team',
        detail: 'Planning responsibilities are split across itinerary, budget, and recommendation agents.',
      },
      {
        label: 'Interface',
        value: 'Interactive',
        detail: 'Users can provide preferences and receive organized itinerary outputs.',
      },
      {
        label: 'Output',
        value: 'Actionable',
        detail: 'Plans include day-by-day structure rather than a generic destination summary.',
      },
    ],
    architecture: [
      'Collect trip preferences through the Streamlit UI.',
      'Planner agent breaks the request into travel constraints and goals.',
      'Research and itinerary agents generate recommendations and sequencing.',
      'Final response synthesizes plan, tradeoffs, and next steps.',
    ],
    aiArchitecture: [
      'Role-based agents reduce prompt complexity.',
      'Shared context object carries user constraints through the workflow.',
      'LLM output is shaped into structured itinerary sections.',
    ],
    systemDesign: [
      'Streamlit UI keeps the prototype lightweight and deployable.',
      'Agent orchestration layer separates workflow logic from presentation.',
      'Prompts are modular so agent behavior can be improved independently.',
    ],
    challenges: [
      'Preventing agents from repeating each other or drifting from user constraints.',
      'Balancing itinerary detail with concise, usable planning output.',
      'Keeping the app responsive while multiple LLM calls are coordinated.',
    ],
    results: [
      'Built a complete multi-agent product workflow for personalized itinerary generation.',
      'Demonstrated how agent decomposition improves clarity for broad planning tasks.',
      'Created a working app surface that can be extended with real travel APIs.',
    ],
    future: [
      'Add live flight, hotel, and map integrations.',
      'Persist user preferences and trip revisions.',
      'Add cost estimation and comparison views.',
    ],
    timeline: [
      {
        phase: 'Agent modeling',
        detail: 'Defined specialist responsibilities for research, planning, and synthesis.',
      },
      {
        phase: 'Interface',
        detail: 'Built an interactive Streamlit workflow for travel preferences.',
      },
      {
        phase: 'Output design',
        detail: 'Formatted results into readable itinerary sections and recommendations.',
      },
    ],
    implementationHighlights: [
      'Applied CrewAI to a practical multi-step planning problem.',
      'Kept user constraints explicit across the agent workflow.',
      'Built a product-like interface instead of a notebook-only demo.',
    ],
    preview: {
      label: 'Agent planning graph',
      headline: 'Preferences -> specialist agents -> itinerary synthesis',
      nodes: ['Profile', 'Research', 'Budget', 'Planner', 'Itinerary'],
    },
    github: 'https://github.com/charan-x16/journey-bot',
    demo: 'https://github.com/charan-x16/journey-bot',
    featured: true,
    status: 'Public',
  },
  {
    title: 'Source Code Analyzer',
    slug: 'source-code-analyzer',
    eyebrow: 'RAG-powered repository explainer',
    description:
      'A repository analysis tool that fetches source code, builds contextual retrieval, and answers codebase questions with grounded explanations.',
    problem:
      'Developers need fast codebase orientation, but generic LLM answers fail when they are not grounded in actual repository context.',
    role:
      'Built the repository ingestion flow, chunking strategy, retrieval logic, and LLM explanation layer.',
    filters: ['RAG', 'Backend'],
    metricBadges: [
      'Codebase RAG',
      'Repo Ingestion',
      'Grounded Answers',
      'Vector Search',
    ],
    stack: [
      'Python',
      'LangChain',
      'RAG',
      'Qwen3-4B',
      'Vector Databases',
      'Git',
      'Code Analysis',
    ],
    metrics: [
      {
        label: 'Context',
        value: 'Repo-aware',
        detail: 'Answers are grounded in indexed source files instead of generic model memory.',
      },
      {
        label: 'Workflow',
        value: 'Fetch + index',
        detail: 'The tool pulls code, chunks it, embeds it, and retrieves relevant context.',
      },
      {
        label: 'Output',
        value: 'Explainer',
        detail: 'Responses focus on how code works and where to inspect next.',
      },
    ],
    architecture: [
      'Fetch Git repository contents.',
      'Filter and chunk source files for retrieval quality.',
      'Embed chunks and store them in a vector index.',
      'Retrieve relevant snippets for a user query.',
      'Generate grounded explanations with the retrieved context.',
    ],
    aiArchitecture: [
      'Code-aware RAG pipeline with chunking tuned for source files.',
      'LLM answers constrained by retrieved repository context.',
      'Query flow designed for explanation and navigation tasks.',
    ],
    systemDesign: [
      'Repository ingestion separated from query-time retrieval.',
      'Vector store abstraction allows backend replacement later.',
      'Model layer can be swapped without rewriting ingestion.',
    ],
    challenges: [
      'Chunking source code without breaking important functions or classes.',
      'Returning enough context for accurate answers without bloating prompts.',
      'Handling different repository structures consistently.',
    ],
    results: [
      'Created a practical RAG system for understanding unfamiliar codebases.',
      'Demonstrated source-grounded AI explanation instead of generic code chat.',
      'Built reusable ingestion and retrieval stages for future developer tools.',
    ],
    future: [
      'Add file-level citations and clickable source references.',
      'Support incremental indexing for changed repositories.',
      'Add architecture map generation from repository structure.',
    ],
    timeline: [
      {
        phase: 'Ingestion',
        detail: 'Built the repository fetch and file filtering pipeline.',
      },
      {
        phase: 'Retrieval',
        detail: 'Added chunking, embeddings, vector storage, and query lookup.',
      },
      {
        phase: 'Explanation',
        detail: 'Connected retrieved context to an LLM response layer for code questions.',
      },
    ],
    implementationHighlights: [
      'Built a complete RAG loop around real source code.',
      'Separated repository indexing from query-time explanation.',
      'Used a smaller open model to keep the system practical and portable.',
    ],
    preview: {
      label: 'Codebase RAG',
      headline: 'Repository -> chunks -> vector index -> grounded code explanation',
      nodes: ['Git', 'Chunks', 'Embeddings', 'Retriever', 'Answer'],
    },
    github: 'https://github.com/charan-x16/source-code-analyzer',
    demo: 'https://github.com/charan-x16/source-code-analyzer',
    featured: true,
    status: 'Public',
  },
  {
    title: 'Context-Aware Text Summarizer',
    slug: 'context-aware-summarizer',
    eyebrow: 'Transformer NLP summarization pipeline',
    description:
      'A document summarization pipeline using transformer models and domain-specific fine-tuning to produce coherent summaries.',
    problem:
      'Long documents need concise summaries that preserve context and domain meaning, not only extract high-frequency sentences.',
    role:
      'Implemented preprocessing, model experimentation, fine-tuning workflow, and evaluation planning.',
    filters: ['ML'],
    metricBadges: ['Transformer NLP', 'BERT + T5', 'ROUGE Eval', 'Document Summaries'],
    stack: ['Python', 'BERT', 'T5', 'Transformers', 'NLP', 'ROUGE', 'Pandas'],
    metrics: [
      {
        label: 'Models',
        value: 'BERT + T5',
        detail: 'Compared transformer approaches for context-aware summarization.',
      },
      {
        label: 'Evaluation',
        value: 'ROUGE',
        detail: 'Used summarization metrics to compare output quality across iterations.',
      },
      {
        label: 'Focus',
        value: 'Domain tuned',
        detail: 'Fine-tuning targeted more coherent summaries for specific document types.',
      },
    ],
    architecture: [
      'Ingest and clean document text.',
      'Segment long content into model-ready windows.',
      'Run transformer summarization and combine outputs.',
      'Evaluate summaries against reference examples.',
    ],
    aiArchitecture: [
      'Transformer-based summarization using BERT and T5 experimentation.',
      'Preprocessing pipeline designed around long-form document constraints.',
      'Metric-driven iteration with ROUGE-style evaluation.',
    ],
    systemDesign: [
      'Pipeline stages isolate cleaning, inference, and evaluation.',
      'Model configuration can be changed without rewriting preprocessing.',
      'Evaluation outputs support side-by-side model comparison.',
    ],
    challenges: [
      'Preserving context when documents exceed model input limits.',
      'Avoiding overly generic summaries.',
      'Creating a repeatable evaluation path for subjective output quality.',
    ],
    results: [
      'Built a transformer summarization workflow with measurable evaluation.',
      'Improved summary coherence through domain-specific tuning experiments.',
      'Created reusable NLP pipeline pieces for document understanding tasks.',
    ],
    future: [
      'Add RAG-assisted summarization for source-grounded summaries.',
      'Expose summarization through a FastAPI endpoint.',
      'Add a lightweight UI for comparing model outputs.',
    ],
    timeline: [
      {
        phase: 'Preprocessing',
        detail: 'Cleaned and segmented documents for transformer input.',
      },
      {
        phase: 'Modeling',
        detail: 'Experimented with BERT and T5 summarization approaches.',
      },
      {
        phase: 'Evaluation',
        detail: 'Compared generated summaries with metric-based evaluation.',
      },
    ],
    implementationHighlights: [
      'Handled long-document constraints before model inference.',
      'Used evaluation metrics to compare summarization quality.',
      'Kept model experimentation modular for future API deployment.',
    ],
    preview: {
      label: 'NLP pipeline',
      headline: 'Documents -> preprocessing -> transformer summary -> evaluation',
      nodes: ['Docs', 'Clean', 'Model', 'Summary', 'Score'],
    },
    featured: false,
    status: 'Research',
  },
]

const featuredProjectOrder = [
  'retriva',
  'furnacemind',
  'source-code-analyzer',
  'journey-bot',
  'symp-bot',
]

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => {
    const fallbackIndex = Number.MAX_SAFE_INTEGER
    const aIndex = featuredProjectOrder.indexOf(a.slug)
    const bIndex = featuredProjectOrder.indexOf(b.slug)

    return (
      (aIndex === -1 ? fallbackIndex : aIndex) -
      (bIndex === -1 ? fallbackIndex : bIndex)
    )
  })

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
