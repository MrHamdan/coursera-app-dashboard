export interface Course {
  id:                string;
  progress:          string;
  title:             string;
  rating:            string;
  instructorName:    string;
  enrolledStudents:  string;
  recentViews:       string;
  courseDescription: string;
  skillOne:          string;
  skillTwo:          string;
  skillThree:        string;
  skillFour:         string;
  courseDeadline:    string;
  courseState:       string;
  courseLevel:       string;
  courseDuration:    string;
  courseLanguage:    string;
  courseWeeks:       CourseWeek[];
}

export interface CourseWeek {
  id:                        string;
  weekTitle:                 string;
  lectureTitle:              string;
  lectureVideos:             string;
  lectureSheet:              string;
  lectureAssignment:         string;
  lectureDescription:        string;
  lectureResourceTitle:      string;
  lectureResourceAssignment: string;
  lectureResources:          LectureResource[];
}

export interface LectureResource {
  id:                   string;
  resourceTitle:        string;
  resourceDescription?: string;
  resourceType:         string;
  resourceDuration:     string;
  isCompleted?:         boolean;
  resourceVideoLink?:   string;
  videoTimeFirst?:      string;
  videoTimeSecond?:     string;
  videoDetailFirst?:    string;
  videoDetailSecond?:   string;
  quiz?:                Quiz[];
}
export interface Quiz {
  id:        number;
  quizType:  string;
  quizPoint: number;
  question:  string;
  option:    Option[];
  answer:    number | string;
  module?:   string;
}

export interface Option {
  id:         number;
  text:       string;
  isCorrect?: boolean;
}