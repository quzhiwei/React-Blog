export type BlogData = {
  user:string,
  content:string,
}

export type BlogCollection = {
  key:blogSection,
  value:BlogData[]
}

type blogSection= 'Daily'|'Gaming'|'Music'|'Others'