"use client";

import { useState, useEffect } from "react";

export interface Slide {
  id: string;
  title: string;
  content: string;
  visual: "diagram" | "chart" | "formula" | "list" | "highlight" | "comparison";
  data?: Record<string, unknown>;
}

interface LessonSlidesProps {
  slides: Slide[];
  currentSlideIndex: number;
  onSlideChange: (index: number) => void;
}

export function LessonSlides({ slides, currentSlideIndex, onSlideChange }: LessonSlidesProps) {
  const slide = slides[currentSlideIndex];

  if (!slide) return null;

  return (
    <div className="relative">
      {/* Slide Navigation Dots */}
      <div className="flex justify-center gap-2 mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlideIndex
                ? "bg-[var(--teal)] w-6"
                : index < currentSlideIndex
                ? "bg-[var(--teal)]/50"
                : "bg-white/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Content */}
      <div className="bg-gradient-to-br from-[#0f1629] to-[#0a0d1e] rounded-2xl border border-white/10 overflow-hidden min-h-[400px] flex flex-col">
        {/* Slide Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--muted)] font-medium">
              {currentSlideIndex + 1} / {slides.length}
            </span>
            <h3 className="text-lg font-semibold text-[var(--text)]">{slide.title}</h3>
            <div className="w-12" /> {/* Spacer for centering */}
          </div>
        </div>

        {/* Slide Body */}
        <div className="flex-1 p-6 md:p-8 flex items-center justify-center">
          <SlideVisual slide={slide} />
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onSlideChange(Math.max(0, currentSlideIndex - 1))}
          disabled={currentSlideIndex === 0}
          className="px-4 py-2 text-[var(--muted)] hover:text-[var(--text)] disabled:opacity-30 transition-all"
        >
          ← Previous
        </button>
        <button
          onClick={() => onSlideChange(Math.min(slides.length - 1, currentSlideIndex + 1))}
          disabled={currentSlideIndex === slides.length - 1}
          className="px-4 py-2 text-[var(--muted)] hover:text-[var(--text)] disabled:opacity-30 transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

function SlideVisual({ slide }: { slide: Slide }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(false);
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, [slide.id]);

  switch (slide.visual) {
    case "formula":
      return <FormulaSlide content={slide.content} data={slide.data} animated={animated} />;
    case "diagram":
      return <DiagramSlide content={slide.content} data={slide.data} animated={animated} />;
    case "chart":
      return <ChartSlide content={slide.content} data={slide.data} animated={animated} />;
    case "list":
      return <ListSlide content={slide.content} data={slide.data} animated={animated} />;
    case "highlight":
      return <HighlightSlide content={slide.content} data={slide.data} animated={animated} />;
    case "comparison":
      return <ComparisonSlide content={slide.content} data={slide.data} animated={animated} />;
    default:
      return <div className="text-[var(--muted)]">{slide.content}</div>;
  }
}

function FormulaSlide({ content, data, animated }: { content: string; data?: Record<string, unknown>; animated: boolean }) {
  const parts = data?.parts as string[] | undefined;
  const result = data?.result as string | undefined;

  return (
    <div className={`text-center space-y-6 transition-all duration-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <p className="text-[var(--muted)] text-lg">{content}</p>

      <div className="inline-flex items-center gap-4 bg-black/30 rounded-xl px-8 py-6 border border-[var(--teal)]/30">
        {parts?.map((part, index) => (
          <span key={index} className="flex items-center gap-4">
            <span className="text-2xl md:text-3xl font-bold text-[var(--text)]">{part}</span>
            {index < parts.length - 1 && (
              <span className="text-[var(--teal)] text-2xl">{index === parts.length - 2 ? "=" : "−"}</span>
            )}
          </span>
        ))}
      </div>

      {result && (
        <div className="text-[var(--teal)] text-xl font-semibold animate-pulse">
          {result}
        </div>
      )}
    </div>
  );
}

function DiagramSlide({ content, data, animated }: { content: string; data?: Record<string, unknown>; animated: boolean }) {
  const boxes = data?.boxes as Array<{ label: string; value?: string; color?: string }> | undefined;
  const arrows = data?.arrows as boolean | undefined;
  const layout = (data?.layout as string) || "horizontal";

  return (
    <div className={`w-full max-w-2xl transition-all duration-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <p className="text-[var(--muted)] text-center mb-8">{content}</p>

      <div className={`flex ${layout === "vertical" ? "flex-col" : "flex-row flex-wrap justify-center"} items-center gap-4`}>
        {boxes?.map((box, index) => (
          <div key={index} className="flex items-center gap-4">
            <div
              className={`px-6 py-4 rounded-xl border text-center min-w-[140px] transition-all duration-300`}
              style={{
                animationDelay: `${index * 150}ms`,
                backgroundColor: box.color === "teal" ? "rgba(0,245,212,0.1)" : "rgba(255,255,255,0.05)",
                borderColor: box.color === "teal" ? "rgba(0,245,212,0.3)" : "rgba(255,255,255,0.1)"
              }}
            >
              <div className={`font-semibold ${box.color === "teal" ? "text-[var(--teal)]" : "text-[var(--text)]"}`}>
                {box.label}
              </div>
              {box.value && (
                <div className="text-sm text-[var(--muted)] mt-1">{box.value}</div>
              )}
            </div>
            {arrows && index < (boxes?.length || 0) - 1 && (
              <span className={`text-[var(--teal)] text-xl ${layout === "vertical" ? "rotate-90" : ""}`}>→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChartSlide({ content, data, animated }: { content: string; data?: Record<string, unknown>; animated: boolean }) {
  const bars = data?.bars as Array<{ label: string; value: number; color?: string }> | undefined;
  const maxValue = bars ? Math.max(...bars.map(b => b.value)) : 100;
  const target = data?.target as number | undefined;

  return (
    <div className={`w-full max-w-xl transition-all duration-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <p className="text-[var(--muted)] text-center mb-8">{content}</p>

      <div className="space-y-4">
        {bars?.map((bar, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-32 text-right text-sm text-[var(--muted)]">{bar.label}</div>
            <div className="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden relative">
              <div
                className={`h-full rounded-lg transition-all duration-700 ease-out ${
                  bar.color === "red" ? "bg-red-500/80" :
                  bar.color === "yellow" ? "bg-yellow-500/80" :
                  "bg-[var(--teal)]"
                }`}
                style={{
                  width: animated ? `${(bar.value / maxValue) * 100}%` : "0%",
                  transitionDelay: `${index * 100}ms`
                }}
              />
              {target && (
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white/50"
                  style={{ left: `${(target / maxValue) * 100}%` }}
                />
              )}
            </div>
            <div className="w-16 text-sm font-medium text-[var(--text)]">{bar.value}%</div>
          </div>
        ))}
      </div>

      {target && (
        <div className="mt-4 text-center text-sm text-[var(--muted)]">
          Target: {target}% <span className="inline-block w-4 h-0.5 bg-white/50 ml-2 align-middle" />
        </div>
      )}
    </div>
  );
}

function ListSlide({ content, data, animated }: { content: string; data?: Record<string, unknown>; animated: boolean }) {
  const items = data?.items as Array<{ text: string; icon?: string }> | undefined;

  return (
    <div className={`w-full max-w-xl transition-all duration-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <p className="text-[var(--muted)] text-center mb-8 text-lg">{content}</p>

      <div className="space-y-3">
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 transition-all duration-300"
            style={{
              animationDelay: `${index * 100}ms`,
              opacity: animated ? 1 : 0,
              transform: animated ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: `${index * 100}ms`
            }}
          >
            <span className="text-[var(--teal)] text-xl mt-0.5">{item.icon || "•"}</span>
            <span className="text-[var(--text)]">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HighlightSlide({ content, data, animated }: { content: string; data?: Record<string, unknown>; animated: boolean }) {
  const stat = data?.stat as string | undefined;
  const label = data?.label as string | undefined;
  const subtext = data?.subtext as string | undefined;

  return (
    <div className={`text-center transition-all duration-500 ${animated ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <p className="text-[var(--muted)] mb-8 text-lg max-w-md mx-auto">{content}</p>

      <div className="relative inline-block">
        <div className="absolute inset-0 bg-[var(--teal)]/20 blur-3xl rounded-full" />
        <div className="relative">
          <div className="text-6xl md:text-8xl font-bold text-[var(--teal)] mb-2 animate-pulse">
            {stat}
          </div>
          {label && (
            <div className="text-xl text-[var(--text)] font-semibold">{label}</div>
          )}
          {subtext && (
            <div className="text-sm text-[var(--muted)] mt-2 max-w-xs mx-auto">{subtext}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComparisonSlide({ content, data, animated }: { content: string; data?: Record<string, unknown>; animated: boolean }) {
  const left = data?.left as { title: string; items: string[] } | undefined;
  const right = data?.right as { title: string; items: string[] } | undefined;

  return (
    <div className={`w-full max-w-2xl transition-all duration-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <p className="text-[var(--muted)] text-center mb-8">{content}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-lg font-semibold text-[var(--text)] mb-4 text-center">{left?.title}</h4>
          <ul className="space-y-2">
            {left?.items.map((item, index) => (
              <li key={index} className="text-[var(--muted)] text-sm flex items-start gap-2">
                <span className="text-white/30">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div className="bg-[var(--teal)]/10 rounded-xl p-6 border border-[var(--teal)]/30">
          <h4 className="text-lg font-semibold text-[var(--teal)] mb-4 text-center">{right?.title}</h4>
          <ul className="space-y-2">
            {right?.items.map((item, index) => (
              <li key={index} className="text-[var(--text)] text-sm flex items-start gap-2">
                <span className="text-[var(--teal)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Helper to generate slides from lesson content
export function generateLessonSlides(lessonId: string, keyPoints: string[]): Slide[] {
  // This maps lesson IDs to their specific slides
  const slideData: Record<string, Slide[]> = {
    "m1-l1": [
      {
        id: "m1-l1-1",
        title: "The P&L Structure",
        content: "The Profit & Loss statement has three core sections",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Revenue", value: "Money earned", color: "teal" },
            { label: "COGS", value: "Direct job costs" },
            { label: "Gross Profit", value: "The key number", color: "teal" },
            { label: "Expenses", value: "Overhead costs" },
            { label: "Net Income", value: "Your profit" },
          ],
          arrows: true,
          layout: "vertical"
        }
      },
      {
        id: "m1-l1-2",
        title: "The Gross Profit Formula",
        content: "This is the most important calculation on your P&L",
        visual: "formula",
        data: {
          parts: ["Revenue", "COGS", "Gross Profit"],
          result: "Aim for 30-40% gross profit margin"
        }
      },
      {
        id: "m1-l1-3",
        title: "What Goes Into COGS?",
        content: "Cost of Goods Sold for contractors includes:",
        visual: "list",
        data: {
          items: [
            { text: "Labor costs for crews on the job", icon: "👷" },
            { text: "Materials purchased for the project", icon: "🧱" },
            { text: "Subcontractor payments", icon: "🤝" },
            { text: "Equipment rental for specific jobs", icon: "🚜" },
            { text: "Permits and job-specific fees", icon: "📋" },
          ]
        }
      },
      {
        id: "m1-l1-4",
        title: "Healthy Gross Profit Margins",
        content: "Where does your business fall?",
        visual: "chart",
        data: {
          bars: [
            { label: "Struggling", value: 20, color: "red" },
            { label: "Below target", value: 25, color: "yellow" },
            { label: "Healthy", value: 35, color: "teal" },
            { label: "Excellent", value: 45, color: "teal" },
          ],
          target: 30
        }
      },
      {
        id: "m1-l1-5",
        title: "Key Takeaway",
        content: "Focus on Gross Profit, not just Net Income",
        visual: "highlight",
        data: {
          stat: "30-40%",
          label: "Target Gross Margin",
          subtext: "If below 25%, you have a pricing problem no cost-cutting can fix"
        }
      }
    ],
    "m1-l2": [
      {
        id: "m1-l2-1",
        title: "The Balance Sheet Equation",
        content: "The fundamental formula that always balances",
        visual: "formula",
        data: {
          parts: ["Assets", "Liabilities", "Equity"],
          result: "Assets = Liabilities + Equity"
        }
      },
      {
        id: "m1-l2-2",
        title: "Contractor Assets",
        content: "What your business owns or is owed",
        visual: "list",
        data: {
          items: [
            { text: "Cash in bank accounts", icon: "💰" },
            { text: "Accounts Receivable (money owed to you)", icon: "📄" },
            { text: "Inventory (materials on hand)", icon: "📦" },
            { text: "Equipment and vehicles", icon: "🚛" },
            { text: "Work in Progress", icon: "🏗️" },
          ]
        }
      },
      {
        id: "m1-l2-3",
        title: "Contractor Liabilities",
        content: "What your business owes others",
        visual: "list",
        data: {
          items: [
            { text: "Accounts Payable (bills to pay)", icon: "📨" },
            { text: "Credit card balances", icon: "💳" },
            { text: "Vehicle and equipment loans", icon: "🏦" },
            { text: "Lines of credit drawn", icon: "📊" },
          ]
        }
      },
      {
        id: "m1-l2-4",
        title: "Working Capital",
        content: "The lifeblood of your contracting business",
        visual: "formula",
        data: {
          parts: ["Current Assets", "Current Liabilities", "Working Capital"],
          result: "Target: 10-15% of annual revenue"
        }
      },
      {
        id: "m1-l2-5",
        title: "Working Capital Target",
        content: "How much working capital do you need?",
        visual: "highlight",
        data: {
          stat: "10-15%",
          label: "of Annual Revenue",
          subtext: "$1M revenue = $100K-$150K working capital needed"
        }
      }
    ],
    "m1-l3": [
      {
        id: "m1-l3-1",
        title: "The Brutal Truth",
        content: "Why profitable contractors go broke",
        visual: "highlight",
        data: {
          stat: "82%",
          label: "of contractor failures",
          subtext: "are cash flow problems, NOT profitability problems"
        }
      },
      {
        id: "m1-l3-2",
        title: "Three Sections of Cash Flow",
        content: "Where cash comes from and goes",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Operating", value: "Day-to-day business", color: "teal" },
            { label: "Investing", value: "Equipment purchases" },
            { label: "Financing", value: "Loans & owner draws" },
          ],
          arrows: false
        }
      },
      {
        id: "m1-l3-3",
        title: "The Contractor Cash Gap",
        content: "The timeline that kills contractors",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Week 1", value: "Buy materials" },
            { label: "Week 1-4", value: "Pay crew" },
            { label: "Week 4", value: "Finish job" },
            { label: "Week 5", value: "Send invoice" },
            { label: "Week 12", value: "Get paid", color: "teal" },
          ],
          arrows: true,
          layout: "horizontal"
        }
      },
      {
        id: "m1-l3-4",
        title: "The Growth Paradox",
        content: "Success can kill your cash flow",
        visual: "comparison",
        data: {
          left: {
            title: "More Success Means",
            items: ["Bigger jobs", "More materials upfront", "Larger payroll", "Longer wait for payment"]
          },
          right: {
            title: "Which Requires",
            items: ["More working capital", "Stronger cash reserves", "Better collections", "Faster billing cycles"]
          }
        }
      }
    ],
    "m1-l4": [
      {
        id: "m1-l4-1",
        title: "The Three Reports",
        content: "Each tells a different part of your story",
        visual: "diagram",
        data: {
          boxes: [
            { label: "P&L", value: "Performance", color: "teal" },
            { label: "Balance Sheet", value: "Position" },
            { label: "Cash Flow", value: "Cash changes", color: "teal" },
          ],
          arrows: false
        }
      },
      {
        id: "m1-l4-2",
        title: "How They Connect",
        content: "Net Income flows through all three statements",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Net Income", value: "From P&L" },
            { label: "Retained Earnings", value: "On Balance Sheet" },
            { label: "Operating Cash", value: "Reconciled on Cash Flow", color: "teal" },
          ],
          arrows: true,
          layout: "vertical"
        }
      },
      {
        id: "m1-l4-3",
        title: "Real Example",
        content: "When profit doesn't equal cash",
        visual: "list",
        data: {
          items: [
            { text: "$50,000 profit on P&L", icon: "✓" },
            { text: "$40,000 stuck in receivables", icon: "⏳" },
            { text: "$20,000 paid down to suppliers", icon: "💸" },
            { text: "$30,000 spent on new van", icon: "🚐" },
            { text: "Bank account: -$40,000", icon: "😰" },
          ]
        }
      },
      {
        id: "m1-l4-4",
        title: "The Monthly Question",
        content: "Ask yourself this every month",
        visual: "highlight",
        data: {
          stat: "?",
          label: "Is my profit turning into cash?",
          subtext: "If not, WHERE is it stuck? The answer is always in these three reports."
        }
      }
    ],
    // Module 2: Job Costing Fundamentals
    "m2-l1": [
      {
        id: "m2-l1-1",
        title: "Why Job Costing Matters",
        content: "The difference between guessing and knowing",
        visual: "comparison",
        data: {
          left: {
            title: "Without Job Costing",
            items: ["Guess if jobs are profitable", "Find out problems at year-end", "Can't identify winners/losers", "Repeat unprofitable patterns"]
          },
          right: {
            title: "With Job Costing",
            items: ["Know profit per job", "Catch problems in real-time", "Double down on winners", "Fix or fire losing job types"]
          }
        }
      },
      {
        id: "m2-l1-2",
        title: "The Three Cost Categories",
        content: "Every job cost falls into one of these buckets",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Direct Labor", value: "Crew hours × rate", color: "teal" },
            { label: "Direct Materials", value: "Job-specific purchases" },
            { label: "Direct Expenses", value: "Subs, rentals, permits", color: "teal" },
          ],
          arrows: false
        }
      },
      {
        id: "m2-l1-3",
        title: "Direct vs Indirect Costs",
        content: "Can you trace it to a specific job?",
        visual: "comparison",
        data: {
          left: {
            title: "Direct Costs",
            items: ["Materials for that job", "Crew hours on site", "Subcontractor invoice", "Permit for that project"]
          },
          right: {
            title: "Indirect (Overhead)",
            items: ["Office rent", "Your truck", "Insurance", "Accounting fees"]
          }
        }
      },
      {
        id: "m2-l1-4",
        title: "The Hidden Profit Killer",
        content: "Jobs that look profitable but aren't",
        visual: "highlight",
        data: {
          stat: "25%",
          label: "of jobs lose money",
          subtext: "But most contractors don't know which ones without job costing"
        }
      }
    ],
    "m2-l2": [
      {
        id: "m2-l2-1",
        title: "Labor Cost Formula",
        content: "The real cost of an hour of work",
        visual: "formula",
        data: {
          parts: ["Wage", "Burden", "True Cost"],
          result: "$20/hr wage ≈ $28-32/hr true cost"
        }
      },
      {
        id: "m2-l2-2",
        title: "Labor Burden Components",
        content: "What you pay beyond the wage",
        visual: "list",
        data: {
          items: [
            { text: "FICA/Medicare (7.65%)", icon: "🏛️" },
            { text: "Workers Comp (varies by trade)", icon: "🏥" },
            { text: "Unemployment insurance", icon: "📋" },
            { text: "Health insurance (if provided)", icon: "💊" },
            { text: "Paid time off", icon: "🏖️" },
          ]
        }
      },
      {
        id: "m2-l2-3",
        title: "Burden Rate by Trade",
        content: "Higher risk = higher burden",
        visual: "chart",
        data: {
          bars: [
            { label: "Office work", value: 25, color: "teal" },
            { label: "Electrical", value: 35 },
            { label: "Plumbing", value: 38 },
            { label: "Roofing", value: 50, color: "yellow" },
          ]
        }
      },
      {
        id: "m2-l2-4",
        title: "Labor Tracking Methods",
        content: "How to capture hours accurately",
        visual: "list",
        data: {
          items: [
            { text: "Daily time sheets per job", icon: "📝" },
            { text: "Mobile time tracking apps", icon: "📱" },
            { text: "GPS-enabled clock-in/out", icon: "📍" },
            { text: "Foreman daily reports", icon: "👷" },
          ]
        }
      }
    ],
    "m2-l3": [
      {
        id: "m2-l3-1",
        title: "Why Overhead Allocation?",
        content: "Your truck doesn't drive itself to one job",
        visual: "highlight",
        data: {
          stat: "15-25%",
          label: "typical overhead rate",
          subtext: "Must be added to direct costs to see true job profit"
        }
      },
      {
        id: "m2-l3-2",
        title: "Overhead Allocation Methods",
        content: "Different approaches for different businesses",
        visual: "diagram",
        data: {
          boxes: [
            { label: "% of Labor", value: "Simple, labor-heavy" },
            { label: "% of Revenue", value: "Balanced approach", color: "teal" },
            { label: "Per Labor Hour", value: "Most accurate" },
          ],
          arrows: false
        }
      },
      {
        id: "m2-l3-3",
        title: "Calculate Your Rate",
        content: "Annual overhead ÷ allocation base",
        visual: "formula",
        data: {
          parts: ["Annual Overhead", "Direct Labor $", "Overhead Rate"],
          result: "Example: $150K ÷ $600K = 25% rate"
        }
      },
      {
        id: "m2-l3-4",
        title: "Apply to Each Job",
        content: "Adding overhead to see true profit",
        visual: "list",
        data: {
          items: [
            { text: "Direct Labor: $10,000", icon: "👷" },
            { text: "× 25% overhead = $2,500", icon: "➕" },
            { text: "Direct Materials: $8,000", icon: "🧱" },
            { text: "Allocated overhead: $2,500", icon: "🏢" },
            { text: "True job cost: $20,500", icon: "💰" },
          ]
        }
      }
    ],
    "m2-l4": [
      {
        id: "m2-l4-1",
        title: "Job Profitability Report",
        content: "The report every contractor needs",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Contract Price", value: "$50,000" },
            { label: "Direct Costs", value: "-$32,000" },
            { label: "Overhead", value: "-$8,000" },
            { label: "Job Profit", value: "$10,000", color: "teal" },
          ],
          arrows: true,
          layout: "vertical"
        }
      },
      {
        id: "m2-l4-2",
        title: "Analyze by Job Type",
        content: "Find your winners and losers",
        visual: "chart",
        data: {
          bars: [
            { label: "Kitchens", value: 28, color: "teal" },
            { label: "Bathrooms", value: 22, color: "teal" },
            { label: "Decks", value: 15, color: "yellow" },
            { label: "Additions", value: 8, color: "red" },
          ],
          target: 20
        }
      },
      {
        id: "m2-l4-3",
        title: "Warning Signs",
        content: "Red flags in job profitability",
        visual: "list",
        data: {
          items: [
            { text: "Labor hours way over estimate", icon: "⚠️" },
            { text: "Material costs 15%+ over budget", icon: "📈" },
            { text: "Multiple change orders (unpaid)", icon: "📝" },
            { text: "Warranty callbacks eating profit", icon: "🔧" },
          ]
        }
      },
      {
        id: "m2-l4-4",
        title: "Action Items",
        content: "What to do with this data",
        visual: "comparison",
        data: {
          left: {
            title: "High Margin Jobs",
            items: ["Market more aggressively", "Raise prices 5-10%", "Train team on best practices", "Pursue similar opportunities"]
          },
          right: {
            title: "Low Margin Jobs",
            items: ["Analyze why costs are high", "Improve estimating process", "Consider dropping job type", "Raise prices significantly"]
          }
        }
      }
    ],
    // Module 3: Cash Flow Management
    "m3-l1": [
      {
        id: "m3-l1-1",
        title: "The Contractor Cash Cycle",
        content: "Money flows in a predictable pattern",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Land Job", value: "Deposit?" },
            { label: "Buy Materials", value: "Cash out" },
            { label: "Do Work", value: "Pay crew" },
            { label: "Invoice", value: "Wait..." },
            { label: "Get Paid", value: "Cash in", color: "teal" },
          ],
          arrows: true
        }
      },
      {
        id: "m3-l1-2",
        title: "Billing Best Practices",
        content: "Get paid faster with these tactics",
        visual: "list",
        data: {
          items: [
            { text: "Bill immediately upon completion", icon: "⚡" },
            { text: "Progress billing on larger jobs", icon: "📊" },
            { text: "Require deposits (20-50%)", icon: "💰" },
            { text: "Send invoices same day", icon: "📧" },
            { text: "Offer early payment discounts", icon: "🎁" },
          ]
        }
      },
      {
        id: "m3-l1-3",
        title: "Progress Billing Schedule",
        content: "Never fund the entire job yourself",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Signing", value: "30% deposit", color: "teal" },
            { label: "Rough-in", value: "30% payment" },
            { label: "Substantial", value: "30% payment" },
            { label: "Final", value: "10% balance", color: "teal" },
          ],
          arrows: true
        }
      },
      {
        id: "m3-l1-4",
        title: "DSO Target",
        content: "Days Sales Outstanding - how long until you get paid",
        visual: "highlight",
        data: {
          stat: "30-45",
          label: "days is healthy",
          subtext: "Above 60 days? You have a collection problem."
        }
      }
    ],
    "m3-l2": [
      {
        id: "m3-l2-1",
        title: "Working Capital Equation",
        content: "The money that funds your operations",
        visual: "formula",
        data: {
          parts: ["Current Assets", "Current Liabilities", "Working Capital"],
          result: "This is your financial runway"
        }
      },
      {
        id: "m3-l2-2",
        title: "Working Capital Uses",
        content: "What working capital funds",
        visual: "list",
        data: {
          items: [
            { text: "Materials before getting paid", icon: "🧱" },
            { text: "Payroll while waiting for payment", icon: "👷" },
            { text: "Slow periods between jobs", icon: "📉" },
            { text: "Unexpected expenses", icon: "⚠️" },
            { text: "Growth opportunities", icon: "📈" },
          ]
        }
      },
      {
        id: "m3-l2-3",
        title: "Working Capital Health Check",
        content: "Where does your business fall?",
        visual: "chart",
        data: {
          bars: [
            { label: "Critical", value: 5, color: "red" },
            { label: "Tight", value: 8, color: "yellow" },
            { label: "Healthy", value: 12, color: "teal" },
            { label: "Strong", value: 18, color: "teal" },
          ],
          target: 10
        }
      },
      {
        id: "m3-l2-4",
        title: "Improving Working Capital",
        content: "Strategies to build your cushion",
        visual: "comparison",
        data: {
          left: {
            title: "Increase Current Assets",
            items: ["Collect receivables faster", "Reduce job-to-invoice time", "Negotiate better deposits", "Reduce excess inventory"]
          },
          right: {
            title: "Decrease Current Liabilities",
            items: ["Negotiate extended terms", "Don't prepay unnecessarily", "Use credit strategically", "Consolidate short-term debt"]
          }
        }
      }
    ],
    "m3-l3": [
      {
        id: "m3-l3-1",
        title: "Why Forecast Cash Flow?",
        content: "Know problems before they happen",
        visual: "highlight",
        data: {
          stat: "13",
          label: "weeks ahead",
          subtext: "Minimum cash flow forecast horizon for contractors"
        }
      },
      {
        id: "m3-l3-2",
        title: "Cash Flow Forecast Components",
        content: "What goes into your forecast",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Starting Cash", value: "What you have" },
            { label: "+ Inflows", value: "Collections, deposits", color: "teal" },
            { label: "- Outflows", value: "Payroll, materials, overhead" },
            { label: "= Ending Cash", value: "What you'll have", color: "teal" },
          ],
          arrows: true,
          layout: "vertical"
        }
      },
      {
        id: "m3-l3-3",
        title: "Inflow Assumptions",
        content: "Be conservative with collections",
        visual: "list",
        data: {
          items: [
            { text: "Don't count receivables at 100%", icon: "⚠️" },
            { text: "Factor in payment delays", icon: "📅" },
            { text: "Know your customer payment patterns", icon: "📊" },
            { text: "Include only signed contracts", icon: "✍️" },
          ]
        }
      },
      {
        id: "m3-l3-4",
        title: "Taking Action",
        content: "When the forecast shows trouble",
        visual: "list",
        data: {
          items: [
            { text: "Speed up collections NOW", icon: "⚡" },
            { text: "Delay non-essential purchases", icon: "⏸️" },
            { text: "Negotiate extended payment terms", icon: "🤝" },
            { text: "Secure line of credit before you need it", icon: "🏦" },
          ]
        }
      }
    ],
    // Module 4: Pricing and Profitability
    "m4-l1": [
      {
        id: "m4-l1-1",
        title: "Markup vs Margin",
        content: "The #1 source of contractor pricing errors",
        visual: "comparison",
        data: {
          left: {
            title: "Markup",
            items: ["Based on COST", "50% markup on $100 cost = $150 price", "Easy to calculate", "What YOU add"]
          },
          right: {
            title: "Margin",
            items: ["Based on PRICE", "33% margin on $150 price = $50 profit", "What investors care about", "What YOU keep"]
          }
        }
      },
      {
        id: "m4-l1-2",
        title: "The Costly Mistake",
        content: "Confusing markup and margin loses money",
        visual: "highlight",
        data: {
          stat: "17%",
          label: "profit lost",
          subtext: "When you apply 50% markup thinking it's 50% margin"
        }
      },
      {
        id: "m4-l1-3",
        title: "Conversion Formulas",
        content: "How to convert between markup and margin",
        visual: "formula",
        data: {
          parts: ["Markup %", "÷ (1 + Markup %)", "= Margin %"],
          result: "50% markup = 33% margin"
        }
      },
      {
        id: "m4-l1-4",
        title: "Quick Reference",
        content: "Common markup to margin conversions",
        visual: "chart",
        data: {
          bars: [
            { label: "25% markup", value: 20 },
            { label: "50% markup", value: 33, color: "teal" },
            { label: "75% markup", value: 43 },
            { label: "100% markup", value: 50, color: "teal" },
          ]
        }
      }
    ],
    "m4-l2": [
      {
        id: "m4-l2-1",
        title: "Breakeven Point",
        content: "The revenue needed to cover all costs",
        visual: "formula",
        data: {
          parts: ["Fixed Costs", "÷ Gross Margin %", "= Breakeven Revenue"],
          result: "$120K overhead ÷ 35% margin = $343K breakeven"
        }
      },
      {
        id: "m4-l2-2",
        title: "Know Your Fixed Costs",
        content: "These costs don't change with volume",
        visual: "list",
        data: {
          items: [
            { text: "Rent/mortgage", icon: "🏢" },
            { text: "Insurance premiums", icon: "🛡️" },
            { text: "Vehicle payments", icon: "🚛" },
            { text: "Salaries (not hourly)", icon: "👔" },
            { text: "Software subscriptions", icon: "💻" },
          ]
        }
      },
      {
        id: "m4-l2-3",
        title: "Breakeven Analysis",
        content: "Visual representation of profitability",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Revenue", value: "$343K" },
            { label: "Variable Costs", value: "-$223K" },
            { label: "Gross Profit", value: "$120K" },
            { label: "Fixed Costs", value: "-$120K" },
            { label: "Net Profit", value: "$0", color: "teal" },
          ],
          arrows: true,
          layout: "vertical"
        }
      },
      {
        id: "m4-l2-4",
        title: "Using Breakeven",
        content: "Practical applications",
        visual: "list",
        data: {
          items: [
            { text: "Set minimum annual revenue target", icon: "🎯" },
            { text: "Evaluate new hires (raises breakeven)", icon: "👥" },
            { text: "Price jobs to exceed, not just meet", icon: "💰" },
            { text: "Plan for slow seasons", icon: "📅" },
          ]
        }
      }
    ],
    "m4-l3": [
      {
        id: "m4-l3-1",
        title: "Cost-Plus Pricing",
        content: "The foundation of contractor pricing",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Direct Costs", value: "$10,000" },
            { label: "+ Overhead", value: "$2,500 (25%)" },
            { label: "+ Profit", value: "$2,500 (20%)", color: "teal" },
            { label: "= Price", value: "$15,000" },
          ],
          arrows: true,
          layout: "vertical"
        }
      },
      {
        id: "m4-l3-2",
        title: "Value-Based Adjustments",
        content: "When to charge more than cost-plus",
        visual: "list",
        data: {
          items: [
            { text: "Specialized skills (licensed trades)", icon: "🎓" },
            { text: "Rush/emergency work", icon: "⚡" },
            { text: "Difficult site conditions", icon: "🏔️" },
            { text: "High-end clientele", icon: "💎" },
            { text: "Reputation and reviews", icon: "⭐" },
          ]
        }
      },
      {
        id: "m4-l3-3",
        title: "Competitive Positioning",
        content: "Where do you want to be?",
        visual: "chart",
        data: {
          bars: [
            { label: "Low-cost leader", value: 15, color: "yellow" },
            { label: "Market rate", value: 25 },
            { label: "Premium quality", value: 35, color: "teal" },
            { label: "Luxury/specialty", value: 50, color: "teal" },
          ],
          target: 25
        }
      },
      {
        id: "m4-l3-4",
        title: "Price Testing",
        content: "How to find your optimal price",
        visual: "highlight",
        data: {
          stat: "5-10%",
          label: "price increase",
          subtext: "Test on new customers. If close rate stays stable, keep raising."
        }
      }
    ],
    // Module 5: Financial Planning
    "m5-l1": [
      {
        id: "m5-l1-1",
        title: "Why Budget?",
        content: "A budget is your financial GPS",
        visual: "comparison",
        data: {
          left: {
            title: "Without a Budget",
            items: ["React to problems", "No early warning", "Miss opportunities", "Stress about money"]
          },
          right: {
            title: "With a Budget",
            items: ["Plan proactively", "Spot issues early", "Fund growth", "Sleep better"]
          }
        }
      },
      {
        id: "m5-l1-2",
        title: "Budget Components",
        content: "What to include in your annual budget",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Revenue Target", value: "Based on capacity", color: "teal" },
            { label: "COGS Budget", value: "Target margins" },
            { label: "Overhead Budget", value: "Fixed + variable" },
            { label: "Profit Target", value: "What's left", color: "teal" },
          ],
          arrows: true,
          layout: "vertical"
        }
      },
      {
        id: "m5-l1-3",
        title: "Setting Revenue Targets",
        content: "Work backwards from your goals",
        visual: "formula",
        data: {
          parts: ["Desired Profit", "+ Overhead", "÷ Gross Margin %"],
          result: "= Required Revenue"
        }
      },
      {
        id: "m5-l1-4",
        title: "Monthly Budget Review",
        content: "Compare actual vs budget each month",
        visual: "list",
        data: {
          items: [
            { text: "Revenue: on track, ahead, or behind?", icon: "📊" },
            { text: "Gross margin: holding or slipping?", icon: "💰" },
            { text: "Overhead: staying in control?", icon: "🏢" },
            { text: "Cash: where forecast said it would be?", icon: "🏦" },
          ]
        }
      }
    ],
    "m5-l2": [
      {
        id: "m5-l2-1",
        title: "Why Scenario Analysis?",
        content: "Plan for multiple futures",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Best Case", value: "If everything goes right", color: "teal" },
            { label: "Base Case", value: "Most likely outcome" },
            { label: "Worst Case", value: "If things go wrong" },
          ],
          arrows: false
        }
      },
      {
        id: "m5-l2-2",
        title: "Key Variables",
        content: "What to stress-test in your scenarios",
        visual: "list",
        data: {
          items: [
            { text: "Revenue: What if sales drop 20%?", icon: "📉" },
            { text: "Margins: What if material costs jump 15%?", icon: "📈" },
            { text: "Collections: What if DSO doubles?", icon: "⏰" },
            { text: "Capacity: What if key employee leaves?", icon: "👤" },
          ]
        }
      },
      {
        id: "m5-l2-3",
        title: "Trigger Points",
        content: "When to activate contingency plans",
        visual: "chart",
        data: {
          bars: [
            { label: "Cash < 2 months", value: 100, color: "red" },
            { label: "Margin < 25%", value: 100, color: "red" },
            { label: "DSO > 60 days", value: 100, color: "yellow" },
            { label: "Revenue -15%", value: 100, color: "yellow" },
          ]
        }
      },
      {
        id: "m5-l2-4",
        title: "Contingency Actions",
        content: "Pre-planned responses to triggers",
        visual: "list",
        data: {
          items: [
            { text: "Cash crisis: Draw credit line immediately", icon: "🚨" },
            { text: "Margin slip: Review pricing, cut waste", icon: "✂️" },
            { text: "Revenue drop: Increase marketing, cut overhead", icon: "📢" },
            { text: "Key person loss: Activate backup plan", icon: "👥" },
          ]
        }
      }
    ],
    "m5-l3": [
      {
        id: "m5-l3-1",
        title: "Growth Funding Options",
        content: "How to fund your next phase",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Retained Earnings", value: "Slow but safe", color: "teal" },
            { label: "Line of Credit", value: "Flexible, fast" },
            { label: "Term Loan", value: "Big purchases" },
            { label: "Equipment Financing", value: "Asset-backed" },
          ],
          arrows: false
        }
      },
      {
        id: "m5-l3-2",
        title: "Growth Readiness Checklist",
        content: "Are you ready to scale?",
        visual: "list",
        data: {
          items: [
            { text: "Consistent 30%+ gross margins", icon: "✓" },
            { text: "10%+ working capital ratio", icon: "✓" },
            { text: "Profitable last 12 months", icon: "✓" },
            { text: "Systems can handle more volume", icon: "✓" },
            { text: "Team capacity (or plan to hire)", icon: "✓" },
          ]
        }
      },
      {
        id: "m5-l3-3",
        title: "Growth Risks",
        content: "What can go wrong when scaling",
        visual: "comparison",
        data: {
          left: {
            title: "Growth Risks",
            items: ["Cash crunch from rapid growth", "Quality drops with volume", "Key people burn out", "Systems break down"]
          },
          right: {
            title: "Mitigation Strategies",
            items: ["Secure financing BEFORE growing", "Hire/train ahead of demand", "Document processes", "Invest in systems"]
          }
        }
      },
      {
        id: "m5-l3-4",
        title: "Sustainable Growth Rate",
        content: "How fast can you grow safely?",
        visual: "highlight",
        data: {
          stat: "15-25%",
          label: "annual growth",
          subtext: "Faster growth usually requires external financing or accepting risk"
        }
      }
    ],
    "m5-l4": [
      {
        id: "m5-l4-1",
        title: "KPIs Every Contractor Needs",
        content: "The numbers that matter most",
        visual: "list",
        data: {
          items: [
            { text: "Gross Profit Margin (target: 30-40%)", icon: "📊" },
            { text: "Net Profit Margin (target: 8-12%)", icon: "💰" },
            { text: "Working Capital Ratio (target: 10-15%)", icon: "🏦" },
            { text: "Days Sales Outstanding (target: 30-45)", icon: "📅" },
            { text: "Cash Runway (target: 3+ months)", icon: "✈️" },
          ]
        }
      },
      {
        id: "m5-l4-2",
        title: "Weekly Pulse Check",
        content: "Quick metrics to monitor weekly",
        visual: "diagram",
        data: {
          boxes: [
            { label: "Cash Balance", value: "Up or down?", color: "teal" },
            { label: "AR Aging", value: "Getting older?" },
            { label: "Jobs in Progress", value: "On track?" },
            { label: "Pipeline", value: "Full enough?", color: "teal" },
          ],
          arrows: false
        }
      },
      {
        id: "m5-l4-3",
        title: "Monthly Deep Dive",
        content: "Metrics requiring monthly analysis",
        visual: "list",
        data: {
          items: [
            { text: "P&L vs budget comparison", icon: "📈" },
            { text: "Cash flow forecast update", icon: "💵" },
            { text: "Job profitability by type", icon: "🏗️" },
            { text: "Customer payment trends", icon: "👥" },
          ]
        }
      },
      {
        id: "m5-l4-4",
        title: "Course Complete!",
        content: "You now have the foundation for contractor financial success",
        visual: "highlight",
        data: {
          stat: "✓",
          label: "Congratulations!",
          subtext: "Complete the final knowledge check to earn your certificate"
        }
      }
    ]
  };

  // Return the specific slides for this lesson, or generate generic slides from key points
  if (slideData[lessonId]) {
    return slideData[lessonId];
  }

  // Fallback: generate slides from key points
  return keyPoints.map((point, index) => ({
    id: `${lessonId}-${index}`,
    title: `Key Point ${index + 1}`,
    content: point,
    visual: "highlight" as const,
    data: {
      stat: `${index + 1}`,
      label: point.split(" ").slice(0, 4).join(" ") + "...",
      subtext: point
    }
  }));
}
