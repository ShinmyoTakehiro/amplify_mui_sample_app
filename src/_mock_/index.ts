import { faker } from "@faker-js/faker";
import { TimeLineObject } from "../types/index" 
import { EventInput } from "@fullcalendar/react"
import {createEventId,todayStr} from "../components/common/index"
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

export const schedule: EventInput[] = [
  {
    id: createEventId(),
    title: "テスト1",
    start:todayStr
    
  },
  {
    id: createEventId(),
    title: "テスト2",
    start:todayStr+"T12:00:00"
    
  }
]