import { faker } from "@faker-js/faker";
import {TimeLineObject} from "../types/index" 
faker.locale = "ja";
export const timeline:TimeLineObject[] = [
  {
    avatar: faker.image.avatar(),
    name:faker.name.findName(),
      title: faker.word.adjective() ,
    detail: faker.lorem.lines(1),
    dateTime:faker.date.past()
  },
  {
    avatar: faker.image.avatar(),
    name:faker.name.findName(),
      title: faker.word.adjective() ,
    detail: faker.lorem.lines(1),
    dateTime:faker.date.past()
  },
  {
    avatar: faker.image.avatar(),
    name:faker.name.findName(),
      title: faker.word.adjective() ,
    detail: faker.lorem.lines(1),
    dateTime:faker.date.past()
  },
  {
    avatar: faker.image.avatar(),
    name:faker.name.findName(),
      title: faker.word.adjective() ,
    detail: faker.lorem.lines(1),
    dateTime:faker.date.past()
  },
]