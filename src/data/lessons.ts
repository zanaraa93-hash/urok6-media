import type { Lesson } from "@/types/lesson";

const SAMPLE_VIDEO =
  "https://media.w3.org/2010/05/sintel/trailer.mp4";

export const lessons: Lesson[] = [
  {
    id: "math-fractions-6",
    title: "Дроби без страха: складываем и вычитаем",
    subject: "Математика",
    grade: "6 класс",
    duration: "18 мин",
    teacher: "Айгерим Нурланова",
    description:
      "Понятный урок для школьников Алматы: разберём обыкновенные дроби на живых примерах из жизни.",
    videoUrl: SAMPLE_VIDEO,
    posterUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1280&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
    notes: [
      "Дробь — это часть целого. Числитель показывает «сколько взяли», знаменатель — «на сколько частей разделили».",
      "Чтобы сложить дроби с одинаковым знаменателем, складываем только числители.",
      "Если знаменатели разные — сначала находим общий знаменатель.",
      "Проверка: ответ можно быстро проверить на пицце или шоколадке — сколько кусочков получилось.",
      "Домашнее правило: сначала рисуем, потом считаем — так ошибки почти исчезают.",
    ],
    materials: [
      {
        id: "m1",
        title: "Рабочий лист «Дроби» (PDF)",
        url: "#",
        type: "file",
      },
      {
        id: "m2",
        title: "Интерактивный тренажёр дробей",
        url: "https://www.khanacademy.org/math",
        type: "link",
      },
      {
        id: "m3",
        title: "Домашнее задание: 8 примеров на сложение",
        url: "#",
        type: "homework",
      },
    ],
    questions: [
      "Почему нельзя просто сложить числители и знаменатели отдельно?",
      "Как быстро найти общий знаменатель для 1/3 и 1/4?",
      "Что делать, если ответ получился неправильной дробью?",
    ],
    timecodes: [
      { id: "t1", title: "Зачем нужны дроби", seconds: 0 },
      { id: "t2", title: "Числитель и знаменатель", seconds: 12 },
      { id: "t3", title: "Сложение с одинаковым знаменателем", seconds: 24 },
      { id: "t4", title: "Разные знаменатели", seconds: 36 },
      { id: "t5", title: "Практика и проверка", seconds: 48 },
    ],
    comments: [
      {
        id: "c1",
        author: "Мадина",
        avatar: "М",
        text: "Наконец поняла дроби! Спасибо, Айгерим апай 🙌",
        createdAt: "Сегодня, 10:24",
      },
      {
        id: "c2",
        author: "Алишер",
        avatar: "А",
        text: "Можно ещё пример с пиццей? Очень наглядно было.",
        createdAt: "Вчера, 18:05",
      },
      {
        id: "c3",
        author: "Жанар (мама)",
        avatar: "Ж",
        text: "Ребёнок смотрит второй раз — уже сам решает примеры. Отличный формат!",
        createdAt: "Вчера, 16:40",
      },
    ],
  },
  {
    id: "eng-present-simple",
    title: "Present Simple: говорим о привычках",
    subject: "Английский",
    grade: "5 класс",
    duration: "15 мин",
    teacher: "Сара Ким",
    description:
      "Лёгкий разговорный урок: как рассказывать о своём дне на английском без зубрёжки.",
    videoUrl: SAMPLE_VIDEO,
    posterUrl:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1280&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=400&q=80",
    notes: [
      "Present Simple используем для привычек и фактов.",
      "С he/she/it добавляем -s/-es к глаголу.",
      "Отрицание: do not / does not + глагол.",
    ],
    materials: [
      {
        id: "e1",
        title: "Карточки слов (PDF)",
        url: "#",
        type: "file",
      },
      {
        id: "e2",
        title: "Домашка: 5 предложений о своём утре",
        url: "#",
        type: "homework",
      },
    ],
    questions: [
      "Когда ставим does, а когда do?",
      "Как спросить «Ты ходишь в школу пешком?»",
    ],
    timecodes: [
      { id: "et1", title: "Когда нужен Present Simple", seconds: 0 },
      { id: "et2", title: "Утверждения", seconds: 15 },
      { id: "et3", title: "Вопросы и ответы", seconds: 30 },
    ],
    comments: [
      {
        id: "ec1",
        author: "Данияр",
        avatar: "Д",
        text: "Теперь легче составлять предложения!",
        createdAt: "Сегодня, 09:10",
      },
    ],
  },
  {
    id: "math-percentages",
    title: "Проценты в жизни: скидки и оценки",
    subject: "Математика",
    grade: "7 класс",
    duration: "20 мин",
    teacher: "Айгерим Нурланова",
    description:
      "Разбираем проценты через магазинные скидки, чаевые и школьные оценки.",
    videoUrl: SAMPLE_VIDEO,
    posterUrl:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1280&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
    notes: [
      "1% — это одна сотая часть.",
      "Чтобы найти процент от числа: число × процент / 100.",
    ],
    materials: [
      {
        id: "p1",
        title: "Шпаргалка по процентам",
        url: "#",
        type: "file",
      },
    ],
    questions: ["Как быстро посчитать скидку 15%?"],
    timecodes: [
      { id: "pt1", title: "Что такое процент", seconds: 0 },
      { id: "pt2", title: "Скидки в магазине", seconds: 20 },
    ],
    comments: [],
  },
  {
    id: "eng-listening",
    title: "Listening: понимаем речь носителей",
    subject: "Английский",
    grade: "8 класс",
    duration: "16 мин",
    teacher: "Сара Ким",
    description:
      "Тренируем слух на коротких диалогах и учимся ловить ключевые слова.",
    videoUrl: SAMPLE_VIDEO,
    posterUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1280&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
    notes: [
      "Сначала слушаем общий смысл, потом детали.",
      "Ключевые слова важнее, чем каждое отдельное слово.",
    ],
    materials: [
      {
        id: "l1",
        title: "Аудио-скрипт урока",
        url: "#",
        type: "file",
      },
    ],
    questions: ["Какие слова помогают понять тему диалога?"],
    timecodes: [
      { id: "lt1", title: "Стратегия слушания", seconds: 0 },
      { id: "lt2", title: "Практика диалога", seconds: 18 },
    ],
    comments: [],
  },
];

export function getLessonById(id: string): Lesson {
  return lessons.find((lesson) => lesson.id === id) ?? lessons[0];
}
