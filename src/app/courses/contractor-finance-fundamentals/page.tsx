"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { contractorFinanceFundamentals, getTotalLessons } from "@/lib/course-data";
import { AudioPlayer } from "@/components/AudioPlayer";
import { KnowledgeCheck } from "@/components/KnowledgeCheck";
import { Certificate } from "@/components/Certificate";
import { LessonSlides, generateLessonSlides } from "@/components/LessonSlides";
import {
  getCourseProgress,
  initCourseProgress,
  markLessonCompleted,
  recordQuizAttempt,
  isLessonCompleted,
  isModulePassed,
  areAllModulesPassed,
  completeCourse,
  getCourseProgressPercentage,
  type CourseProgress,
} from "@/lib/progress";

type ViewMode = "overview" | "lesson" | "quiz" | "certificate";

export default function ContractorFinanceFundamentalsPage() {
  const course = contractorFinanceFundamentals;
  const [viewMode, setViewMode] = useState<ViewMode>("overview");
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);

  const currentModule = course.modules[currentModuleIndex];
  const currentLesson = currentModule?.lessons[currentLessonIndex];
  const totalLessons = getTotalLessons(course);
  const slides = currentLesson ? generateLessonSlides(currentLesson.id, currentLesson.keyPoints) : [];

  useEffect(() => {
    const savedProgress = getCourseProgress(course.id) || initCourseProgress(course.id);
    setProgress(savedProgress);
    setProgressPercentage(
      getCourseProgressPercentage(course.id, totalLessons, course.modules.length)
    );
  }, [course.id, totalLessons, course.modules.length]);

  const handleLessonComplete = () => {
    const newProgress = markLessonCompleted(course.id, currentLesson.id);
    setProgress(newProgress);
    setProgressPercentage(
      getCourseProgressPercentage(course.id, totalLessons, course.modules.length)
    );
  };

  const handleQuizComplete = (score: number, passed: boolean, answers: Record<string, number>) => {
    const newProgress = recordQuizAttempt(course.id, currentModule.id, score, passed, answers);
    setProgress(newProgress);
    setProgressPercentage(
      getCourseProgressPercentage(course.id, totalLessons, course.modules.length)
    );

    // Check if course is complete
    if (passed && areAllModulesPassed(course.id, course.modules.map(m => m.id))) {
      completeCourse(course.id);
      setProgress(getCourseProgress(course.id));
    }
  };

  const startLesson = (moduleIndex: number, lessonIndex: number) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
    setCurrentSlideIndex(0);
    setShowTranscript(false);
    setViewMode("lesson");
  };

  const startQuiz = (moduleIndex: number) => {
    setCurrentModuleIndex(moduleIndex);
    setViewMode("quiz");
  };

  const goToNextLesson = () => {
    setCurrentSlideIndex(0);
    setShowTranscript(false);
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else {
      // End of module lessons, go to quiz
      setViewMode("quiz");
    }
  };

  const goToPreviousLesson = () => {
    setCurrentSlideIndex(0);
    setShowTranscript(false);
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
      const prevModule = course.modules[currentModuleIndex - 1];
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(prevModule.lessons.length - 1);
    }
  };

  const goToNextModule = () => {
    if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
      setViewMode("lesson");
    } else {
      // Course complete
      setViewMode("certificate");
    }
  };

  // Certificate view
  if (viewMode === "certificate" || progress?.certificateId) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="text-[var(--teal)] hover:underline text-sm mb-6 inline-block"
          >
            ← Back to Courses
          </Link>

          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--teal)]/10 border border-[var(--teal)]/30 text-[var(--teal)] text-sm font-medium mb-4">
              Course Completed!
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Congratulations!
            </h1>
            <p className="text-[var(--muted)] text-lg">
              You&apos;ve successfully completed {course.title}
            </p>
          </div>

          {progress?.certificateId && progress.completedAt && (
            <Certificate
              courseName={course.title}
              certificateId={progress.certificateId}
              completedAt={progress.completedAt}
            />
          )}
        </div>
      </div>
    );
  }

  // Quiz view
  if (viewMode === "quiz") {
    const modulePassed = isModulePassed(course.id, currentModule.id);

    return (
      <div className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setViewMode("overview")}
            className="text-[var(--teal)] hover:underline text-sm mb-6 inline-block"
          >
            ← Back to Course
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center text-sm font-bold">
                {currentModule.number}
              </span>
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider">
                Knowledge Check
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[var(--text)]">
              {currentModule.title}
            </h1>
          </div>

          {modulePassed ? (
            <div className="bg-[var(--panel)] rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--teal)]/20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[var(--teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--teal)] mb-4">
                Module Already Passed!
              </h3>
              <p className="text-[var(--muted)] mb-6">
                You&apos;ve already passed this module&apos;s knowledge check.
              </p>
              <button
                onClick={goToNextModule}
                className="px-6 py-3 bg-[var(--teal)] text-black font-semibold rounded-xl hover:bg-[var(--teal)]/80 transition-all"
              >
                {currentModuleIndex < course.modules.length - 1 ? "Continue to Next Module" : "Get Certificate"}
              </button>
            </div>
          ) : (
            <KnowledgeCheck
              questions={currentModule.knowledgeCheck}
              moduleId={currentModule.id}
              passingScore={course.passingScore}
              onComplete={(score, passed, answers) => {
                handleQuizComplete(score, passed, answers);
                if (passed) {
                  // Show success then allow navigation
                }
              }}
            />
          )}

          {modulePassed || (
            <div className="mt-6 text-center">
              <button
                onClick={goToNextModule}
                className="text-[var(--muted)] hover:text-[var(--text)] text-sm"
              >
                Skip quiz for now →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Lesson view
  if (viewMode === "lesson" && currentLesson) {
    const lessonCompleted = isLessonCompleted(course.id, currentLesson.id);

    return (
      <div className="min-h-screen bg-[var(--bg)]">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-10 bg-[var(--bg)]/95 backdrop-blur border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setViewMode("overview")}
                className="text-[var(--teal)] hover:underline text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Course
              </button>

              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center text-xs font-bold">
                  {currentModule.number}
                </span>
                <span className="text-sm text-[var(--muted)] hidden sm:block">
                  Module {currentModule.number} • Lesson {currentLessonIndex + 1}/{currentModule.lessons.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {lessonCompleted && (
                  <span className="px-2 py-1 bg-[var(--teal)]/10 text-[var(--teal)] text-xs font-medium rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Lesson Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">
              {currentLesson.title}
            </h1>
            <p className="text-[var(--muted)]">{currentLesson.duration}</p>
          </div>

          {/* Main Content - Slides */}
          <div className="mb-8">
            <LessonSlides
              slides={slides}
              currentSlideIndex={currentSlideIndex}
              onSlideChange={setCurrentSlideIndex}
            />
          </div>

          {/* Audio Player - Floating bottom card */}
          <div className="bg-[var(--panel)] rounded-2xl p-4 border border-white/10 mb-6">
            <AudioPlayer
              lessonId={currentLesson.id}
              transcript={currentLesson.transcript}
              onComplete={handleLessonComplete}
            />
          </div>

          {/* Key Points Summary */}
          <div className="bg-[var(--teal)]/5 rounded-2xl p-6 border border-[var(--teal)]/20 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[var(--text)]">Key Takeaways</h3>
              <span className="text-xs text-[var(--muted)]">{currentLesson.keyPoints.length} points</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {currentLesson.keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-xl"
                >
                  <span className="w-6 h-6 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm text-[var(--muted)]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transcript Toggle */}
          <div className="mb-8">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="w-full flex items-center justify-between p-4 bg-[var(--panel)]/50 rounded-xl border border-white/5 hover:border-white/10 transition-all"
            >
              <span className="text-[var(--text)] font-medium">Full Transcript</span>
              <svg
                className={`w-5 h-5 text-[var(--muted)] transition-transform ${showTranscript ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showTranscript && (
              <div className="mt-4 p-6 bg-[var(--panel)]/30 rounded-xl border border-white/5">
                <div className="prose prose-invert max-w-none">
                  {currentLesson.transcript.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-[var(--muted)] mb-4 leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={goToPreviousLesson}
              disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
              className="px-6 py-3 bg-[var(--panel)] text-[var(--text)] font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            {!lessonCompleted && (
              <button
                onClick={handleLessonComplete}
                className="px-6 py-3 bg-[var(--panel)] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)]/50 hover:border-[var(--teal)] transition-all"
              >
                Mark Complete
              </button>
            )}

            <button
              onClick={goToNextLesson}
              className="px-6 py-3 bg-[var(--teal)] text-black font-semibold rounded-xl hover:bg-[var(--teal)]/80 transition-all"
            >
              {currentLessonIndex < currentModule.lessons.length - 1
                ? "Next Lesson →"
                : "Take Quiz →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Overview view (default)
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="text-[var(--teal)] hover:underline text-sm mb-6 inline-block"
        >
          ← Back to Courses
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-[var(--teal)] font-medium uppercase tracking-wider">
              {course.level}
            </span>
            <span className="text-xs text-[var(--muted)]">•</span>
            <span className="text-xs text-[var(--muted)]">{course.modules.length} modules</span>
            <span className="text-xs text-[var(--muted)]">•</span>
            <span className="text-xs text-[var(--muted)]">{course.duration}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            {course.title}
          </h1>
          <p className="text-xl text-[var(--muted)]">{course.description}</p>
        </div>

        {/* Progress Bar */}
        {progress && (
          <div className="bg-[var(--panel)] rounded-xl p-4 border border-white/10 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[var(--muted)]">Course Progress</span>
              <span className="text-sm font-medium text-[var(--teal)]">{progressPercentage}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--teal)] transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Modules */}
        <div className="space-y-6">
          {course.modules.map((module, moduleIndex) => {
            const modulePassed = isModulePassed(course.id, module.id);
            const allLessonsCompleted = module.lessons.every(
              lesson => isLessonCompleted(course.id, lesson.id)
            );

            return (
              <div
                key={module.id}
                className="bg-[var(--panel)]/50 rounded-2xl border border-white/5 overflow-hidden"
              >
                {/* Module Header */}
                <div className="p-6 border-b border-white/5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        modulePassed
                          ? "bg-[var(--teal)] text-black"
                          : "bg-[var(--teal)]/20 text-[var(--teal)]"
                      }`}>
                        {modulePassed ? "✓" : module.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--text)]">
                          {module.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] mt-1">
                          {module.lessons.length} lessons • {module.duration} • {module.knowledgeCheck.length} quiz questions
                        </p>
                      </div>
                    </div>
                    {modulePassed && (
                      <span className="px-3 py-1 bg-[var(--teal)]/10 text-[var(--teal)] text-xs font-medium rounded-full">
                        Passed
                      </span>
                    )}
                  </div>
                </div>

                {/* Lessons */}
                <div className="divide-y divide-white/5">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const completed = isLessonCompleted(course.id, lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => startLesson(moduleIndex, lessonIndex)}
                        className="w-full p-4 flex items-center gap-4 hover:bg-white/5 transition-colors text-left"
                      >
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                          completed
                            ? "bg-[var(--teal)]/20 text-[var(--teal)]"
                            : "bg-white/10 text-[var(--muted)]"
                        }`}>
                          {completed ? "✓" : lessonIndex + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-[var(--text)] font-medium">{lesson.title}</p>
                          <p className="text-xs text-[var(--muted)]">{lesson.duration}</p>
                        </div>
                        <span className="text-[var(--teal)]">→</span>
                      </button>
                    );
                  })}

                  {/* Quiz button */}
                  <button
                    onClick={() => startQuiz(moduleIndex)}
                    className={`w-full p-4 flex items-center gap-4 transition-colors text-left ${
                      allLessonsCompleted
                        ? "hover:bg-[var(--gold)]/10"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!allLessonsCompleted && !modulePassed}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      modulePassed
                        ? "bg-[var(--gold)]/20 text-[var(--gold)]"
                        : "bg-white/10 text-[var(--muted)]"
                    }`}>
                      {modulePassed ? "✓" : "?"}
                    </span>
                    <div className="flex-1">
                      <p className={`font-medium ${modulePassed ? "text-[var(--gold)]" : "text-[var(--text)]"}`}>
                        Knowledge Check
                      </p>
                      <p className="text-xs text-[var(--muted)]">
                        {module.knowledgeCheck.length} questions • {course.passingScore}% to pass
                      </p>
                    </div>
                    <span className="text-[var(--gold)]">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Get Certificate CTA */}
        {areAllModulesPassed(course.id, course.modules.map(m => m.id)) && !progress?.certificateId && (
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[var(--teal)]/10 to-[var(--gold)]/10 border border-[var(--teal)]/20 text-center">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
              All Modules Complete!
            </h3>
            <p className="text-[var(--muted)] mb-4">
              You&apos;ve passed all knowledge checks. Get your certificate now!
            </p>
            <button
              onClick={() => {
                completeCourse(course.id);
                setProgress(getCourseProgress(course.id));
                setViewMode("certificate");
              }}
              className="px-6 py-3 bg-[var(--teal)] text-black font-semibold rounded-xl hover:bg-[var(--teal)]/80 transition-all"
            >
              Get Your Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
