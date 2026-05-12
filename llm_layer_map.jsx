import { useState } from "react";

const LAYERS = [
  {
    id: "L1",
    num: 1,
    name: "Application Layer",
    tagline: "Build products on top of models",
    demand: 5,
    pay: 4,
    future: 4,
    futureNote: "Stable, but commoditising fast as tooling matures",
    payRange: "₹18–45L",
    roles: ["LLM Application Engineer", "AI Product Engineer", "Conversational AI Engineer", "RAG Engineer"],
    color: "#22c55e",
    bg: "rgba(34,197,94,0.07)",
    border: "rgba(34,197,94,0.2)",
    skills: [
      { name: "LangChain / LangGraph", note: "Orchestration glue — most widely asked" },
      { name: "RAG pipelines", note: "Chunking, embedding, retrieval, re-ranking" },
      { name: "Vector DBs", note: "Pinecone, Weaviate, pgvector, Chroma" },
      { name: "Prompt engineering", note: "System prompts, few-shot, CoT, structured output" },
      { name: "LLM API integration", note: "OpenAI, Anthropic, Gemini, Bedrock" },
      { name: "Tool use & function calling", note: "Structured outputs, Pydantic, Instructor" },
      { name: "FastAPI / REST APIs", note: "Wrapping LLM logic as services" },
    ],
    insight: "This is where 60–70% of current LLM job postings live. Highest volume of roles, fastest to hire. The risk: tooling is abstracting this layer rapidly — what took 3 months to build in 2023 is now a weekend project. The floor is rising, which means the bar to stand out is rising too.",
    verdict: "Your current home. Strong foundation — but you need to move up the stack to stay ahead.",
    verdictColor: "#22c55e",
  },
  {
    id: "L2",
    num: 2,
    name: "Agentic & Orchestration Layer",
    tagline: "Multi-step reasoning, tool use, autonomous workflows",
    demand: 5,
    pay: 5,
    future: 5,
    futureNote: "Fastest growing layer in 2025–2026 JDs. Not commoditising — getting harder.",
    payRange: "₹28–60L",
    roles: ["Agentic AI Engineer", "AI Automation Engineer", "Multi-agent Systems Engineer", "AI Platform Engineer"],
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.07)",
    border: "rgba(59,130,246,0.2)",
    skills: [
      { name: "Multi-agent orchestration", note: "Supervisor/worker, subgraphs, delegation" },
      { name: "Model Context Protocol (MCP)", note: "Emerging standard — adoption exploding" },
      { name: "Memory systems", note: "Short/long-term, mem0, episodic memory" },
      { name: "Agent evaluation", note: "LLM-as-judge, RAGAS, trajectory eval" },
      { name: "Tool ecosystems", note: "Browser, code exec, file system, APIs as tools" },
      { name: "Human-in-the-loop patterns", note: "Approval gates, interrupts, oversight" },
      { name: "Autogen / CrewAI / Google ADK", note: "Framework diversity is a JD differentiator" },
    ],
    insight: "This is the hottest layer right now and in the next 2–3 years. Agents that reliably do multi-step tasks across tools and systems is an unsolved problem at scale. Every enterprise is trying to build this. The skill gap is real — very few engineers can build production agentic systems that don't hallucinate themselves into a loop.",
    verdict: "The layer you should be aggressively moving into. Your LangGraph knowledge is the entry ticket — deepen it here.",
    verdictColor: "#3b82f6",
  },
  {
    id: "L3",
    num: 3,
    name: "LLMOps / Production Layer",
    tagline: "Deploy, monitor, evaluate, and scale LLM systems",
    demand: 4,
    pay: 5,
    future: 5,
    futureNote: "Every company that ships LLMs needs this. Scarcest talent pool.",
    payRange: "₹30–65L",
    roles: ["LLMOps Engineer", "ML Platform Engineer", "AI Infrastructure Engineer", "AI Reliability Engineer"],
    color: "#a855f7",
    bg: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.2)",
    skills: [
      { name: "LangSmith / Langfuse / Phoenix", note: "Tracing, eval pipelines, prompt versioning" },
      { name: "MLflow / W&B", note: "Experiment tracking, model registry" },
      { name: "vLLM / TGI / Ollama", note: "High-throughput model serving" },
      { name: "Kubernetes + Docker for ML", note: "Containerised LLM workloads, GPU nodes" },
      { name: "Evaluation frameworks", note: "RAGAS, deepeval, lm-eval-harness" },
      { name: "CI/CD for ML", note: "Automated eval gates, model promotion" },
      { name: "Observability stack", note: "Prometheus, Grafana, latency SLOs" },
      { name: "Guardrails & safety", note: "Output validation, PII, hallucination mitigation" },
    ],
    insight: "Critically underrepresented in the talent market. Most engineers can build a demo — almost none can tell you the P99 latency of their LLM pipeline, why it drifted last Tuesday, or how to roll back a prompt version. Companies that are past the pilot stage are desperate for this. It pays significantly more than the application layer for exactly this reason.",
    verdict: "The biggest gap between your current profile and senior-level pay. One solid LangSmith + evaluation project closes this fast.",
    verdictColor: "#a855f7",
  },
  {
    id: "L4",
    num: 4,
    name: "Fine-tuning & Alignment Layer",
    tagline: "Customise model behaviour on domain data",
    demand: 3,
    pay: 5,
    future: 4,
    futureNote: "Fewer roles but extremely high pay per role. Risk: GPT-4 class models keep raising the baseline.",
    payRange: "₹35–80L",
    roles: ["ML Research Engineer", "Fine-tuning Engineer", "Model Alignment Engineer", "Applied Research Scientist"],
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.2)",
    skills: [
      { name: "SFT (Supervised Fine-tuning)", note: "TRL, Axolotl, dataset formatting" },
      { name: "LoRA / QLoRA / PEFT", note: "Parameter-efficient adapters, rank selection" },
      { name: "DPO / RLHF / ORPO", note: "Preference optimisation, reward modelling" },
      { name: "Dataset curation", note: "Alpaca/ShareGPT formats, quality filtering, synthetic data" },
      { name: "Quantisation (GGUF, AWQ, GPTQ)", note: "Inference cost reduction, edge deployment" },
      { name: "Eval for fine-tuned models", note: "MT-Bench, lm-eval-harness, domain evals" },
      { name: "Distributed training basics", note: "DeepSpeed, FSDP, multi-GPU setups" },
    ],
    insight: "High pay, lower volume. Most Hyderabad MNC roles at your level don't require this as primary — it's a strong differentiator when added to application or LLMOps skills. The future risk: frontier model quality is improving so fast that fine-tuning smaller models is becoming less compelling unless you have unique domain data. Fine-tuning + evaluation together is the durable skill pairing.",
    verdict: "You're already on this path. Finish LoRA/DPO, then pair it with eval frameworks — that combination is what JDs reward.",
    verdictColor: "#f59e0b",
  },
  {
    id: "L5",
    num: 5,
    name: "Pretraining & Research Layer",
    tagline: "Build and train foundation models from scratch",
    demand: 1,
    pay: 5,
    future: 4,
    futureNote: "Only a handful of companies do this. Extremely specialised, mostly research roles.",
    payRange: "₹60–200L+",
    roles: ["Research Scientist", "Foundation Model Engineer", "Pretraining Engineer", "AI Research Lead"],
    color: "#f43f5e",
    bg: "rgba(244,63,94,0.07)",
    border: "rgba(244,63,94,0.2)",
    skills: [
      { name: "Transformer architecture (deep)", note: "Custom attention, positional encodings, MoE" },
      { name: "Distributed pretraining", note: "Megatron-LM, DeepSpeed, FSDP, 1000+ GPU jobs" },
      { name: "Tokeniser design", note: "BPE, SentencePiece, custom vocab" },
      { name: "Data pipeline at scale", note: "Trillion-token datasets, dedup, quality filters" },
      { name: "Scaling laws", note: "Chinchilla, compute-optimal training" },
      { name: "CUDA / GPU programming", note: "Custom kernels, memory optimisation" },
      { name: "Research paper fluency", note: "Reproducing and extending SOTA results" },
    ],
    insight: "Google, Anthropic, OpenAI, Mistral, and 5–6 others globally. That's essentially the entire market for this layer. Pay is extraordinary but competition is PhD-level. For Hyderabad MNC roles, this is not the target — it's good to understand architecturally, but pursuing it as a career path requires a very different trajectory (research publications, PhD, etc.).",
    verdict: "Not your target for this job search. Understand the concepts for system design interviews, but don't invest learning time here.",
    verdictColor: "#f43f5e",
  },
];

function Bar({ value, max = 5, color }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: max }, (_, i) => (
        <div key={i} style={{
          width: 16, height: 4, borderRadius: 2,
          background: i < value ? color : "rgba(255,255,255,0.08)",
          transition: "background 0.3s",
        }} />
      ))}
    </div>
  );
}

function LayerCard({ layer, isActive, onClick }) {
  return (
    <div onClick={onClick} style={{
      border: `1px solid ${isActive ? layer.color + "99" : layer.border}`,
      borderRadius: 14,
      background: isActive ? layer.bg : "rgba(255,255,255,0.02)",
      padding: "14px 16px",
      cursor: "pointer",
      transition: "all 0.2s",
      position: "relative",
      overflow: "hidden",
    }}>
      {isActive && <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
        background: layer.color, borderRadius: "3px 0 0 3px",
      }} />}

      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div style={{
          width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
          background: isActive ? layer.color : "rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 800,
          color: isActive ? "#0a0f1e" : "rgba(255,255,255,0.3)",
          transition: "all 0.2s",
        }}>{layer.num}</div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: isActive ? "#f1f5f9" : "#94a3b8", marginBottom: 2 }}>
            {layer.name}
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 8, lineHeight: 1.4 }}>
            {layer.tagline}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { label: "Jobs in market", val: layer.demand },
              { label: "Pay potential", val: layer.pay },
              { label: "Future proof", val: layer.future },
            ].map(m => (
              <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", width: 88, flexShrink: 0 }}>{m.label}</span>
                <Bar value={m.val} color={layer.color} />
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 8, display: "inline-block",
            fontSize: 11, fontWeight: 600,
            color: layer.color, background: layer.bg,
            border: `1px solid ${layer.border}`,
            padding: "2px 8px", borderRadius: 999,
          }}>{layer.payRange}</div>
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ layer }) {
  return (
    <div style={{
      background: layer.bg,
      border: `1px solid ${layer.border}`,
      borderRadius: 14,
      padding: "20px 22px",
      height: "100%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 18,
    }}>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: layer.color,
          }}>Layer {layer.num}</span>
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>{layer.name}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{layer.tagline}</div>
      </div>

      <div>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>
          Roles in this layer
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {layer.roles.map(r => (
            <span key={r} style={{
              fontSize: 11, padding: "3px 10px", borderRadius: 999,
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "#cbd5e1",
            }}>{r}</span>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>
          Key skills
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {layer.skills.map(sk => (
            <div key={sk.name} style={{
              display: "flex", alignItems: "flex-start", gap: 8,
              padding: "7px 10px", borderRadius: 8,
              background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <span style={{ color: layer.color, fontSize: 10, marginTop: 2, flexShrink: 0 }}>◆</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>{sk.name}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>{sk.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: "12px 14px", borderRadius: 10,
        background: "rgba(0,0,0,0.25)", borderLeft: `3px solid ${layer.color}`,
      }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: layer.color, marginBottom: 6 }}>
          Market reality
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
          {layer.insight}
        </div>
      </div>

      <div style={{
        padding: "10px 14px", borderRadius: 10,
        background: layer.bg, border: `1px solid ${layer.border}`,
      }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: layer.color, marginBottom: 4 }}>
          For your profile
        </div>
        <div style={{ fontSize: 12, fontWeight: 500, color: layer.verdictColor, lineHeight: 1.6 }}>
          {layer.verdict}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>
          Future outlook
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, fontStyle: "italic" }}>
          {layer.futureNote}
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
          {[
            { label: "Jobs in market", val: layer.demand },
            { label: "Pay potential", val: layer.pay },
            { label: "Future proof", val: layer.future },
          ].map(m => (
            <div key={m.label}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginBottom: 3 }}>{m.label}</div>
              <Bar value={m.val} color={layer.color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("L2");
  const activeLayer = LAYERS.find(l => l.id === active);

  return (
    <div style={{
      width: "100vw", height: "100vh",
      background: "#0a0f1e",
      display: "flex", flexDirection: "column",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: "#e2e8f0",
      overflow: "hidden",
      boxSizing: "border-box",
    }}>
      {/* Header */}
      <div style={{
        padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)",
        flexShrink: 0, display: "flex", alignItems: "center", gap: 12,
      }}>
        <div>
          <div style={{
            fontSize: 16, fontWeight: 800,
            background: "linear-gradient(135deg,#60a5fa,#a78bfa,#34d399)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>LLM Engineering — Layer Map</div>
          <div style={{ fontSize: 11, color: "#475569", marginTop: 1 }}>
            5 layers of the LLM stack · job market analysis · skill breakdown · click a layer to explore
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            fontSize: 11, color: "rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 8, padding: "4px 10px",
          }}>
            ← click any layer card to see full breakdown
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div style={{
        flex: 1, display: "flex", gap: 0, overflow: "hidden", minHeight: 0,
      }}>
        {/* Left: layer list */}
        <div style={{
          width: 340, flexShrink: 0, padding: "12px",
          display: "flex", flexDirection: "column", gap: 8,
          overflowY: "auto", borderRight: "1px solid rgba(255,255,255,0.06)",
        }}>
          {/* Stack visual hint */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, paddingLeft: 2 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["#f43f5e","#f59e0b","#a855f7","#3b82f6","#22c55e"].map((c,i) => (
                <div key={i} style={{ width: 14, height: 3, borderRadius: 1, background: c, opacity: 0.7 }} />
              ))}
            </div>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>L5 (research) ↑ highest specialisation, fewest jobs</span>
          </div>

          {[...LAYERS].reverse().map(layer => (
            <LayerCard
              key={layer.id} layer={layer}
              isActive={active === layer.id}
              onClick={() => setActive(layer.id)}
            />
          ))}

          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2, paddingLeft: 2 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {["#22c55e","#3b82f6","#a855f7","#f59e0b","#f43f5e"].map((c,i) => (
                <div key={i} style={{ width: 14, height: 3, borderRadius: 1, background: c, opacity: 0.7 }} />
              ))}
            </div>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>L1 (application) ↓ most jobs, fastest to hire</span>
          </div>
        </div>

        {/* Right: detail panel */}
        <div style={{ flex: 1, padding: "12px", overflow: "hidden", minWidth: 0 }}>
          {activeLayer && <DetailPanel layer={activeLayer} />}
        </div>
      </div>
    </div>
  );
}
