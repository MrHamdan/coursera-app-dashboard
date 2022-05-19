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
  courseWeek:        CourseWeek[];
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
  id:               number;
  resourceTitle:    string;
  resourceType:     ResourceType;
  resourceDuration: string;
}

export enum ResourceType {
  ProgrammingAssignment = "Programming Assignment",
  Quiz = "Quiz",
  Reading = "Reading",
  Video = "Video",
}

