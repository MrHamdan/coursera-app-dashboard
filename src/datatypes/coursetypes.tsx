
export interface Course {
  id:             string;
  courseTitle:    string;
  instructorName: string;
  enrolled:       string;
  recentViews:    string;
  aboutCourse:    string;
  skills:         string[];
  courseModule:   CourseModule[];
}

export interface CourseModule {
  id:              string;
  courseMaterials: string;
  materials:       Material[];
}

export interface Material {
  id:                  string;
  materialTitle:       string;
  videoLength:         string;
  readingLength:       string;
  assignments:         string;
  materialDescription: string;
  lecture:             Lecture[];
}

export interface Lecture {
  id:             string;
  lectureTitle:   string;
  lectureContent: LectureContent[];
}

export interface LectureContent {
  id:                  string;
  lectureContentTitle: string;
  readingTime?:        string;
  videoTime?:          string;
  quiz?:               string;
}



// export interface CourseData {
//   data: Course[];
// }

// export interface Course {
//   id: number;
//   courseTitle: string;
//   instructorName: string;
//   enrolled: string;
//   recentViews: string;
//   aboutCourse: string;
//   skills: Skills[];
//   courseModule: CourseModule[];
// }

// export interface CourseModule {
//   id: number;
//   courseMaterials: string;
//   materials: Materials[];
// }

// export interface Materials {
//   id: number;
//   materialTitle: string;
//   videoLength: string;
//   readingLength: string;
//   assignments: string;
//   materialDescription: string;
//   lecture: Lecture[];
// }

// export interface Lecture {
//   id: number;
//   lectureTitle: string;
//   lectureContent: LectureContent[];
// }

// export interface LectureContent {
//   id: number;
//   lectureContentTitle: string;
//   readingTime: string;
//   videoTime: string;
//   quiz: string;
// }

// export interface Skills {}

// export interface AboutCourse {
//   id: string;
//   title: string;
//   textContent: string;
//   links: string[];
// }

// export interface ModuleContent {
//   type: string;
//   id: string;
//   title: string;
//   content: string;
// }
