export type Timecode = {
  id: string;
  title: string;
  seconds: number;
};

export type MaterialLink = {
  id: string;
  title: string;
  url: string;
  type: "file" | "link" | "homework";
};

export type Comment = {
  id: string;
  author: string;
  avatar: string;
  text: string;
  createdAt: string;
};

export type Lesson = {
  id: string;
  title: string;
  subject: "Математика" | "Английский";
  grade: string;
  duration: string;
  teacher: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  thumbnailUrl: string;
  notes: string[];
  materials: MaterialLink[];
  questions: string[];
  timecodes: Timecode[];
  comments: Comment[];
};
