"use client";

import { useState } from "react";
import type { KnowledgeCheck as KnowledgeCheckType } from "@/lib/course-data";

interface KnowledgeCheckProps {
  questions: KnowledgeCheckType[];
  moduleId: string;
  passingScore: number;
  onComplete: (score: number, passed: boolean, answers: Record<string, number>) => void;
}

export function KnowledgeCheck({ questions, moduleId, passingScore, onComplete }: KnowledgeCheckProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState<{ score: number; passed: boolean } | null>(null);

  const question = questions[currentQuestion];
  const selectedAnswer = answers[question.id];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleSelectAnswer = (answerIndex: number) => {
    if (showExplanation) return;
    setAnswers({ ...answers, [question.id]: answerIndex });
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate final score
      const correctCount = questions.reduce((count, q) => {
        return count + (answers[q.id] === q.correctAnswer ? 1 : 0);
      }, 0);
      const score = Math.round((correctCount / questions.length) * 100);
      const passed = score >= passingScore;

      setResults({ score, passed });
      setIsSubmitted(true);
      onComplete(score, passed, answers);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowExplanation(false);
    setIsSubmitted(false);
    setResults(null);
  };

  if (isSubmitted && results) {
    return (
      <div className="bg-[var(--panel)] rounded-2xl p-8 border border-white/10 text-center">
        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
          results.passed ? "bg-[var(--teal)]/20" : "bg-red-500/20"
        }`}>
          {results.passed ? (
            <svg className="w-10 h-10 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <h3 className={`text-2xl font-bold mb-2 ${results.passed ? "text-[var(--teal)]" : "text-red-400"}`}>
          {results.passed ? "Module Passed!" : "Not Quite"}
        </h3>

        <p className="text-4xl font-bold text-[var(--text)] mb-2">{results.score}%</p>
        <p className="text-[var(--muted)] mb-6">
          {results.passed
            ? `You scored ${results.score}% (passing is ${passingScore}%). Great job!`
            : `You scored ${results.score}%. You need ${passingScore}% to pass.`}
        </p>

        {!results.passed && (
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:bg-[var(--teal)] hover:text-black transition-all"
          >
            Try Again
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-[var(--panel)] rounded-2xl p-6 md:p-8 border border-white/10">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-[var(--muted)]">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index < currentQuestion
                  ? answers[questions[index].id] === questions[index].correctAnswer
                    ? "bg-[var(--teal)]"
                    : "bg-red-500"
                  : index === currentQuestion
                    ? "bg-[var(--gold)]"
                    : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-semibold text-[var(--text)] mb-6">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const showCorrect = showExplanation && index === question.correctAnswer;
          const showWrong = showExplanation && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-xl text-left transition-all ${
                showCorrect
                  ? "bg-[var(--teal)]/20 border-2 border-[var(--teal)]"
                  : showWrong
                    ? "bg-red-500/20 border-2 border-red-500"
                    : isSelected
                      ? "bg-[var(--teal)]/10 border-2 border-[var(--teal)]"
                      : "bg-white/5 border-2 border-transparent hover:bg-white/10"
              } ${showExplanation ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  showCorrect
                    ? "bg-[var(--teal)] text-black"
                    : showWrong
                      ? "bg-red-500 text-white"
                      : isSelected
                        ? "bg-[var(--teal)] text-black"
                        : "bg-white/10 text-[var(--muted)]"
                }`}>
                  {showCorrect ? "✓" : showWrong ? "✗" : String.fromCharCode(65 + index)}
                </span>
                <span className="text-[var(--text)]">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={`p-4 rounded-xl mb-6 ${isCorrect ? "bg-[var(--teal)]/10" : "bg-red-500/10"}`}>
          <p className={`font-medium mb-1 ${isCorrect ? "text-[var(--teal)]" : "text-red-400"}`}>
            {isCorrect ? "Correct!" : "Not quite right"}
          </p>
          <p className="text-[var(--muted)] text-sm">{question.explanation}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-4">
        {!showExplanation ? (
          <button
            onClick={handleCheckAnswer}
            disabled={selectedAnswer === undefined}
            className="px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:bg-[var(--teal)] hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-[var(--teal)] text-black font-semibold rounded-xl hover:bg-[var(--teal)]/80 transition-all"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
}
