// Course progress tracking using localStorage

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: string;
}

export interface QuizAttempt {
  moduleId: string;
  score: number;
  passed: boolean;
  answers: Record<string, number>;
  attemptedAt: string;
}

export interface CourseProgress {
  courseId: string;
  startedAt: string;
  completedAt?: string;
  lessonsCompleted: LessonProgress[];
  quizAttempts: QuizAttempt[];
  certificateId?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  company?: string;
}

const PROGRESS_KEY = "cfi-course-progress";
const PROFILE_KEY = "cfi-user-profile";

// Get progress for a specific course
export function getCourseProgress(courseId: string): CourseProgress | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(`${PROGRESS_KEY}-${courseId}`);
  return stored ? JSON.parse(stored) : null;
}

// Initialize course progress
export function initCourseProgress(courseId: string): CourseProgress {
  const existing = getCourseProgress(courseId);
  if (existing) return existing;

  const progress: CourseProgress = {
    courseId,
    startedAt: new Date().toISOString(),
    lessonsCompleted: [],
    quizAttempts: [],
  };

  saveCourseProgress(progress);
  return progress;
}

// Save course progress
export function saveCourseProgress(progress: CourseProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(`${PROGRESS_KEY}-${progress.courseId}`, JSON.stringify(progress));
}

// Mark a lesson as completed
export function markLessonCompleted(courseId: string, lessonId: string): CourseProgress {
  const progress = getCourseProgress(courseId) || initCourseProgress(courseId);

  const existingIndex = progress.lessonsCompleted.findIndex(l => l.lessonId === lessonId);

  if (existingIndex === -1) {
    progress.lessonsCompleted.push({
      lessonId,
      completed: true,
      completedAt: new Date().toISOString(),
    });
  } else {
    progress.lessonsCompleted[existingIndex].completed = true;
    progress.lessonsCompleted[existingIndex].completedAt = new Date().toISOString();
  }

  saveCourseProgress(progress);
  return progress;
}

// Check if a lesson is completed
export function isLessonCompleted(courseId: string, lessonId: string): boolean {
  const progress = getCourseProgress(courseId);
  if (!progress) return false;

  const lesson = progress.lessonsCompleted.find(l => l.lessonId === lessonId);
  return lesson?.completed ?? false;
}

// Record a quiz attempt
export function recordQuizAttempt(
  courseId: string,
  moduleId: string,
  score: number,
  passed: boolean,
  answers: Record<string, number>
): CourseProgress {
  const progress = getCourseProgress(courseId) || initCourseProgress(courseId);

  progress.quizAttempts.push({
    moduleId,
    score,
    passed,
    answers,
    attemptedAt: new Date().toISOString(),
  });

  saveCourseProgress(progress);
  return progress;
}

// Get best quiz score for a module
export function getBestQuizScore(courseId: string, moduleId: string): number {
  const progress = getCourseProgress(courseId);
  if (!progress) return 0;

  const attempts = progress.quizAttempts.filter(a => a.moduleId === moduleId);
  if (attempts.length === 0) return 0;

  return Math.max(...attempts.map(a => a.score));
}

// Check if a module's quiz has been passed
export function isModulePassed(courseId: string, moduleId: string): boolean {
  const progress = getCourseProgress(courseId);
  if (!progress) return false;

  return progress.quizAttempts.some(a => a.moduleId === moduleId && a.passed);
}

// Check if all modules are passed
export function areAllModulesPassed(courseId: string, moduleIds: string[]): boolean {
  return moduleIds.every(moduleId => isModulePassed(courseId, moduleId));
}

// Mark course as completed and generate certificate ID
export function completeCourse(courseId: string): CourseProgress {
  const progress = getCourseProgress(courseId);
  if (!progress) throw new Error("Course progress not found");

  progress.completedAt = new Date().toISOString();
  progress.certificateId = generateCertificateId();

  saveCourseProgress(progress);
  return progress;
}

// Generate a unique certificate ID
function generateCertificateId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `CFI-${timestamp}-${random}`.toUpperCase();
}

// Get user profile
export function getUserProfile(): UserProfile | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(PROFILE_KEY);
  return stored ? JSON.parse(stored) : null;
}

// Save user profile
export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

// Calculate overall course progress percentage
export function getCourseProgressPercentage(
  courseId: string,
  totalLessons: number,
  totalModules: number
): number {
  const progress = getCourseProgress(courseId);
  if (!progress) return 0;

  const lessonsWeight = 0.6; // 60% weight for completing lessons
  const quizzesWeight = 0.4; // 40% weight for passing quizzes

  const lessonsCompleted = progress.lessonsCompleted.filter(l => l.completed).length;
  const lessonsProgress = (lessonsCompleted / totalLessons) * lessonsWeight * 100;

  const uniqueModulesPassed = new Set(
    progress.quizAttempts.filter(a => a.passed).map(a => a.moduleId)
  ).size;
  const quizzesProgress = (uniqueModulesPassed / totalModules) * quizzesWeight * 100;

  return Math.round(lessonsProgress + quizzesProgress);
}
