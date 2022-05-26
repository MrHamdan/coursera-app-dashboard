export interface Course {
  id:                number;
  progress:          number;
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
  id:                        number;
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
  id:                   number;
  resourceTitle:        string;
  resourceDescription?: string;
  resourceType:         string;
  resourceDuration:     string;
  resourceVideoLink?:   string;
}
